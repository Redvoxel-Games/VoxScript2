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
        var methodInfos = type.GetMethods(flags).Where((info, _) => info.GetCustomAttribute<ExposeToVxs>() != null);
        
        var cache = new ReflectionCache(fieldInfos.ToArray(), propertyInfos.ToArray(), methodInfos.ToArray());
        
        _caches[(type, forStatic)] = cache;
        
        return cache;
    }
    
    public static FieldInfo[] GetFieldsCached(Type type, bool forStatic = false, string? name = null)
    {
        var infos = _getCache(type, forStatic).fieldInfos;
        if (name == null) return infos;

        List<FieldInfo> valid = [];

        foreach (var info in infos)
        {
            if (name.Equals(info.Name)) valid.Add(info);
        }
        
        return valid.ToArray();
    }

    public static PropertyInfo[] GetPropertiesCached(Type type, bool forStatic = false, string? name = null)
    {
        var infos = _getCache(type, forStatic).propertyInfos;
        if (name == null) return infos;

        List<PropertyInfo> valid = [];

        foreach (var info in infos)
        {
            if (name.Equals(info.Name)) valid.Add(info);
        }
        
        return valid.ToArray();
    }

    public static MethodInfo[] GetMethodsCached(Type type, bool forStatic = false, string? name = null)
    {
        var infos = _getCache(type, forStatic).methodInfos;
        if (name == null) return infos;

        List<MethodInfo> valid = [];

        foreach (var info in infos)
        {
            if (name.Equals(info.Name)) valid.Add(info);
        }
        
        return valid.ToArray();
    }
}

internal record ReflectionCache(FieldInfo[] fieldInfos, PropertyInfo[] propertyInfos, MethodInfo[] methodInfos)
{
    public FieldInfo[] GetFieldInfos(string? name = null)
    {
        return name == null ? fieldInfos : fieldInfos.Where(f => f.Name.Equals(name)).ToArray();
    }

    public PropertyInfo[] GetPropertyInfos(string? name = null)
    {
        return name == null ? propertyInfos : propertyInfos.Where(f => f.Name.Equals(name)).ToArray();
    }

    public MethodInfo[] GetMethodInfos(string? name = null)
    {
        return name == null ? methodInfos : methodInfos.Where(f => f.Name.Equals(name)).ToArray();
    }
}