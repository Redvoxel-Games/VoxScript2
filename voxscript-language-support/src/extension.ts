import * as vscode from "vscode";

let vxsTerminal: vscode.Terminal | undefined;

import { parseVoxScript } from "./diagnostics";

export function activate(context: vscode.ExtensionContext) {

	 const runCommand = vscode.commands.registerCommand(
        "voxscript-language-support.runFile",
        () => {

            const editor = vscode.window.activeTextEditor;

            if (!editor) {
                vscode.window.showErrorMessage(
                    "No file is currently open."
                );
                return;
            }

            const filePath = editor.document.fileName;

            if (!filePath.endsWith(".vxs")) {
                vscode.window.showErrorMessage(
                    "The current file is not a VoxScript file."
                );
                return;
            }

            if (!vxsTerminal) {
                vxsTerminal = vscode.window.createTerminal({
                    name: "VoxScript",
                });
            }

            vxsTerminal.show();

            vxsTerminal.sendText(
                `VxsRun "${filePath}" true`,
                true
            );
        }
    );

    context.subscriptions.push(runCommand);

    const onCloseTerminal = vscode.window.onDidCloseTerminal(
        terminal => {
            if (terminal === vxsTerminal) {
                vxsTerminal = undefined;
            }
        }
    );
    context.subscriptions.push(onCloseTerminal);
	
    const diagnostics =
        vscode.languages.createDiagnosticCollection("VoxScript2");

    function validate(document: vscode.TextDocument) {

        if (document.languageId !== "VoxScript2") {
            return;
        }

        const errors = parseVoxScript(
            document.getText()
        );

        diagnostics.set(
            document.uri,
            errors
        );
    }

    context.subscriptions.push(
        diagnostics
    );

    context.subscriptions.push(
        vscode.workspace.onDidOpenTextDocument(
            validate
        )
    );

    context.subscriptions.push(
        vscode.workspace.onDidChangeTextDocument(
            event => validate(event.document)
        )
    );

    context.subscriptions.push(
        vscode.workspace.onDidCloseTextDocument(
            document => diagnostics.delete(document.uri)
        )
    );

    // Validate documents that were already open.
    for (const document of vscode.workspace.textDocuments) {
        validate(document);
    }
}

export function deactivate() {}