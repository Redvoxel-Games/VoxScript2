using VoxScript.Runtime;

namespace Test.Tests;

public class CreateTable() : BasicTest("Create table")
{
    public override string Source { get; } =
        """
        var tbl = {
            a = 3
        }
        return tbl
        """;

    public override VoxValue[]? ExpectedOutput { get; } = [VoxValue.Null];
    public override bool PrintDetails { get; } = false;
}

public class TableRead() : BasicTest("Read table")
{
    public override string Source { get; } =
        """
        var tbl = {
            a = 3
        }
        return tbl.a
        """;

    public override VoxValue[]? ExpectedOutput { get; } = [VoxValue.Create(3)];
    public override bool PrintDetails { get; } = false;
}

public class TableWrite() : BasicTest("Write table")
{
    public override string Source { get; } =
        """
        var tbl = {
            a = 3
        }
        tbl.a = 4
        return tbl.a
        """;

    public override VoxValue[]? ExpectedOutput { get; } = [VoxValue.Create(4)];
    public override bool PrintDetails { get; } = false;
}

public class TableClone() : BasicTest("Clone table")
{
    public override string Source { get; } =
        """
        var tbl = {
            a = 1
        }
        
        var clone = tbl
        clone.a = 2
        
        return tbl.a, clone.a
        """;

    public override VoxValue[]? ExpectedOutput { get; } = [VoxValue.Create(1), VoxValue.Create(2)];
    public override bool PrintDetails { get; }
}