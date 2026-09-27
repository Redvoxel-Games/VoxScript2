using System;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Runtime.InteropServices.JavaScript;

namespace VoxScript.Runtime;

public enum ValueType
{
    Null,
    Number,
    String,
    Bool,
    
    Function,
    Table,
    Tuple,
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
    public static VoxValue Create(Table table) => new() { Type = ValueType.Table, Reference = table };
    public static VoxValue Create(Tuple tuple) => new() { Type = ValueType.Tuple, Reference = tuple };
    public static VoxValue Create(FunctionPrototype function) => new() { Type = ValueType.Function, Reference = function };
    public static VoxValue Create(Func<VoxValue[], VoxValue[]> function) => new() { Type = ValueType.Function, Reference = new NativeFunction(function) };

    public override string ToString()
    {
        return Type switch
        {
            ValueType.String => String,
            ValueType.Null => "null",
            ValueType.Number => Number.ToString(),
            ValueType.Bool => Bool ? "true" : "false",
            ValueType.Function => "func",
            ValueType.Table => "table",
            ValueType.Tuple => "tuple",
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
            _ => throw new ArgumentOutOfRangeException()
        };
    }

    public override int GetHashCode()
    {
        return HashCode.Combine((int)Type, Number, String, Bool, Reference);
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
        if (a.Type == ValueType.Table || b.Type == ValueType.Table) throw new ArithmeticException("Attempt to do multiply operation with table!");

        if (a.Type == ValueType.String)
        {
            if (b.Type == ValueType.Number)
            {
                return Create(string.Concat(Enumerable.Repeat(a.String, (int)b.Number)));
            }
            throw new ArithmeticException($"Attempt to multiply string with {b.Type}");
        }

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
        if (a.Type == ValueType.Table || b.Type == ValueType.Table) throw new ArithmeticException("Attempt to do divide operation with table!");

        return a.Type switch
        {
            ValueType.Number when b.Type == ValueType.Number => Create(a.Number / b.Number),
            _ => throw new ArithmeticException("Subtraction operation failed!")
        };
    }
}