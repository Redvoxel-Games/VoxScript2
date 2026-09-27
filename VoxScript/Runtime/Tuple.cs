namespace VoxScript.Runtime;

public sealed class Tuple
{
    private readonly VoxValue[] _values;

    public Tuple(VoxValue[] values)
    {
        _values = values;
    }

    public VoxValue this[int index]
    {
        get => _values[index];
    }
    
    public int Length => _values.Length;
}