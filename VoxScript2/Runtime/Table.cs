using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Data;
using System.Runtime.CompilerServices;

namespace VoxScript.Runtime;

public interface Indexable
{
    public VoxValue Get(VoxValue key, VxsThread? thread);
    public void Set(VoxValue key, VoxValue value, VxsThread? thread);
    public uint Length { get; }
    public VoxValue GetKeyAt(uint indexNumber);
    public VoxValue GetValueAt(uint indexNumber);
}

public struct Table : Indexable, IEnumerable<KeyValuePair<VoxValue, VoxValue>>
{
    public bool Frozen = false;

    private VoxValue[] _keys = new VoxValue[1];
    private VoxValue[] _values = new VoxValue[1];

    public Table Copy()
    {
        if (Frozen) return this;
        
        Table table = new Table(_keys.Length);

        for (var i = 0; i < _keys.Length; i++)
        {
            table.Set(_keys[i], _values[i], null);
        }
        
        return table;
    }
    
    private bool _initialized = false;

    public Table(int reserved = 1)
    {
        _keys = new VoxValue[reserved];
        _values = new VoxValue[reserved];
        
        for (var i = 0; i < reserved; i++)
        {
            _keys[i] = VoxValue.Null;
            _values[i] = VoxValue.Null;
        }
    }

    private void ensureInitialized()
    {
        if (!_initialized)
        {
            _initialized = true;
            
            _keys = new VoxValue[1];
            _values = new VoxValue[1];
        }
    }

    public VoxValue Get(VoxValue key, VxsThread? thread)
    {
        ensureInitialized();
        
        return _keys.Contains(key) ? _values[_keys.IndexOf(key)] : VoxValue.Null;
    }

    public void Set(VoxValue key, VoxValue value, VxsThread? thread)
    {
        if (Frozen) throw new ReadOnlyException("Table is frozen!");
        
        ensureInitialized();
        
        var index = _keys.IndexOf(key);
        
        if (value.Type == ValueType.Null)
        {
            if (index >= 0)
            {
                _values[index] = VoxValue.Null;
                _keys[index] = VoxValue.Null;
            }
        }
        else
        {
            if (index >= 0)
            {
                _values[index] = value;
            }
            else
            {
                bool tableIsFull = true;
                int clearIndex = -1;
                for (var i = 0; i < _keys.Length; i++)
                {
                    if (_keys[i].Type == ValueType.Null)
                    {
                        tableIsFull = false;
                        clearIndex = i;
                        break;
                    }
                }

                if (tableIsFull)
                {
                    // Create new arrays with double the size
                    VoxValue[] newKeys = new VoxValue[_keys.Length * 2];
                    VoxValue[] newValues = new VoxValue[_keys.Length * 2];
                    
                    Array.Copy(_keys, newKeys, _keys.Length);
                    Array.Copy(_values, newValues, _values.Length);
                    
                    newKeys[_keys.Length] = key;
                    newValues[_keys.Length] = value;
                    
                    _keys = newKeys;
                    _values = newValues;
                }
                else
                {
                    _keys[clearIndex] = key;
                    _values[clearIndex] = value;
                }
            }
        }
    }

    public uint Length => (uint)_values.Length;

    public VoxValue GetKeyAt(uint index)
    {
        return _keys[index];
    }

    public VoxValue GetValueAt(uint index)
    {
        return _values[index];
    }

    public IEnumerator<KeyValuePair<VoxValue, VoxValue>> GetEnumerator()
    {
        KeyValuePair<VoxValue, VoxValue>[] pairs = new KeyValuePair<VoxValue, VoxValue>[_values.Length];

        for (var i = 0; i < _values.Length; i++)
        {
            pairs[i] = new KeyValuePair<VoxValue, VoxValue>(_keys[i], _values[i]);
        }

        return (IEnumerator<KeyValuePair<VoxValue, VoxValue>>)pairs.GetEnumerator();
    }

    IEnumerator IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }
}