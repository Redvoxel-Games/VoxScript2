using System.Collections.Generic;
using VoxScript.Compiler;
using VoxScript.Exceptions;
using VoxScript.Runtime;
using ValueType = VoxScript.Runtime.ValueType;

namespace VoxScript.Interop;

public class GlobalBuilder
{
    ScriptGlobals _globals;

    internal GlobalBuilder(ScriptGlobals globals)
    {
        _globals = globals;
    }

    public ScriptGlobals Build()
    {
        return _globals;
    }

    public GlobalBuilder AddTableLibrary()
    {
        // Oh, the irony
        Table table = new Table();
        
        table.Set(VoxValue.Create("length"), VoxValue.Create(info =>
        {
            if (info.Arguments.Length != 1) throw new Exception("Expected 1 argument, got " + info.Arguments.Length);
            
            var tbl = info.Arguments[0];
            if (tbl.Type != ValueType.Table) throw new Exception("Expected table type, got " + tbl.Type);

            var tableRef = tbl.Reference is Table reference ? reference : default;

            return [VoxValue.Create(tableRef!.Length)];
        }), null);
        
        table.Set(VoxValue.Create("keyOf"), VoxValue.Create(info =>
        {
            if (info.Arguments.Length != 2) throw new Exception("Expected 2 arguments, got " + info.Arguments.Length);
            
            var tbl = info.Arguments[0];
            if (tbl.Type != ValueType.Table) throw new Exception("Expected table type, got " + tbl.Type);

            var val = info.Arguments[1];
            
            var tableRef = tbl.Reference is Table reference ? reference : default;

            foreach (var pair in tableRef!)
            {
                if (pair.Value.Equals(val))
                {
                    return [pair.Key];
                }
            }

            return [];
        }), null);
        
        table.Set(VoxValue.Create("freeze"), VoxValue.Create(info =>
        {
            if (info.Arguments.Length != 1) throw new Exception("Expected 1 argument, got " + info.Arguments.Length);
            
            var tbl = info.Arguments[0];
            if (tbl.Type != ValueType.Table) throw new Exception("Expected table type, got " + tbl.Type);

            var tableRef = tbl.Reference is Table reference ? reference : default;

            tableRef!.Frozen = true;
            
            return [];
        }), null);

        table.Set(VoxValue.Create("contains"), VoxValue.Create(info =>
        {
            if (info.Arguments.Length != 2) throw new Exception("Expected 2 argument, got " + info.Arguments.Length);
            
            var tbl = info.Arguments[0];
            if (tbl.Type != ValueType.Table) throw new Exception("Expected table type, got " + tbl.Type);
            
            var tableRef = tbl.Reference is Table reference ? reference : default;

            foreach (var pair in tableRef!)
            {
                if (pair.Value.Equals(info.Arguments[1])) return [VoxValue.Create(true)];
            }
            
            return [];
        }), null);
        
        _globals.SetGlobal("table", VoxValue.Create(table));

        return this;
    }
    
    public GlobalBuilder AddStringLibrary()
    {
        Table stringTable = new Table();
        
        stringTable.Set(VoxValue.Create("length"), VoxValue.Create(info =>
        {
            if (info.Arguments.Length != 1) throw new Exception("Expected 1 argument, got " + info.Arguments.Length);
            
            var str = info.Arguments[0].ToString();

            return [VoxValue.Create(str.Length)];
        }), null);

        stringTable.Set(VoxValue.Create("startsWith"), VoxValue.Create(info =>
        {
            if (info.Arguments.Length != 2) throw new Exception("Expected 2 argument, got " + info.Arguments.Length);
            
            var a = info.Arguments[0].ToString();
            var b = info.Arguments[1].ToString();

            return [VoxValue.Create(a.StartsWith(b))];
        }), null);

        stringTable.Set(VoxValue.Create("endsWith"), VoxValue.Create(info =>
        {
            if (info.Arguments.Length != 2) throw new Exception("Expected 2 argument, got " + info.Arguments.Length);

            var a = info.Arguments[0].ToString();
            var b = info.Arguments[1].ToString();

            return [VoxValue.Create(a.EndsWith(b))];
        }), null);

        stringTable.Set(VoxValue.Create("contains"), VoxValue.Create(info =>
        {
            if (info.Arguments.Length != 2) throw new Exception("Expected 2 argument, got " + info.Arguments.Length);

            var a = info.Arguments[0].ToString();
            var b = info.Arguments[1].ToString();

            return [VoxValue.Create(a.Contains(b))];
        }), null);
        
        stringTable.Frozen = true;

        return this;
    }
    
