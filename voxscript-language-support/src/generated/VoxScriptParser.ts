// Generated from VoxScript.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import VoxScriptListener from "./VoxScriptListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class VoxScriptParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly VAR = 9;
	public static readonly FUNC = 10;
	public static readonly FOR = 11;
	public static readonly FOREACH = 12;
	public static readonly WHILE = 13;
	public static readonly IN = 14;
	public static readonly CONTINUE = 15;
	public static readonly BREAK = 16;
	public static readonly IF = 17;
	public static readonly ELSE = 18;
	public static readonly NUMBER = 19;
	public static readonly STRING = 20;
	public static readonly BOOLEAN = 21;
	public static readonly NULL = 22;
	public static readonly TUPLE = 23;
	public static readonly TRUE = 24;
	public static readonly FALSE = 25;
	public static readonly ID = 26;
	public static readonly DISCARD = 27;
	public static readonly SEMICOLON = 28;
	public static readonly COLON = 29;
	public static readonly EXCLAMATION = 30;
	public static readonly QUOTATION = 31;
	public static readonly LEFT_PAREN = 32;
	public static readonly RIGHT_PAREN = 33;
	public static readonly LEFT_BRACE = 34;
	public static readonly RIGHT_BRACE = 35;
	public static readonly LEFT_CURLY = 36;
	public static readonly RIGHT_CURLY = 37;
	public static readonly UNARY = 38;
	public static readonly MUL_DIV = 39;
	public static readonly ADD_SUB = 40;
	public static readonly COMPARE = 41;
	public static readonly ASSIGNMENT = 42;
	public static readonly WS = 43;
	public static readonly LINE_COMMENT = 44;
	public static readonly MULTILINE_COMMENT = 45;
	public static readonly INCREMENT = 46;
	public static readonly DECREMENT = 47;
	public static readonly ADD_DIRECT = 48;
	public static readonly SUB_DIRECT = 49;
	public static readonly MULT_DIRECT = 50;
	public static readonly DIV_DIRECT = 51;
	public static readonly EXPO_DIRECT = 52;
	public static readonly MOD_DIRECT = 53;
	public static readonly COND_EQUAL = 54;
	public static readonly COND_NOTEQUAL = 55;
	public static readonly COND_GREATERTHAN = 56;
	public static readonly COND_LESSTHAN = 57;
	public static readonly COND_GREATEROREQUAL = 58;
	public static readonly COND_LESSOREQUAL = 59;
	public static readonly COND_AND = 60;
	public static readonly COND_NAND = 61;
	public static readonly COND_OR = 62;
	public static readonly COND_NOR = 63;
	public static readonly COND_XOR = 64;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_block = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_print = 3;
	public static readonly RULE_var_define = 4;
	public static readonly RULE_val_assign = 5;
	public static readonly RULE_arith_assign = 6;
	public static readonly RULE_val_increment = 7;
	public static readonly RULE_func_define = 8;
	public static readonly RULE_func_call = 9;
	public static readonly RULE_cont_while = 10;
	public static readonly RULE_cont_for = 11;
	public static readonly RULE_cont_foreach = 12;
	public static readonly RULE_cont_return = 13;
	public static readonly RULE_cont_continue = 14;
	public static readonly RULE_cont_break = 15;
	public static readonly RULE_cont_if = 16;
	public static readonly RULE_cont_else = 17;
	public static readonly RULE_type_annotation = 18;
	public static readonly RULE_expression = 19;
	public static readonly RULE_table_definition = 20;
	public static readonly RULE_table_member_dict = 21;
	public static readonly RULE_table_member_list = 22;
	public static readonly RULE_table_member = 23;
	public static readonly RULE_table_key = 24;
	public static readonly RULE_lambda = 25;
	public static readonly RULE_identifier = 26;
	public static readonly RULE_postfix = 27;
	public static readonly RULE_id_postfix = 28;
	public static readonly RULE_expression_postfix = 29;
	public static readonly RULE_function_postfix = 30;
	public static readonly RULE_function_params = 31;
	public static readonly RULE_var_inst = 32;
	public static readonly literalNames: (string | null)[] = [ null, "'print'", 
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
                                                            "'#|'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
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
                                                             "COND_XOR" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "block", "statement", "print", "var_define", "val_assign", 
		"arith_assign", "val_increment", "func_define", "func_call", "cont_while", 
		"cont_for", "cont_foreach", "cont_return", "cont_continue", "cont_break", 
		"cont_if", "cont_else", "type_annotation", "expression", "table_definition", 
		"table_member_dict", "table_member_list", "table_member", "table_key", 
		"lambda", "identifier", "postfix", "id_postfix", "expression_postfix", 
		"function_postfix", "function_params", "var_inst",
	];
	public get grammarFileName(): string { return "VoxScript.g4"; }
	public get literalNames(): (string | null)[] { return VoxScriptParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return VoxScriptParser.symbolicNames; }
	public get ruleNames(): string[] { return VoxScriptParser.ruleNames; }
	public get serializedATN(): number[] { return VoxScriptParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, VoxScriptParser._ATN, VoxScriptParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, VoxScriptParser.RULE_program);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 66;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, VoxScriptParser.RULE_block);
		let _la: number;
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
				if (_la===28) {
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
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, VoxScriptParser.RULE_statement);
		try {
			this.state = 91;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public print(): PrintContext {
		let localctx: PrintContext = new PrintContext(this, this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public var_define(): Var_defineContext {
		let localctx: Var_defineContext = new Var_defineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, VoxScriptParser.RULE_var_define);
		let _la: number;
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
			while (_la===2) {
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
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public val_assign(): Val_assignContext {
		let localctx: Val_assignContext = new Val_assignContext(this, this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arith_assign(): Arith_assignContext {
		let localctx: Arith_assignContext = new Arith_assignContext(this, this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public val_increment(): Val_incrementContext {
		let localctx: Val_incrementContext = new Val_incrementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, VoxScriptParser.RULE_val_increment);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 116;
			this.identifier();
			this.state = 117;
			_la = this._input.LA(1);
			if(!(_la===46 || _la===47)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public func_define(): Func_defineContext {
		let localctx: Func_defineContext = new Func_defineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, VoxScriptParser.RULE_func_define);
		let _la: number;
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
			if (_la===29) {
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
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public func_call(): Func_callContext {
		let localctx: Func_callContext = new Func_callContext(this, this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cont_while(): Cont_whileContext {
		let localctx: Cont_whileContext = new Cont_whileContext(this, this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cont_for(): Cont_forContext {
		let localctx: Cont_forContext = new Cont_forContext(this, this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cont_foreach(): Cont_foreachContext {
		let localctx: Cont_foreachContext = new Cont_foreachContext(this, this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cont_return(): Cont_returnContext {
		let localctx: Cont_returnContext = new Cont_returnContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, VoxScriptParser.RULE_cont_return);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 166;
			this.match(VoxScriptParser.T__3);
			this.state = 175;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 167;
				this.expression(0);
				this.state = 172;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
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
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cont_continue(): Cont_continueContext {
		let localctx: Cont_continueContext = new Cont_continueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, VoxScriptParser.RULE_cont_continue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 177;
			this.match(VoxScriptParser.CONTINUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cont_break(): Cont_breakContext {
		let localctx: Cont_breakContext = new Cont_breakContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, VoxScriptParser.RULE_cont_break);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 179;
			this.match(VoxScriptParser.BREAK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cont_if(): Cont_ifContext {
		let localctx: Cont_ifContext = new Cont_ifContext(this, this._ctx, this.state);
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
				throw new NoViableAltException(this);
			}
			this.state = 193;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cont_else(): Cont_elseContext {
		let localctx: Cont_elseContext = new Cont_elseContext(this, this._ctx, this.state);
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
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_annotation(): Type_annotationContext {
		let localctx: Type_annotationContext = new Type_annotationContext(this, this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExpressionContext = localctx;
		let _startState: number = 38;
		this.enterRecursionRule(localctx, 38, VoxScriptParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 221;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
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
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 256;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public table_definition(): Table_definitionContext {
		let localctx: Table_definitionContext = new Table_definitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, VoxScriptParser.RULE_table_definition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 261;
			this.match(VoxScriptParser.LEFT_CURLY);
			this.state = 264;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public table_member_dict(): Table_member_dictContext {
		let localctx: Table_member_dictContext = new Table_member_dictContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, VoxScriptParser.RULE_table_member_dict);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 268;
			this.table_member();
			this.state = 273;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
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
			if (_la===2) {
				{
				this.state = 276;
				this.match(VoxScriptParser.T__1);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public table_member_list(): Table_member_listContext {
		let localctx: Table_member_listContext = new Table_member_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, VoxScriptParser.RULE_table_member_list);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 279;
			this.expression(0);
			this.state = 284;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
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
			if (_la===2) {
				{
				this.state = 287;
				this.match(VoxScriptParser.T__1);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public table_member(): Table_memberContext {
		let localctx: Table_memberContext = new Table_memberContext(this, this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public table_key(): Table_keyContext {
		let localctx: Table_keyContext = new Table_keyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, VoxScriptParser.RULE_table_key);
		try {
			this.state = 296;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
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
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lambda(): LambdaContext {
		let localctx: LambdaContext = new LambdaContext(this, this._ctx, this.state);
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
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, VoxScriptParser.RULE_identifier);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 307;
			this.match(VoxScriptParser.ID);
			this.state = 311;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
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
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public postfix(): PostfixContext {
		let localctx: PostfixContext = new PostfixContext(this, this._ctx, this.state);
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
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public id_postfix(): Id_postfixContext {
		let localctx: Id_postfixContext = new Id_postfixContext(this, this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression_postfix(): Expression_postfixContext {
		let localctx: Expression_postfixContext = new Expression_postfixContext(this, this._ctx, this.state);
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
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public function_postfix(): Function_postfixContext {
		let localctx: Function_postfixContext = new Function_postfixContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, VoxScriptParser.RULE_function_postfix);
		let _la: number;
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
				while (_la===2) {
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
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public function_params(): Function_paramsContext {
		let localctx: Function_paramsContext = new Function_paramsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, VoxScriptParser.RULE_function_params);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 339;
			this.match(VoxScriptParser.LEFT_PAREN);
			this.state = 348;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26 || _la===27) {
				{
				this.state = 340;
				this.var_inst();
				this.state = 345;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===2) {
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
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public var_inst(): Var_instContext {
		let localctx: Var_instContext = new Var_instContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, VoxScriptParser.RULE_var_inst);
		let _la: number;
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
				if (_la===29) {
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
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 19:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
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

	public static readonly _serializedATN: number[] = [4,1,64,360,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,1,0,1,0,1,1,1,1,3,1,71,8,1,5,1,73,8,1,10,1,12,1,76,9,1,1,2,1,
	2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,92,8,2,1,3,1,3,1,
	3,1,4,1,4,1,4,1,4,5,4,101,8,4,10,4,12,4,104,9,4,1,4,1,4,1,4,1,5,1,5,1,5,
	1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,1,8,3,8,124,8,8,1,8,1,8,1,8,
	1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,
	1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,
	12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,5,13,171,
	8,13,10,13,12,13,174,9,13,3,13,176,8,13,1,14,1,14,1,15,1,15,1,16,1,16,1,
	16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,191,8,16,1,16,3,16,194,8,16,1,17,
	1,17,1,17,1,17,1,17,1,17,3,17,202,8,17,1,18,1,18,1,18,1,19,1,19,1,19,1,
	19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,222,8,19,
	1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,
	19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
	1,19,1,19,1,19,1,19,5,19,257,8,19,10,19,12,19,260,9,19,1,20,1,20,1,20,3,
	20,265,8,20,1,20,1,20,1,21,1,21,1,21,5,21,272,8,21,10,21,12,21,275,9,21,
	1,21,3,21,278,8,21,1,22,1,22,1,22,5,22,283,8,22,10,22,12,22,286,9,22,1,
	22,3,22,289,8,22,1,23,1,23,1,23,1,23,1,24,1,24,3,24,297,8,24,1,25,1,25,
	1,25,1,25,1,25,1,25,1,25,3,25,306,8,25,1,26,1,26,5,26,310,8,26,10,26,12,
	26,313,9,26,1,27,1,27,1,27,3,27,318,8,27,1,28,1,28,1,28,1,29,1,29,1,29,
	1,29,1,30,1,30,1,30,1,30,5,30,331,8,30,10,30,12,30,334,9,30,3,30,336,8,
	30,1,30,1,30,1,31,1,31,1,31,1,31,5,31,344,8,31,10,31,12,31,347,9,31,3,31,
	349,8,31,1,31,1,31,1,32,1,32,3,32,355,8,32,1,32,3,32,358,8,32,1,32,0,1,
	38,33,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
	48,50,52,54,56,58,60,62,64,0,1,1,0,46,47,384,0,66,1,0,0,0,2,74,1,0,0,0,
	4,91,1,0,0,0,6,93,1,0,0,0,8,96,1,0,0,0,10,108,1,0,0,0,12,112,1,0,0,0,14,
	116,1,0,0,0,16,119,1,0,0,0,18,129,1,0,0,0,20,132,1,0,0,0,22,140,1,0,0,0,
	24,154,1,0,0,0,26,166,1,0,0,0,28,177,1,0,0,0,30,179,1,0,0,0,32,181,1,0,
	0,0,34,195,1,0,0,0,36,203,1,0,0,0,38,221,1,0,0,0,40,261,1,0,0,0,42,268,
	1,0,0,0,44,279,1,0,0,0,46,290,1,0,0,0,48,296,1,0,0,0,50,298,1,0,0,0,52,
	307,1,0,0,0,54,317,1,0,0,0,56,319,1,0,0,0,58,322,1,0,0,0,60,326,1,0,0,0,
	62,339,1,0,0,0,64,357,1,0,0,0,66,67,3,2,1,0,67,1,1,0,0,0,68,70,3,4,2,0,
	69,71,5,28,0,0,70,69,1,0,0,0,70,71,1,0,0,0,71,73,1,0,0,0,72,68,1,0,0,0,
	73,76,1,0,0,0,74,72,1,0,0,0,74,75,1,0,0,0,75,3,1,0,0,0,76,74,1,0,0,0,77,
	92,3,8,4,0,78,92,3,10,5,0,79,92,3,12,6,0,80,92,3,14,7,0,81,92,3,18,9,0,
	82,92,3,16,8,0,83,92,3,26,13,0,84,92,3,28,14,0,85,92,3,30,15,0,86,92,3,
	20,10,0,87,92,3,22,11,0,88,92,3,24,12,0,89,92,3,32,16,0,90,92,3,6,3,0,91,
	77,1,0,0,0,91,78,1,0,0,0,91,79,1,0,0,0,91,80,1,0,0,0,91,81,1,0,0,0,91,82,
	1,0,0,0,91,83,1,0,0,0,91,84,1,0,0,0,91,85,1,0,0,0,91,86,1,0,0,0,91,87,1,
	0,0,0,91,88,1,0,0,0,91,89,1,0,0,0,91,90,1,0,0,0,92,5,1,0,0,0,93,94,5,1,
	0,0,94,95,3,38,19,0,95,7,1,0,0,0,96,97,5,9,0,0,97,102,3,64,32,0,98,99,5,
	2,0,0,99,101,3,64,32,0,100,98,1,0,0,0,101,104,1,0,0,0,102,100,1,0,0,0,102,
	103,1,0,0,0,103,105,1,0,0,0,104,102,1,0,0,0,105,106,5,3,0,0,106,107,3,38,
	19,0,107,9,1,0,0,0,108,109,3,52,26,0,109,110,5,3,0,0,110,111,3,38,19,0,
	111,11,1,0,0,0,112,113,3,52,26,0,113,114,5,42,0,0,114,115,3,38,19,0,115,
	13,1,0,0,0,116,117,3,52,26,0,117,118,7,0,0,0,118,15,1,0,0,0,119,120,5,10,
	0,0,120,121,5,26,0,0,121,123,3,62,31,0,122,124,3,36,18,0,123,122,1,0,0,
	0,123,124,1,0,0,0,124,125,1,0,0,0,125,126,5,36,0,0,126,127,3,2,1,0,127,
	128,5,37,0,0,128,17,1,0,0,0,129,130,3,52,26,0,130,131,3,60,30,0,131,19,
	1,0,0,0,132,133,5,13,0,0,133,134,5,32,0,0,134,135,3,38,19,0,135,136,5,33,
	0,0,136,137,5,36,0,0,137,138,3,2,1,0,138,139,5,37,0,0,139,21,1,0,0,0,140,
	141,5,11,0,0,141,142,5,32,0,0,142,143,5,26,0,0,143,144,5,3,0,0,144,145,
	3,38,19,0,145,146,5,2,0,0,146,147,3,38,19,0,147,148,5,2,0,0,148,149,3,38,
	19,0,149,150,5,33,0,0,150,151,5,36,0,0,151,152,3,2,1,0,152,153,5,37,0,0,
	153,23,1,0,0,0,154,155,5,12,0,0,155,156,5,32,0,0,156,157,3,64,32,0,157,
	158,5,2,0,0,158,159,3,64,32,0,159,160,5,14,0,0,160,161,3,38,19,0,161,162,
	5,33,0,0,162,163,5,36,0,0,163,164,3,2,1,0,164,165,5,37,0,0,165,25,1,0,0,
	0,166,175,5,4,0,0,167,172,3,38,19,0,168,169,5,2,0,0,169,171,3,38,19,0,170,
	168,1,0,0,0,171,174,1,0,0,0,172,170,1,0,0,0,172,173,1,0,0,0,173,176,1,0,
	0,0,174,172,1,0,0,0,175,167,1,0,0,0,175,176,1,0,0,0,176,27,1,0,0,0,177,
	178,5,15,0,0,178,29,1,0,0,0,179,180,5,16,0,0,180,31,1,0,0,0,181,182,5,17,
	0,0,182,183,5,32,0,0,183,184,3,38,19,0,184,190,5,33,0,0,185,191,3,4,2,0,
	186,187,5,36,0,0,187,188,3,2,1,0,188,189,5,37,0,0,189,191,1,0,0,0,190,185,
	1,0,0,0,190,186,1,0,0,0,191,193,1,0,0,0,192,194,3,34,17,0,193,192,1,0,0,
	0,193,194,1,0,0,0,194,33,1,0,0,0,195,201,5,18,0,0,196,202,3,4,2,0,197,198,
	5,36,0,0,198,199,3,2,1,0,199,200,5,37,0,0,200,202,1,0,0,0,201,196,1,0,0,
	0,201,197,1,0,0,0,202,35,1,0,0,0,203,204,5,29,0,0,204,205,5,26,0,0,205,
	37,1,0,0,0,206,207,6,19,-1,0,207,208,5,32,0,0,208,209,3,38,19,0,209,210,
	5,33,0,0,210,222,1,0,0,0,211,212,5,38,0,0,212,222,3,38,19,19,213,222,5,
	19,0,0,214,222,5,20,0,0,215,222,5,21,0,0,216,222,5,22,0,0,217,222,3,40,
	20,0,218,222,3,18,9,0,219,222,3,52,26,0,220,222,3,50,25,0,221,206,1,0,0,
	0,221,211,1,0,0,0,221,213,1,0,0,0,221,214,1,0,0,0,221,215,1,0,0,0,221,216,
	1,0,0,0,221,217,1,0,0,0,221,218,1,0,0,0,221,219,1,0,0,0,221,220,1,0,0,0,
	222,258,1,0,0,0,223,224,10,18,0,0,224,225,5,5,0,0,225,257,3,38,19,19,226,
	227,10,17,0,0,227,228,5,39,0,0,228,257,3,38,19,18,229,230,10,16,0,0,230,
	231,5,40,0,0,231,257,3,38,19,17,232,233,10,15,0,0,233,234,5,41,0,0,234,
	257,3,38,19,16,235,236,10,14,0,0,236,237,5,60,0,0,237,257,3,38,19,15,238,
	239,10,13,0,0,239,240,5,61,0,0,240,257,3,38,19,14,241,242,10,12,0,0,242,
	243,5,62,0,0,243,257,3,38,19,13,244,245,10,11,0,0,245,246,5,63,0,0,246,
	257,3,38,19,12,247,248,10,10,0,0,248,249,5,64,0,0,249,257,3,38,19,11,250,
	251,10,9,0,0,251,252,5,6,0,0,252,253,3,38,19,0,253,254,5,29,0,0,254,255,
	3,38,19,10,255,257,1,0,0,0,256,223,1,0,0,0,256,226,1,0,0,0,256,229,1,0,
	0,0,256,232,1,0,0,0,256,235,1,0,0,0,256,238,1,0,0,0,256,241,1,0,0,0,256,
	244,1,0,0,0,256,247,1,0,0,0,256,250,1,0,0,0,257,260,1,0,0,0,258,256,1,0,
	0,0,258,259,1,0,0,0,259,39,1,0,0,0,260,258,1,0,0,0,261,264,5,36,0,0,262,
	265,3,42,21,0,263,265,3,44,22,0,264,262,1,0,0,0,264,263,1,0,0,0,264,265,
	1,0,0,0,265,266,1,0,0,0,266,267,5,37,0,0,267,41,1,0,0,0,268,273,3,46,23,
	0,269,270,5,2,0,0,270,272,3,46,23,0,271,269,1,0,0,0,272,275,1,0,0,0,273,
	271,1,0,0,0,273,274,1,0,0,0,274,277,1,0,0,0,275,273,1,0,0,0,276,278,5,2,
	0,0,277,276,1,0,0,0,277,278,1,0,0,0,278,43,1,0,0,0,279,284,3,38,19,0,280,
	281,5,2,0,0,281,283,3,38,19,0,282,280,1,0,0,0,283,286,1,0,0,0,284,282,1,
	0,0,0,284,285,1,0,0,0,285,288,1,0,0,0,286,284,1,0,0,0,287,289,5,2,0,0,288,
	287,1,0,0,0,288,289,1,0,0,0,289,45,1,0,0,0,290,291,3,48,24,0,291,292,5,
	3,0,0,292,293,3,38,19,0,293,47,1,0,0,0,294,297,5,26,0,0,295,297,3,38,19,
	0,296,294,1,0,0,0,296,295,1,0,0,0,297,49,1,0,0,0,298,299,3,62,31,0,299,
	305,5,7,0,0,300,301,5,36,0,0,301,302,3,2,1,0,302,303,5,37,0,0,303,306,1,
	0,0,0,304,306,3,4,2,0,305,300,1,0,0,0,305,304,1,0,0,0,306,51,1,0,0,0,307,
	311,5,26,0,0,308,310,3,54,27,0,309,308,1,0,0,0,310,313,1,0,0,0,311,309,
	1,0,0,0,311,312,1,0,0,0,312,53,1,0,0,0,313,311,1,0,0,0,314,318,3,56,28,
	0,315,318,3,58,29,0,316,318,3,60,30,0,317,314,1,0,0,0,317,315,1,0,0,0,317,
	316,1,0,0,0,318,55,1,0,0,0,319,320,5,8,0,0,320,321,5,26,0,0,321,57,1,0,
	0,0,322,323,5,34,0,0,323,324,3,38,19,0,324,325,5,35,0,0,325,59,1,0,0,0,
	326,335,5,32,0,0,327,332,3,38,19,0,328,329,5,2,0,0,329,331,3,38,19,0,330,
	328,1,0,0,0,331,334,1,0,0,0,332,330,1,0,0,0,332,333,1,0,0,0,333,336,1,0,
	0,0,334,332,1,0,0,0,335,327,1,0,0,0,335,336,1,0,0,0,336,337,1,0,0,0,337,
	338,5,33,0,0,338,61,1,0,0,0,339,348,5,32,0,0,340,345,3,64,32,0,341,342,
	5,2,0,0,342,344,3,64,32,0,343,341,1,0,0,0,344,347,1,0,0,0,345,343,1,0,0,
	0,345,346,1,0,0,0,346,349,1,0,0,0,347,345,1,0,0,0,348,340,1,0,0,0,348,349,
	1,0,0,0,349,350,1,0,0,0,350,351,5,33,0,0,351,63,1,0,0,0,352,354,5,26,0,
	0,353,355,3,36,18,0,354,353,1,0,0,0,354,355,1,0,0,0,355,358,1,0,0,0,356,
	358,5,27,0,0,357,352,1,0,0,0,357,356,1,0,0,0,358,65,1,0,0,0,28,70,74,91,
	102,123,172,175,190,193,201,221,256,258,264,273,277,284,288,296,305,311,
	317,332,335,345,348,354,357];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!VoxScriptParser.__ATN) {
			VoxScriptParser.__ATN = new ATNDeserializer().deserialize(VoxScriptParser._serializedATN);
		}

		return VoxScriptParser.__ATN;
	}


	static DecisionsToDFA = VoxScriptParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_program;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitProgram) {
	 		listener.exitProgram(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
	public SEMICOLON_list(): TerminalNode[] {
	    	return this.getTokens(VoxScriptParser.SEMICOLON);
	}
	public SEMICOLON(i: number): TerminalNode {
		return this.getToken(VoxScriptParser.SEMICOLON, i);
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_block;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public var_define(): Var_defineContext {
		return this.getTypedRuleContext(Var_defineContext, 0) as Var_defineContext;
	}
	public val_assign(): Val_assignContext {
		return this.getTypedRuleContext(Val_assignContext, 0) as Val_assignContext;
	}
	public arith_assign(): Arith_assignContext {
		return this.getTypedRuleContext(Arith_assignContext, 0) as Arith_assignContext;
	}
	public val_increment(): Val_incrementContext {
		return this.getTypedRuleContext(Val_incrementContext, 0) as Val_incrementContext;
	}
	public func_call(): Func_callContext {
		return this.getTypedRuleContext(Func_callContext, 0) as Func_callContext;
	}
	public func_define(): Func_defineContext {
		return this.getTypedRuleContext(Func_defineContext, 0) as Func_defineContext;
	}
	public cont_return(): Cont_returnContext {
		return this.getTypedRuleContext(Cont_returnContext, 0) as Cont_returnContext;
	}
	public cont_continue(): Cont_continueContext {
		return this.getTypedRuleContext(Cont_continueContext, 0) as Cont_continueContext;
	}
	public cont_break(): Cont_breakContext {
		return this.getTypedRuleContext(Cont_breakContext, 0) as Cont_breakContext;
	}
	public cont_while(): Cont_whileContext {
		return this.getTypedRuleContext(Cont_whileContext, 0) as Cont_whileContext;
	}
	public cont_for(): Cont_forContext {
		return this.getTypedRuleContext(Cont_forContext, 0) as Cont_forContext;
	}
	public cont_foreach(): Cont_foreachContext {
		return this.getTypedRuleContext(Cont_foreachContext, 0) as Cont_foreachContext;
	}
	public cont_if(): Cont_ifContext {
		return this.getTypedRuleContext(Cont_ifContext, 0) as Cont_ifContext;
	}
	public print(): PrintContext {
		return this.getTypedRuleContext(PrintContext, 0) as PrintContext;
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_statement;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
}


export class PrintContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_print;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterPrint) {
	 		listener.enterPrint(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitPrint) {
	 		listener.exitPrint(this);
		}
	}
}


export class Var_defineContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VAR(): TerminalNode {
		return this.getToken(VoxScriptParser.VAR, 0);
	}
	public var_inst_list(): Var_instContext[] {
		return this.getTypedRuleContexts(Var_instContext) as Var_instContext[];
	}
	public var_inst(i: number): Var_instContext {
		return this.getTypedRuleContext(Var_instContext, i) as Var_instContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_var_define;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterVar_define) {
	 		listener.enterVar_define(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitVar_define) {
	 		listener.exitVar_define(this);
		}
	}
}


export class Val_assignContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_val_assign;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterVal_assign) {
	 		listener.enterVal_assign(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitVal_assign) {
	 		listener.exitVal_assign(this);
		}
	}
}


export class Arith_assignContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public ASSIGNMENT(): TerminalNode {
		return this.getToken(VoxScriptParser.ASSIGNMENT, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_arith_assign;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterArith_assign) {
	 		listener.enterArith_assign(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitArith_assign) {
	 		listener.exitArith_assign(this);
		}
	}
}


export class Val_incrementContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public INCREMENT(): TerminalNode {
		return this.getToken(VoxScriptParser.INCREMENT, 0);
	}
	public DECREMENT(): TerminalNode {
		return this.getToken(VoxScriptParser.DECREMENT, 0);
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_val_increment;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterVal_increment) {
	 		listener.enterVal_increment(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitVal_increment) {
	 		listener.exitVal_increment(this);
		}
	}
}


export class Func_defineContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FUNC(): TerminalNode {
		return this.getToken(VoxScriptParser.FUNC, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(VoxScriptParser.ID, 0);
	}
	public function_params(): Function_paramsContext {
		return this.getTypedRuleContext(Function_paramsContext, 0) as Function_paramsContext;
	}
	public LEFT_CURLY(): TerminalNode {
		return this.getToken(VoxScriptParser.LEFT_CURLY, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public RIGHT_CURLY(): TerminalNode {
		return this.getToken(VoxScriptParser.RIGHT_CURLY, 0);
	}
	public type_annotation(): Type_annotationContext {
		return this.getTypedRuleContext(Type_annotationContext, 0) as Type_annotationContext;
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_func_define;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterFunc_define) {
	 		listener.enterFunc_define(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitFunc_define) {
	 		listener.exitFunc_define(this);
		}
	}
}


export class Func_callContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public function_postfix(): Function_postfixContext {
		return this.getTypedRuleContext(Function_postfixContext, 0) as Function_postfixContext;
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_func_call;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterFunc_call) {
	 		listener.enterFunc_call(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitFunc_call) {
	 		listener.exitFunc_call(this);
		}
	}
}


export class Cont_whileContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHILE(): TerminalNode {
		return this.getToken(VoxScriptParser.WHILE, 0);
	}
	public LEFT_PAREN(): TerminalNode {
		return this.getToken(VoxScriptParser.LEFT_PAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RIGHT_PAREN(): TerminalNode {
		return this.getToken(VoxScriptParser.RIGHT_PAREN, 0);
	}
	public LEFT_CURLY(): TerminalNode {
		return this.getToken(VoxScriptParser.LEFT_CURLY, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public RIGHT_CURLY(): TerminalNode {
		return this.getToken(VoxScriptParser.RIGHT_CURLY, 0);
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_cont_while;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterCont_while) {
	 		listener.enterCont_while(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitCont_while) {
	 		listener.exitCont_while(this);
		}
	}
}


export class Cont_forContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOR(): TerminalNode {
		return this.getToken(VoxScriptParser.FOR, 0);
	}
	public LEFT_PAREN(): TerminalNode {
		return this.getToken(VoxScriptParser.LEFT_PAREN, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(VoxScriptParser.ID, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public RIGHT_PAREN(): TerminalNode {
		return this.getToken(VoxScriptParser.RIGHT_PAREN, 0);
	}
	public LEFT_CURLY(): TerminalNode {
		return this.getToken(VoxScriptParser.LEFT_CURLY, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public RIGHT_CURLY(): TerminalNode {
		return this.getToken(VoxScriptParser.RIGHT_CURLY, 0);
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_cont_for;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterCont_for) {
	 		listener.enterCont_for(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitCont_for) {
	 		listener.exitCont_for(this);
		}
	}
}


export class Cont_foreachContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOREACH(): TerminalNode {
		return this.getToken(VoxScriptParser.FOREACH, 0);
	}
	public LEFT_PAREN(): TerminalNode {
		return this.getToken(VoxScriptParser.LEFT_PAREN, 0);
	}
	public var_inst_list(): Var_instContext[] {
		return this.getTypedRuleContexts(Var_instContext) as Var_instContext[];
	}
	public var_inst(i: number): Var_instContext {
		return this.getTypedRuleContext(Var_instContext, i) as Var_instContext;
	}
	public IN(): TerminalNode {
		return this.getToken(VoxScriptParser.IN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RIGHT_PAREN(): TerminalNode {
		return this.getToken(VoxScriptParser.RIGHT_PAREN, 0);
	}
	public LEFT_CURLY(): TerminalNode {
		return this.getToken(VoxScriptParser.LEFT_CURLY, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public RIGHT_CURLY(): TerminalNode {
		return this.getToken(VoxScriptParser.RIGHT_CURLY, 0);
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_cont_foreach;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterCont_foreach) {
	 		listener.enterCont_foreach(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitCont_foreach) {
	 		listener.exitCont_foreach(this);
		}
	}
}


export class Cont_returnContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_cont_return;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterCont_return) {
	 		listener.enterCont_return(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitCont_return) {
	 		listener.exitCont_return(this);
		}
	}
}


export class Cont_continueContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONTINUE(): TerminalNode {
		return this.getToken(VoxScriptParser.CONTINUE, 0);
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_cont_continue;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterCont_continue) {
	 		listener.enterCont_continue(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitCont_continue) {
	 		listener.exitCont_continue(this);
		}
	}
}


export class Cont_breakContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BREAK(): TerminalNode {
		return this.getToken(VoxScriptParser.BREAK, 0);
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_cont_break;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterCont_break) {
	 		listener.enterCont_break(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitCont_break) {
	 		listener.exitCont_break(this);
		}
	}
}


export class Cont_ifContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(VoxScriptParser.IF, 0);
	}
	public LEFT_PAREN(): TerminalNode {
		return this.getToken(VoxScriptParser.LEFT_PAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RIGHT_PAREN(): TerminalNode {
		return this.getToken(VoxScriptParser.RIGHT_PAREN, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public LEFT_CURLY(): TerminalNode {
		return this.getToken(VoxScriptParser.LEFT_CURLY, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public RIGHT_CURLY(): TerminalNode {
		return this.getToken(VoxScriptParser.RIGHT_CURLY, 0);
	}
	public cont_else(): Cont_elseContext {
		return this.getTypedRuleContext(Cont_elseContext, 0) as Cont_elseContext;
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_cont_if;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterCont_if) {
	 		listener.enterCont_if(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitCont_if) {
	 		listener.exitCont_if(this);
		}
	}
}


export class Cont_elseContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ELSE(): TerminalNode {
		return this.getToken(VoxScriptParser.ELSE, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public LEFT_CURLY(): TerminalNode {
		return this.getToken(VoxScriptParser.LEFT_CURLY, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public RIGHT_CURLY(): TerminalNode {
		return this.getToken(VoxScriptParser.RIGHT_CURLY, 0);
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_cont_else;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterCont_else) {
	 		listener.enterCont_else(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitCont_else) {
	 		listener.exitCont_else(this);
		}
	}
}


export class Type_annotationContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(VoxScriptParser.COLON, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(VoxScriptParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_type_annotation;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterType_annotation) {
	 		listener.enterType_annotation(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitType_annotation) {
	 		listener.exitType_annotation(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public _left!: ExpressionContext;
	public _condition!: ExpressionContext;
	public _paren!: ExpressionContext;
	public _unary!: Token;
	public _expr!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	public _primary!: ExpressionContext;
	public _secondary!: ExpressionContext;
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LEFT_PAREN(): TerminalNode {
		return this.getToken(VoxScriptParser.LEFT_PAREN, 0);
	}
	public RIGHT_PAREN(): TerminalNode {
		return this.getToken(VoxScriptParser.RIGHT_PAREN, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public UNARY(): TerminalNode {
		return this.getToken(VoxScriptParser.UNARY, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(VoxScriptParser.NUMBER, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(VoxScriptParser.STRING, 0);
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(VoxScriptParser.BOOLEAN, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(VoxScriptParser.NULL, 0);
	}
	public table_definition(): Table_definitionContext {
		return this.getTypedRuleContext(Table_definitionContext, 0) as Table_definitionContext;
	}
	public func_call(): Func_callContext {
		return this.getTypedRuleContext(Func_callContext, 0) as Func_callContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public lambda(): LambdaContext {
		return this.getTypedRuleContext(LambdaContext, 0) as LambdaContext;
	}
	public MUL_DIV(): TerminalNode {
		return this.getToken(VoxScriptParser.MUL_DIV, 0);
	}
	public ADD_SUB(): TerminalNode {
		return this.getToken(VoxScriptParser.ADD_SUB, 0);
	}
	public COMPARE(): TerminalNode {
		return this.getToken(VoxScriptParser.COMPARE, 0);
	}
	public COND_AND(): TerminalNode {
		return this.getToken(VoxScriptParser.COND_AND, 0);
	}
	public COND_NAND(): TerminalNode {
		return this.getToken(VoxScriptParser.COND_NAND, 0);
	}
	public COND_OR(): TerminalNode {
		return this.getToken(VoxScriptParser.COND_OR, 0);
	}
	public COND_NOR(): TerminalNode {
		return this.getToken(VoxScriptParser.COND_NOR, 0);
	}
	public COND_XOR(): TerminalNode {
		return this.getToken(VoxScriptParser.COND_XOR, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(VoxScriptParser.COLON, 0);
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_expression;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
}


export class Table_definitionContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LEFT_CURLY(): TerminalNode {
		return this.getToken(VoxScriptParser.LEFT_CURLY, 0);
	}
	public RIGHT_CURLY(): TerminalNode {
		return this.getToken(VoxScriptParser.RIGHT_CURLY, 0);
	}
	public table_member_dict(): Table_member_dictContext {
		return this.getTypedRuleContext(Table_member_dictContext, 0) as Table_member_dictContext;
	}
	public table_member_list(): Table_member_listContext {
		return this.getTypedRuleContext(Table_member_listContext, 0) as Table_member_listContext;
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_table_definition;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterTable_definition) {
	 		listener.enterTable_definition(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitTable_definition) {
	 		listener.exitTable_definition(this);
		}
	}
}


export class Table_member_dictContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public table_member_list(): Table_memberContext[] {
		return this.getTypedRuleContexts(Table_memberContext) as Table_memberContext[];
	}
	public table_member(i: number): Table_memberContext {
		return this.getTypedRuleContext(Table_memberContext, i) as Table_memberContext;
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_table_member_dict;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterTable_member_dict) {
	 		listener.enterTable_member_dict(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitTable_member_dict) {
	 		listener.exitTable_member_dict(this);
		}
	}
}


export class Table_member_listContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_table_member_list;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterTable_member_list) {
	 		listener.enterTable_member_list(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitTable_member_list) {
	 		listener.exitTable_member_list(this);
		}
	}
}


export class Table_memberContext extends ParserRuleContext {
	public _key!: Table_keyContext;
	public _value!: ExpressionContext;
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public table_key(): Table_keyContext {
		return this.getTypedRuleContext(Table_keyContext, 0) as Table_keyContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_table_member;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterTable_member) {
	 		listener.enterTable_member(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitTable_member) {
	 		listener.exitTable_member(this);
		}
	}
}


export class Table_keyContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(VoxScriptParser.ID, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_table_key;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterTable_key) {
	 		listener.enterTable_key(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitTable_key) {
	 		listener.exitTable_key(this);
		}
	}
}


export class LambdaContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public function_params(): Function_paramsContext {
		return this.getTypedRuleContext(Function_paramsContext, 0) as Function_paramsContext;
	}
	public LEFT_CURLY(): TerminalNode {
		return this.getToken(VoxScriptParser.LEFT_CURLY, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public RIGHT_CURLY(): TerminalNode {
		return this.getToken(VoxScriptParser.RIGHT_CURLY, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_lambda;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterLambda) {
	 		listener.enterLambda(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitLambda) {
	 		listener.exitLambda(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(VoxScriptParser.ID, 0);
	}
	public postfix_list(): PostfixContext[] {
		return this.getTypedRuleContexts(PostfixContext) as PostfixContext[];
	}
	public postfix(i: number): PostfixContext {
		return this.getTypedRuleContext(PostfixContext, i) as PostfixContext;
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_identifier;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterIdentifier) {
	 		listener.enterIdentifier(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitIdentifier) {
	 		listener.exitIdentifier(this);
		}
	}
}


export class PostfixContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public id_postfix(): Id_postfixContext {
		return this.getTypedRuleContext(Id_postfixContext, 0) as Id_postfixContext;
	}
	public expression_postfix(): Expression_postfixContext {
		return this.getTypedRuleContext(Expression_postfixContext, 0) as Expression_postfixContext;
	}
	public function_postfix(): Function_postfixContext {
		return this.getTypedRuleContext(Function_postfixContext, 0) as Function_postfixContext;
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_postfix;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterPostfix) {
	 		listener.enterPostfix(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitPostfix) {
	 		listener.exitPostfix(this);
		}
	}
}


export class Id_postfixContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(VoxScriptParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_id_postfix;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterId_postfix) {
	 		listener.enterId_postfix(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitId_postfix) {
	 		listener.exitId_postfix(this);
		}
	}
}


export class Expression_postfixContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LEFT_BRACE(): TerminalNode {
		return this.getToken(VoxScriptParser.LEFT_BRACE, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RIGHT_BRACE(): TerminalNode {
		return this.getToken(VoxScriptParser.RIGHT_BRACE, 0);
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_expression_postfix;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterExpression_postfix) {
	 		listener.enterExpression_postfix(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitExpression_postfix) {
	 		listener.exitExpression_postfix(this);
		}
	}
}


export class Function_postfixContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LEFT_PAREN(): TerminalNode {
		return this.getToken(VoxScriptParser.LEFT_PAREN, 0);
	}
	public RIGHT_PAREN(): TerminalNode {
		return this.getToken(VoxScriptParser.RIGHT_PAREN, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_function_postfix;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterFunction_postfix) {
	 		listener.enterFunction_postfix(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitFunction_postfix) {
	 		listener.exitFunction_postfix(this);
		}
	}
}


export class Function_paramsContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LEFT_PAREN(): TerminalNode {
		return this.getToken(VoxScriptParser.LEFT_PAREN, 0);
	}
	public RIGHT_PAREN(): TerminalNode {
		return this.getToken(VoxScriptParser.RIGHT_PAREN, 0);
	}
	public var_inst_list(): Var_instContext[] {
		return this.getTypedRuleContexts(Var_instContext) as Var_instContext[];
	}
	public var_inst(i: number): Var_instContext {
		return this.getTypedRuleContext(Var_instContext, i) as Var_instContext;
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_function_params;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterFunction_params) {
	 		listener.enterFunction_params(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitFunction_params) {
	 		listener.exitFunction_params(this);
		}
	}
}


export class Var_instContext extends ParserRuleContext {
	constructor(parser?: VoxScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(VoxScriptParser.ID, 0);
	}
	public type_annotation(): Type_annotationContext {
		return this.getTypedRuleContext(Type_annotationContext, 0) as Type_annotationContext;
	}
	public DISCARD(): TerminalNode {
		return this.getToken(VoxScriptParser.DISCARD, 0);
	}
    public get ruleIndex(): number {
    	return VoxScriptParser.RULE_var_inst;
	}
	public enterRule(listener: VoxScriptListener): void {
	    if(listener.enterVar_inst) {
	 		listener.enterVar_inst(this);
		}
	}
	public exitRule(listener: VoxScriptListener): void {
	    if(listener.exitVar_inst) {
	 		listener.exitVar_inst(this);
		}
	}
}
