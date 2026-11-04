using System.Reflection;
using VoxScript.Runtime;

namespace VoxScript.Interop;

public static class VxsReflection
{
    private static Dictionary<(Type, bool), ReflectionCache> _caches = new();

    internal static ReflectionCache _getCache(Type type, bool forStatic)
    {
        if (_caches.ContainsKey((type, forStatic)))
        {
            return _caches[(type, forStatic)];
        }
        
        var flags = BindingFlags.Public | BindingFlags.NonPublic;

        if (forStatic)
        {
            flags |= BindingFlags.Static;
        }
        else
        {
            flags |= BindingFlags.Instance;
        }
        
        var fieldInfos = type.GetFields(flags).Where((info, _) => info.GetCustomAttribute<ExposeToVxs>() != null);
        var propertyInfos = type.GetProperties(flags).Where((info, _) => info.GetCustomAttribute<ExposeToVxs>() != null);
        var methodInfos = type.GetMethods(flags).Where((info, _) => info.GetCustomAttribute<ExposeToVxs>() != null || info.Name.StartsWith("op_"));
        
        var cache = new ReflectionCache(fieldInfos.ToArray(), propertyInfos.ToArray(), methodInfos.ToArray());
        
        _caches[(type, forStatic)] = cache;
        
        return cache;
    }
    
    public static FieldInfo[] GetFieldsCached(Type type, bool forStatic = false, string? name = null)
    {
        return _getCache(type, forStatic).GetFieldInfos(name);
    }

    public static PropertyInfo[] GetPropertiesCached(Type type, bool forStatic = false, string? name = null)
    {
        return _getCache(type, forStatic).GetPropertyInfos(name);
    }

    public static MethodInfo[] GetMethodsCached(Type type, bool forStatic = false, string? name = null, Type? returns = null, Type[]? parameters = null)
    {
        return _getCache(type, forStatic).GetMethodInfos(name, returns, parameters);
    }
}

internal class ReflectionCache
{
    public Delegate[] MethodDelegates;

    public FieldInfo[] FieldInfos;
    public PropertyInfo[] PropertyInfos;
    public MethodInfo[] MethodInfos;
    
    public ReflectionCache(FieldInfo[] fieldInfos, PropertyInfo[] propertyInfos, MethodInfo[] methodInfos)
    {
        MethodDelegates = new Delegate[methodInfos.Length];
        
        FieldInfos = fieldInfos;
        PropertyInfos = propertyInfos;
        MethodInfos = methodInfos;
    }
    
    public FieldInfo[] GetFieldInfos(string? name = null)
    {
        return name == null ? FieldInfos : FieldInfos.Where(f => f.Name.Equals(name)).ToArray();
    }

    public PropertyInfo[] GetPropertyInfos(string? name = null)
    {
        return name == null ? PropertyInfos : PropertyInfos.Where(f => f.Name.Equals(name)).ToArray();
    }

    public MethodInfo[] GetMethodInfos(string? name = null, Type? returns = null, Type[]? parameters = null)
    {
        IEnumerable<MethodInfo> results = MethodInfos;
        if (name != null)
        {
            results = results.Where(m => m.Name.Equals(name));
        }
        if (returns != null)
        {
            results = results.Where(m => m.ReturnType == returns);
        }
        if (parameters != null)
        {
            results = results.Where(m => m.GetParameters().Length == parameters.Length);
            
            for (var i=0; i < parameters.Length; i++)
            {
                var i1 = i;
                results = results.Where(m => CanConvert(m.GetParameters()[i1].ParameterType, parameters[i1]));
            }
        }
        
        return results.ToArray();
    }

    public Delegate GetDelegateFor(MethodInfo info)
    {
        var index = MethodInfos.IndexOf(info);
        if (index >= 0)
        {
            return MethodDelegates[index];
        }
        
        throw new ArgumentException($"Method {info.Name} does not belong to this cache!");
    }

    private static bool CanConvert(Type a, Type b)
    {
        if (a == b || a == typeof(string) || b == typeof(string)) return true;
        
        if (a == typeof(double) || a == typeof(float) || a == typeof(int) || a == typeof(uint))
        {
            return b == typeof(double) || b == typeof(float) || b == typeof(int) || b == typeof(uint);
        }

        return false;
    }
}