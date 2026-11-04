using VoxScript.Runtime;

namespace Test.Tests;

public class BasicClass() : BasicTest("Define class")
{
    public override string Source { get; } =
        """
        class a {}
        
        return a
        """;

    public override VoxValue[]? ExpectedOutput { get; } = [Null];
    public override bool PrintDetails { get; }
}