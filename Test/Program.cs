using VoxScript.Compiler;
using VoxScript.Interop;

namespace Test;

using VoxScript.Runtime;

public class UserDataTest
{
    public double X = 3.14159;
    public VoxValue[] someFunc(VoxValue[] arr)
    {
        Console.WriteLine("Got: " + arr.Length);
        
        return [VoxValue.Create(21)];
    }
    
    public UserDataTest2 otherData = new UserDataTest2();
}

public class UserDataTest2
{
    public double Y = 42;
}

class Program
{
    static void Main(string[] args)
    {
        // var thing = Console.ReadLine(); // Halt until input is given

        var source =
            """
            print data.X
            data.X = 2
            print data.X
            
            print data.someFunc("Hi!")
            
            print data.otherData.Y
            data.otherData = overwriteTest
            print data.otherData.Y
            """;

        ScriptGlobals globals = ScriptGlobals.Create()
            .AddMathLibrary()
            .AddTableLibrary()
            .AddStringLibrary()
            .Build();
        
        var dataTest = new UserDataTest();
        
        globals.SetGlobal("data", VoxValue.Create(VxsUserData.Create(dataTest)));
        globals.SetGlobal("overwriteTest", VoxValue.Create(VxsUserData.Create(new UserDataTest2() {Y=-21})));

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