using System.Reflection;
using System.Runtime.CompilerServices;
using VoxScript.Exceptions;
using VoxScript.Runtime;
using ValueType = VoxScript.Runtime.ValueType;

namespace VoxScript.Interop;

internal static class UserDataCache
{
    private static ConditionalWeakTable<object, VxsUserData> _table = new();

    public static VxsUserData Get(object obj)
    {
        if (_table.TryGetValue(obj, out var vxsUserData)) return vxsUserData;
        
        var created = new VxsUserData(obj);
        _table.Add(obj, created);
        
        return created;
    }
}

public class VxsUserData : Indexable
{
    private FieldInfo[] _fields;
    private PropertyInfo[] _properties;
    private MethodInfo[] _methods;
    private ReflectionCache cache;

    public readonly object ReferenceObject;
    
    public VxsUserData(object obj)
    {
        ReferenceObject = obj;
        
        var type = obj.GetType();
        
        cache = VxsReflection._getCache(type, false);

        _fields = cache.fieldInfos;
        _properties = cache.propertyInfos;
        _methods = cache.methodInfos;
    }

    public static VxsUserData Create(object ReferenceObject)
    {
        return UserDataCache.Get(ReferenceObject);
    }
    
    public override VoxValue Get(VoxValue key)
    {
        var keyStr = key.ToString();

        VoxValue Convert(object? obj)
        {
            return obj switch
            {
                null => VoxValue.Null,
                int intValue => VoxValue.Create(intValue),
                uint uintValue => VoxValue.Create(uintValue),
                float floatValue => VoxValue.Create(floatValue),
                double doubleValue => VoxValue.Create(doubleValue),
                string stringValue => VoxValue.Create(stringValue),
                bool boolValue => VoxValue.Create(boolValue),
                _ => VoxValue.Create(UserDataCache.Get(obj))
            };
        }

        var fields = cache.GetFieldInfos(keyStr);
        if (fields.Length > 0)
        {
            var value = fields[0].GetValue(ReferenceObject);
            return Convert(value);
        }
        
        var properties = cache.GetPropertyInfos(keyStr);
        if (properties.Length > 0)
        {
            var value = properties[0].GetValue(ReferenceObject);
            return Convert(value);
        }
        
        var methods = cache.GetMethodInfos(keyStr);
        if (methods.Length > 0)
        {
            MethodInfo? method = null;
            foreach (var methodInfo in methods)
            {
                if (methodInfo.ReturnParameter.ParameterType != typeof(VoxValue[])) continue;
                var parameters = methodInfo.GetParameters();

                if (parameters.Length != 1) continue;
                if (parameters[0].ParameterType != typeof(VoxValue[])) continue;
                
                method = methodInfo;
            }

            if (method != null)
            {
                Func<VoxValue[], VoxValue[]> action = (Func<VoxValue[], VoxValue[]>)Delegate.CreateDelegate(typeof(Func<VoxValue[], VoxValue[]>), null, method);
                return VoxValue.Create(action);
            }
        }
        
        throw new KeyNotFoundException($"{keyStr} is not a valid member of {ReferenceObject.GetType().Name}");
    }

    public override void Set(VoxValue key, VoxValue value)
    {
        var keyStr = key.ToString();

        object? Convert(VoxValue obj)
        {
            switch (obj.Type)
            {
                case ValueType.Null:
                    return null;
                case ValueType.Number:
                    return obj.Number;
                case ValueType.String:
                    return obj.String;
                case ValueType.Bool:
                    return obj.Bool;
                case ValueType.Table:
                    var tbl = obj.Reference;
                    if (tbl is not VxsUserData userData)
                        throw new ValueConversionException("Cannot convert table to UserData!");

                    return userData.ReferenceObject;
                default:
                    throw new ValueConversionException("Failed to convert value!");
            };
        }

        var fields = cache.GetFieldInfos(keyStr);
        if (fields.Length > 0)
        {
            fields[0].SetValue(ReferenceObject, Convert(value));
            return;
        }
        
        var properties = cache.GetPropertyInfos(keyStr);
        if (properties.Length > 0)
        {
            properties[0].SetValue(ReferenceObject, Convert(value));
            return;
        }
        
        throw new KeyNotFoundException($"{keyStr} is not a valid member of {ReferenceObject.GetType().Name}");
    }

    public override uint Length { get; }
    
    public override VoxValue GetKeyAt(uint indexNumber)
    {
        throw new NotImplementedException();
    }

    public override VoxValue GetValueAt(uint indexNumber)
    {
        throw new NotImplementedException();
    }
}