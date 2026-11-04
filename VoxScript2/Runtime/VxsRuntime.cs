using System;
using VoxScript.Compiler;
using VoxScript.Interop;

namespace VoxScript.Runtime;

public class VxsRuntime(ScriptGlobals globals)
{
    public readonly ScriptGlobals Globals = globals;
    public event Action<VoxValue, VxsThread> OnPrint = delegate { };

    public void Print(VoxValue value, VxsThread thread)
    {
        OnPrint(value, thread);
    }

    public bool EvaluatesToTrue(VoxValue value)
    {
        return value is { Type: ValueType.Bool, Bool: true } || (value.Type != ValueType.Null && value.Type != ValueType.Bool);
    }

    public VoxValue[] RunProgram(VxsProgram program)
    {
        var newClosure = new FunctionClosure([], program.Instructions, program.Constants, program.LocalCount);
        var thread = new VxsThread(newClosure, this);
        return thread.Run([]).Reverse().ToArray();
    }
}