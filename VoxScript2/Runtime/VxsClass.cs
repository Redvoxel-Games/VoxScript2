using System.Data;
using VoxScript.Compiler;

namespace VoxScript.Runtime;

public class VxsClass : Indexable
{
    public VoxValue Constructor;
    public VoxValue ScriptConstructor;
    public VoxValue ToStringFunction;
    public Dictionary<string, VoxValue> StaticMembers = [];
    public Dictionary<string, VoxValue> InstanceMembersTemplate = [];
    public string Name = "UNKNOWN";

    public VxsObject CreateInstance(VoxValue[] arguments, VxsThread thread)
    {
        VxsObject instance = new VxsObject(this);

        if (ScriptConstructor.Reference is FunctionPrototype proto)
        {
            var allArgs = new VoxValue[arguments.Length+1];
            allArgs[0] = VoxValue.Create(instance);

            for (var i = 0; i < arguments.Length; i++)
            {
                allArgs[i + 1] = arguments[i];
            }
            
            var functionClosure = proto._parentClosure;
            var parents = new Closure[functionClosure.Parents.Length + 1];

            for (var i=0; i<functionClosure.Parents.Length; i++)
            {
                parents[i] = functionClosure.Parents[i];
            }

            parents[^1] = functionClosure;
                        
            var newClosure = new FunctionClosure(parents, proto.Instructions, proto.Constants, proto.LocalCount);
            
            thread.RunClosure(newClosure, allArgs);
        }
        
        return instance;
    }

    public VxsClass()
    {
        Constructor = VoxValue.Create(info => [VoxValue.Create(CreateInstance(info.Arguments, info.Thread))]);
        ToStringFunction = VoxValue.Create(info => [VoxValue.Create(Name)]);
    }
    
    public VoxValue Get(VoxValue key, VxsThread thread)
    {
        return key.AsString(thread) switch
        {
            "new" => Constructor,
            "ToString" => ToStringFunction,
            _ => StaticMembers[key.AsString(thread)],
        };
    }

    public void Set(VoxValue key, VoxValue value, VxsThread thread)
    {
        var str = key.AsString(thread);
        if (StaticMembers.ContainsKey(str) && StaticMembers[str].Type == ValueType.Function)
        {
            throw new ReadOnlyException("Attempted to overwrite a function!");
        }
        StaticMembers[str] = value;
    }

    public uint Length { get; }
    
    public VoxValue GetKeyAt(uint indexNumber)
    {
        throw new NotImplementedException();
    }

    public VoxValue GetValueAt(uint indexNumber)
    {
        throw new NotImplementedException();
    }
}

public class VxsObject : Indexable
{
    public VxsClass Prototype { get; init; }
    
    private string[] _keys;
    private VoxValue[] _values;

    public VxsObject(VxsClass prototype)
    {
        Prototype = prototype;
        
        int memberCount = prototype.InstanceMembersTemplate.Count;
        _keys = new string[memberCount];
        _values = new VoxValue[memberCount];

        int index = 0;
        foreach (var pair in prototype.InstanceMembersTemplate)
        {
            if (pair.Value.Reference is FunctionPrototype proto)
            {
                _keys[index] = pair.Key;
                _values[index] = VoxValue.Create(new InstancedFunctionPrototype(proto.Instructions, proto.Constants, proto.ParameterCount, proto.LocalCount, this) {_parentClosure = proto._parentClosure});
            }
            else
            {
                _keys[index] = pair.Key;
                _values[index] = pair.Value;
            }
            index++;
        }
    }

    public VoxValue GetTrue(string key)
    {
        if (_keys.Contains(key))
        {
            return _values[_keys.IndexOf(key)];
        }

        return VoxValue.Null;
    }
    
    public VoxValue Get(VoxValue key, VxsThread thread)
    {
        var val = GetTrue(key.AsString(thread));

        if (val.Type != ValueType.Null)
        {
            return val;
        }
        
        throw new MemberAccessException($"'{key}' is not a valid member of {Prototype.Name}!");
    }

    public void Set(VoxValue key, VoxValue value, VxsThread thread)
    {
        var str = key.AsString(thread);

        if (_keys.Contains(str))
        {
            _values[_keys.IndexOf(str)] = value;
        }
        else
        {
            throw new MemberAccessException($"'{str}' is not a valid member of {Prototype.Name}!");
        }
    }

    public uint Length { get; }
    public VoxValue GetKeyAt(uint indexNumber)
    {
        throw new NotImplementedException();
    }

    public VoxValue GetValueAt(uint indexNumber)
    {
        throw new NotImplementedException();
    }

    public string AsString(VxsThread thread)
    {
        var func = GetTrue("ToString");

        if (func is { Type: ValueType.Function, Reference: InstancedFunctionPrototype proto })
        {
            var returned = thread.RunMethod(proto, []);

            var str = "";
            for (var i = 0; i < returned.Length; i++)
            {
                if (i > 0) str += ", ";
                str += returned[i].ToString();
            }

            return str;
        }

        return $"[OBJECT:{Prototype.Name}]";
    }
}