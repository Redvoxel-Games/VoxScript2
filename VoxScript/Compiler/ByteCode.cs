using VoxScript.Runtime;

namespace VoxScript.Compiler;

public enum OpCode : uint
{
    // Stack
    Pop = 001,
    Load_Constant = 002,
    Load_Local = 003,
    Store_Local = 004,
    Load_Global = 005,
    
    Load_Scoped = 006,
    
    Dump = 099,
    
    // Operations
    Add = 101,
    Sub = 102,
    Mul = 103,
    Div = 104,
    Mod = 105,
    Pow = 106,
    
    Equals = 107,
    NotEquals = 108,
    Less = 109,
    LessOrEquals = 110,
    Greater = 111,
    GreaterOrEquals = 112,
    And = 113,
    Or = 114,
    
    Invert = 115,
    
    // Control
    Jump_If = 201,
    Jump_If_Not = 202,
    Loop = 203,
    Restart = 204,
    Break = 205,
    
    // Table
    Get_Value = 301,
    Set_Key = 302,
    Assemble_Key = 303,
    Assemble_Index = 304,
    Create_Table = 305,
    
    // Functions
    Call = 401,
    Return = 402,
    
    // Misc
    Print = 901,
}

public readonly struct Instruction(OpCode opcode, uint? operand=null, uint? secondary=null)
{
    public readonly OpCode OpCode = opcode;
    public readonly uint Operand = operand ?? 0;
    public readonly uint? Secondary = secondary ?? 0;
    public readonly bool hasOperand = operand != null;
}

public sealed class VxsProgram
{
    public Instruction[] _instructions;
    public VoxValue[] _constants;
    public uint _localCount;
}