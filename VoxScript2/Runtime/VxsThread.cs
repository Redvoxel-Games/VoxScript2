using VoxScript.Compiler;
using VoxScript.Interop;

namespace VoxScript.Runtime;

public class VxsThread
{
    internal VoxValue[] _stack = new VoxValue[1024];
    public VxsRuntime Runtime { get; init; }
    public ScriptGlobals Globals => Runtime.Globals;

    internal uint _stackIndex = 0;

    private VoxValue[] _constants;
    private Closure _currentClosure;
    private bool _continuing = false;
    private bool _breaking = false;

    internal VxsThread(Closure baseClosure, VxsRuntime runtime)
    {
        Runtime = runtime;
        _currentClosure = baseClosure;
    }

    internal VoxValue[] Run(VoxValue[] inputs)
    {
        return RunClosure(_currentClosure, inputs);
    }

    public VoxValue[] RunFunction(FunctionPrototype proto, VoxValue[] inputs)
    {
        var functionClosure = proto._parentClosure;
        var parents = new Closure[functionClosure.Parents.Length + 1];

        for (var i=0; i<functionClosure.Parents.Length; i++)
        {
            parents[i] = functionClosure.Parents[i];
        }

        parents[^1] = functionClosure;
                        
        var newClosure = new FunctionClosure(parents, proto.Instructions, proto.Constants, proto.LocalCount);
        
        return RunClosure(newClosure, inputs);
    }

    public VoxValue[] RunMethod(InstancedFunctionPrototype proto, VoxValue[] inputs)
    {
        var functionClosure = proto._parentClosure;
        var parents = new Closure[functionClosure.Parents.Length + 1];

        for (var i=0; i<functionClosure.Parents.Length; i++)
        {
            parents[i] = functionClosure.Parents[i];
        }

        parents[^1] = functionClosure;
                        
        var newClosure = new FunctionClosure(parents, proto.Instructions, proto.Constants, proto.LocalCount);
        
        var newInputs = new VoxValue[inputs.Length+1];
        
        newInputs[0] = VoxValue.Create(proto.Object);
        for (var i = 0; i < inputs.Length; i++)
        {
            newInputs[i+1] = inputs[i];
        }
        
        return RunClosure(newClosure, newInputs);
    }

    public int stackDepth = 0;

