using System;
using VoxScript.Compiler;
using VoxScript.Interop;

namespace VoxScript.Runtime;

public class VxsRuntime(ScriptGlobals globals)
{
    internal VoxValue[] _stack = new VoxValue[1024];

    public readonly ScriptGlobals Globals = globals;

    internal uint _stackIndex = 0;

    private void PushStack(VoxValue value)
    {
        _stack[_stackIndex++] = value;
    }
    private VoxValue PopStack()
    {
        var val = _stack[_stackIndex-1];
        _stack[_stackIndex--] = VoxValue.Null;
        return val;
    }

    public bool EvaluatesToTrue(VoxValue value)
    {
        return value is { Type: ValueType.Bool, Bool: true } || (value.Type != ValueType.Null && value.Type != ValueType.Bool);
    }

    public VoxValue[] RunProgram(VxsProgram program)
    {
        var newClosure = new FunctionClosure([], program._instructions, program._constants, program._localCount);
        return Run(newClosure, []);
    }

    internal VoxValue[] Run(Closure closure, VoxValue[] inputs)
    {
        Instruction[] instructions = (closure as FunctionClosure)!.Instructions;
        uint instructionIndex = 0;
        VoxValue[] constants = closure.Constants;

        for (var i = 0; i < inputs.Length; i++)
        {
            closure.Locals[i] = inputs[i];
        }

        void makeClosure(BlockClosure c)
        {
            constants = c.Constants;

            closure = c;
        }
        void breakClosure()
        {
            var previous = closure.Parents[^1];

            constants = previous.Constants;

            closure = previous;
        }

        bool continuing = false;
        bool breaking = false;
        
        while (instructionIndex < instructions.Length)
        {
            var instruction = instructions[instructionIndex++];
            var opCode = instruction.OpCode;

            if (continuing)
            {
                if (opCode == OpCode.Loop_Check_Marker) continuing = false;
                continue;
            }

            if (breaking)
            {
                if (opCode == OpCode.Loop_Exit_Marker) breaking = false;
                continue;
            }
            
            var operand = instruction.Operand;
            var secondary = instruction.Secondary;

            VoxValue a;
            VoxValue b;
            VoxValue c;
            VoxValue value;
            VoxValue key;
            VoxValue table;
            
            Table? tableRef;

            bool evaluatesToTrue;
            VoxValue val;
            Closure[] parents;
            Closure newClosure;
            
            // Console.WriteLine($"{instructionIndex}: {opCode} {operand}");

            Closure? backtracked;
            bool aIsTrue;
            VoxValue index;
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
                
                case OpCode.Continue:
                    continuing = true;
                    break;
                
                case OpCode.Break:
                    breaking = true;
                    break;
                
                case OpCode.Load_Constant:
                    PushStack(constants[operand]);
                    break;
                
                case OpCode.Load_Local:
                    PushStack(closure.Locals[operand]);
                    break;
                
                case OpCode.Store_Local:
                    closure.Locals[operand] = PopStack();
                    break;
                
                case OpCode.Load_Global:
                    var globalKey = PopStack().ToString();

                    val = Globals.GetGlobal(globalKey);
                    
                    PushStack(val);
                    
                    break;
                
                case OpCode.Load_Scoped:
                    backtracked = closure.Parents[closure.Parents.Length-operand];

                    val = backtracked.Locals[(int)secondary!];
                    
                    PushStack(val);

                    break;
                
                case OpCode.Store_Scoped:
                    backtracked = closure.Parents[closure.Parents.Length-operand];
                    backtracked.Locals[(int)secondary!] = PopStack();
                    
                    break;
                
                case OpCode.Mark_Ownership:
                    val = PopStack();
                    
                    if (val.Type != ValueType.Function) throw new Exception($"Attempt to mark non-function value's owner!");

                    var funcRef = val.Reference;
                    
                    if (funcRef is not FunctionPrototype funcProto)  throw new Exception($"Attempt to mark native function's owner!");
                    
                    funcProto._parentClosure = closure;
                    
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
                            var returned = native.Invoke(args);
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
                        
                            var returned = Run((newClosure as FunctionClosure)!, args);
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
                    parents = new Closure[closure.Parents.Length + 1];

                    for (var i=0; i<closure.Parents.Length; i++)
                    {
                        parents[i] = closure.Parents[i];
                    }

                    parents[^1] = closure;

                    var ifDefVal = PopStack();

                    if (ifDefVal.Type != ValueType.Misc) throw new Exception();

                    var ifDef = (ifDefVal.Reference as InlineClosureStore)!;
                        
                    newClosure = new BlockClosure(parents, ifDef.Constants, ifDef.LocalCount);
                    
                    makeClosure((newClosure as BlockClosure)!);
                    
                    break;
                
                case OpCode.Break_Closure:
                    breakClosure();
                    break;
                
                case OpCode.Pop:
                    PopStack();
                    break;
                
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
                    Console.WriteLine(PopStack());
                    break;
                
                case OpCode.Get_Value:
                    key = PopStack();
                    table = PopStack();

                    if (table.Type != ValueType.Table || key.Type == ValueType.Null) throw new Exception($"Attempt to index {table.Type} with {key.ToString()}");
                    
                    tableRef = table.Reference as Table;

                    value = tableRef!.Get(key);
                    PushStack(value);
                    break;
                
                case OpCode.Set_Key:
                    value = PopStack();
                    key = PopStack();
                    table = PopStack();
                    
                    if (table.Type != ValueType.Table || key.Type == ValueType.Null) throw new Exception($"Attempt to index {table.Type} with {key.ToString()}");
                    
                    tableRef = table.Reference as Table;
                    tableRef!.Set(key, value);
                    
                    break;
                
                case OpCode.Table_Length:
                    table = PopStack();

                    if (table.Type != ValueType.Table) throw new Exception($"Attempt to index {table.Type}!");
                    
                    tableRef = table.Reference as Table;
                    PushStack(VoxValue.Create(tableRef!.Length));
                    
                    break;
                
                case OpCode.Assemble_Index:
                    value = PopStack();
                    table = PopStack();
                    
                    tableRef = table.Reference as Table;
                    tableRef!.Set(VoxValue.Create(operand), value);

                    PushStack(table);
                    
                    break;
                
                case OpCode.Assemble_Key:
                    value = PopStack();
                    key = PopStack();
                    table = PopStack();
                    
                    tableRef = table.Reference as Table;
                    tableRef!.Set(key, value);
                    
                    PushStack(table);
                    
                    break;
                
                case OpCode.Create_Table:
                    PushStack(VoxValue.Create(new Table()));
                    break;
                
                case OpCode.Get_Key_At:
                    index = PopStack();
                    table = PopStack();
                    
                    if (table.Type != ValueType.Table) throw new Exception($"Attempt to index {table.Type} with '{index.ToString()}'");
                    if (index.Type != ValueType.Number) throw new Exception($"Attempt to index table with {index.ToString()}");

                    tableRef = table.Reference as Table;
                    PushStack(tableRef!.GetKeyAt((uint)index.Number));
                    
                    break;
                
                case OpCode.Get_Value_At:
                    index = PopStack();
                    table = PopStack();
                    
                    if (table.Type != ValueType.Table) throw new Exception($"Attempt to index {table.Type} with '{index.ToString()}'");
                    if (index.Type != ValueType.Number) throw new Exception($"Attempt to index table with {index.ToString()}");

                    tableRef = table.Reference as Table;
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
                
                case OpCode.Loop_Check_Marker: break;
                case OpCode.Loop_Exit_Marker: break;
                
                default:
                    throw new NotImplementedException();
            }
        }

        return [VoxValue.Null];
    }
}