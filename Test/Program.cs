using VoxScript.Compiler;
using VoxScript.Interop;

namespace Test;

using VoxScript.Runtime;

class Program
{
    static void Main(string[] args)
    {
        // var thing = Console.ReadLine(); // Halt until input is given

        var source =
            """
            var table = {5, 3, 7, 4, 6, 2, 3, 8, 5, 10, 90}
            
            foreach (k, v in table)
            {
                print k==4 || k==2
                if (k == 4 || k == 2)
                {
                    print v
                }
            }
            """;

        var globals = new ScriptGlobals();
        globals.SetGlobal("someFunction", VoxValue.Create(values =>
        {
            string str = values[0].ToString();
            for (var i = 1; i < values.Length; i++)
            {
                str += " " + values[i];
            }
            Console.WriteLine(str);
            return [VoxValue.Null];
        }));

        var program = VxsCompiler.CompileScript(source, globals);

        Console.WriteLine("Constants:");
        for (var i = 0; i < program._constants.Length; i++)
        {
            Console.WriteLine($"{i}: {program._constants[i]}");
        }

        Console.WriteLine("\nInstructions:");
        for (var i=0; i<program._instructions.Length; i++)
        {
            var instruction = program._instructions[i];
            Console.WriteLine($"{i}: " + instruction.OpCode + (instruction.hasOperand ? " " + instruction.Operand : ""));
        }
        
        Console.WriteLine("\nRunning program:\n");
        
        var runtime = new VxsRuntime(globals);
        runtime.RunProgram(program);
    }
}