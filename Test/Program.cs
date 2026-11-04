using System.Reflection;
using VoxScript.Compiler;
using VoxScript.Interop;

namespace Test;

using VoxScript.Runtime;

class Program
{
    static void Main(string[] args)
    {
        ScriptGlobals globals = ScriptGlobals.Create()
            .AddMathLibrary()
            .AddTableLibrary()
            .AddStringLibrary()
            .Build();
        
        VxsRuntime runtime = new VxsRuntime(globals);
        runtime.OnPrint += (value, thread) =>
        {
            Console.WriteLine(value.AsString(thread));
        };
        Test.BasicRuntime = runtime;

        var testType = typeof(Test);
        var assembly = Assembly.GetExecutingAssembly();

        List<Test> tests = [];
        
        foreach (var type in assembly.GetTypes())
        {
            if (type.IsSubclassOf(testType) && !type.IsAbstract)
            {
                var test = (Test)Activator.CreateInstance(type)!;
                tests.Add(test);
            }
        }
        
        Console.WriteLine($"Running tests... ({tests.Count} total)");

        int errors = 0;
        int failures = 0;
        int successes = 0;
        foreach (var test in tests)
        {
            Console.Write($"Running test '{test.Name}'...");
            var result = test.Execute();
            Console.Write($" {result}\n");

            switch (result.Result)
            {
                case TestResultType.Success: successes++; break;
                case TestResultType.Failure: failures++;  break;
                case TestResultType.Error:   errors++;    break;
            }
        }
        
        Console.WriteLine("Tests complete!");
        Console.WriteLine($"{successes} successes, {failures} failures, {errors} errors.");
    }
}