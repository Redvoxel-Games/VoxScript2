using VoxScript.Runtime;

namespace Test.Tests;

public class AssignmentTest() : BasicTest("Variable assign and read")
{
    public override string Source { get; } =
        """
        var x = 1
        return x
        """;

    public override VoxValue[]? ExpectedOutput { get; } = [VoxValue.Create(1)];
    public override bool PrintDetails { get; } = false;
}

public class ArithAssignTest() : BasicTest("Arithmethic assignment")
{
    public override string Source { get; } =
        """
        var x = 1
        x++
        x+=1
        x-=4
        x*=3
        x/=2
        x^=2
        x%=2
        x--
        return x
        """;

    public override VoxValue[]? ExpectedOutput { get; } = [VoxValue.Create(-0.75)];
    public override bool PrintDetails { get; } = false;
}