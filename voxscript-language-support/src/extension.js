"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __importStar(require("vscode"));
const antlr4_1 = require("antlr4");
const VoxScriptLexer_1 = __importDefault(require("./generated/VoxScriptLexer"));
const VoxScriptParser_1 = __importDefault(require("./generated/VoxScriptParser"));
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    const diagnostics = vscode.languages.createDiagnosticCollection("mylanguage");
    function checkDocument(document) {
        if (document.languageId !== "mylanguage") {
            return;
        }
        const input = antlr4_1.CharStreams.fromString(document.getText());
        const lexer = new VoxScriptLexer_1.default(input);
        const tokens = new antlr4_1.CommonTokenStream(lexer);
        const parser = new VoxScriptParser_1.default(tokens);
        parser.removeParseListeners();
        const errors = [];
        // We'll attach a custom ANTLR error listener here.
        parser.program();
        diagnostics.set(document.uri, errors);
    }
    context.subscriptions.push(vscode.workspace.onDidOpenTextDocument(checkDocument));
    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument(event => {
        checkDocument(event.document);
    }));
    context.subscriptions.push(diagnostics);
}
// This method is called when your extension is deactivated
function deactivate() { }
//# sourceMappingURL=extension.js.map