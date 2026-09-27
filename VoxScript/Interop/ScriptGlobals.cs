using System.Collections.Generic;
using VoxScript.Runtime;

namespace VoxScript.Interop;

public sealed class ScriptGlobals
{
    private readonly Dictionary<string, VoxValue> _globals = new();

    public void SetGlobal(string name, VoxValue value)
    {
        _globals[name] = value;
    }
    public VoxValue GetGlobal(string name)
    {
        return _globals[name];
    }
    
    internal bool _hasGlobal(string globalName) => _globals.ContainsKey(globalName);
}