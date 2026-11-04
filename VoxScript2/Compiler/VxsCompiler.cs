using Antlr4.Runtime;
using VoxScript.Interop;
using VoxScript.Runtime;

namespace VoxScript.Compiler;

public static class VxsCompiler
{
    public static VxsProgram CompileScript(string source, VxsRuntime runtime)
    {
        var inputStream = new AntlrInputStream(source);

        var lexer = new VoxScriptLexer(inputStream);
        var tokenStream = new CommonTokenStream(lexer);

        var parser = new VoxScriptParser(tokenStream);

        var tree = parser.program();
        
        var builder = new VxsBuilder(runtime);
        
        return builder.Build(tree);
    }
}