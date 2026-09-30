using System.Collections.Generic;
using VoxScript.Compiler;
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
        
        table.Set(VoxValue.Create("length"), VoxValue.Create(args =>
        {
            if (args.Length != 1) throw new Exception("Expected 1 argument, got " + args.Length);
            
            var tbl = args[0];
            if (tbl.Type != ValueType.Table) throw new Exception("Expected table type, got " + tbl.Type);

            var tableRef = tbl.Reference as Table;

            return [VoxValue.Create(tableRef!.Length)];
        }));
        
        table.Set(VoxValue.Create("keyOf"), VoxValue.Create(args =>
        {
            if (args.Length != 2) throw new Exception("Expected 2 arguments, got " + args.Length);
            
            var tbl = args[0];
            if (tbl.Type != ValueType.Table) throw new Exception("Expected table type, got " + tbl.Type);

            var val = args[1];
            
            var tableRef = tbl.Reference as Table;

            foreach (var pair in tableRef!)
            {
                if (pair.Value.Equals(val))
                {
                    return [pair.Key];
                }
            }

            return [];
        }));
        
        table.Set(VoxValue.Create("freeze"), VoxValue.Create(args =>
        {
            if (args.Length != 1) throw new Exception("Expected 1 argument, got " + args.Length);
            
            var tbl = args[0];
            if (tbl.Type != ValueType.Table) throw new Exception("Expected table type, got " + tbl.Type);

            var tableRef = tbl.Reference as Table;

            tableRef!.frozen = true;
            
            return [];
        }));

        table.Set(VoxValue.Create("contains"), VoxValue.Create(args =>
        {
            if (args.Length != 2) throw new Exception("Expected 2 argument, got " + args.Length);
            
            var tbl = args[0];
            if (tbl.Type != ValueType.Table) throw new Exception("Expected table type, got " + tbl.Type);
            
            var tableRef = tbl.Reference as Table;

            foreach (var pair in tableRef!)
            {
                if (pair.Value.Equals(args[1])) return [VoxValue.Create(true)];
            }
            
            return [];
        }));
        
        _globals.SetGlobal("table", VoxValue.Create(table));

        return this;
    }
    
    public GlobalBuilder AddStringLibrary()
    {
        Table stringTable = new Table();
        
        stringTable.Set(VoxValue.Create("length"), VoxValue.Create(args =>
        {
            if (args.Length != 1) throw new Exception("Expected 1 argument, got " + args.Length);
            
            var str = args[0].ToString();

            return [VoxValue.Create(str.Length)];
        }));

        stringTable.Set(VoxValue.Create("startsWith"), VoxValue.Create(args =>
        {
            if (args.Length != 2) throw new Exception("Expected 2 argument, got " + args.Length);
            
            var a = args[0].ToString();
            var b = args[1].ToString();

            return [VoxValue.Create(a.StartsWith(b))];
        }));

        stringTable.Set(VoxValue.Create("endsWith"), VoxValue.Create(args =>
        {
            if (args.Length != 2) throw new Exception("Expected 2 argument, got " + args.Length);

            var a = args[0].ToString();
            var b = args[1].ToString();

            return [VoxValue.Create(a.EndsWith(b))];
        }));

        stringTable.Set(VoxValue.Create("contains"), VoxValue.Create(args =>
        {
            if (args.Length != 2) throw new Exception("Expected 2 argument, got " + args.Length);

            var a = args[0].ToString();
            var b = args[1].ToString();

            return [VoxValue.Create(a.Contains(b))];
        }));
        
        stringTable.frozen = true;

        return this;
    }
    
    public GlobalBuilder AddMathLibrary()
    {
        Table mathTable = new Table();

        mathTable.Set(VoxValue.Create("sin"), VoxValue.Create(args =>
        {
            if (args.Length != 1) throw new Exception("Expected 1 argument, got " + args.Length);
            
            var a = args[0].Number;
            
            return [VoxValue.Create(Math.Sin(a))];
        }));

        mathTable.Set(VoxValue.Create("cos"), VoxValue.Create(args =>
        {
            if (args.Length != 1) throw new Exception("Expected 1 argument, got " + args.Length);

            var a = args[0].Number;

            return [VoxValue.Create(Math.Cos(a))];
        }));

        mathTable.Set(VoxValue.Create("tan"), VoxValue.Create(args =>
        {
            if (args.Length != 1) throw new Exception("Expected 1 argument, got " + args.Length);

            var a = args[0].Number;

            return [VoxValue.Create(Math.Tan(a))];
        }));

        mathTable.Set(VoxValue.Create("asin"), VoxValue.Create(args =>
        {
            if (args.Length != 1) throw new Exception("Expected 1 argument, got " + args.Length);

            var a = args[0].Number;

            return [VoxValue.Create(Math.Asin(a))];
        }));

        mathTable.Set(VoxValue.Create("acos"), VoxValue.Create(args =>
        {
            if (args.Length != 1) throw new Exception("Expected 1 argument, got " + args.Length);

            var a = args[0].Number;

            return [VoxValue.Create(Math.Acos(a))];
        }));

        mathTable.Set(VoxValue.Create("atan"), VoxValue.Create(args =>
        {
            if (args.Length != 1) throw new Exception("Expected 1 argument, got " + args.Length);

            var a = args[0].Number;

            return [VoxValue.Create(Math.Atan(a))];
        }));

        mathTable.Set(VoxValue.Create("tanh"), VoxValue.Create(args =>
        {
            if (args.Length != 1) throw new Exception("Expected 1 argument, got " + args.Length);

            var a = args[0].Number;

            return [VoxValue.Create(Math.Tanh(a))];
        }));

        mathTable.Set(VoxValue.Create("asinh"), VoxValue.Create(args =>
        {
            if (args.Length != 1) throw new Exception("Expected 1 argument, got " + args.Length);

            var a = args[0].Number;

            return [VoxValue.Create(Math.Asinh(a))];
        }));

        mathTable.Set(VoxValue.Create("acosh"), VoxValue.Create(args =>
        {
            if (args.Length != 1) throw new Exception("Expected 1 argument, got " + args.Length);

            var a = args[0].Number;

            return [VoxValue.Create(Math.Acosh(a))];
        }));
        
        mathTable.Set(VoxValue.Create("randomNumber"), VoxValue.Create(args =>
        {
            if (args.Length == 0)
            {
                return [VoxValue.Create(Random.Shared.NextDouble())];
            }
            if (args.Length == 2)
            {
                var min = args[0].Number;
                var max = args[1].Number;
                
                return [VoxValue.Create(Random.Shared.NextDouble() * (max - min) + min)];
            }
            throw new Exception("Expected either 0 or 2 arguments, got " + args.Length);
        }));
        
        mathTable.Set(VoxValue.Create("randomInt"), VoxValue.Create(args =>
        {
            if (args.Length == 0)
            {
                return [VoxValue.Create(Random.Shared.NextInt64())];
            }
            if (args.Length == 2)
            {
                var min = args[0].Number;
                var max = args[1].Number;
                
                return [VoxValue.Create(Math.Round(Random.Shared.NextInt64() * (max - min) + min))];
            }
            throw new Exception("Expected either 0 or 2 arguments, got " + args.Length);
        }));
        
        mathTable.frozen = true;

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