    internal VoxValue[] RunClosure(Closure closure, VoxValue[] inputs)
    {
        stackDepth++;
        
        var previous = _currentClosure;
        _currentClosure = closure;
        
        Instruction[] instructions = (_currentClosure as FunctionClosure)!.Instructions;
        uint instructionIndex = 0;
        _constants = _currentClosure.Constants;
        
        for (var i = 0; i < inputs.Length; i++)
        {
            _currentClosure.Locals[i] = inputs[i];
        }

        while (instructionIndex < instructions.Length)
        {
            var instruction = instructions[instructionIndex];

            try
            {
                var returned = RunInstruction(instruction, ref instructionIndex);

                if (returned != null)
                {
                    _currentClosure = previous;
                    _constants = previous.Constants;
        
                    stackDepth--;
                    
                    return returned;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("An error has occured!");
                Console.WriteLine($"Instruction index: {instructionIndex}");

                Console.WriteLine("\nStack dump:");
                for (var i = 0; i < _stackIndex; i++)
                {
                    Console.WriteLine($"{i}: {_stack[i]}");
                }
                
                Console.WriteLine("\nTrace:\n");

                throw;
            }
            
            instructionIndex++;
        }

        _currentClosure = previous;
        _constants = previous.Constants;
        
        stackDepth--;

        return [VoxValue.Null];
    }
    
    private void PushStack(VoxValue value)
    {
        _stack[_stackIndex++] = value;
    }
    private VoxValue PopStack()
    {
        if (_stackIndex == 0) throw new Exception("Stack is empty!");
        
        var val = _stack[_stackIndex-1];
        _stack[_stackIndex--] = VoxValue.Null;
        return val;
    }
    
    private void makeClosure(BlockClosure c)
    {
        _constants = c.Constants;

        _currentClosure = c;
    }
    private void breakClosure()
    {
        var previous = _currentClosure.Parents[^1];

        _constants = previous.Constants;

        _currentClosure = previous;
    }
    
    public bool EvaluatesToTrue(VoxValue value)
    {
        return value is { Type: ValueType.Bool, Bool: true } || (value.Type != ValueType.Null && value.Type != ValueType.Bool);
    }

    private VoxValue[]? RunInstruction(in Instruction instruction, ref uint instructionIndex)
    {
        var opCode = instruction.OpCode;
        
        var operand = instruction.Operand;
        var secondary = instruction.Secondary;

        VoxValue a;
        VoxValue b;
        VoxValue c;
        VoxValue value;
        VoxValue key;
        VoxValue table;
            
        Indexable? tableRef;

        bool evaluatesToTrue;
        VoxValue val;
        Closure[] parents;
        Closure newClosure;
            
        // Console.WriteLine($"{instructionIndex}: {opCode} {operand}");

        Closure? backtracked;
        bool aIsTrue;
        VoxValue index;
        VoxValue vClassVal;
        VxsClass? vClass;
        string? propName;
        VoxValue defaultVal;
        string? methodName;
        VoxValue functionVal;
        switch (opCode)
        {
            case OpCode.Jump_If:
                value = PopStack();

                if (EvaluatesToTrue(value))
                {
                    instructionIndex += operand;
                }
                    
                break;
                
            case OpCode.Jump_If_Not:
                value = PopStack();
                    
                if (!EvaluatesToTrue(value))
                {
                    instructionIndex += operand;
                }

                break;
                
            case OpCode.Back_If:
                value = PopStack();
                    
                evaluatesToTrue = value is { Type: ValueType.Bool, Bool: true } || (value.Type != ValueType.Null && value.Type != ValueType.Bool);

                if (evaluatesToTrue)
                {
                    instructionIndex -= operand;
                }
                    
                break;
                
            case OpCode.Back_If_Not:
                value = PopStack();
                    
                evaluatesToTrue = value is { Type: ValueType.Bool, Bool: true } || (value.Type != ValueType.Null && value.Type != ValueType.Bool);

                if (!evaluatesToTrue)
                {
                    instructionIndex -= operand;
                }
                    
                break;
                
            case OpCode.Continue: _continuing = true; break;
            case OpCode.Break: _breaking = true; break;
            
            case OpCode.Load_Constant:
                PushStack(_constants[operand]);
                break;
            case OpCode.Load_Local: PushStack(_currentClosure.Locals[operand]); break;
            case OpCode.Store_Local:
                val = PopStack();

                if (val.Reference is Table tbl)
                {
                    val = VoxValue.Create(tbl.Copy());
                }
                
                _currentClosure.Locals[operand] = val;
                break;
                
            case OpCode.Load_Global:
                var globalKey = PopStack().ToString();

                val = Globals.GetGlobal(globalKey);
                    
                PushStack(val);
                    
                break;
                
            case OpCode.Load_Scoped:
                backtracked = _currentClosure.Parents[_currentClosure.Parents.Length-operand];

                val = backtracked.Locals[(int)secondary!];
                    
                PushStack(val);

                break;
                
            case OpCode.Store_Scoped:
                backtracked = _currentClosure.Parents[_currentClosure.Parents.Length-operand];
                backtracked.Locals[(int)secondary!] = PopStack();
                    
                break;
                
            case OpCode.Mark_Ownership:
                val = PopStack();
                    
                if (val.Type != ValueType.Function) throw new Exception($"Attempt to mark non-function value's owner!");

                var funcRef = val.Reference;
                    
                if (funcRef is not FunctionPrototype funcProto)  throw new Exception($"Attempt to mark native function's owner!");
                    
                funcProto._parentClosure = _currentClosure;
                    
                PushStack(val);
                    
                break;
                
            case OpCode.Call:
                VoxValue[] args = new VoxValue[operand];
                for (var i = 0; i < operand; i++)
                {
                    args[i] = PopStack();
                }

                var func = PopStack();

                if (func.Type != ValueType.Function)
                    throw new Exception($"Attempt to call {func.Type} as function!");

                switch (func.Reference)
                {
                    case NativeFunction native:
                    {
                        var returned = native.Invoke(args, this);
                        foreach (var v in returned)
                        {
                            PushStack(v);
                        }

                        break;
                    }
                    case FunctionPrototype proto:
                    {
                        var functionClosure = proto._parentClosure;
                        parents = new Closure[functionClosure.Parents.Length + 1];

                        for (var i=0; i<functionClosure.Parents.Length; i++)
                        {
                            parents[i] = functionClosure.Parents[i];
                        }

                        parents[^1] = functionClosure;
                        
                        newClosure = new FunctionClosure(parents, proto.Instructions, proto.Constants, proto.LocalCount);
                        
                        var returned = RunClosure((newClosure as FunctionClosure)!, args);
                        foreach (var v in returned)
                        {
                            PushStack(v);
                        }

                        break;
                    }
                    case InstancedFunctionPrototype instancedProto:
                    {
                        var functionClosure = instancedProto._parentClosure;
                        parents = new Closure[functionClosure.Parents.Length + 1];

                        for (var i=0; i<functionClosure.Parents.Length; i++)
                        {
                            parents[i] = functionClosure.Parents[i];
                        }

                        parents[^1] = functionClosure;
                        
                        newClosure = new FunctionClosure(parents, instancedProto.Instructions, instancedProto.Constants, instancedProto.LocalCount+1);

                        var allArgs = new VoxValue[args.Length + 1];
                        allArgs[0] = VoxValue.Create(instancedProto.Object);

                        for (var i = 0; i < args.Length; i++)
                        {
                            allArgs[i + 1] = args[i];
                        }
                        
                        var returned = RunClosure((newClosure as FunctionClosure)!, allArgs);
                        foreach (var v in returned)
                        {
                            PushStack(v);
                        }
                        
                        break;
                    }
                    default:
                        throw new Exception("Failed to call function!");
                }

                break;
                
            case OpCode.Make_Closure:
                parents = new Closure[_currentClosure.Parents.Length + 1];

                for (var i=0; i<_currentClosure.Parents.Length; i++)
                {
                    parents[i] = _currentClosure.Parents[i];
                }

                parents[^1] = _currentClosure;

                var ifDefVal = PopStack();

                if (ifDefVal.Type != ValueType.Misc) throw new Exception();

                var ifDef = (ifDefVal.Reference as InlineClosureStore)!;
                        
                newClosure = new BlockClosure(parents, ifDef.Constants, ifDef.LocalCount);
                    
                makeClosure((newClosure as BlockClosure)!);
                    
                break;
                
            case OpCode.Break_Closure: breakClosure(); break;
                
            case OpCode.Pop: PopStack(); break;
                
            case OpCode.Dump:
                Console.WriteLine("VXS-RUNTIME: DUMPING STACK.");
                Console.WriteLine("STACK SIZE: " + _stackIndex);
                for (var i = 0; i < _stackIndex; i++)
                {
                    Console.WriteLine($"{i}: {_stack[i]}");
                }
                Console.WriteLine("VXS-RUNTIME: DUMP FINISHED.");
                break;
                
            case OpCode.Print:
                Runtime.Print(PopStack(), this);
                break;
                
            case OpCode.Get_Value:
                key = PopStack();
                table = PopStack();

                if (table.Type != ValueType.Table || key.Type == ValueType.Null) throw new Exception($"Attempt to index {table.Type} with {key.ToString()}");
                    
                tableRef = table.Reference as Indexable;

                value = tableRef!.Get(key, this);
                PushStack(value);
                break;
                
            case OpCode.Set_Key:
                value = PopStack();
                key = PopStack();
                table = PopStack();
                    
                if (table.Type != ValueType.Table || key.Type == ValueType.Null) throw new Exception($"Attempt to index {table.Type} with {key.ToString()}");
                    
                tableRef = table.Reference as Indexable;
                tableRef!.Set(key, value, this);
                    
                break;
                
            case OpCode.Table_Length:
                table = PopStack();

                if (table.Type != ValueType.Table) throw new Exception($"Attempt to index {table.Type}!");
                    
                tableRef = table.Reference as Indexable;
                PushStack(VoxValue.Create(tableRef!.Length));
                    
                break;
                
            case OpCode.Assemble_Index:
                value = PopStack();
                table = PopStack();
                    
                tableRef = table.Reference as Indexable;
                tableRef!.Set(VoxValue.Create(operand), value, this);

                PushStack(table);
                    
                break;
                
            case OpCode.Assemble_Key:
                value = PopStack();
                key = PopStack();
                table = PopStack();
                    
                tableRef = table.Reference as Indexable;
                tableRef!.Set(key, value, this);
                    
                PushStack(table);
                    
                break;
                
            case OpCode.Create_Table: PushStack(VoxValue.Create(new Table())); break;
                
            case OpCode.Get_Key_At:
                index = PopStack();
                table = PopStack();
                    
                if (table.Type != ValueType.Table) throw new Exception($"Attempt to index {table.Type} with '{index.ToString()}'");
                if (index.Type != ValueType.Number) throw new Exception($"Attempt to index table with {index.ToString()}");

                tableRef = table.Reference as Indexable;
                PushStack(tableRef!.GetKeyAt((uint)index.Number));
                    
                break;
                
            case OpCode.Get_Value_At:
                index = PopStack();
                table = PopStack();
                    
                if (table.Type != ValueType.Table) throw new Exception($"Attempt to index {table.Type} with '{index.ToString()}'");
                if (index.Type != ValueType.Number) throw new Exception($"Attempt to index table with {index.ToString()}");

                tableRef = table.Reference as Indexable;
                PushStack(tableRef!.GetValueAt((uint)index.Number));
                    
                break;
                
            case OpCode.Add:
                a = PopStack();
                b = PopStack();
                    
                c = b + a;
                PushStack(c);
                break;
                
            case OpCode.Sub:
                a = PopStack();
                b = PopStack();
                    
                c = b - a;
                PushStack(c);
                break;
                
            case OpCode.Mul:
                a = PopStack();
                b = PopStack();

                c = b * a;
                PushStack(c);
                break;
                
            case OpCode.Div:
                a = PopStack();
                b = PopStack();
                
                c = b / a;
                PushStack(c);
                break;
            
            case OpCode.Mod:
                a = PopStack();
                b = PopStack();
                    
                if (a.Type != ValueType.Number || b.Type != ValueType.Number) throw new Exception($"Attempt to do modulus operation with {b.Type} and {a.Type}");

                c = VoxValue.Create(b.Number % a.Number);
                PushStack(c);
                break;
                
            case OpCode.Pow:
                a = PopStack();
                b = PopStack();

                if (a.Type == ValueType.Number && b.Type == ValueType.Number)
                {
                    PushStack(VoxValue.Create(Math.Pow(b.Number, a.Number)));
                }
                else throw new ArithmeticException($"Attempt to do power operation on {b.Type} and {a.Type}!");
                    
                break;
                
            case OpCode.Increment:
                val = PopStack();
                    
                if (val.Type != ValueType.Number) throw new Exception($"Attempt to increment {val.Type}!");

                PushStack(VoxValue.Create(val.Number+1));
                    
                break;
                
            case OpCode.Decrement:
                val = PopStack();
                    
                if (val.Type != ValueType.Number) throw new Exception($"Attempt to decrement {val.Type}!");

                PushStack(VoxValue.Create(val.Number-1));
                    
                break;
                
            case OpCode.Less:
                a = PopStack();
                b = PopStack();
                    
                if (a.Type == ValueType.Number && b.Type == ValueType.Number)
                {
                    PushStack(VoxValue.Create(b.Number < a.Number));
                }
                else throw new ArithmeticException($"Attempt to do comparison operation on {b.Type} and {a.Type}!");

                break;
                
                case OpCode.LessOrEquals:
                    a = PopStack();
                    b = PopStack();
                    
                    if (a.Type == ValueType.Number && b.Type == ValueType.Number)
                    {
                        PushStack(VoxValue.Create(b.Number <= a.Number));
                    }
                    else throw new ArithmeticException($"Attempt to do comparison operation on {b.Type} and {a.Type}!");

                    break;
                
                case OpCode.Greater:
                    a = PopStack();
                    b = PopStack();
                    
                    if (a.Type == ValueType.Number && b.Type == ValueType.Number)
                    {
                        PushStack(VoxValue.Create(b.Number > a.Number));
                    }
                    else throw new ArithmeticException($"Attempt to do comparison operation on {b.Type} and {a.Type}!");

                    break;
                
                case OpCode.GreaterOrEquals:
                    a = PopStack();
                    b = PopStack();
                    
                    if (a.Type == ValueType.Number && b.Type == ValueType.Number)
                    {
                        PushStack(VoxValue.Create(b.Number >= a.Number));
                    }
                    else throw new ArithmeticException($"Attempt to do comparison operation on {b.Type} and {a.Type}!");

                    break;
                
                case OpCode.Equals:
                    a = PopStack();
                    b = PopStack();

                    PushStack(VoxValue.Create(a.Equals(b)));
                    break;
                
                case OpCode.NotEquals:
                    a = PopStack();
                    b = PopStack();
                    
                    PushStack(VoxValue.Create(!a.Equals(b)));
                    break;
                
                case OpCode.And:
                    a = PopStack();
                    b = PopStack();

                    aIsTrue = EvaluatesToTrue(a);
                    var bIsTrue = EvaluatesToTrue(b);
                    
                    PushStack(VoxValue.Create(aIsTrue && bIsTrue));
                    break;
                
                case OpCode.Or:
                    a = PopStack();
                    b = PopStack();
                    
                    Console.WriteLine(a.ToString() + " | " + b.ToString());

                    aIsTrue = EvaluatesToTrue(a);
                    bIsTrue = EvaluatesToTrue(b);
                    
                    PushStack(VoxValue.Create(aIsTrue || bIsTrue));
                    break;
                
                case OpCode.Nand:
                    a = PopStack();
                    b = PopStack();
                    
                    aIsTrue = EvaluatesToTrue(a);
                    bIsTrue = EvaluatesToTrue(b);
                    
                    PushStack(VoxValue.Create(!(aIsTrue && bIsTrue)));
                    break;
                
                case OpCode.Nor:
                    a = PopStack();
                    b = PopStack();

                    aIsTrue = EvaluatesToTrue(a);
                    bIsTrue = EvaluatesToTrue(b);
                    
                    PushStack(VoxValue.Create(!(aIsTrue || bIsTrue)));
                    break;
                
                case OpCode.Xor:
                    a = PopStack();
                    b = PopStack();

                    aIsTrue = EvaluatesToTrue(a);
                    bIsTrue = EvaluatesToTrue(b);
                    
                    PushStack(VoxValue.Create((aIsTrue || bIsTrue) && !(aIsTrue && bIsTrue)));
                    break;
                    
            case OpCode.Return:
                // Dump entire stack as return values
                uint returnSize = _stackIndex;
                VoxValue[] toReturn = new VoxValue[returnSize];
                for (var i = 0; i < returnSize; i++)
                {
                    var v = PopStack();
                    toReturn[i] = v;
                }
                    
                return toReturn;
                
            case OpCode.Invert:
                val = PopStack();
                    
                switch (val.Type)
                {
                    case ValueType.Number:
                        PushStack(VoxValue.Create(-val.Number));
                        break;
                    case ValueType.Bool:
                        PushStack(VoxValue.Create(!val.Bool));
                        break;
                        
                    default:
                            throw new ArithmeticException($"Attempt to invert {val.Type}!");
                }
                break;
            
            case OpCode.Create_Class:
                var className = PopStack().String;
                PushStack(VoxValue.Create(new VxsClass{Name = className}));
                break;
            case OpCode.Set_Constructor:
                var function = PopStack();
                vClassVal = PopStack();
                vClass = vClassVal.Reference as VxsClass;

                vClass.ScriptConstructor = function;
                
                PushStack(vClassVal);
                break;
            case OpCode.Set_Instance_Property:
                propName = PopStack().ToString();
                defaultVal = PopStack();
                vClassVal = PopStack();
                vClass = vClassVal.Reference as VxsClass;

                vClass.InstanceMembersTemplate[propName] = defaultVal;
                
                PushStack(vClassVal);
                break;
            case OpCode.Set_Instance_Method:
                methodName = PopStack().ToString();
                functionVal = PopStack();
                vClassVal = PopStack();
                vClass = vClassVal.Reference as VxsClass;

                vClass.InstanceMembersTemplate[methodName] = functionVal;
                
                PushStack(vClassVal);
                break;
            case OpCode.Set_Static_Property:
                propName = PopStack().ToString();
                defaultVal = PopStack();
                vClassVal = PopStack();
                vClass = vClassVal.Reference as VxsClass;

                vClass.StaticMembers[propName] = defaultVal;
                
                PushStack(vClassVal);
                break;
            case OpCode.Set_Static_Method:
                methodName = PopStack().ToString();
                functionVal = PopStack();
                vClassVal = PopStack();
                vClass = vClassVal.Reference as VxsClass;

                vClass.StaticMembers[methodName] = functionVal;
                
                PushStack(vClassVal);
                break;
            
            case OpCode.Finalize_Class: break; // Unimplemented but we don't want to throw an exception for it
            case OpCode.Loop_Check_Marker: break;
            case OpCode.Loop_Exit_Marker: break;
            default: throw new NotImplementedException();
        }

        return null;
    }
}