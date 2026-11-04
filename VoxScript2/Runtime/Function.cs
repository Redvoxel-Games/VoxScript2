using VoxScript.Compiler;

namespace VoxScript.Runtime;

public record FunctionInvokeInfo(VoxValue[] Arguments, VxsThread Thread);

public sealed class FunctionPrototype(Instruction[] instructions, VoxValue[] constants, uint parameterCount, uint localCount, bool isMethod)
{
    internal Closure _parentClosure;
    public readonly Instruction[] Instructions = instructions;
    public readonly VoxValue[] Constants = constants;
    public readonly uint ParameterCount = parameterCount;
    public readonly uint LocalCount = localCount;
    public readonly bool IsMethod = isMethod;
}

public sealed class InstancedFunctionPrototype(
    Instruction[] instructions,
    VoxValue[] constants,
    uint parameterCount,
    uint localCount,
    VxsObject obj)
{
    internal Closure _parentClosure;
    public readonly Instruction[] Instructions = instructions;
    public readonly VoxValue[] Constants = constants;
    public readonly uint ParameterCount = parameterCount;
    public readonly uint LocalCount = localCount;
    public readonly VxsObject Object = obj;
}

public sealed class NativeFunction(Func<FunctionInvokeInfo, VoxValue[]> function)
{
    public readonly Func<FunctionInvokeInfo, VoxValue[]> Function = function;

    public VoxValue[] Invoke(VoxValue[] arguments, VxsThread thread)
    {
        return Function(new FunctionInvokeInfo(arguments, thread));
    }
}