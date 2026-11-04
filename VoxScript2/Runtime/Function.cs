using VoxScript.Compiler;

namespace VoxScript.Runtime;

public sealed class FunctionPrototype(Instruction[] instructions, VoxValue[] constants, uint parameterCount, uint localCount)
{
    internal Closure _parentClosure;
    public readonly Instruction[] Instructions = instructions;
    public readonly VoxValue[] Constants = constants;
    public readonly uint ParameterCount = parameterCount;
    public readonly uint LocalCount = localCount;
}

public sealed class InstancedFunctionPrototype(Instruction[] instructions, VoxValue[] constants, uint parameterCount, uint localCount, VxsObject instance)
{
    internal Closure _parentClosure;
    public readonly Instruction[] Instructions = instructions;
    public readonly VoxValue[] Constants = constants;
    public readonly uint ParameterCount = parameterCount;
    public readonly uint LocalCount = localCount;
    public readonly VxsObject Instance = instance;
}

public record FunctionInvokeInfo(VoxValue[] Arguments, VxsThread Thread);

public sealed class NativeFunction(Func<FunctionInvokeInfo, VoxValue[]> function)
{
    public readonly Func<FunctionInvokeInfo, VoxValue[]> Function = function;

    public VoxValue[] Invoke(VoxValue[] args, VxsThread thread)
    {
        return Function(new FunctionInvokeInfo(args, thread));
    }
}