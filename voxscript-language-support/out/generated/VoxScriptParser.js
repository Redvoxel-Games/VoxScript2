"use strict";
// Generated from VoxScript.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
Object.defineProperty(exports, "__esModule", { value: true });
exports.Var_instContext = exports.Function_paramsContext = exports.Function_postfixContext = exports.Expression_postfixContext = exports.Id_postfixContext = exports.PostfixContext = exports.IdentifierContext = exports.LambdaContext = exports.Table_keyContext = exports.Table_memberContext = exports.Table_member_listContext = exports.Table_member_dictContext = exports.Table_definitionContext = exports.ExpressionContext = exports.Type_annotationContext = exports.Cont_elseContext = exports.Cont_ifContext = exports.Cont_breakContext = exports.Cont_continueContext = exports.Cont_returnContext = exports.Cont_foreachContext = exports.Cont_forContext = exports.Cont_whileContext = exports.Func_callContext = exports.Func_defineContext = exports.Val_incrementContext = exports.Arith_assignContext = exports.Val_assignContext = exports.Var_defineContext = exports.PrintContext = exports.StatementContext = exports.BlockContext = exports.ProgramContext = void 0;
const antlr4_1 = require("antlr4");
class VoxScriptParser extends antlr4_1.Parser {
    static T__0 = 1;
    static T__1 = 2;
    static T__2 = 3;
    static T__3 = 4;
    static T__4 = 5;
    static T__5 = 6;
    static T__6 = 7;
    static T__7 = 8;
    static VAR = 9;
    static FUNC = 10;
    static FOR = 11;
    static FOREACH = 12;
    static WHILE = 13;
    static IN = 14;
    static CONTINUE = 15;
    static BREAK = 16;
    static IF = 17;
    static ELSE = 18;
    static NUMBER = 19;
    static STRING = 20;
    static BOOLEAN = 21;
    static NULL = 22;
    static TUPLE = 23;
    static TRUE = 24;
    static FALSE = 25;
    static ID = 26;
    static DISCARD = 27;
    static SEMICOLON = 28;
    static COLON = 29;
    static EXCLAMATION = 30;
    static QUOTATION = 31;
    static LEFT_PAREN = 32;
    static RIGHT_PAREN = 33;
    static LEFT_BRACE = 34;
    static RIGHT_BRACE = 35;
    static LEFT_CURLY = 36;
    static RIGHT_CURLY = 37;
    static UNARY = 38;
    static MUL_DIV = 39;
    static ADD_SUB = 40;
    static COMPARE = 41;
    static ASSIGNMENT = 42;
    static WS = 43;
    static LINE_COMMENT = 44;
    static MULTILINE_COMMENT = 45;
    static INCREMENT = 46;
    static DECREMENT = 47;
    static ADD_DIRECT = 48;
    static SUB_DIRECT = 49;
    static MULT_DIRECT = 50;
    static DIV_DIRECT = 51;
    static EXPO_DIRECT = 52;
    static MOD_DIRECT = 53;
    static COND_EQUAL = 54;
    static COND_NOTEQUAL = 55;
    static COND_GREATERTHAN = 56;
    static COND_LESSTHAN = 57;
    static COND_GREATEROREQUAL = 58;
    static COND_LESSOREQUAL = 59;
    static COND_AND = 60;
    static COND_NAND = 61;
    static COND_OR = 62;
    static COND_NOR = 63;
    static COND_XOR = 64;
    static EOF = antlr4_1.Token.EOF;
    static RULE_program = 0;
    static RULE_block = 1;
    static RULE_statement = 2;
    static RULE_print = 3;
    static RULE_var_define = 4;
    static RULE_val_assign = 5;
    static RULE_arith_assign = 6;
    static RULE_val_increment = 7;
    static RULE_func_define = 8;
    static RULE_func_call = 9;
    static RULE_cont_while = 10;
    static RULE_cont_for = 11;
    static RULE_cont_foreach = 12;
    static RULE_cont_return = 13;
    static RULE_cont_continue = 14;
    static RULE_cont_break = 15;
    static RULE_cont_if = 16;
    static RULE_cont_else = 17;
    static RULE_type_annotation = 18;
    static RULE_expression = 19;
    static RULE_table_definition = 20;
    static RULE_table_member_dict = 21;
    static RULE_table_member_list = 22;
    static RULE_table_member = 23;
    static RULE_table_key = 24;
    static RULE_lambda = 25;
    static RULE_identifier = 26;
    static RULE_postfix = 27;
    static RULE_id_postfix = 28;
    static RULE_expression_postfix = 29;
    static RULE_function_postfix = 30;
    static RULE_function_params = 31;
    static RULE_var_inst = 32;
    static literalNames = [null, "'print'",
        "','", "'='",
        "'return'",
        "'^'", "'?'",
        "'->'", "'.'",
        "'var'", "'func'",
        "'for'", "'foreach'",
        "'while'", "'in'",
        "'continue'",
        "'break'", "'if'",
        "'else'", null,
        null, null,
        "'null'", "'...'",
        "'true'", "'false'",
        null, "'_'",
        "';'", "':'",
        "'!'", "'\"'",
        "'('", "')'",
        "'['", "']'",
        "'{'", "'}'",
        null, null,
        null, null,
        null, null,
        null, null,
        "'++'", "'--'",
        "'+='", "'-='",
        "'*='", "'/='",
        "'^='", "'%='",
        "'=='", "'!='",
        "'>'", "'<'",
        "'>='", "'<='",
        "'&&'", "'!&'",
        "'||'", "'!|'",
        "'#|'"];
    static symbolicNames = [null, null,
        null, null,
        null, null,
        null, null,
        null, "VAR",
        "FUNC", "FOR",
        "FOREACH",
        "WHILE", "IN",
        "CONTINUE",
        "BREAK", "IF",
        "ELSE", "NUMBER",
        "STRING", "BOOLEAN",
        "NULL", "TUPLE",
        "TRUE", "FALSE",
        "ID", "DISCARD",
        "SEMICOLON",
        "COLON", "EXCLAMATION",
        "QUOTATION",
        "LEFT_PAREN",
        "RIGHT_PAREN",
        "LEFT_BRACE",
        "RIGHT_BRACE",
        "LEFT_CURLY",
        "RIGHT_CURLY",
        "UNARY", "MUL_DIV",
        "ADD_SUB",
        "COMPARE",
        "ASSIGNMENT",
        "WS", "LINE_COMMENT",
        "MULTILINE_COMMENT",
        "INCREMENT",
        "DECREMENT",
        "ADD_DIRECT",
        "SUB_DIRECT",
        "MULT_DIRECT",
        "DIV_DIRECT",
        "EXPO_DIRECT",
        "MOD_DIRECT",
        "COND_EQUAL",
        "COND_NOTEQUAL",
        "COND_GREATERTHAN",
        "COND_LESSTHAN",
        "COND_GREATEROREQUAL",
        "COND_LESSOREQUAL",
        "COND_AND",
        "COND_NAND",
        "COND_OR",
        "COND_NOR",
        "COND_XOR"];
    // tslint:disable:no-trailing-whitespace
    static ruleNames = [
        "program", "block", "statement", "print", "var_define", "val_assign",
        "arith_assign", "val_increment", "func_define", "func_call", "cont_while",
        "cont_for", "cont_foreach", "cont_return", "cont_continue", "cont_break",
        "cont_if", "cont_else", "type_annotation", "expression", "table_definition",
        "table_member_dict", "table_member_list", "table_member", "table_key",
        "lambda", "identifier", "postfix", "id_postfix", "expression_postfix",
        "function_postfix", "function_params", "var_inst",
    ];
    get grammarFileName() { return "VoxScript.g4"; }
    get literalNames() { return VoxScriptParser.literalNames; }
    get symbolicNames() { return VoxScriptParser.symbolicNames; }
    get ruleNames() { return VoxScriptParser.ruleNames; }
    get serializedATN() { return VoxScriptParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new antlr4_1.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new antlr4_1.ParserATNSimulator(this, VoxScriptParser._ATN, VoxScriptParser.DecisionsToDFA, new antlr4_1.PredictionContextCache());
    }
    // @RuleVersion(0)
    program() {
        let localctx = new ProgramContext(this, this._ctx, this.state);
        this.enterRule(localctx, 0, VoxScriptParser.RULE_program);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 66;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    block() {
        let localctx = new BlockContext(this, this._ctx, this.state);
        this.enterRule(localctx, 2, VoxScriptParser.RULE_block);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 74;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67354130) !== 0)) {
                    {
                        {
                            this.state = 68;
                            this.statement();
                            this.state = 70;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === 28) {
                                {
                                    this.state = 69;
                                    this.match(VoxScriptParser.SEMICOLON);
                                }
                            }
                        }
                    }
                    this.state = 76;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    statement() {
        let localctx = new StatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 4, VoxScriptParser.RULE_statement);
        try {
            this.state = 91;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 77;
                        this.var_define();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 78;
                        this.val_assign();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 79;
                        this.arith_assign();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 80;
                        this.val_increment();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 81;
                        this.func_call();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 82;
                        this.func_define();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localctx, 7);
                    {
                        this.state = 83;
                        this.cont_return();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localctx, 8);
                    {
                        this.state = 84;
                        this.cont_continue();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(localctx, 9);
                    {
                        this.state = 85;
                        this.cont_break();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(localctx, 10);
                    {
                        this.state = 86;
                        this.cont_while();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(localctx, 11);
                    {
                        this.state = 87;
                        this.cont_for();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(localctx, 12);
                    {
                        this.state = 88;
                        this.cont_foreach();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(localctx, 13);
                    {
                        this.state = 89;
                        this.cont_if();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(localctx, 14);
                    {
                        this.state = 90;
                        this.print();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    print() {
        let localctx = new PrintContext(this, this._ctx, this.state);
        this.enterRule(localctx, 6, VoxScriptParser.RULE_print);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 93;
                this.match(VoxScriptParser.T__0);
                this.state = 94;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    var_define() {
        let localctx = new Var_defineContext(this, this._ctx, this.state);
        this.enterRule(localctx, 8, VoxScriptParser.RULE_var_define);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 96;
                this.match(VoxScriptParser.VAR);
                this.state = 97;
                this.var_inst();
                this.state = 102;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 2) {
                    {
                        {
                            this.state = 98;
                            this.match(VoxScriptParser.T__1);
                            this.state = 99;
                            this.var_inst();
                        }
                    }
                    this.state = 104;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 105;
                this.match(VoxScriptParser.T__2);
                this.state = 106;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    val_assign() {
        let localctx = new Val_assignContext(this, this._ctx, this.state);
        this.enterRule(localctx, 10, VoxScriptParser.RULE_val_assign);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 108;
                this.identifier();
                this.state = 109;
                this.match(VoxScriptParser.T__2);
                this.state = 110;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    arith_assign() {
        let localctx = new Arith_assignContext(this, this._ctx, this.state);
        this.enterRule(localctx, 12, VoxScriptParser.RULE_arith_assign);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 112;
                this.identifier();
                this.state = 113;
                this.match(VoxScriptParser.ASSIGNMENT);
                this.state = 114;
                this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    val_increment() {
        let localctx = new Val_incrementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 14, VoxScriptParser.RULE_val_increment);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 116;
                this.identifier();
                this.state = 117;
                _la = this._input.LA(1);
                if (!(_la === 46 || _la === 47)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    func_define() {
        let localctx = new Func_defineContext(this, this._ctx, this.state);
        this.enterRule(localctx, 16, VoxScriptParser.RULE_func_define);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 119;
                this.match(VoxScriptParser.FUNC);
                this.state = 120;
                this.match(VoxScriptParser.ID);
                this.state = 121;
                this.function_params();
                this.state = 123;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 29) {
                    {
                        this.state = 122;
                        this.type_annotation();
                    }
                }
                this.state = 125;
                this.match(VoxScriptParser.LEFT_CURLY);
                this.state = 126;
                this.block();
                this.state = 127;
                this.match(VoxScriptParser.RIGHT_CURLY);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    func_call() {
        let localctx = new Func_callContext(this, this._ctx, this.state);
        this.enterRule(localctx, 18, VoxScriptParser.RULE_func_call);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 129;
                this.identifier();
                this.state = 130;
                this.function_postfix();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    cont_while() {
        let localctx = new Cont_whileContext(this, this._ctx, this.state);
        this.enterRule(localctx, 20, VoxScriptParser.RULE_cont_while);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 132;
                this.match(VoxScriptParser.WHILE);
                this.state = 133;
                this.match(VoxScriptParser.LEFT_PAREN);
                this.state = 134;
                this.expression(0);
                this.state = 135;
                this.match(VoxScriptParser.RIGHT_PAREN);
                this.state = 136;
                this.match(VoxScriptParser.LEFT_CURLY);
                this.state = 137;
                this.block();
                this.state = 138;
                this.match(VoxScriptParser.RIGHT_CURLY);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    cont_for() {
        let localctx = new Cont_forContext(this, this._ctx, this.state);
        this.enterRule(localctx, 22, VoxScriptParser.RULE_cont_for);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 140;
                this.match(VoxScriptParser.FOR);
                this.state = 141;
                this.match(VoxScriptParser.LEFT_PAREN);
                this.state = 142;
                this.match(VoxScriptParser.ID);
                this.state = 143;
                this.match(VoxScriptParser.T__2);
                this.state = 144;
                this.expression(0);
                this.state = 145;
                this.match(VoxScriptParser.T__1);
                this.state = 146;
                this.expression(0);
                this.state = 147;
                this.match(VoxScriptParser.T__1);
                this.state = 148;
                this.expression(0);
                this.state = 149;
                this.match(VoxScriptParser.RIGHT_PAREN);
                this.state = 150;
                this.match(VoxScriptParser.LEFT_CURLY);
                this.state = 151;
                this.block();
                this.state = 152;
                this.match(VoxScriptParser.RIGHT_CURLY);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    cont_foreach() {
        let localctx = new Cont_foreachContext(this, this._ctx, this.state);
        this.enterRule(localctx, 24, VoxScriptParser.RULE_cont_foreach);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 154;
                this.match(VoxScriptParser.FOREACH);
                this.state = 155;
                this.match(VoxScriptParser.LEFT_PAREN);
                this.state = 156;
                this.var_inst();
                this.state = 157;
                this.match(VoxScriptParser.T__1);
                this.state = 158;
                this.var_inst();
                this.state = 159;
                this.match(VoxScriptParser.IN);
                this.state = 160;
                this.expression(0);
                this.state = 161;
                this.match(VoxScriptParser.RIGHT_PAREN);
                this.state = 162;
                this.match(VoxScriptParser.LEFT_CURLY);
                this.state = 163;
                this.block();
                this.state = 164;
                this.match(VoxScriptParser.RIGHT_CURLY);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    cont_return() {
        let localctx = new Cont_returnContext(this, this._ctx, this.state);
        this.enterRule(localctx, 26, VoxScriptParser.RULE_cont_return);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 166;
                this.match(VoxScriptParser.T__3);
                this.state = 175;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 6, this._ctx)) {
                    case 1:
                        {
                            this.state = 167;
                            this.expression(0);
                            this.state = 172;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
                            while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 168;
                                            this.match(VoxScriptParser.T__1);
                                            this.state = 169;
                                            this.expression(0);
                                        }
                                    }
                                }
                                this.state = 174;
                                this._errHandler.sync(this);
                                _alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
                            }
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    cont_continue() {
        let localctx = new Cont_continueContext(this, this._ctx, this.state);
        this.enterRule(localctx, 28, VoxScriptParser.RULE_cont_continue);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 177;
                this.match(VoxScriptParser.CONTINUE);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    cont_break() {
        let localctx = new Cont_breakContext(this, this._ctx, this.state);
        this.enterRule(localctx, 30, VoxScriptParser.RULE_cont_break);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 179;
                this.match(VoxScriptParser.BREAK);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    cont_if() {
        let localctx = new Cont_ifContext(this, this._ctx, this.state);
        this.enterRule(localctx, 32, VoxScriptParser.RULE_cont_if);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 181;
                this.match(VoxScriptParser.IF);
                this.state = 182;
                this.match(VoxScriptParser.LEFT_PAREN);
                this.state = 183;
                this.expression(0);
                this.state = 184;
                this.match(VoxScriptParser.RIGHT_PAREN);
                this.state = 190;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 1:
                    case 4:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 15:
                    case 16:
                    case 17:
                    case 26:
                        {
                            this.state = 185;
                            this.statement();
                        }
                        break;
                    case 36:
                        {
                            this.state = 186;
                            this.match(VoxScriptParser.LEFT_CURLY);
                            this.state = 187;
                            this.block();
                            this.state = 188;
                            this.match(VoxScriptParser.RIGHT_CURLY);
                        }
                        break;
                    default:
                        throw new antlr4_1.NoViableAltException(this);
                }
                this.state = 193;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 8, this._ctx)) {
                    case 1:
                        {
                            this.state = 192;
                            this.cont_else();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    cont_else() {
        let localctx = new Cont_elseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 34, VoxScriptParser.RULE_cont_else);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 195;
                this.match(VoxScriptParser.ELSE);
                this.state = 201;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 1:
                    case 4:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 15:
                    case 16:
                    case 17:
                    case 26:
                        {
                            this.state = 196;
                            this.statement();
                        }
                        break;
                    case 36:
                        {
                            this.state = 197;
                            this.match(VoxScriptParser.LEFT_CURLY);
                            this.state = 198;
                            this.block();
                            this.state = 199;
                            this.match(VoxScriptParser.RIGHT_CURLY);
                        }
                        break;
                    default:
                        throw new antlr4_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    type_annotation() {
        let localctx = new Type_annotationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 36, VoxScriptParser.RULE_type_annotation);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 203;
                this.match(VoxScriptParser.COLON);
                this.state = 204;
                this.match(VoxScriptParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    expression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let localctx = new ExpressionContext(this, this._ctx, _parentState);
        let _prevctx = localctx;
        let _startState = 38;
        this.enterRecursionRule(localctx, 38, VoxScriptParser.RULE_expression, _p);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 221;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 10, this._ctx)) {
                    case 1:
                        {
                            this.state = 207;
                            this.match(VoxScriptParser.LEFT_PAREN);
                            this.state = 208;
                            localctx._paren = this.expression(0);
                            this.state = 209;
                            this.match(VoxScriptParser.RIGHT_PAREN);
                        }
                        break;
                    case 2:
                        {
                            this.state = 211;
                            localctx._unary = this.match(VoxScriptParser.UNARY);
                            this.state = 212;
                            localctx._expr = this.expression(19);
                        }
                        break;
                    case 3:
                        {
                            this.state = 213;
                            this.match(VoxScriptParser.NUMBER);
                        }
                        break;
                    case 4:
                        {
                            this.state = 214;
                            this.match(VoxScriptParser.STRING);
                        }
                        break;
                    case 5:
                        {
                            this.state = 215;
                            this.match(VoxScriptParser.BOOLEAN);
                        }
                        break;
                    case 6:
                        {
                            this.state = 216;
                            this.match(VoxScriptParser.NULL);
                        }
                        break;
                    case 7:
                        {
                            this.state = 217;
                            this.table_definition();
                        }
                        break;
                    case 8:
                        {
                            this.state = 218;
                            this.func_call();
                        }
                        break;
                    case 9:
                        {
                            this.state = 219;
                            this.identifier();
                        }
                        break;
                    case 10:
                        {
                            this.state = 220;
                            this.lambda();
                        }
                        break;
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 258;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 256;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 11, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                                        localctx._left = _prevctx;
                                        this.pushNewRecursionContext(localctx, _startState, VoxScriptParser.RULE_expression);
                                        this.state = 223;
                                        if (!(this.precpred(this._ctx, 18))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
                                        }
                                        this.state = 224;
                                        localctx._op = this.match(VoxScriptParser.T__4);
                                        this.state = 225;
                                        localctx._right = this.expression(19);
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                                        localctx._left = _prevctx;
                                        this.pushNewRecursionContext(localctx, _startState, VoxScriptParser.RULE_expression);
                                        this.state = 226;
                                        if (!(this.precpred(this._ctx, 17))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
                                        }
                                        this.state = 227;
                                        localctx._op = this.match(VoxScriptParser.MUL_DIV);
                                        this.state = 228;
                                        localctx._right = this.expression(18);
                                    }
                                    break;
                                case 3:
                                    {
                                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                                        localctx._left = _prevctx;
                                        this.pushNewRecursionContext(localctx, _startState, VoxScriptParser.RULE_expression);
                                        this.state = 229;
                                        if (!(this.precpred(this._ctx, 16))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
                                        }
                                        this.state = 230;
                                        localctx._op = this.match(VoxScriptParser.ADD_SUB);
                                        this.state = 231;
                                        localctx._right = this.expression(17);
                                    }
                                    break;
                                case 4:
                                    {
                                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                                        localctx._left = _prevctx;
                                        this.pushNewRecursionContext(localctx, _startState, VoxScriptParser.RULE_expression);
                                        this.state = 232;
                                        if (!(this.precpred(this._ctx, 15))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
                                        }
                                        this.state = 233;
                                        localctx._op = this.match(VoxScriptParser.COMPARE);
                                        this.state = 234;
                                        localctx._right = this.expression(16);
                                    }
                                    break;
                                case 5:
                                    {
                                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                                        localctx._left = _prevctx;
                                        this.pushNewRecursionContext(localctx, _startState, VoxScriptParser.RULE_expression);
                                        this.state = 235;
                                        if (!(this.precpred(this._ctx, 14))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
                                        }
                                        this.state = 236;
                                        localctx._op = this.match(VoxScriptParser.COND_AND);
                                        this.state = 237;
                                        localctx._right = this.expression(15);
                                    }
                                    break;
                                case 6:
                                    {
                                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                                        localctx._left = _prevctx;
                                        this.pushNewRecursionContext(localctx, _startState, VoxScriptParser.RULE_expression);
                                        this.state = 238;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 239;
                                        localctx._op = this.match(VoxScriptParser.COND_NAND);
                                        this.state = 240;
                                        localctx._right = this.expression(14);
                                    }
                                    break;
                                case 7:
                                    {
                                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                                        localctx._left = _prevctx;
                                        this.pushNewRecursionContext(localctx, _startState, VoxScriptParser.RULE_expression);
                                        this.state = 241;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 242;
                                        localctx._op = this.match(VoxScriptParser.COND_OR);
                                        this.state = 243;
                                        localctx._right = this.expression(13);
                                    }
                                    break;
                                case 8:
                                    {
                                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                                        localctx._left = _prevctx;
                                        this.pushNewRecursionContext(localctx, _startState, VoxScriptParser.RULE_expression);
                                        this.state = 244;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 245;
                                        localctx._op = this.match(VoxScriptParser.COND_NOR);
                                        this.state = 246;
                                        localctx._right = this.expression(12);
                                    }
                                    break;
                                case 9:
                                    {
                                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                                        localctx._left = _prevctx;
                                        this.pushNewRecursionContext(localctx, _startState, VoxScriptParser.RULE_expression);
                                        this.state = 247;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 248;
                                        localctx._op = this.match(VoxScriptParser.COND_XOR);
                                        this.state = 249;
                                        localctx._right = this.expression(11);
                                    }
                                    break;
                                case 10:
                                    {
                                        localctx = new ExpressionContext(this, _parentctx, _parentState);
                                        localctx._condition = _prevctx;
                                        this.pushNewRecursionContext(localctx, _startState, VoxScriptParser.RULE_expression);
                                        this.state = 250;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 251;
                                        this.match(VoxScriptParser.T__5);
                                        this.state = 252;
                                        localctx._primary = this.expression(0);
                                        this.state = 253;
                                        this.match(VoxScriptParser.COLON);
                                        this.state = 254;
                                        localctx._secondary = this.expression(10);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 260;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }
    // @RuleVersion(0)
    table_definition() {
        let localctx = new Table_definitionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 40, VoxScriptParser.RULE_table_definition);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 261;
                this.match(VoxScriptParser.LEFT_CURLY);
                this.state = 264;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 13, this._ctx)) {
                    case 1:
                        {
                            this.state = 262;
                            this.table_member_dict();
                        }
                        break;
                    case 2:
                        {
                            this.state = 263;
                            this.table_member_list();
                        }
                        break;
                }
                this.state = 266;
                this.match(VoxScriptParser.RIGHT_CURLY);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    table_member_dict() {
        let localctx = new Table_member_dictContext(this, this._ctx, this.state);
        this.enterRule(localctx, 42, VoxScriptParser.RULE_table_member_dict);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 268;
                this.table_member();
                this.state = 273;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 269;
                                this.match(VoxScriptParser.T__1);
                                this.state = 270;
                                this.table_member();
                            }
                        }
                    }
                    this.state = 275;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
                }
                this.state = 277;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 2) {
                    {
                        this.state = 276;
                        this.match(VoxScriptParser.T__1);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    table_member_list() {
        let localctx = new Table_member_listContext(this, this._ctx, this.state);
        this.enterRule(localctx, 44, VoxScriptParser.RULE_table_member_list);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 279;
                this.expression(0);
                this.state = 284;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 280;
                                this.match(VoxScriptParser.T__1);
                                this.state = 281;
                                this.expression(0);
                            }
                        }
                    }
                    this.state = 286;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
                }
                this.state = 288;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 2) {
                    {
                        this.state = 287;
                        this.match(VoxScriptParser.T__1);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    table_member() {
        let localctx = new Table_memberContext(this, this._ctx, this.state);
        this.enterRule(localctx, 46, VoxScriptParser.RULE_table_member);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 290;
                localctx._key = this.table_key();
                this.state = 291;
                this.match(VoxScriptParser.T__2);
                this.state = 292;
                localctx._value = this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    table_key() {
        let localctx = new Table_keyContext(this, this._ctx, this.state);
        this.enterRule(localctx, 48, VoxScriptParser.RULE_table_key);
        try {
            this.state = 296;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 18, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 294;
                        this.match(VoxScriptParser.ID);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 295;
                        this.expression(0);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    lambda() {
        let localctx = new LambdaContext(this, this._ctx, this.state);
        this.enterRule(localctx, 50, VoxScriptParser.RULE_lambda);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 298;
                this.function_params();
                this.state = 299;
                this.match(VoxScriptParser.T__6);
                this.state = 305;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 36:
                        {
                            this.state = 300;
                            this.match(VoxScriptParser.LEFT_CURLY);
                            this.state = 301;
                            this.block();
                            this.state = 302;
                            this.match(VoxScriptParser.RIGHT_CURLY);
                        }
                        break;
                    case 1:
                    case 4:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 15:
                    case 16:
                    case 17:
                    case 26:
                        {
                            this.state = 304;
                            this.statement();
                        }
                        break;
                    default:
                        throw new antlr4_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    identifier() {
        let localctx = new IdentifierContext(this, this._ctx, this.state);
        this.enterRule(localctx, 52, VoxScriptParser.RULE_identifier);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 307;
                this.match(VoxScriptParser.ID);
                this.state = 311;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 308;
                                this.postfix();
                            }
                        }
                    }
                    this.state = 313;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    postfix() {
        let localctx = new PostfixContext(this, this._ctx, this.state);
        this.enterRule(localctx, 54, VoxScriptParser.RULE_postfix);
        try {
            this.state = 317;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 8:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 314;
                        this.id_postfix();
                    }
                    break;
                case 34:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 315;
                        this.expression_postfix();
                    }
                    break;
                case 32:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 316;
                        this.function_postfix();
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    id_postfix() {
        let localctx = new Id_postfixContext(this, this._ctx, this.state);
        this.enterRule(localctx, 56, VoxScriptParser.RULE_id_postfix);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 319;
                this.match(VoxScriptParser.T__7);
                this.state = 320;
                this.match(VoxScriptParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    expression_postfix() {
        let localctx = new Expression_postfixContext(this, this._ctx, this.state);
        this.enterRule(localctx, 58, VoxScriptParser.RULE_expression_postfix);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 322;
                this.match(VoxScriptParser.LEFT_BRACE);
                this.state = 323;
                this.expression(0);
                this.state = 324;
                this.match(VoxScriptParser.RIGHT_BRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    function_postfix() {
        let localctx = new Function_postfixContext(this, this._ctx, this.state);
        this.enterRule(localctx, 60, VoxScriptParser.RULE_function_postfix);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 326;
                this.match(VoxScriptParser.LEFT_PAREN);
                this.state = 335;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 19)) & ~0x1F) === 0 && ((1 << (_la - 19)) & 663695) !== 0)) {
                    {
                        this.state = 327;
                        this.expression(0);
                        this.state = 332;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === 2) {
                            {
                                {
                                    this.state = 328;
                                    this.match(VoxScriptParser.T__1);
                                    this.state = 329;
                                    this.expression(0);
                                }
                            }
                            this.state = 334;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 337;
                this.match(VoxScriptParser.RIGHT_PAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    function_params() {
        let localctx = new Function_paramsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 62, VoxScriptParser.RULE_function_params);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 339;
                this.match(VoxScriptParser.LEFT_PAREN);
                this.state = 348;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 26 || _la === 27) {
                    {
                        this.state = 340;
                        this.var_inst();
                        this.state = 345;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === 2) {
                            {
                                {
                                    this.state = 341;
                                    this.match(VoxScriptParser.T__1);
                                    this.state = 342;
                                    this.var_inst();
                                }
                            }
                            this.state = 347;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 350;
                this.match(VoxScriptParser.RIGHT_PAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    var_inst() {
        let localctx = new Var_instContext(this, this._ctx, this.state);
        this.enterRule(localctx, 64, VoxScriptParser.RULE_var_inst);
        let _la;
        try {
            this.state = 357;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 26:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 352;
                        this.match(VoxScriptParser.ID);
                        this.state = 354;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 29) {
                            {
                                this.state = 353;
                                this.type_annotation();
                            }
                        }
                    }
                    break;
                case 27:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 356;
                        this.match(VoxScriptParser.DISCARD);
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    sempred(localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 19:
                return this.expression_sempred(localctx, predIndex);
        }
        return true;
    }
    expression_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 18);
            case 1:
                return this.precpred(this._ctx, 17);
            case 2:
                return this.precpred(this._ctx, 16);
            case 3:
                return this.precpred(this._ctx, 15);
            case 4:
                return this.precpred(this._ctx, 14);
            case 5:
                return this.precpred(this._ctx, 13);
            case 6:
                return this.precpred(this._ctx, 12);
            case 7:
                return this.precpred(this._ctx, 11);
            case 8:
                return this.precpred(this._ctx, 10);
            case 9:
                return this.precpred(this._ctx, 9);
        }
        return true;
    }
    static _serializedATN = [4, 1, 64, 360, 2, 0, 7, 0, 2,
        1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2,
        10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17,
        7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7,
        24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31,
        2, 32, 7, 32, 1, 0, 1, 0, 1, 1, 1, 1, 3, 1, 71, 8, 1, 5, 1, 73, 8, 1, 10, 1, 12, 1, 76, 9, 1, 1, 2, 1,
        2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 2, 92, 8, 2, 1, 3, 1, 3, 1,
        3, 1, 4, 1, 4, 1, 4, 1, 4, 5, 4, 101, 8, 4, 10, 4, 12, 4, 104, 9, 4, 1, 4, 1, 4, 1, 4, 1, 5, 1, 5, 1, 5,
        1, 5, 1, 6, 1, 6, 1, 6, 1, 6, 1, 7, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 1, 8, 3, 8, 124, 8, 8, 1, 8, 1, 8, 1, 8,
        1, 8, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 11, 1, 11, 1, 11,
        1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 12, 1, 12, 1, 12, 1,
        12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 13, 1, 13, 1, 13, 1, 13, 5, 13, 171,
        8, 13, 10, 13, 12, 13, 174, 9, 13, 3, 13, 176, 8, 13, 1, 14, 1, 14, 1, 15, 1, 15, 1, 16, 1, 16, 1,
        16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 3, 16, 191, 8, 16, 1, 16, 3, 16, 194, 8, 16, 1, 17,
        1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 3, 17, 202, 8, 17, 1, 18, 1, 18, 1, 18, 1, 19, 1, 19, 1, 19, 1,
        19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 3, 19, 222, 8, 19,
        1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1,
        19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19,
        1, 19, 1, 19, 1, 19, 1, 19, 5, 19, 257, 8, 19, 10, 19, 12, 19, 260, 9, 19, 1, 20, 1, 20, 1, 20, 3,
        20, 265, 8, 20, 1, 20, 1, 20, 1, 21, 1, 21, 1, 21, 5, 21, 272, 8, 21, 10, 21, 12, 21, 275, 9, 21,
        1, 21, 3, 21, 278, 8, 21, 1, 22, 1, 22, 1, 22, 5, 22, 283, 8, 22, 10, 22, 12, 22, 286, 9, 22, 1,
        22, 3, 22, 289, 8, 22, 1, 23, 1, 23, 1, 23, 1, 23, 1, 24, 1, 24, 3, 24, 297, 8, 24, 1, 25, 1, 25,
        1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 3, 25, 306, 8, 25, 1, 26, 1, 26, 5, 26, 310, 8, 26, 10, 26, 12,
        26, 313, 9, 26, 1, 27, 1, 27, 1, 27, 3, 27, 318, 8, 27, 1, 28, 1, 28, 1, 28, 1, 29, 1, 29, 1, 29,
        1, 29, 1, 30, 1, 30, 1, 30, 1, 30, 5, 30, 331, 8, 30, 10, 30, 12, 30, 334, 9, 30, 3, 30, 336, 8,
        30, 1, 30, 1, 30, 1, 31, 1, 31, 1, 31, 1, 31, 5, 31, 344, 8, 31, 10, 31, 12, 31, 347, 9, 31, 3, 31,
        349, 8, 31, 1, 31, 1, 31, 1, 32, 1, 32, 3, 32, 355, 8, 32, 1, 32, 3, 32, 358, 8, 32, 1, 32, 0, 1,
        38, 33, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46,
        48, 50, 52, 54, 56, 58, 60, 62, 64, 0, 1, 1, 0, 46, 47, 384, 0, 66, 1, 0, 0, 0, 2, 74, 1, 0, 0, 0,
        4, 91, 1, 0, 0, 0, 6, 93, 1, 0, 0, 0, 8, 96, 1, 0, 0, 0, 10, 108, 1, 0, 0, 0, 12, 112, 1, 0, 0, 0, 14,
        116, 1, 0, 0, 0, 16, 119, 1, 0, 0, 0, 18, 129, 1, 0, 0, 0, 20, 132, 1, 0, 0, 0, 22, 140, 1, 0, 0, 0,
        24, 154, 1, 0, 0, 0, 26, 166, 1, 0, 0, 0, 28, 177, 1, 0, 0, 0, 30, 179, 1, 0, 0, 0, 32, 181, 1, 0,
        0, 0, 34, 195, 1, 0, 0, 0, 36, 203, 1, 0, 0, 0, 38, 221, 1, 0, 0, 0, 40, 261, 1, 0, 0, 0, 42, 268,
        1, 0, 0, 0, 44, 279, 1, 0, 0, 0, 46, 290, 1, 0, 0, 0, 48, 296, 1, 0, 0, 0, 50, 298, 1, 0, 0, 0, 52,
        307, 1, 0, 0, 0, 54, 317, 1, 0, 0, 0, 56, 319, 1, 0, 0, 0, 58, 322, 1, 0, 0, 0, 60, 326, 1, 0, 0, 0,
        62, 339, 1, 0, 0, 0, 64, 357, 1, 0, 0, 0, 66, 67, 3, 2, 1, 0, 67, 1, 1, 0, 0, 0, 68, 70, 3, 4, 2, 0,
        69, 71, 5, 28, 0, 0, 70, 69, 1, 0, 0, 0, 70, 71, 1, 0, 0, 0, 71, 73, 1, 0, 0, 0, 72, 68, 1, 0, 0, 0,
        73, 76, 1, 0, 0, 0, 74, 72, 1, 0, 0, 0, 74, 75, 1, 0, 0, 0, 75, 3, 1, 0, 0, 0, 76, 74, 1, 0, 0, 0, 77,
        92, 3, 8, 4, 0, 78, 92, 3, 10, 5, 0, 79, 92, 3, 12, 6, 0, 80, 92, 3, 14, 7, 0, 81, 92, 3, 18, 9, 0,
        82, 92, 3, 16, 8, 0, 83, 92, 3, 26, 13, 0, 84, 92, 3, 28, 14, 0, 85, 92, 3, 30, 15, 0, 86, 92, 3,
        20, 10, 0, 87, 92, 3, 22, 11, 0, 88, 92, 3, 24, 12, 0, 89, 92, 3, 32, 16, 0, 90, 92, 3, 6, 3, 0, 91,
        77, 1, 0, 0, 0, 91, 78, 1, 0, 0, 0, 91, 79, 1, 0, 0, 0, 91, 80, 1, 0, 0, 0, 91, 81, 1, 0, 0, 0, 91, 82,
        1, 0, 0, 0, 91, 83, 1, 0, 0, 0, 91, 84, 1, 0, 0, 0, 91, 85, 1, 0, 0, 0, 91, 86, 1, 0, 0, 0, 91, 87, 1,
        0, 0, 0, 91, 88, 1, 0, 0, 0, 91, 89, 1, 0, 0, 0, 91, 90, 1, 0, 0, 0, 92, 5, 1, 0, 0, 0, 93, 94, 5, 1,
        0, 0, 94, 95, 3, 38, 19, 0, 95, 7, 1, 0, 0, 0, 96, 97, 5, 9, 0, 0, 97, 102, 3, 64, 32, 0, 98, 99, 5,
        2, 0, 0, 99, 101, 3, 64, 32, 0, 100, 98, 1, 0, 0, 0, 101, 104, 1, 0, 0, 0, 102, 100, 1, 0, 0, 0, 102,
        103, 1, 0, 0, 0, 103, 105, 1, 0, 0, 0, 104, 102, 1, 0, 0, 0, 105, 106, 5, 3, 0, 0, 106, 107, 3, 38,
        19, 0, 107, 9, 1, 0, 0, 0, 108, 109, 3, 52, 26, 0, 109, 110, 5, 3, 0, 0, 110, 111, 3, 38, 19, 0,
        111, 11, 1, 0, 0, 0, 112, 113, 3, 52, 26, 0, 113, 114, 5, 42, 0, 0, 114, 115, 3, 38, 19, 0, 115,
        13, 1, 0, 0, 0, 116, 117, 3, 52, 26, 0, 117, 118, 7, 0, 0, 0, 118, 15, 1, 0, 0, 0, 119, 120, 5, 10,
        0, 0, 120, 121, 5, 26, 0, 0, 121, 123, 3, 62, 31, 0, 122, 124, 3, 36, 18, 0, 123, 122, 1, 0, 0,
        0, 123, 124, 1, 0, 0, 0, 124, 125, 1, 0, 0, 0, 125, 126, 5, 36, 0, 0, 126, 127, 3, 2, 1, 0, 127,
        128, 5, 37, 0, 0, 128, 17, 1, 0, 0, 0, 129, 130, 3, 52, 26, 0, 130, 131, 3, 60, 30, 0, 131, 19,
        1, 0, 0, 0, 132, 133, 5, 13, 0, 0, 133, 134, 5, 32, 0, 0, 134, 135, 3, 38, 19, 0, 135, 136, 5, 33,
        0, 0, 136, 137, 5, 36, 0, 0, 137, 138, 3, 2, 1, 0, 138, 139, 5, 37, 0, 0, 139, 21, 1, 0, 0, 0, 140,
        141, 5, 11, 0, 0, 141, 142, 5, 32, 0, 0, 142, 143, 5, 26, 0, 0, 143, 144, 5, 3, 0, 0, 144, 145,
        3, 38, 19, 0, 145, 146, 5, 2, 0, 0, 146, 147, 3, 38, 19, 0, 147, 148, 5, 2, 0, 0, 148, 149, 3, 38,
        19, 0, 149, 150, 5, 33, 0, 0, 150, 151, 5, 36, 0, 0, 151, 152, 3, 2, 1, 0, 152, 153, 5, 37, 0, 0,
        153, 23, 1, 0, 0, 0, 154, 155, 5, 12, 0, 0, 155, 156, 5, 32, 0, 0, 156, 157, 3, 64, 32, 0, 157,
        158, 5, 2, 0, 0, 158, 159, 3, 64, 32, 0, 159, 160, 5, 14, 0, 0, 160, 161, 3, 38, 19, 0, 161, 162,
        5, 33, 0, 0, 162, 163, 5, 36, 0, 0, 163, 164, 3, 2, 1, 0, 164, 165, 5, 37, 0, 0, 165, 25, 1, 0, 0,
        0, 166, 175, 5, 4, 0, 0, 167, 172, 3, 38, 19, 0, 168, 169, 5, 2, 0, 0, 169, 171, 3, 38, 19, 0, 170,
        168, 1, 0, 0, 0, 171, 174, 1, 0, 0, 0, 172, 170, 1, 0, 0, 0, 172, 173, 1, 0, 0, 0, 173, 176, 1, 0,
        0, 0, 174, 172, 1, 0, 0, 0, 175, 167, 1, 0, 0, 0, 175, 176, 1, 0, 0, 0, 176, 27, 1, 0, 0, 0, 177,
        178, 5, 15, 0, 0, 178, 29, 1, 0, 0, 0, 179, 180, 5, 16, 0, 0, 180, 31, 1, 0, 0, 0, 181, 182, 5, 17,
        0, 0, 182, 183, 5, 32, 0, 0, 183, 184, 3, 38, 19, 0, 184, 190, 5, 33, 0, 0, 185, 191, 3, 4, 2, 0,
        186, 187, 5, 36, 0, 0, 187, 188, 3, 2, 1, 0, 188, 189, 5, 37, 0, 0, 189, 191, 1, 0, 0, 0, 190, 185,
        1, 0, 0, 0, 190, 186, 1, 0, 0, 0, 191, 193, 1, 0, 0, 0, 192, 194, 3, 34, 17, 0, 193, 192, 1, 0, 0,
        0, 193, 194, 1, 0, 0, 0, 194, 33, 1, 0, 0, 0, 195, 201, 5, 18, 0, 0, 196, 202, 3, 4, 2, 0, 197, 198,
        5, 36, 0, 0, 198, 199, 3, 2, 1, 0, 199, 200, 5, 37, 0, 0, 200, 202, 1, 0, 0, 0, 201, 196, 1, 0, 0,
        0, 201, 197, 1, 0, 0, 0, 202, 35, 1, 0, 0, 0, 203, 204, 5, 29, 0, 0, 204, 205, 5, 26, 0, 0, 205,
        37, 1, 0, 0, 0, 206, 207, 6, 19, -1, 0, 207, 208, 5, 32, 0, 0, 208, 209, 3, 38, 19, 0, 209, 210,
        5, 33, 0, 0, 210, 222, 1, 0, 0, 0, 211, 212, 5, 38, 0, 0, 212, 222, 3, 38, 19, 19, 213, 222, 5,
        19, 0, 0, 214, 222, 5, 20, 0, 0, 215, 222, 5, 21, 0, 0, 216, 222, 5, 22, 0, 0, 217, 222, 3, 40,
        20, 0, 218, 222, 3, 18, 9, 0, 219, 222, 3, 52, 26, 0, 220, 222, 3, 50, 25, 0, 221, 206, 1, 0, 0,
        0, 221, 211, 1, 0, 0, 0, 221, 213, 1, 0, 0, 0, 221, 214, 1, 0, 0, 0, 221, 215, 1, 0, 0, 0, 221, 216,
        1, 0, 0, 0, 221, 217, 1, 0, 0, 0, 221, 218, 1, 0, 0, 0, 221, 219, 1, 0, 0, 0, 221, 220, 1, 0, 0, 0,
        222, 258, 1, 0, 0, 0, 223, 224, 10, 18, 0, 0, 224, 225, 5, 5, 0, 0, 225, 257, 3, 38, 19, 19, 226,
        227, 10, 17, 0, 0, 227, 228, 5, 39, 0, 0, 228, 257, 3, 38, 19, 18, 229, 230, 10, 16, 0, 0, 230,
        231, 5, 40, 0, 0, 231, 257, 3, 38, 19, 17, 232, 233, 10, 15, 0, 0, 233, 234, 5, 41, 0, 0, 234,
        257, 3, 38, 19, 16, 235, 236, 10, 14, 0, 0, 236, 237, 5, 60, 0, 0, 237, 257, 3, 38, 19, 15, 238,
        239, 10, 13, 0, 0, 239, 240, 5, 61, 0, 0, 240, 257, 3, 38, 19, 14, 241, 242, 10, 12, 0, 0, 242,
        243, 5, 62, 0, 0, 243, 257, 3, 38, 19, 13, 244, 245, 10, 11, 0, 0, 245, 246, 5, 63, 0, 0, 246,
        257, 3, 38, 19, 12, 247, 248, 10, 10, 0, 0, 248, 249, 5, 64, 0, 0, 249, 257, 3, 38, 19, 11, 250,
        251, 10, 9, 0, 0, 251, 252, 5, 6, 0, 0, 252, 253, 3, 38, 19, 0, 253, 254, 5, 29, 0, 0, 254, 255,
        3, 38, 19, 10, 255, 257, 1, 0, 0, 0, 256, 223, 1, 0, 0, 0, 256, 226, 1, 0, 0, 0, 256, 229, 1, 0,
        0, 0, 256, 232, 1, 0, 0, 0, 256, 235, 1, 0, 0, 0, 256, 238, 1, 0, 0, 0, 256, 241, 1, 0, 0, 0, 256,
        244, 1, 0, 0, 0, 256, 247, 1, 0, 0, 0, 256, 250, 1, 0, 0, 0, 257, 260, 1, 0, 0, 0, 258, 256, 1, 0,
        0, 0, 258, 259, 1, 0, 0, 0, 259, 39, 1, 0, 0, 0, 260, 258, 1, 0, 0, 0, 261, 264, 5, 36, 0, 0, 262,
        265, 3, 42, 21, 0, 263, 265, 3, 44, 22, 0, 264, 262, 1, 0, 0, 0, 264, 263, 1, 0, 0, 0, 264, 265,
        1, 0, 0, 0, 265, 266, 1, 0, 0, 0, 266, 267, 5, 37, 0, 0, 267, 41, 1, 0, 0, 0, 268, 273, 3, 46, 23,
        0, 269, 270, 5, 2, 0, 0, 270, 272, 3, 46, 23, 0, 271, 269, 1, 0, 0, 0, 272, 275, 1, 0, 0, 0, 273,
        271, 1, 0, 0, 0, 273, 274, 1, 0, 0, 0, 274, 277, 1, 0, 0, 0, 275, 273, 1, 0, 0, 0, 276, 278, 5, 2,
        0, 0, 277, 276, 1, 0, 0, 0, 277, 278, 1, 0, 0, 0, 278, 43, 1, 0, 0, 0, 279, 284, 3, 38, 19, 0, 280,
        281, 5, 2, 0, 0, 281, 283, 3, 38, 19, 0, 282, 280, 1, 0, 0, 0, 283, 286, 1, 0, 0, 0, 284, 282, 1,
        0, 0, 0, 284, 285, 1, 0, 0, 0, 285, 288, 1, 0, 0, 0, 286, 284, 1, 0, 0, 0, 287, 289, 5, 2, 0, 0, 288,
        287, 1, 0, 0, 0, 288, 289, 1, 0, 0, 0, 289, 45, 1, 0, 0, 0, 290, 291, 3, 48, 24, 0, 291, 292, 5,
        3, 0, 0, 292, 293, 3, 38, 19, 0, 293, 47, 1, 0, 0, 0, 294, 297, 5, 26, 0, 0, 295, 297, 3, 38, 19,
        0, 296, 294, 1, 0, 0, 0, 296, 295, 1, 0, 0, 0, 297, 49, 1, 0, 0, 0, 298, 299, 3, 62, 31, 0, 299,
        305, 5, 7, 0, 0, 300, 301, 5, 36, 0, 0, 301, 302, 3, 2, 1, 0, 302, 303, 5, 37, 0, 0, 303, 306, 1,
        0, 0, 0, 304, 306, 3, 4, 2, 0, 305, 300, 1, 0, 0, 0, 305, 304, 1, 0, 0, 0, 306, 51, 1, 0, 0, 0, 307,
        311, 5, 26, 0, 0, 308, 310, 3, 54, 27, 0, 309, 308, 1, 0, 0, 0, 310, 313, 1, 0, 0, 0, 311, 309,
        1, 0, 0, 0, 311, 312, 1, 0, 0, 0, 312, 53, 1, 0, 0, 0, 313, 311, 1, 0, 0, 0, 314, 318, 3, 56, 28,
        0, 315, 318, 3, 58, 29, 0, 316, 318, 3, 60, 30, 0, 317, 314, 1, 0, 0, 0, 317, 315, 1, 0, 0, 0, 317,
        316, 1, 0, 0, 0, 318, 55, 1, 0, 0, 0, 319, 320, 5, 8, 0, 0, 320, 321, 5, 26, 0, 0, 321, 57, 1, 0,
        0, 0, 322, 323, 5, 34, 0, 0, 323, 324, 3, 38, 19, 0, 324, 325, 5, 35, 0, 0, 325, 59, 1, 0, 0, 0,
        326, 335, 5, 32, 0, 0, 327, 332, 3, 38, 19, 0, 328, 329, 5, 2, 0, 0, 329, 331, 3, 38, 19, 0, 330,
        328, 1, 0, 0, 0, 331, 334, 1, 0, 0, 0, 332, 330, 1, 0, 0, 0, 332, 333, 1, 0, 0, 0, 333, 336, 1, 0,
        0, 0, 334, 332, 1, 0, 0, 0, 335, 327, 1, 0, 0, 0, 335, 336, 1, 0, 0, 0, 336, 337, 1, 0, 0, 0, 337,
        338, 5, 33, 0, 0, 338, 61, 1, 0, 0, 0, 339, 348, 5, 32, 0, 0, 340, 345, 3, 64, 32, 0, 341, 342,
        5, 2, 0, 0, 342, 344, 3, 64, 32, 0, 343, 341, 1, 0, 0, 0, 344, 347, 1, 0, 0, 0, 345, 343, 1, 0, 0,
        0, 345, 346, 1, 0, 0, 0, 346, 349, 1, 0, 0, 0, 347, 345, 1, 0, 0, 0, 348, 340, 1, 0, 0, 0, 348, 349,
        1, 0, 0, 0, 349, 350, 1, 0, 0, 0, 350, 351, 5, 33, 0, 0, 351, 63, 1, 0, 0, 0, 352, 354, 5, 26, 0,
        0, 353, 355, 3, 36, 18, 0, 354, 353, 1, 0, 0, 0, 354, 355, 1, 0, 0, 0, 355, 358, 1, 0, 0, 0, 356,
        358, 5, 27, 0, 0, 357, 352, 1, 0, 0, 0, 357, 356, 1, 0, 0, 0, 358, 65, 1, 0, 0, 0, 28, 70, 74, 91,
        102, 123, 172, 175, 190, 193, 201, 221, 256, 258, 264, 273, 277, 284, 288, 296, 305, 311,
        317, 332, 335, 345, 348, 354, 357];
    static __ATN;
    static get _ATN() {
        if (!VoxScriptParser.__ATN) {
            VoxScriptParser.__ATN = new antlr4_1.ATNDeserializer().deserialize(VoxScriptParser._serializedATN);
        }
        return VoxScriptParser.__ATN;
    }
    static DecisionsToDFA = VoxScriptParser._ATN.decisionToState.map((ds, index) => new antlr4_1.DFA(ds, index));
}
exports.default = VoxScriptParser;
class ProgramContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    block() {
        return this.getTypedRuleContext(BlockContext, 0);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_program;
    }
    enterRule(listener) {
        if (listener.enterProgram) {
            listener.enterProgram(this);
        }
    }
    exitRule(listener) {
        if (listener.exitProgram) {
            listener.exitProgram(this);
        }
    }
}
exports.ProgramContext = ProgramContext;
class BlockContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    statement_list() {
        return this.getTypedRuleContexts(StatementContext);
    }
    statement(i) {
        return this.getTypedRuleContext(StatementContext, i);
    }
    SEMICOLON_list() {
        return this.getTokens(VoxScriptParser.SEMICOLON);
    }
    SEMICOLON(i) {
        return this.getToken(VoxScriptParser.SEMICOLON, i);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_block;
    }
    enterRule(listener) {
        if (listener.enterBlock) {
            listener.enterBlock(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBlock) {
            listener.exitBlock(this);
        }
    }
}
exports.BlockContext = BlockContext;
class StatementContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    var_define() {
        return this.getTypedRuleContext(Var_defineContext, 0);
    }
    val_assign() {
        return this.getTypedRuleContext(Val_assignContext, 0);
    }
    arith_assign() {
        return this.getTypedRuleContext(Arith_assignContext, 0);
    }
    val_increment() {
        return this.getTypedRuleContext(Val_incrementContext, 0);
    }
    func_call() {
        return this.getTypedRuleContext(Func_callContext, 0);
    }
    func_define() {
        return this.getTypedRuleContext(Func_defineContext, 0);
    }
    cont_return() {
        return this.getTypedRuleContext(Cont_returnContext, 0);
    }
    cont_continue() {
        return this.getTypedRuleContext(Cont_continueContext, 0);
    }
    cont_break() {
        return this.getTypedRuleContext(Cont_breakContext, 0);
    }
    cont_while() {
        return this.getTypedRuleContext(Cont_whileContext, 0);
    }
    cont_for() {
        return this.getTypedRuleContext(Cont_forContext, 0);
    }
    cont_foreach() {
        return this.getTypedRuleContext(Cont_foreachContext, 0);
    }
    cont_if() {
        return this.getTypedRuleContext(Cont_ifContext, 0);
    }
    print() {
        return this.getTypedRuleContext(PrintContext, 0);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_statement;
    }
    enterRule(listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    }
}
exports.StatementContext = StatementContext;
class PrintContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_print;
    }
    enterRule(listener) {
        if (listener.enterPrint) {
            listener.enterPrint(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPrint) {
            listener.exitPrint(this);
        }
    }
}
exports.PrintContext = PrintContext;
class Var_defineContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    VAR() {
        return this.getToken(VoxScriptParser.VAR, 0);
    }
    var_inst_list() {
        return this.getTypedRuleContexts(Var_instContext);
    }
    var_inst(i) {
        return this.getTypedRuleContext(Var_instContext, i);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_var_define;
    }
    enterRule(listener) {
        if (listener.enterVar_define) {
            listener.enterVar_define(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVar_define) {
            listener.exitVar_define(this);
        }
    }
}
exports.Var_defineContext = Var_defineContext;
class Val_assignContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    identifier() {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_val_assign;
    }
    enterRule(listener) {
        if (listener.enterVal_assign) {
            listener.enterVal_assign(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVal_assign) {
            listener.exitVal_assign(this);
        }
    }
}
exports.Val_assignContext = Val_assignContext;
class Arith_assignContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    identifier() {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
    ASSIGNMENT() {
        return this.getToken(VoxScriptParser.ASSIGNMENT, 0);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_arith_assign;
    }
    enterRule(listener) {
        if (listener.enterArith_assign) {
            listener.enterArith_assign(this);
        }
    }
    exitRule(listener) {
        if (listener.exitArith_assign) {
            listener.exitArith_assign(this);
        }
    }
}
exports.Arith_assignContext = Arith_assignContext;
class Val_incrementContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    identifier() {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
    INCREMENT() {
        return this.getToken(VoxScriptParser.INCREMENT, 0);
    }
    DECREMENT() {
        return this.getToken(VoxScriptParser.DECREMENT, 0);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_val_increment;
    }
    enterRule(listener) {
        if (listener.enterVal_increment) {
            listener.enterVal_increment(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVal_increment) {
            listener.exitVal_increment(this);
        }
    }
}
exports.Val_incrementContext = Val_incrementContext;
class Func_defineContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    FUNC() {
        return this.getToken(VoxScriptParser.FUNC, 0);
    }
    ID() {
        return this.getToken(VoxScriptParser.ID, 0);
    }
    function_params() {
        return this.getTypedRuleContext(Function_paramsContext, 0);
    }
    LEFT_CURLY() {
        return this.getToken(VoxScriptParser.LEFT_CURLY, 0);
    }
    block() {
        return this.getTypedRuleContext(BlockContext, 0);
    }
    RIGHT_CURLY() {
        return this.getToken(VoxScriptParser.RIGHT_CURLY, 0);
    }
    type_annotation() {
        return this.getTypedRuleContext(Type_annotationContext, 0);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_func_define;
    }
    enterRule(listener) {
        if (listener.enterFunc_define) {
            listener.enterFunc_define(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFunc_define) {
            listener.exitFunc_define(this);
        }
    }
}
exports.Func_defineContext = Func_defineContext;
class Func_callContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    identifier() {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
    function_postfix() {
        return this.getTypedRuleContext(Function_postfixContext, 0);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_func_call;
    }
    enterRule(listener) {
        if (listener.enterFunc_call) {
            listener.enterFunc_call(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFunc_call) {
            listener.exitFunc_call(this);
        }
    }
}
exports.Func_callContext = Func_callContext;
class Cont_whileContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    WHILE() {
        return this.getToken(VoxScriptParser.WHILE, 0);
    }
    LEFT_PAREN() {
        return this.getToken(VoxScriptParser.LEFT_PAREN, 0);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    RIGHT_PAREN() {
        return this.getToken(VoxScriptParser.RIGHT_PAREN, 0);
    }
    LEFT_CURLY() {
        return this.getToken(VoxScriptParser.LEFT_CURLY, 0);
    }
    block() {
        return this.getTypedRuleContext(BlockContext, 0);
    }
    RIGHT_CURLY() {
        return this.getToken(VoxScriptParser.RIGHT_CURLY, 0);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_cont_while;
    }
    enterRule(listener) {
        if (listener.enterCont_while) {
            listener.enterCont_while(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCont_while) {
            listener.exitCont_while(this);
        }
    }
}
exports.Cont_whileContext = Cont_whileContext;
class Cont_forContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    FOR() {
        return this.getToken(VoxScriptParser.FOR, 0);
    }
    LEFT_PAREN() {
        return this.getToken(VoxScriptParser.LEFT_PAREN, 0);
    }
    ID() {
        return this.getToken(VoxScriptParser.ID, 0);
    }
    expression_list() {
        return this.getTypedRuleContexts(ExpressionContext);
    }
    expression(i) {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
    RIGHT_PAREN() {
        return this.getToken(VoxScriptParser.RIGHT_PAREN, 0);
    }
    LEFT_CURLY() {
        return this.getToken(VoxScriptParser.LEFT_CURLY, 0);
    }
    block() {
        return this.getTypedRuleContext(BlockContext, 0);
    }
    RIGHT_CURLY() {
        return this.getToken(VoxScriptParser.RIGHT_CURLY, 0);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_cont_for;
    }
    enterRule(listener) {
        if (listener.enterCont_for) {
            listener.enterCont_for(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCont_for) {
            listener.exitCont_for(this);
        }
    }
}
exports.Cont_forContext = Cont_forContext;
class Cont_foreachContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    FOREACH() {
        return this.getToken(VoxScriptParser.FOREACH, 0);
    }
    LEFT_PAREN() {
        return this.getToken(VoxScriptParser.LEFT_PAREN, 0);
    }
    var_inst_list() {
        return this.getTypedRuleContexts(Var_instContext);
    }
    var_inst(i) {
        return this.getTypedRuleContext(Var_instContext, i);
    }
    IN() {
        return this.getToken(VoxScriptParser.IN, 0);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    RIGHT_PAREN() {
        return this.getToken(VoxScriptParser.RIGHT_PAREN, 0);
    }
    LEFT_CURLY() {
        return this.getToken(VoxScriptParser.LEFT_CURLY, 0);
    }
    block() {
        return this.getTypedRuleContext(BlockContext, 0);
    }
    RIGHT_CURLY() {
        return this.getToken(VoxScriptParser.RIGHT_CURLY, 0);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_cont_foreach;
    }
    enterRule(listener) {
        if (listener.enterCont_foreach) {
            listener.enterCont_foreach(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCont_foreach) {
            listener.exitCont_foreach(this);
        }
    }
}
exports.Cont_foreachContext = Cont_foreachContext;
class Cont_returnContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    expression_list() {
        return this.getTypedRuleContexts(ExpressionContext);
    }
    expression(i) {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_cont_return;
    }
    enterRule(listener) {
        if (listener.enterCont_return) {
            listener.enterCont_return(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCont_return) {
            listener.exitCont_return(this);
        }
    }
}
exports.Cont_returnContext = Cont_returnContext;
class Cont_continueContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    CONTINUE() {
        return this.getToken(VoxScriptParser.CONTINUE, 0);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_cont_continue;
    }
    enterRule(listener) {
        if (listener.enterCont_continue) {
            listener.enterCont_continue(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCont_continue) {
            listener.exitCont_continue(this);
        }
    }
}
exports.Cont_continueContext = Cont_continueContext;
class Cont_breakContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    BREAK() {
        return this.getToken(VoxScriptParser.BREAK, 0);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_cont_break;
    }
    enterRule(listener) {
        if (listener.enterCont_break) {
            listener.enterCont_break(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCont_break) {
            listener.exitCont_break(this);
        }
    }
}
exports.Cont_breakContext = Cont_breakContext;
class Cont_ifContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IF() {
        return this.getToken(VoxScriptParser.IF, 0);
    }
    LEFT_PAREN() {
        return this.getToken(VoxScriptParser.LEFT_PAREN, 0);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    RIGHT_PAREN() {
        return this.getToken(VoxScriptParser.RIGHT_PAREN, 0);
    }
    statement() {
        return this.getTypedRuleContext(StatementContext, 0);
    }
    LEFT_CURLY() {
        return this.getToken(VoxScriptParser.LEFT_CURLY, 0);
    }
    block() {
        return this.getTypedRuleContext(BlockContext, 0);
    }
    RIGHT_CURLY() {
        return this.getToken(VoxScriptParser.RIGHT_CURLY, 0);
    }
    cont_else() {
        return this.getTypedRuleContext(Cont_elseContext, 0);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_cont_if;
    }
    enterRule(listener) {
        if (listener.enterCont_if) {
            listener.enterCont_if(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCont_if) {
            listener.exitCont_if(this);
        }
    }
}
exports.Cont_ifContext = Cont_ifContext;
class Cont_elseContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ELSE() {
        return this.getToken(VoxScriptParser.ELSE, 0);
    }
    statement() {
        return this.getTypedRuleContext(StatementContext, 0);
    }
    LEFT_CURLY() {
        return this.getToken(VoxScriptParser.LEFT_CURLY, 0);
    }
    block() {
        return this.getTypedRuleContext(BlockContext, 0);
    }
    RIGHT_CURLY() {
        return this.getToken(VoxScriptParser.RIGHT_CURLY, 0);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_cont_else;
    }
    enterRule(listener) {
        if (listener.enterCont_else) {
            listener.enterCont_else(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCont_else) {
            listener.exitCont_else(this);
        }
    }
}
exports.Cont_elseContext = Cont_elseContext;
class Type_annotationContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    COLON() {
        return this.getToken(VoxScriptParser.COLON, 0);
    }
    ID() {
        return this.getToken(VoxScriptParser.ID, 0);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_type_annotation;
    }
    enterRule(listener) {
        if (listener.enterType_annotation) {
            listener.enterType_annotation(this);
        }
    }
    exitRule(listener) {
        if (listener.exitType_annotation) {
            listener.exitType_annotation(this);
        }
    }
}
exports.Type_annotationContext = Type_annotationContext;
class ExpressionContext extends antlr4_1.ParserRuleContext {
    _left;
    _condition;
    _paren;
    _unary;
    _expr;
    _op;
    _right;
    _primary;
    _secondary;
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    LEFT_PAREN() {
        return this.getToken(VoxScriptParser.LEFT_PAREN, 0);
    }
    RIGHT_PAREN() {
        return this.getToken(VoxScriptParser.RIGHT_PAREN, 0);
    }
    expression_list() {
        return this.getTypedRuleContexts(ExpressionContext);
    }
    expression(i) {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
    UNARY() {
        return this.getToken(VoxScriptParser.UNARY, 0);
    }
    NUMBER() {
        return this.getToken(VoxScriptParser.NUMBER, 0);
    }
    STRING() {
        return this.getToken(VoxScriptParser.STRING, 0);
    }
    BOOLEAN() {
        return this.getToken(VoxScriptParser.BOOLEAN, 0);
    }
    NULL() {
        return this.getToken(VoxScriptParser.NULL, 0);
    }
    table_definition() {
        return this.getTypedRuleContext(Table_definitionContext, 0);
    }
    func_call() {
        return this.getTypedRuleContext(Func_callContext, 0);
    }
    identifier() {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
    lambda() {
        return this.getTypedRuleContext(LambdaContext, 0);
    }
    MUL_DIV() {
        return this.getToken(VoxScriptParser.MUL_DIV, 0);
    }
    ADD_SUB() {
        return this.getToken(VoxScriptParser.ADD_SUB, 0);
    }
    COMPARE() {
        return this.getToken(VoxScriptParser.COMPARE, 0);
    }
    COND_AND() {
        return this.getToken(VoxScriptParser.COND_AND, 0);
    }
    COND_NAND() {
        return this.getToken(VoxScriptParser.COND_NAND, 0);
    }
    COND_OR() {
        return this.getToken(VoxScriptParser.COND_OR, 0);
    }
    COND_NOR() {
        return this.getToken(VoxScriptParser.COND_NOR, 0);
    }
    COND_XOR() {
        return this.getToken(VoxScriptParser.COND_XOR, 0);
    }
    COLON() {
        return this.getToken(VoxScriptParser.COLON, 0);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_expression;
    }
    enterRule(listener) {
        if (listener.enterExpression) {
            listener.enterExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExpression) {
            listener.exitExpression(this);
        }
    }
}
exports.ExpressionContext = ExpressionContext;
class Table_definitionContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    LEFT_CURLY() {
        return this.getToken(VoxScriptParser.LEFT_CURLY, 0);
    }
    RIGHT_CURLY() {
        return this.getToken(VoxScriptParser.RIGHT_CURLY, 0);
    }
    table_member_dict() {
        return this.getTypedRuleContext(Table_member_dictContext, 0);
    }
    table_member_list() {
        return this.getTypedRuleContext(Table_member_listContext, 0);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_table_definition;
    }
    enterRule(listener) {
        if (listener.enterTable_definition) {
            listener.enterTable_definition(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTable_definition) {
            listener.exitTable_definition(this);
        }
    }
}
exports.Table_definitionContext = Table_definitionContext;
class Table_member_dictContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    table_member_list() {
        return this.getTypedRuleContexts(Table_memberContext);
    }
    table_member(i) {
        return this.getTypedRuleContext(Table_memberContext, i);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_table_member_dict;
    }
    enterRule(listener) {
        if (listener.enterTable_member_dict) {
            listener.enterTable_member_dict(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTable_member_dict) {
            listener.exitTable_member_dict(this);
        }
    }
}
exports.Table_member_dictContext = Table_member_dictContext;
class Table_member_listContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    expression_list() {
        return this.getTypedRuleContexts(ExpressionContext);
    }
    expression(i) {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_table_member_list;
    }
    enterRule(listener) {
        if (listener.enterTable_member_list) {
            listener.enterTable_member_list(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTable_member_list) {
            listener.exitTable_member_list(this);
        }
    }
}
exports.Table_member_listContext = Table_member_listContext;
class Table_memberContext extends antlr4_1.ParserRuleContext {
    _key;
    _value;
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    table_key() {
        return this.getTypedRuleContext(Table_keyContext, 0);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_table_member;
    }
    enterRule(listener) {
        if (listener.enterTable_member) {
            listener.enterTable_member(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTable_member) {
            listener.exitTable_member(this);
        }
    }
}
exports.Table_memberContext = Table_memberContext;
class Table_keyContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ID() {
        return this.getToken(VoxScriptParser.ID, 0);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_table_key;
    }
    enterRule(listener) {
        if (listener.enterTable_key) {
            listener.enterTable_key(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTable_key) {
            listener.exitTable_key(this);
        }
    }
}
exports.Table_keyContext = Table_keyContext;
class LambdaContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    function_params() {
        return this.getTypedRuleContext(Function_paramsContext, 0);
    }
    LEFT_CURLY() {
        return this.getToken(VoxScriptParser.LEFT_CURLY, 0);
    }
    block() {
        return this.getTypedRuleContext(BlockContext, 0);
    }
    RIGHT_CURLY() {
        return this.getToken(VoxScriptParser.RIGHT_CURLY, 0);
    }
    statement() {
        return this.getTypedRuleContext(StatementContext, 0);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_lambda;
    }
    enterRule(listener) {
        if (listener.enterLambda) {
            listener.enterLambda(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLambda) {
            listener.exitLambda(this);
        }
    }
}
exports.LambdaContext = LambdaContext;
class IdentifierContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ID() {
        return this.getToken(VoxScriptParser.ID, 0);
    }
    postfix_list() {
        return this.getTypedRuleContexts(PostfixContext);
    }
    postfix(i) {
        return this.getTypedRuleContext(PostfixContext, i);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_identifier;
    }
    enterRule(listener) {
        if (listener.enterIdentifier) {
            listener.enterIdentifier(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIdentifier) {
            listener.exitIdentifier(this);
        }
    }
}
exports.IdentifierContext = IdentifierContext;
class PostfixContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    id_postfix() {
        return this.getTypedRuleContext(Id_postfixContext, 0);
    }
    expression_postfix() {
        return this.getTypedRuleContext(Expression_postfixContext, 0);
    }
    function_postfix() {
        return this.getTypedRuleContext(Function_postfixContext, 0);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_postfix;
    }
    enterRule(listener) {
        if (listener.enterPostfix) {
            listener.enterPostfix(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPostfix) {
            listener.exitPostfix(this);
        }
    }
}
exports.PostfixContext = PostfixContext;
class Id_postfixContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ID() {
        return this.getToken(VoxScriptParser.ID, 0);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_id_postfix;
    }
    enterRule(listener) {
        if (listener.enterId_postfix) {
            listener.enterId_postfix(this);
        }
    }
    exitRule(listener) {
        if (listener.exitId_postfix) {
            listener.exitId_postfix(this);
        }
    }
}
exports.Id_postfixContext = Id_postfixContext;
class Expression_postfixContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    LEFT_BRACE() {
        return this.getToken(VoxScriptParser.LEFT_BRACE, 0);
    }
    expression() {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    RIGHT_BRACE() {
        return this.getToken(VoxScriptParser.RIGHT_BRACE, 0);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_expression_postfix;
    }
    enterRule(listener) {
        if (listener.enterExpression_postfix) {
            listener.enterExpression_postfix(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExpression_postfix) {
            listener.exitExpression_postfix(this);
        }
    }
}
exports.Expression_postfixContext = Expression_postfixContext;
class Function_postfixContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    LEFT_PAREN() {
        return this.getToken(VoxScriptParser.LEFT_PAREN, 0);
    }
    RIGHT_PAREN() {
        return this.getToken(VoxScriptParser.RIGHT_PAREN, 0);
    }
    expression_list() {
        return this.getTypedRuleContexts(ExpressionContext);
    }
    expression(i) {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_function_postfix;
    }
    enterRule(listener) {
        if (listener.enterFunction_postfix) {
            listener.enterFunction_postfix(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFunction_postfix) {
            listener.exitFunction_postfix(this);
        }
    }
}
exports.Function_postfixContext = Function_postfixContext;
class Function_paramsContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    LEFT_PAREN() {
        return this.getToken(VoxScriptParser.LEFT_PAREN, 0);
    }
    RIGHT_PAREN() {
        return this.getToken(VoxScriptParser.RIGHT_PAREN, 0);
    }
    var_inst_list() {
        return this.getTypedRuleContexts(Var_instContext);
    }
    var_inst(i) {
        return this.getTypedRuleContext(Var_instContext, i);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_function_params;
    }
    enterRule(listener) {
        if (listener.enterFunction_params) {
            listener.enterFunction_params(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFunction_params) {
            listener.exitFunction_params(this);
        }
    }
}
exports.Function_paramsContext = Function_paramsContext;
class Var_instContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ID() {
        return this.getToken(VoxScriptParser.ID, 0);
    }
    type_annotation() {
        return this.getTypedRuleContext(Type_annotationContext, 0);
    }
    DISCARD() {
        return this.getToken(VoxScriptParser.DISCARD, 0);
    }
    get ruleIndex() {
        return VoxScriptParser.RULE_var_inst;
    }
    enterRule(listener) {
        if (listener.enterVar_inst) {
            listener.enterVar_inst(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVar_inst) {
            listener.exitVar_inst(this);
        }
    }
}
exports.Var_instContext = Var_instContext;
//# sourceMappingURL=VoxScriptParser.js.map