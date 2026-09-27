using VoxScript.Compiler;

namespace VoxScript.Runtime;

public sealed class FunctionPrototype(Instruction[] instructions, VoxValue[] constants, uint parameterCount, uint localCount)
{
    public readonly Instruction[] Instructions = instructions;
    public readonly VoxValue[] Constants = constants;
    public readonly uint ParameterCount = parameterCount;
    public readonly uint LocalCount = localCount;
}

public sealed class NativeFunction(Func<VoxValue[], VoxValue[]> function)
{
    public readonly Func<VoxValue[], VoxValue[]> Function = function;

    public VoxValue[] Invoke(VoxValue[] arguments)
    {
        return Function(arguments);
    }
}