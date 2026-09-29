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
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
let vxsTerminal;
const diagnostics_1 = require("./diagnostics");
function activate(context) {
    const runCommand = vscode.commands.registerCommand("voxscript-language-support.runFile", () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage("No file is currently open.");
            return;
        }
        const filePath = editor.document.fileName;
        if (!filePath.endsWith(".vxs")) {
            vscode.window.showErrorMessage("The current file is not a VoxScript file.");
            return;
        }
        if (!vxsTerminal) {
            vxsTerminal = vscode.window.createTerminal({
                name: "VoxScript",
            });
        }
        vxsTerminal.show();
        vxsTerminal.sendText(`VxsRun "${filePath}" true`, true);
    });
    context.subscriptions.push(runCommand);
    const onCloseTerminal = vscode.window.onDidCloseTerminal(terminal => {
        if (terminal === vxsTerminal) {
            vxsTerminal = undefined;
        }
    });
    context.subscriptions.push(onCloseTerminal);
    const diagnostics = vscode.languages.createDiagnosticCollection("VoxScript2");
    function validate(document) {
        if (document.languageId !== "VoxScript2") {
            return;
        }
        const errors = (0, diagnostics_1.parseVoxScript)(document.getText());
        diagnostics.set(document.uri, errors);
    }
    context.subscriptions.push(diagnostics);
    context.subscriptions.push(vscode.workspace.onDidOpenTextDocument(validate));
    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument(event => validate(event.document)));
    context.subscriptions.push(vscode.workspace.onDidCloseTextDocument(document => diagnostics.delete(document.uri)));
    // Validate documents that were already open.
    for (const document of vscode.workspace.textDocuments) {
        validate(document);
    }
}
function deactivate() { }
//# sourceMappingURL=extension.js.map