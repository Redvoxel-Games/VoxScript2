using System.Collections.Generic;

namespace VoxScript.Runtime;

public sealed class Table
{
    private readonly Dictionary<VoxValue, VoxValue> _values = [];

    public VoxValue Get(VoxValue key)
    {
        return _values.TryGetValue(key, out var value) ? value : VoxValue.Null;
    }

    public void Set(VoxValue key, VoxValue value)
    {
        if (value.Type == ValueType.Null)
        {
            _values.Remove(key);
        }
        else
        {
            _values[key] = value;
        }
    }
}