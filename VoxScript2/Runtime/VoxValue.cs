using System;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Runtime.InteropServices.JavaScript;
using VoxScript.Exceptions;
using VoxScript.Interop;

namespace VoxScript.Runtime;

public enum ValueType
{
    Null,
    Number,
    String,
    Bool,
    
    Function,
    Table,
    
    /// <summary>
    /// Used for internal closure management, do not use.
    /// </summary>
    Misc,
}

public readonly struct VoxValue() : IEquatable<VoxValue>
{
    public ValueType Type { get; init; } = ValueType.Null;
    
    public double Number { get; init; }
    public string String { get; init; }
    public bool Bool { get; init; }
    
    public object Reference { get; init; }

    public static VoxValue Null => default;
    
    public static VoxValue Create(double number) => new() { Type = ValueType.Number, Number = number };
    public static VoxValue Create(string text) => new() { Type = ValueType.String, String = text };
    public static VoxValue Create(bool boolean) => new() { Type = ValueType.Bool, Bool = boolean };
    public static VoxValue Create(Indexable table) => new() { Type = ValueType.Table, Reference = table };
    public static VoxValue Create(FunctionPrototype function) => new() { Type = ValueType.Function, Reference = function };
    public static VoxValue Create(Func<VoxValue[], VoxValue[]> function) => new() { Type = ValueType.Function, Reference = new NativeFunction(function) };
    public static VoxValue Create(Delegate @delegate) => new() { Type = ValueType.Function, Reference = @delegate };

    public static VoxValue ToVxs(object? obj)
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

    public static T? Read<T>(VoxValue value)
    {
        return (T?) Read(value, typeof(T));
    }

    public static object? Read(VoxValue value, Type target)
    {
        if (value.Type == ValueType.Null) return null;
        
        if (value.Type == ValueType.Bool && target == typeof(bool)) return value.Bool;
        if (value.Type == ValueType.String && target == typeof(string)) return value.String;
        
        if (value.Type == ValueType.Number && target == typeof(double)) return value.Number;
        if (value.Type == ValueType.Number && target == typeof(float)) return (float)value.Number;
        if (value.Type == ValueType.Number && target == typeof(int)) return (int)value.Number;
        if (value.Type == ValueType.Number && target == typeof(uint)) return (uint)value.Number;

        if (value.Type == ValueType.Table && value.Reference is VxsUserData userData)
        {
            if (userData.ReferenceObject.GetType() == target) return userData.ReferenceObject;
        }

        throw new ValueConversionException("Failed to convert value from type " + value.Type + " to " + target.Name);
    }

    public static Table EnumToTable(Type enumType)
    {
        if (!enumType.IsEnum) throw new ArgumentException();

        var values = Enum.GetValues(enumType);
        var names = Enum.GetNames(enumType);
        
        Table table = new();

        for (int i = 0; i < values.Length; i++)
        {
            var name = names[i];
            var value = values.GetValue(i);
            
            table.Set(Create(name), FromObject(value!));
        }

        table.frozen = true;

        return table;
    }
    
    public static VoxValue FromObject(object obj)
    {
        return Create(VxsUserData.Create(obj));
    }
    
    public override string ToString()
    {
        if (Type == ValueType.Table && Reference is VxsUserData userData)
        {
            return userData.ReferenceObject.ToString() ?? userData.ReferenceObject.GetType().Name;
        }
        
        return Type switch
        {
            ValueType.String => String,
            ValueType.Null => "null",
            ValueType.Number => Number.ToString(),
            ValueType.Bool => Bool ? "true" : "false",
            ValueType.Function => "[FUNCTION]",
            ValueType.Table => "[TABLE]",
            ValueType.Misc => "[MISC]",
            _ => throw new ArgumentOutOfRangeException()
        };
    }

    public override bool Equals(object? obj)
    {
        return obj is VoxValue other && Equals(other);
    }

    public bool Equals(VoxValue other)
    {
        if (Type != other.Type) return false;
        if (Type == ValueType.Null) return true;

        return Type switch
        {
            ValueType.String => String == other.String,
            ValueType.Number => Math.Abs(Number - other.Number) < 0.00000001,
            ValueType.Bool => Bool == other.Bool,
            ValueType.Function or ValueType.Table => ReferenceEquals(Reference, other.Reference),
            ValueType.Misc => ReferenceEquals(Reference, other.Reference),
            _ => throw new ArgumentOutOfRangeException(Type.ToString())
        };
    }

    public override int GetHashCode()
    {
        return HashCode.Combine((int)Type, Number, String, Bool, Reference);
    }

    public object? ToObject()
    {
        switch (Type)
        {
            case ValueType.Null:
                return null;
            case ValueType.Bool:
                return Bool;
            case ValueType.Number:
                return Number;
            case ValueType.String:
                return String;
            case ValueType.Function:
                return Reference;
            case ValueType.Table:
                if (Reference is VxsUserData userData) return userData.ReferenceObject;
                return Reference;
            case ValueType.Misc:
                throw new ValueConversionException("Attempt to convert misc value to object!");
            default:
                return null;
        }
    }

    public static VoxValue DoOperation(object? aObj, object? bObj, string operation)
    {
        if (aObj == null || bObj == null) throw new ArithmeticException("Attempt to do add operation with null!");

        var aRefCache = VxsReflection._getCache(aObj.GetType(), true);
        var bRefCache = VxsReflection._getCache(bObj.GetType(), true);
            
        var aAddOps = aRefCache.GetMethodInfos(operation, parameters: [aObj.GetType(), bObj.GetType()]);
        if (aAddOps.Length > 0)
        {
            var method = aAddOps[0];
            var result = method.Invoke(null, [aObj, bObj]);

            return ToVxs(result);
        }
            
        var bAddOps = bRefCache.GetMethodInfos(operation, parameters: [bObj.GetType(), aObj.GetType()]);
        if (bAddOps.Length > 0)
        {
            var method = bAddOps[0];
            var result = method.Invoke(null, [bObj, aObj]);
                
            return ToVxs(result);
        }

        throw new ArithmeticException($"Unable to find valid method for {operation} with types {aObj.GetType()} and {bObj.GetType()}!");
    }

    public static VoxValue operator +(VoxValue a, VoxValue b)
    {
        if (a.Type == ValueType.Null || b.Type == ValueType.Null)
        {
            if (a.Type == ValueType.String) return Create(a + "null");
            if (b.Type == ValueType.String) return Create("null" + b);
            
            throw new ArithmeticException("Attempt to do add operation with null!");
        }
        
        if (a.Type == ValueType.String || b.Type == ValueType.String)
        {
            return Create(a.ToString() + b.ToString());
        }
        
        if (a.Type == ValueType.Bool || b.Type == ValueType.Bool) throw new ArithmeticException("Attempt to do add operation with boolean!");

        if ((a.Type == ValueType.Table || b.Type == ValueType.Table) && (a.Reference is VxsUserData || b.Reference is VxsUserData))
        {
            return DoOperation(a.ToObject(), b.ToObject(), "op_Addition");
        }

        return a.Type switch
        {
            ValueType.Number when b.Type == ValueType.Number => Create(a.Number + b.Number),
            _ => throw new ArithmeticException("Add operation failed!")
        };
    }

    public static VoxValue operator -(VoxValue a, VoxValue b)
    {
        if (a.Type == ValueType.Null || b.Type == ValueType.Null) throw new ArithmeticException("Attempt to do subtract operation with null!");
        if (a.Type == ValueType.String || b.Type == ValueType.String) throw new ArithmeticException("Attempt to do subtract operation with string!");
        if (a.Type == ValueType.Bool || b.Type == ValueType.Bool) throw new ArithmeticException("Attempt to do subtract operation with boolean!");
        if (a.Type == ValueType.Function || b.Type == ValueType.Function) throw new ArithmeticException("Attempt to do subtract operation with function!");
        
        if ((a.Type == ValueType.Table || b.Type == ValueType.Table) && (a.Reference is VxsUserData || b.Reference is VxsUserData))
        {
            return DoOperation(a.ToObject(), b.ToObject(), "op_Subtraction");
        }
        
        if (a.Type == ValueType.Table || b.Type == ValueType.Table) throw new ArithmeticException("Attempt to do subtract operation with table!");

        return a.Type switch
        {
            ValueType.Number when b.Type == ValueType.Number => Create(a.Number - b.Number),
            _ => throw new ArithmeticException("Subtraction operation failed!")
        };
    }

    public static VoxValue operator *(VoxValue a, VoxValue b)
    {
        if (a.Type == ValueType.Null || b.Type == ValueType.Null) throw new ArithmeticException("Attempt to do multiply operation with null!");
        if (a.Type == ValueType.Bool || b.Type == ValueType.Bool) throw new ArithmeticException("Attempt to do multiply operation with boolean!");
        if (a.Type == ValueType.Function || b.Type == ValueType.Function) throw new ArithmeticException("Attempt to do multiply operation with function!");

        if (a.Type == ValueType.String)
        {
            if (b.Type == ValueType.Number)
            {
                return Create(string.Concat(Enumerable.Repeat(a.String, (int)b.Number)));
            }
            throw new ArithmeticException($"Attempt to multiply string with {b.Type}");
        }
        
        if ((a.Type == ValueType.Table || b.Type == ValueType.Table) && (a.Reference is VxsUserData || b.Reference is VxsUserData))
        {
            return DoOperation(a.ToObject(), b.ToObject(), "op_Multiply");
        }
        
        if (a.Type == ValueType.Table || b.Type == ValueType.Table) throw new ArithmeticException("Attempt to do multiply operation with table!");

        if (a.Type != ValueType.Number) throw new ArithmeticException("Multiplication operation failed!");
        return b.Type switch
        {
            ValueType.String => Create(string.Concat(Enumerable.Repeat(b.String, (int)a.Number))),
            ValueType.Number => Create(a.Number * b.Number),
            _ => throw new ArithmeticException($"Attempt to multiply string with {b.Type}")
        };
    }
    
    public static VoxValue operator /(VoxValue a, VoxValue b)
    {
        if (a.Type == ValueType.Null || b.Type == ValueType.Null) throw new ArithmeticException("Attempt to do divide operation with null!");
        if (a.Type == ValueType.String || b.Type == ValueType.String) throw new ArithmeticException("Attempt to do divide operation with string!");
        if (a.Type == ValueType.Bool || b.Type == ValueType.Bool) throw new ArithmeticException("Attempt to do divide operation with boolean!");
        if (a.Type == ValueType.Function || b.Type == ValueType.Function) throw new ArithmeticException("Attempt to do divide operation with function!");
        
        if ((a.Type == ValueType.Table || b.Type == ValueType.Table) && (a.Reference is VxsUserData || b.Reference is VxsUserData))
        {
            return DoOperation(a.ToObject(), b.ToObject(), "op_Division");
        }
        
        if (a.Type == ValueType.Table || b.Type == ValueType.Table) throw new ArithmeticException("Attempt to do divide operation with table!");

        return a.Type switch
        {
            ValueType.Number when b.Type == ValueType.Number => Create(a.Number / b.Number),
            _ => throw new ArithmeticException("Subtraction operation failed!")
        };
    }
}