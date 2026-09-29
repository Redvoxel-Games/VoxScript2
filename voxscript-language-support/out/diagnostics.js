"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoxScriptErrorListener = void 0;
exports.parseVoxScript = parseVoxScript;
const vscode_1 = require("vscode");
const antlr4_1 = require("antlr4");
const VoxScriptLexer_1 = __importDefault(require("./generated/VoxScriptLexer"));
const VoxScriptParser_1 = __importDefault(require("./generated/VoxScriptParser"));
class VoxScriptErrorListener {
    errors = [];
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        const start = new vscode_1.Position(line - 1, charPositionInLine);
        const end = new vscode_1.Position(line - 1, charPositionInLine + 1);
        this.errors.push(new vscode_1.Diagnostic(new vscode_1.Range(start, end), msg, vscode_1.DiagnosticSeverity.Error));
    }
}
exports.VoxScriptErrorListener = VoxScriptErrorListener;
function parseVoxScript(source) {
    const inputStream = antlr4_1.CharStreams.fromString(source);
    const lexer = new VoxScriptLexer_1.default(inputStream);
    const lexerErrors = new VoxScriptErrorListener();
    lexer.removeErrorListeners();
    lexer.addErrorListener(lexerErrors);
    const tokenStream = new antlr4_1.CommonTokenStream(lexer);
    const parser = new VoxScriptParser_1.default(tokenStream);
    const parserErrors = new VoxScriptErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(parserErrors);
    parser.program();
    return [
        ...lexerErrors.errors,
        ...parserErrors.errors
    ];
}
//# sourceMappingURL=diagnostics.js.map