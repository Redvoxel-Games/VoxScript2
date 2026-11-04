using VoxScript.Runtime;

namespace Test.Tests;

public class IfStatement() : BasicTest("If statement")
{
    public override string Source { get; } =
        """
        var a = true
        var b = 0
        
        if (a) {
            b = 1
        }
        
        return b
        """;

    public override VoxValue[]? ExpectedOutput { get; } = [VoxValue.Create(1)];
    public override bool PrintDetails { get; }
}

public class IfElse() : BasicTest("If-else statement")
{
    public override string Source { get; } =
        """
        var a = false
        var b = 0

        if (a) {
            b = 1
        }
        else {
            b = -1
        }

        return b
        """;

    public override VoxValue[]? ExpectedOutput { get; } = [VoxValue.Create(-1)];
    public override bool PrintDetails { get; }
}