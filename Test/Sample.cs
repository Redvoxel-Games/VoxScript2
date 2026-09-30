using VoxScript.Compiler;
using VoxScript.Interop;
using VoxScript.Runtime;

namespace Test;

public static class Sample
{
    public static void Run()
    {
        // Source code written in VoxScript2
        var source =
            """
            print "Hello, World!"
            """;

        // Object for containing global values
        var globals = new ScriptGlobals();

        // Compile source code into bytecode instructions
        var program = VxsCompiler.CompileScript(source, globals);
        
        // Run the compiled code
        var runtime = new VxsRuntime(globals);
        runtime.RunProgram(program);
    }
}