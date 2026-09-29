using VoxScript.Compiler;
using VoxScript.Interop;
using VoxScript.Runtime;
using ValueType = VoxScript.Runtime.ValueType;

namespace VxsRun;

class Program
{
    static void Main(string[] args)
    {
        if (args.Length == 0)
        {
            Console.WriteLine("No File Provided.\nPress any key to continue...");
            Console.ReadKey();
            return;
        }

        string filePath = args[0];
        
        bool stopImmediately = args.Length > 1 && bool.Parse(args[1]);
        
        Console.WriteLine("Running file: " + filePath + "\n");
        
        string source = File.ReadAllText(filePath);

        ScriptGlobals globals = ScriptGlobals.Create()
            .AddMathLibrary()
            .AddTableLibrary()
            .AddStringLibrary()
            .Build();
        
        var runtime = new VxsRuntime(globals);
        
        globals.SetGlobal("require", VoxValue.Create(args =>
        {
            if (args.Length == 0) throw new Exception("No path provided.");
            
            var pathVal = args[0];
            
            if (pathVal.Type != ValueType.String) throw new Exception("Invalid path provided.");
            
            var path = pathVal.ToString();

            string finalPath;
            if (path.StartsWith('.'))
            {
                var scriptDirectory = Path.GetDirectoryName(filePath) ?? throw new Exception();
                finalPath = Path.Combine(scriptDirectory, path);
            }
            else
            {
                finalPath = path;
            }

            if (!finalPath.EndsWith(".vxs"))
            {
                finalPath += ".vxs";
            }
            
            string requiredSource = File.ReadAllText(finalPath);
            
            var program = VxsCompiler.CompileScript(requiredSource, globals);
            
            return runtime.RunProgram(program);
        }));
        
        var program = VxsCompiler.CompileScript(source, globals);
        
        var returns = runtime.RunProgram(program);

        if (stopImmediately) return;

        if (returns.Length > 0 && returns[0].Type != ValueType.Null)
        {
            Console.WriteLine("\n---\nScript returned:");

            foreach (var r in returns)
            {
                Console.WriteLine(r.ToString());
            }
        }
        else
        {
            Console.WriteLine("\n---\nScript didn't return anything.");
        }

        Console.WriteLine("Press any key to continue...");
        Console.ReadKey();
    }
}