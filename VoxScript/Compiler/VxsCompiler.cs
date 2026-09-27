using Antlr4.Runtime;
using VoxScript.Interop;

namespace VoxScript.Compiler;

public static class VxsCompiler
{
    public static VxsProgram CompileScript(string source, ScriptGlobals globals)
    {
        var inputStream = new AntlrInputStream(source);

        var lexer = new VoxScriptLexer(inputStream);
        var tokenStream = new CommonTokenStream(lexer);

        var parser = new VoxScriptParser(tokenStream);

        var tree = parser.program();
        
        var builder = new VxsBuilder(globals);
        
        return builder.Build(tree);
    }
}