    public GlobalBuilder AddMathLibrary()
    {
        Table mathTable = new Table();

        mathTable.Set(VoxValue.Create("sin"), VoxValue.Create(info =>
        {
            if (info.Arguments.Length != 1) throw new Exception("Expected 1 argument, got " + info.Arguments.Length);
            
            var a = info.Arguments[0].Number;
            
            return [VoxValue.Create(Math.Sin(a))];
        }), null);

        mathTable.Set(VoxValue.Create("cos"), VoxValue.Create(info =>
        {
            if (info.Arguments.Length != 1) throw new Exception("Expected 1 argument, got " + info.Arguments.Length);

            var a = info.Arguments[0].Number;

            return [VoxValue.Create(Math.Cos(a))];
        }), null);

        mathTable.Set(VoxValue.Create("tan"), VoxValue.Create(info =>
        {
            if (info.Arguments.Length != 1) throw new Exception("Expected 1 argument, got " + info.Arguments.Length);

            var a = info.Arguments[0].Number;

            return [VoxValue.Create(Math.Tan(a))];
        }), null);

        mathTable.Set(VoxValue.Create("asin"), VoxValue.Create(info =>
        {
            if (info.Arguments.Length != 1) throw new Exception("Expected 1 argument, got " + info.Arguments.Length);

            var a = info.Arguments[0].Number;

            return [VoxValue.Create(Math.Asin(a))];
        }), null);

        mathTable.Set(VoxValue.Create("acos"), VoxValue.Create(info =>
        {
            if (info.Arguments.Length != 1) throw new Exception("Expected 1 argument, got " + info.Arguments.Length);

            var a = info.Arguments[0].Number;

            return [VoxValue.Create(Math.Acos(a))];
        }), null);

        mathTable.Set(VoxValue.Create("atan"), VoxValue.Create(info =>
        {
            if (info.Arguments.Length != 1) throw new Exception("Expected 1 argument, got " + info.Arguments.Length);

            var a = info.Arguments[0].Number;

            return [VoxValue.Create(Math.Atan(a))];
        }), null);

        mathTable.Set(VoxValue.Create("tanh"), VoxValue.Create(info =>
        {
            if (info.Arguments.Length != 1) throw new Exception("Expected 1 argument, got " + info.Arguments.Length);

            var a = info.Arguments[0].Number;

            return [VoxValue.Create(Math.Tanh(a))];
        }), null);

        mathTable.Set(VoxValue.Create("asinh"), VoxValue.Create(info =>
        {
            if (info.Arguments.Length != 1) throw new Exception("Expected 1 argument, got " + info.Arguments.Length);

            var a = info.Arguments[0].Number;

            return [VoxValue.Create(Math.Asinh(a))];
        }), null);

        mathTable.Set(VoxValue.Create("acosh"), VoxValue.Create(info =>
        {
            if (info.Arguments.Length != 1) throw new Exception("Expected 1 argument, got " + info.Arguments.Length);

            var a = info.Arguments[0].Number;

            return [VoxValue.Create(Math.Acosh(a))];
        }), null);
        
        mathTable.Set(VoxValue.Create("randomNumber"), VoxValue.Create(info =>
        {
            if (info.Arguments.Length == 0)
            {
                return [VoxValue.Create(Random.Shared.NextDouble())];
            }
            if (info.Arguments.Length == 2)
            {
                var min = info.Arguments[0].Number;
                var max = info.Arguments[1].Number;
                
                return [VoxValue.Create(Random.Shared.NextDouble() * (max - min) + min)];
            }
            throw new Exception("Expected either 0 or 2 arguments, got " + info.Arguments.Length);
        }), null);
        
        mathTable.Set(VoxValue.Create("randomInt"), VoxValue.Create(info =>
        {
            if (info.Arguments.Length == 0)
            {
                return [VoxValue.Create(Random.Shared.NextInt64())];
            }
            if (info.Arguments.Length == 2)
            {
                var min = info.Arguments[0].Number;
                var max = info.Arguments[1].Number;
                
                return [VoxValue.Create(Math.Round(Random.Shared.NextInt64() * (max - min) + min))];
            }
            throw new Exception("Expected either 0 or 2 arguments, got " + info.Arguments.Length);
        }), null);
        
        mathTable.Frozen = true;

        return this;
    }
}

public sealed class ScriptGlobals
{
    private readonly Dictionary<string, VoxValue> _globals = new();

    public void SetGlobal(string name, VoxValue value)
    {
        _globals[name] = value;
    }
    public VoxValue GetGlobal(string name)
    {
        return _globals[name];
    }
    
    internal bool _hasGlobal(string globalName) => _globals.ContainsKey(globalName);

    public static GlobalBuilder Create()
    {
        return new GlobalBuilder(new ScriptGlobals());
    }
}