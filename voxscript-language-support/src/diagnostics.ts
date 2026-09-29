import {
    Diagnostic,
    DiagnosticSeverity,
    Position,
    Range
} from "vscode";

import {
    ErrorListener,
    Recognizer,
    RecognitionException,
    CharStreams,
    CommonTokenStream
} from "antlr4";

import VoxScriptLexer from "./generated/VoxScriptLexer";
import VoxScriptParser from "./generated/VoxScriptParser";

export class VoxScriptErrorListener implements ErrorListener<unknown> {
    public errors: Diagnostic[] = [];

    syntaxError(
        recognizer: Recognizer<unknown>,
        offendingSymbol: unknown,
        line: number,
        charPositionInLine: number,
        msg: string,
        e: RecognitionException | undefined
    ): void {
        const start = new Position(
            line - 1,
            charPositionInLine
        );

        const end = new Position(
            line - 1,
            charPositionInLine + 1
        );

        this.errors.push(
            new Diagnostic(
                new Range(start, end),
                msg,
                DiagnosticSeverity.Error
            )
        );
    }
}

export function parseVoxScript(source: string): Diagnostic[] {
    const inputStream = CharStreams.fromString(source);

    const lexer = new VoxScriptLexer(inputStream);

    const lexerErrors = new VoxScriptErrorListener();

    lexer.removeErrorListeners();
    lexer.addErrorListener(lexerErrors);

    const tokenStream = new CommonTokenStream(lexer);

    const parser = new VoxScriptParser(tokenStream);

    const parserErrors = new VoxScriptErrorListener();

    parser.removeErrorListeners();
    parser.addErrorListener(parserErrors);

    parser.program();

    return [
        ...lexerErrors.errors,
        ...parserErrors.errors
    ];
}