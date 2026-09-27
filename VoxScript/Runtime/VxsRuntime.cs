using System;
using VoxScript.Compiler;
using VoxScript.Interop;

namespace VoxScript.Runtime;

public class VxsRuntime(ScriptGlobals globals)
{
    internal Instruction[] _instructions;
    internal VoxValue[] _stack = new VoxValue[1024];
    internal VoxValue[] _constants = new VoxValue[1024];
    internal VoxValue[] _locals = new VoxValue[1024];

    public readonly ScriptGlobals Globals = globals;
    
    internal Closure _currentClosure;

    internal uint _stackIndex = 0;
    internal uint _instructionIndex = 0;

    public void SetConstant(uint slot, VoxValue value)
    {
        _constants[slot] = value;
    }

    public void SetLocal(uint slot, VoxValue value)
    {
        _locals[slot] = value;
    }

    public VoxValue GetLocal(uint slot)
    {
        return _locals[slot];
    }

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

    private void RunClosure(Closure closure)
    {
        _instructions = closure.Instructions;
        _constants = closure.Constants;
        _locals = closure.Locals;
        _instructionIndex = closure.InstructionIndex;
        
        while (_instructionIndex < _instructions.Length)
        {
            var instruction = _instructions[_instructionIndex++];
            var opCode = instruction.OpCode;
            var operand = instruction.Operand;

            VoxValue a;
            VoxValue b;
            VoxValue c;
            VoxValue value;
            VoxValue key;
            VoxValue table;
            
            Table? tableRef;
            
            switch (opCode)
            {
                case OpCode.Jump_If:
                    value = PopStack();
                    
                    var evaluatesToTrue = value is { Type: ValueType.Bool, Bool: true } || value.Type != ValueType.Null;

                    if (evaluatesToTrue)
                    {
                        _instructionIndex = operand;
                    }
                    
                    break;
                
                case OpCode.Load_Constant:
                    PushStack(_constants[operand]);
                    break;
                
                case OpCode.Load_Local:
                    PushStack(_locals[operand]);
                    break;
                
                case OpCode.Store_Local:
                    _locals[operand] = PopStack();
                    break;
                
                case OpCode.Load_Global:
                    var globalKey = PopStack().ToString();

                    var val = Globals.GetGlobal(globalKey);
                    
                    PushStack(val);
                    
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
                    
                    if (a.Type != ValueType.Number || b.Type != ValueType.Number) throw new Exception($"Attempt to do modulus operation with {a.Type} and {b.Type}");

                    c = VoxValue.Create(a.Number % b.Number);
                    PushStack(c);
                    break;
                
                case OpCode.Pow:
                    a = PopStack();
                    b = PopStack();

                    if (a.Type == ValueType.Number && b.Type == ValueType.Number)
                    {
                        PushStack(VoxValue.Create(Math.Pow(a.Number, b.Number)));
                    }
                    else throw new ArithmeticException($"Attempt to do power operation on {a.Type} and {b.Type}!");
                    
                    break;
                
                default:
                    throw new NotImplementedException();
            }
        }
    }

    public void Run(VxsProgram program)
    {
        _currentClosure = new Closure()
        {
            Instructions = program._instructions,
            Constants = program._constants,
            Locals = new VoxValue[1024],
        };
        
        RunClosure(_currentClosure);
    }
}