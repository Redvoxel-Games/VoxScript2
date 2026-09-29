using System.Collections.Generic;

namespace VoxScript.Runtime;

public abstract class Indexable
{
    public abstract VoxValue Get(VoxValue key);
    public abstract void Set(VoxValue key, VoxValue value);
    public abstract uint Length { get; }
}

public sealed class Table : Indexable
{
    private readonly Dictionary<VoxValue, VoxValue> _values = [];

    public override VoxValue Get(VoxValue key)
    {
        return _values.TryGetValue(key, out var value) ? value : VoxValue.Null;
    }

    public override void Set(VoxValue key, VoxValue value)
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

    public override uint Length => (uint)_values.Count;

    public VoxValue GetKeyAt(uint index)
    {
        return _values.Keys.ToArray()[index];
    }

    public VoxValue GetValueAt(uint index)
    {
        return _values.Values.ToArray()[index];
    }
}