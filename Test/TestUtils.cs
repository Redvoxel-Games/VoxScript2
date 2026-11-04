using VoxScript.Compiler;
using VoxScript.Runtime;

namespace Test;

public enum TestResultType
{
    Success,
    Failure,
    Error,
}

public class TestResult(TestResultType result, string? note = null)
{
    public readonly TestResultType Result = result;
    public readonly string? Note = note;
    
    public override string ToString()
    {
        var note = Note == null ? "" : $" | {Note}";
        return $"{Result}{note}";
    }
}

public abstract class Test(string name)
{
    public readonly string Name = name;

    public static VxsRuntime BasicRuntime;

    protected VxsRuntime Runtime;

    protected void UseRuntime(VxsRuntime runtime)
    {
        Runtime = runtime;
    }

    protected void UseBasicRuntime()
    {
        Runtime = BasicRuntime;
    }

    protected VxsProgram CreateProgram(string source)
    {
        return VxsCompiler.CompileScript(source, Runtime);
    }

    protected VoxValue[] RunProgram(VxsProgram program)
    {
        return Runtime.RunProgram(program);
    }
    
    public abstract TestResult Execute();
}

public abstract class BasicTest(string name) : Test(name)
{
    public abstract string Source { get; }
    public abstract VoxValue[]? ExpectedOutput { get; }
    public abstract bool PrintDetails { get; }
    
    public override TestResult Execute()
    {
        UseBasicRuntime();
        
        var program = CreateProgram(Source);

        if (PrintDetails)
        {
            Console.WriteLine("\n\nTest details:");
            foreach (var instr in program.Instructions)
            {
                Console.WriteLine($"{instr.OpCode} {instr.Operand} {instr.Secondary}");
            }
            Console.Write("\n");
        }

        VoxValue[]? output = null;
        
        try
        {
            output = RunProgram(program);
        }
        catch(Exception e)
        {
            return new(TestResultType.Error, e.Message);
        }

        if (ExpectedOutput == null)
        {
            return new(TestResultType.Success);
        }
        else
        {
            if (output == null)
            {
                return new(TestResultType.Failure, "Expected output");
            }
            var total = ExpectedOutput.Length;
            var got = output.Length;

            if (got == 1 && output[0].IsNull)
            {
                got = 0;
            }

            var matching = 0;
            for (var i = 0; i < got; i++)
            {
                if (output[i].Equals(ExpectedOutput[i]) || ExpectedOutput[i].IsNull)
                {
                    matching++;
                }
            }
            
            return new(matching == total ? TestResultType.Success : TestResultType.Failure, $"{matching}/{total} matching, missing {total-got} outputs");
        }
    }
}