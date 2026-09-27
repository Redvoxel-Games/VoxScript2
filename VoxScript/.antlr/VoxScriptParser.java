// Generated from c:/Users/Timothy/RiderProjects/VoxScript/VoxScript/VoxScript.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class VoxScriptParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, VAR=9, 
		FUNC=10, FOR=11, FOREACH=12, WHILE=13, IN=14, CONTINUE=15, BREAK=16, IF=17, 
		ELSE=18, NUMBER=19, STRING=20, BOOLEAN=21, NULL=22, TUPLE=23, TRUE=24, 
		FALSE=25, ID=26, SEMICOLON=27, COLON=28, EXCLAMATION=29, QUOTATION=30, 
		LEFT_PAREN=31, RIGHT_PAREN=32, LEFT_BRACE=33, RIGHT_BRACE=34, LEFT_CURLY=35, 
		RIGHT_CURLY=36, UNARY=37, MUL_DIV=38, ADD_SUB=39, COMPARE=40, ASSIGNMENT=41, 
		WS=42, LINE_COMMENT=43, MULTILINE_COMMENT=44, INCREMENT=45, DECREMENT=46, 
		ADD_DIRECT=47, SUB_DIRECT=48, MULT_DIRECT=49, DIV_DIRECT=50, EXPO_DIRECT=51, 
		MOD_DIRECT=52, COND_EQUAL=53, COND_NOTEQUAL=54, COND_GREATERTHAN=55, COND_LESSTHAN=56, 
		COND_GREATEROREQUAL=57, COND_LESSOREQUAL=58, COND_AND=59, COND_OR=60;
	public static final int
		RULE_program = 0, RULE_block = 1, RULE_statement = 2, RULE_print = 3, 
		RULE_var_define = 4, RULE_val_assign = 5, RULE_arith_assign = 6, RULE_val_increment = 7, 
		RULE_func_define = 8, RULE_func_call = 9, RULE_cont_while = 10, RULE_cont_for = 11, 
		RULE_cont_foreach = 12, RULE_cont_return = 13, RULE_cont_continue = 14, 
		RULE_cont_break = 15, RULE_cont_if = 16, RULE_cont_else = 17, RULE_type_annotation = 18, 
		RULE_expression = 19, RULE_table_definition = 20, RULE_table_member_dict = 21, 
		RULE_table_member_list = 22, RULE_table_member = 23, RULE_table_key = 24, 
		RULE_lambda = 25, RULE_identifier = 26, RULE_postfix = 27, RULE_id_postfix = 28, 
		RULE_expression_postfix = 29, RULE_function_postfix = 30, RULE_function_params = 31, 
		RULE_var_inst = 32;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "block", "statement", "print", "var_define", "val_assign", 
			"arith_assign", "val_increment", "func_define", "func_call", "cont_while", 
			"cont_for", "cont_foreach", "cont_return", "cont_continue", "cont_break", 
			"cont_if", "cont_else", "type_annotation", "expression", "table_definition", 
			"table_member_dict", "table_member_list", "table_member", "table_key", 
			"lambda", "identifier", "postfix", "id_postfix", "expression_postfix", 
			"function_postfix", "function_params", "var_inst"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'print'", "'='", "','", "'return'", "'^'", "'?'", "'->'", "'.'", 
			"'var'", "'func'", "'for'", "'foreach'", "'while'", "'in'", "'continue'", 
			"'break'", "'if'", "'else'", null, null, null, "'null'", "'...'", "'true'", 
			"'false'", null, "';'", "':'", "'!'", "'\"'", "'('", "')'", "'['", "']'", 
			"'{'", "'}'", null, null, null, null, null, null, null, null, "'++'", 
			"'--'", "'+='", "'-='", "'*='", "'/='", "'^='", "'%='", "'=='", "'!='", 
			"'>'", "'<'", "'>='", "'<='", "'&&'", "'||'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, "VAR", "FUNC", 
			"FOR", "FOREACH", "WHILE", "IN", "CONTINUE", "BREAK", "IF", "ELSE", "NUMBER", 
			"STRING", "BOOLEAN", "NULL", "TUPLE", "TRUE", "FALSE", "ID", "SEMICOLON", 
			"COLON", "EXCLAMATION", "QUOTATION", "LEFT_PAREN", "RIGHT_PAREN", "LEFT_BRACE", 
			"RIGHT_BRACE", "LEFT_CURLY", "RIGHT_CURLY", "UNARY", "MUL_DIV", "ADD_SUB", 
			"COMPARE", "ASSIGNMENT", "WS", "LINE_COMMENT", "MULTILINE_COMMENT", "INCREMENT", 
			"DECREMENT", "ADD_DIRECT", "SUB_DIRECT", "MULT_DIRECT", "DIV_DIRECT", 
			"EXPO_DIRECT", "MOD_DIRECT", "COND_EQUAL", "COND_NOTEQUAL", "COND_GREATERTHAN", 
			"COND_LESSTHAN", "COND_GREATEROREQUAL", "COND_LESSOREQUAL", "COND_AND", 
			"COND_OR"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "VoxScript.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public VoxScriptParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterProgram(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitProgram(this);
		}
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(66);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BlockContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public List<TerminalNode> SEMICOLON() { return getTokens(VoxScriptParser.SEMICOLON); }
		public TerminalNode SEMICOLON(int i) {
			return getToken(VoxScriptParser.SEMICOLON, i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterBlock(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitBlock(this);
		}
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(74);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 67354130L) != 0)) {
				{
				{
				setState(68);
				statement();
				setState(70);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SEMICOLON) {
					{
					setState(69);
					match(SEMICOLON);
					}
				}

				}
				}
				setState(76);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatementContext extends ParserRuleContext {
		public Var_defineContext var_define() {
			return getRuleContext(Var_defineContext.class,0);
		}
		public Val_assignContext val_assign() {
			return getRuleContext(Val_assignContext.class,0);
		}
		public Arith_assignContext arith_assign() {
			return getRuleContext(Arith_assignContext.class,0);
		}
		public Val_incrementContext val_increment() {
			return getRuleContext(Val_incrementContext.class,0);
		}
		public Func_callContext func_call() {
			return getRuleContext(Func_callContext.class,0);
		}
		public Func_defineContext func_define() {
			return getRuleContext(Func_defineContext.class,0);
		}
		public Cont_returnContext cont_return() {
			return getRuleContext(Cont_returnContext.class,0);
		}
		public Cont_continueContext cont_continue() {
			return getRuleContext(Cont_continueContext.class,0);
		}
		public Cont_breakContext cont_break() {
			return getRuleContext(Cont_breakContext.class,0);
		}
		public Cont_whileContext cont_while() {
			return getRuleContext(Cont_whileContext.class,0);
		}
		public Cont_forContext cont_for() {
			return getRuleContext(Cont_forContext.class,0);
		}
		public Cont_foreachContext cont_foreach() {
			return getRuleContext(Cont_foreachContext.class,0);
		}
		public Cont_ifContext cont_if() {
			return getRuleContext(Cont_ifContext.class,0);
		}
		public PrintContext print() {
			return getRuleContext(PrintContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitStatement(this);
		}
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_statement);
		try {
			setState(91);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(77);
				var_define();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(78);
				val_assign();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(79);
				arith_assign();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(80);
				val_increment();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(81);
				func_call();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(82);
				func_define();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(83);
				cont_return();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(84);
				cont_continue();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(85);
				cont_break();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(86);
				cont_while();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(87);
				cont_for();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(88);
				cont_foreach();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(89);
				cont_if();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(90);
				print();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrintContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public PrintContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_print; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterPrint(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitPrint(this);
		}
	}

	public final PrintContext print() throws RecognitionException {
		PrintContext _localctx = new PrintContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_print);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(93);
			match(T__0);
			setState(94);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Var_defineContext extends ParserRuleContext {
		public TerminalNode VAR() { return getToken(VoxScriptParser.VAR, 0); }
		public Var_instContext var_inst() {
			return getRuleContext(Var_instContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Var_defineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_var_define; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterVar_define(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitVar_define(this);
		}
	}

	public final Var_defineContext var_define() throws RecognitionException {
		Var_defineContext _localctx = new Var_defineContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_var_define);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(96);
			match(VAR);
			setState(97);
			var_inst();
			setState(98);
			match(T__1);
			setState(99);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Val_assignContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Val_assignContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_val_assign; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterVal_assign(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitVal_assign(this);
		}
	}

	public final Val_assignContext val_assign() throws RecognitionException {
		Val_assignContext _localctx = new Val_assignContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_val_assign);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(101);
			identifier();
			setState(102);
			match(T__1);
			setState(103);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Arith_assignContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode ASSIGNMENT() { return getToken(VoxScriptParser.ASSIGNMENT, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Arith_assignContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arith_assign; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterArith_assign(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitArith_assign(this);
		}
	}

	public final Arith_assignContext arith_assign() throws RecognitionException {
		Arith_assignContext _localctx = new Arith_assignContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_arith_assign);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(105);
			identifier();
			setState(106);
			match(ASSIGNMENT);
			setState(107);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Val_incrementContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode INCREMENT() { return getToken(VoxScriptParser.INCREMENT, 0); }
		public TerminalNode DECREMENT() { return getToken(VoxScriptParser.DECREMENT, 0); }
		public Val_incrementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_val_increment; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterVal_increment(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitVal_increment(this);
		}
	}

	public final Val_incrementContext val_increment() throws RecognitionException {
		Val_incrementContext _localctx = new Val_incrementContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_val_increment);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(109);
			identifier();
			setState(110);
			_la = _input.LA(1);
			if ( !(_la==INCREMENT || _la==DECREMENT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Func_defineContext extends ParserRuleContext {
		public TerminalNode FUNC() { return getToken(VoxScriptParser.FUNC, 0); }
		public TerminalNode ID() { return getToken(VoxScriptParser.ID, 0); }
		public Function_paramsContext function_params() {
			return getRuleContext(Function_paramsContext.class,0);
		}
		public TerminalNode LEFT_CURLY() { return getToken(VoxScriptParser.LEFT_CURLY, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode RIGHT_CURLY() { return getToken(VoxScriptParser.RIGHT_CURLY, 0); }
		public Type_annotationContext type_annotation() {
			return getRuleContext(Type_annotationContext.class,0);
		}
		public Func_defineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_func_define; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterFunc_define(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitFunc_define(this);
		}
	}

	public final Func_defineContext func_define() throws RecognitionException {
		Func_defineContext _localctx = new Func_defineContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_func_define);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(112);
			match(FUNC);
			setState(113);
			match(ID);
			setState(114);
			function_params();
			setState(116);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(115);
				type_annotation();
				}
			}

			setState(118);
			match(LEFT_CURLY);
			setState(119);
			block();
			setState(120);
			match(RIGHT_CURLY);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Func_callContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public Function_postfixContext function_postfix() {
			return getRuleContext(Function_postfixContext.class,0);
		}
		public Func_callContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_func_call; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterFunc_call(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitFunc_call(this);
		}
	}

	public final Func_callContext func_call() throws RecognitionException {
		Func_callContext _localctx = new Func_callContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_func_call);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(122);
			identifier();
			setState(123);
			function_postfix();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Cont_whileContext extends ParserRuleContext {
		public TerminalNode WHILE() { return getToken(VoxScriptParser.WHILE, 0); }
		public TerminalNode LEFT_PAREN() { return getToken(VoxScriptParser.LEFT_PAREN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RIGHT_PAREN() { return getToken(VoxScriptParser.RIGHT_PAREN, 0); }
		public TerminalNode LEFT_CURLY() { return getToken(VoxScriptParser.LEFT_CURLY, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode RIGHT_CURLY() { return getToken(VoxScriptParser.RIGHT_CURLY, 0); }
		public Cont_whileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cont_while; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterCont_while(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitCont_while(this);
		}
	}

	public final Cont_whileContext cont_while() throws RecognitionException {
		Cont_whileContext _localctx = new Cont_whileContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_cont_while);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(125);
			match(WHILE);
			setState(126);
			match(LEFT_PAREN);
			setState(127);
			expression(0);
			setState(128);
			match(RIGHT_PAREN);
			setState(129);
			match(LEFT_CURLY);
			setState(130);
			block();
			setState(131);
			match(RIGHT_CURLY);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Cont_forContext extends ParserRuleContext {
		public TerminalNode FOR() { return getToken(VoxScriptParser.FOR, 0); }
		public TerminalNode LEFT_PAREN() { return getToken(VoxScriptParser.LEFT_PAREN, 0); }
		public TerminalNode ID() { return getToken(VoxScriptParser.ID, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode RIGHT_PAREN() { return getToken(VoxScriptParser.RIGHT_PAREN, 0); }
		public TerminalNode LEFT_CURLY() { return getToken(VoxScriptParser.LEFT_CURLY, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode RIGHT_CURLY() { return getToken(VoxScriptParser.RIGHT_CURLY, 0); }
		public Cont_forContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cont_for; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterCont_for(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitCont_for(this);
		}
	}

	public final Cont_forContext cont_for() throws RecognitionException {
		Cont_forContext _localctx = new Cont_forContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_cont_for);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(133);
			match(FOR);
			setState(134);
			match(LEFT_PAREN);
			setState(135);
			match(ID);
			setState(138);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__1) {
				{
				setState(136);
				match(T__1);
				setState(137);
				expression(0);
				}
			}

			setState(140);
			match(T__2);
			setState(141);
			expression(0);
			setState(144);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__2) {
				{
				setState(142);
				match(T__2);
				setState(143);
				expression(0);
				}
			}

			setState(146);
			match(RIGHT_PAREN);
			setState(147);
			match(LEFT_CURLY);
			setState(148);
			block();
			setState(149);
			match(RIGHT_CURLY);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Cont_foreachContext extends ParserRuleContext {
		public TerminalNode FOREACH() { return getToken(VoxScriptParser.FOREACH, 0); }
		public TerminalNode LEFT_PAREN() { return getToken(VoxScriptParser.LEFT_PAREN, 0); }
		public List<Var_instContext> var_inst() {
			return getRuleContexts(Var_instContext.class);
		}
		public Var_instContext var_inst(int i) {
			return getRuleContext(Var_instContext.class,i);
		}
		public TerminalNode IN() { return getToken(VoxScriptParser.IN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RIGHT_PAREN() { return getToken(VoxScriptParser.RIGHT_PAREN, 0); }
		public TerminalNode LEFT_CURLY() { return getToken(VoxScriptParser.LEFT_CURLY, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode RIGHT_CURLY() { return getToken(VoxScriptParser.RIGHT_CURLY, 0); }
		public Cont_foreachContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cont_foreach; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterCont_foreach(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitCont_foreach(this);
		}
	}

	public final Cont_foreachContext cont_foreach() throws RecognitionException {
		Cont_foreachContext _localctx = new Cont_foreachContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_cont_foreach);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(151);
			match(FOREACH);
			setState(152);
			match(LEFT_PAREN);
			setState(153);
			var_inst();
			setState(154);
			match(T__2);
			setState(155);
			var_inst();
			setState(156);
			match(IN);
			setState(157);
			expression(0);
			setState(158);
			match(RIGHT_PAREN);
			setState(159);
			match(LEFT_CURLY);
			setState(160);
			block();
			setState(161);
			match(RIGHT_CURLY);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Cont_returnContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Cont_returnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cont_return; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterCont_return(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitCont_return(this);
		}
	}

	public final Cont_returnContext cont_return() throws RecognitionException {
		Cont_returnContext _localctx = new Cont_returnContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_cont_return);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(163);
			match(T__3);
			setState(165);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				{
				setState(164);
				expression(0);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Cont_continueContext extends ParserRuleContext {
		public TerminalNode CONTINUE() { return getToken(VoxScriptParser.CONTINUE, 0); }
		public Cont_continueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cont_continue; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterCont_continue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitCont_continue(this);
		}
	}

	public final Cont_continueContext cont_continue() throws RecognitionException {
		Cont_continueContext _localctx = new Cont_continueContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_cont_continue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(167);
			match(CONTINUE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Cont_breakContext extends ParserRuleContext {
		public TerminalNode BREAK() { return getToken(VoxScriptParser.BREAK, 0); }
		public Cont_breakContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cont_break; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterCont_break(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitCont_break(this);
		}
	}

	public final Cont_breakContext cont_break() throws RecognitionException {
		Cont_breakContext _localctx = new Cont_breakContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_cont_break);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(169);
			match(BREAK);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Cont_ifContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(VoxScriptParser.IF, 0); }
		public TerminalNode LEFT_PAREN() { return getToken(VoxScriptParser.LEFT_PAREN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RIGHT_PAREN() { return getToken(VoxScriptParser.RIGHT_PAREN, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode LEFT_CURLY() { return getToken(VoxScriptParser.LEFT_CURLY, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode RIGHT_CURLY() { return getToken(VoxScriptParser.RIGHT_CURLY, 0); }
		public Cont_elseContext cont_else() {
			return getRuleContext(Cont_elseContext.class,0);
		}
		public Cont_ifContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cont_if; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterCont_if(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitCont_if(this);
		}
	}

	public final Cont_ifContext cont_if() throws RecognitionException {
		Cont_ifContext _localctx = new Cont_ifContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_cont_if);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(171);
			match(IF);
			setState(172);
			match(LEFT_PAREN);
			setState(173);
			expression(0);
			setState(174);
			match(RIGHT_PAREN);
			setState(180);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
			case T__3:
			case VAR:
			case FUNC:
			case FOR:
			case FOREACH:
			case WHILE:
			case CONTINUE:
			case BREAK:
			case IF:
			case ID:
				{
				setState(175);
				statement();
				}
				break;
			case LEFT_CURLY:
				{
				setState(176);
				match(LEFT_CURLY);
				setState(177);
				block();
				setState(178);
				match(RIGHT_CURLY);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(183);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				{
				setState(182);
				cont_else();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Cont_elseContext extends ParserRuleContext {
		public TerminalNode ELSE() { return getToken(VoxScriptParser.ELSE, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode LEFT_CURLY() { return getToken(VoxScriptParser.LEFT_CURLY, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode RIGHT_CURLY() { return getToken(VoxScriptParser.RIGHT_CURLY, 0); }
		public Cont_elseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cont_else; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterCont_else(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitCont_else(this);
		}
	}

	public final Cont_elseContext cont_else() throws RecognitionException {
		Cont_elseContext _localctx = new Cont_elseContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_cont_else);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(185);
			match(ELSE);
			setState(191);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
			case T__3:
			case VAR:
			case FUNC:
			case FOR:
			case FOREACH:
			case WHILE:
			case CONTINUE:
			case BREAK:
			case IF:
			case ID:
				{
				setState(186);
				statement();
				}
				break;
			case LEFT_CURLY:
				{
				setState(187);
				match(LEFT_CURLY);
				setState(188);
				block();
				setState(189);
				match(RIGHT_CURLY);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Type_annotationContext extends ParserRuleContext {
		public TerminalNode COLON() { return getToken(VoxScriptParser.COLON, 0); }
		public TerminalNode ID() { return getToken(VoxScriptParser.ID, 0); }
		public Type_annotationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type_annotation; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterType_annotation(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitType_annotation(this);
		}
	}

	public final Type_annotationContext type_annotation() throws RecognitionException {
		Type_annotationContext _localctx = new Type_annotationContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_type_annotation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(193);
			match(COLON);
			setState(194);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionContext extends ParserRuleContext {
		public ExpressionContext left;
		public ExpressionContext condition;
		public ExpressionContext paren;
		public Token unary;
		public ExpressionContext expr;
		public Token op;
		public ExpressionContext right;
		public ExpressionContext primary;
		public ExpressionContext secondary;
		public TerminalNode LEFT_PAREN() { return getToken(VoxScriptParser.LEFT_PAREN, 0); }
		public TerminalNode RIGHT_PAREN() { return getToken(VoxScriptParser.RIGHT_PAREN, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode UNARY() { return getToken(VoxScriptParser.UNARY, 0); }
		public TerminalNode NUMBER() { return getToken(VoxScriptParser.NUMBER, 0); }
		public TerminalNode STRING() { return getToken(VoxScriptParser.STRING, 0); }
		public TerminalNode BOOLEAN() { return getToken(VoxScriptParser.BOOLEAN, 0); }
		public TerminalNode NULL() { return getToken(VoxScriptParser.NULL, 0); }
		public Table_definitionContext table_definition() {
			return getRuleContext(Table_definitionContext.class,0);
		}
		public Func_callContext func_call() {
			return getRuleContext(Func_callContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public LambdaContext lambda() {
			return getRuleContext(LambdaContext.class,0);
		}
		public TerminalNode MUL_DIV() { return getToken(VoxScriptParser.MUL_DIV, 0); }
		public TerminalNode ADD_SUB() { return getToken(VoxScriptParser.ADD_SUB, 0); }
		public TerminalNode COND_AND() { return getToken(VoxScriptParser.COND_AND, 0); }
		public TerminalNode COND_OR() { return getToken(VoxScriptParser.COND_OR, 0); }
		public TerminalNode COMPARE() { return getToken(VoxScriptParser.COMPARE, 0); }
		public TerminalNode COLON() { return getToken(VoxScriptParser.COLON, 0); }
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitExpression(this);
		}
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 38;
		enterRecursionRule(_localctx, 38, RULE_expression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(211);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				{
				setState(197);
				match(LEFT_PAREN);
				setState(198);
				((ExpressionContext)_localctx).paren = expression(0);
				setState(199);
				match(RIGHT_PAREN);
				}
				break;
			case 2:
				{
				setState(201);
				((ExpressionContext)_localctx).unary = match(UNARY);
				setState(202);
				((ExpressionContext)_localctx).expr = expression(16);
				}
				break;
			case 3:
				{
				setState(203);
				match(NUMBER);
				}
				break;
			case 4:
				{
				setState(204);
				match(STRING);
				}
				break;
			case 5:
				{
				setState(205);
				match(BOOLEAN);
				}
				break;
			case 6:
				{
				setState(206);
				match(NULL);
				}
				break;
			case 7:
				{
				setState(207);
				table_definition();
				}
				break;
			case 8:
				{
				setState(208);
				func_call();
				}
				break;
			case 9:
				{
				setState(209);
				identifier();
				}
				break;
			case 10:
				{
				setState(210);
				lambda();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(239);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(237);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx.left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(213);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(214);
						((ExpressionContext)_localctx).op = match(T__4);
						setState(215);
						((ExpressionContext)_localctx).right = expression(16);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx.left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(216);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(217);
						((ExpressionContext)_localctx).op = match(MUL_DIV);
						setState(218);
						((ExpressionContext)_localctx).right = expression(15);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx.left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(219);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(220);
						((ExpressionContext)_localctx).op = match(ADD_SUB);
						setState(221);
						((ExpressionContext)_localctx).right = expression(14);
						}
						break;
					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx.left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(222);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(223);
						((ExpressionContext)_localctx).op = match(COND_AND);
						setState(224);
						((ExpressionContext)_localctx).right = expression(13);
						}
						break;
					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx.left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(225);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(226);
						((ExpressionContext)_localctx).op = match(COND_OR);
						setState(227);
						((ExpressionContext)_localctx).right = expression(12);
						}
						break;
					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx.left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(228);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(229);
						((ExpressionContext)_localctx).op = match(COMPARE);
						setState(230);
						((ExpressionContext)_localctx).right = expression(11);
						}
						break;
					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						_localctx.condition = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(231);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(232);
						match(T__5);
						setState(233);
						((ExpressionContext)_localctx).primary = expression(0);
						setState(234);
						match(COLON);
						setState(235);
						((ExpressionContext)_localctx).secondary = expression(10);
						}
						break;
					}
					} 
				}
				setState(241);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Table_definitionContext extends ParserRuleContext {
		public TerminalNode LEFT_CURLY() { return getToken(VoxScriptParser.LEFT_CURLY, 0); }
		public TerminalNode RIGHT_CURLY() { return getToken(VoxScriptParser.RIGHT_CURLY, 0); }
		public Table_member_dictContext table_member_dict() {
			return getRuleContext(Table_member_dictContext.class,0);
		}
		public Table_member_listContext table_member_list() {
			return getRuleContext(Table_member_listContext.class,0);
		}
		public Table_definitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_table_definition; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterTable_definition(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitTable_definition(this);
		}
	}

	public final Table_definitionContext table_definition() throws RecognitionException {
		Table_definitionContext _localctx = new Table_definitionContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_table_definition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(242);
			match(LEFT_CURLY);
			setState(245);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				{
				setState(243);
				table_member_dict();
				}
				break;
			case 2:
				{
				setState(244);
				table_member_list();
				}
				break;
			}
			setState(247);
			match(RIGHT_CURLY);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Table_member_dictContext extends ParserRuleContext {
		public List<Table_memberContext> table_member() {
			return getRuleContexts(Table_memberContext.class);
		}
		public Table_memberContext table_member(int i) {
			return getRuleContext(Table_memberContext.class,i);
		}
		public Table_member_dictContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_table_member_dict; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterTable_member_dict(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitTable_member_dict(this);
		}
	}

	public final Table_member_dictContext table_member_dict() throws RecognitionException {
		Table_member_dictContext _localctx = new Table_member_dictContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_table_member_dict);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(249);
			table_member();
			setState(254);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(250);
					match(T__2);
					setState(251);
					table_member();
					}
					} 
				}
				setState(256);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
			}
			setState(258);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__2) {
				{
				setState(257);
				match(T__2);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Table_member_listContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public Table_member_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_table_member_list; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterTable_member_list(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitTable_member_list(this);
		}
	}

	public final Table_member_listContext table_member_list() throws RecognitionException {
		Table_member_listContext _localctx = new Table_member_listContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_table_member_list);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(260);
			expression(0);
			setState(265);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(261);
					match(T__2);
					setState(262);
					expression(0);
					}
					} 
				}
				setState(267);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			}
			setState(269);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__2) {
				{
				setState(268);
				match(T__2);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Table_memberContext extends ParserRuleContext {
		public Table_keyContext key;
		public ExpressionContext value;
		public Table_keyContext table_key() {
			return getRuleContext(Table_keyContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Table_memberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_table_member; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterTable_member(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitTable_member(this);
		}
	}

	public final Table_memberContext table_member() throws RecognitionException {
		Table_memberContext _localctx = new Table_memberContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_table_member);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(271);
			((Table_memberContext)_localctx).key = table_key();
			setState(272);
			match(T__1);
			setState(273);
			((Table_memberContext)_localctx).value = expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Table_keyContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(VoxScriptParser.ID, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Table_keyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_table_key; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterTable_key(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitTable_key(this);
		}
	}

	public final Table_keyContext table_key() throws RecognitionException {
		Table_keyContext _localctx = new Table_keyContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_table_key);
		try {
			setState(277);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(275);
				match(ID);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(276);
				expression(0);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LambdaContext extends ParserRuleContext {
		public Function_paramsContext function_params() {
			return getRuleContext(Function_paramsContext.class,0);
		}
		public TerminalNode LEFT_CURLY() { return getToken(VoxScriptParser.LEFT_CURLY, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode RIGHT_CURLY() { return getToken(VoxScriptParser.RIGHT_CURLY, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public LambdaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lambda; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterLambda(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitLambda(this);
		}
	}

	public final LambdaContext lambda() throws RecognitionException {
		LambdaContext _localctx = new LambdaContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_lambda);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(279);
			function_params();
			setState(280);
			match(T__6);
			setState(286);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LEFT_CURLY:
				{
				setState(281);
				match(LEFT_CURLY);
				setState(282);
				block();
				setState(283);
				match(RIGHT_CURLY);
				}
				break;
			case T__0:
			case T__3:
			case VAR:
			case FUNC:
			case FOR:
			case FOREACH:
			case WHILE:
			case CONTINUE:
			case BREAK:
			case IF:
			case ID:
				{
				setState(285);
				statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IdentifierContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(VoxScriptParser.ID, 0); }
		public List<PostfixContext> postfix() {
			return getRuleContexts(PostfixContext.class);
		}
		public PostfixContext postfix(int i) {
			return getRuleContext(PostfixContext.class,i);
		}
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterIdentifier(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitIdentifier(this);
		}
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_identifier);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(288);
			match(ID);
			setState(292);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(289);
					postfix();
					}
					} 
				}
				setState(294);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PostfixContext extends ParserRuleContext {
		public Id_postfixContext id_postfix() {
			return getRuleContext(Id_postfixContext.class,0);
		}
		public Expression_postfixContext expression_postfix() {
			return getRuleContext(Expression_postfixContext.class,0);
		}
		public Function_postfixContext function_postfix() {
			return getRuleContext(Function_postfixContext.class,0);
		}
		public PostfixContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_postfix; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterPostfix(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitPostfix(this);
		}
	}

	public final PostfixContext postfix() throws RecognitionException {
		PostfixContext _localctx = new PostfixContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_postfix);
		try {
			setState(298);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__7:
				enterOuterAlt(_localctx, 1);
				{
				setState(295);
				id_postfix();
				}
				break;
			case LEFT_BRACE:
				enterOuterAlt(_localctx, 2);
				{
				setState(296);
				expression_postfix();
				}
				break;
			case LEFT_PAREN:
				enterOuterAlt(_localctx, 3);
				{
				setState(297);
				function_postfix();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Id_postfixContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(VoxScriptParser.ID, 0); }
		public Id_postfixContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_id_postfix; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterId_postfix(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitId_postfix(this);
		}
	}

	public final Id_postfixContext id_postfix() throws RecognitionException {
		Id_postfixContext _localctx = new Id_postfixContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_id_postfix);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(300);
			match(T__7);
			setState(301);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Expression_postfixContext extends ParserRuleContext {
		public TerminalNode LEFT_BRACE() { return getToken(VoxScriptParser.LEFT_BRACE, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RIGHT_BRACE() { return getToken(VoxScriptParser.RIGHT_BRACE, 0); }
		public Expression_postfixContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression_postfix; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterExpression_postfix(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitExpression_postfix(this);
		}
	}

	public final Expression_postfixContext expression_postfix() throws RecognitionException {
		Expression_postfixContext _localctx = new Expression_postfixContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_expression_postfix);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(303);
			match(LEFT_BRACE);
			setState(304);
			expression(0);
			setState(305);
			match(RIGHT_BRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Function_postfixContext extends ParserRuleContext {
		public TerminalNode LEFT_PAREN() { return getToken(VoxScriptParser.LEFT_PAREN, 0); }
		public TerminalNode RIGHT_PAREN() { return getToken(VoxScriptParser.RIGHT_PAREN, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public Function_postfixContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function_postfix; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterFunction_postfix(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitFunction_postfix(this);
		}
	}

	public final Function_postfixContext function_postfix() throws RecognitionException {
		Function_postfixContext _localctx = new Function_postfixContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_function_postfix);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(307);
			match(LEFT_PAREN);
			setState(316);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 174021148672L) != 0)) {
				{
				setState(308);
				expression(0);
				setState(313);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__2) {
					{
					{
					setState(309);
					match(T__2);
					setState(310);
					expression(0);
					}
					}
					setState(315);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(318);
			match(RIGHT_PAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Function_paramsContext extends ParserRuleContext {
		public TerminalNode LEFT_PAREN() { return getToken(VoxScriptParser.LEFT_PAREN, 0); }
		public TerminalNode RIGHT_PAREN() { return getToken(VoxScriptParser.RIGHT_PAREN, 0); }
		public List<Var_instContext> var_inst() {
			return getRuleContexts(Var_instContext.class);
		}
		public Var_instContext var_inst(int i) {
			return getRuleContext(Var_instContext.class,i);
		}
		public Function_paramsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function_params; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterFunction_params(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitFunction_params(this);
		}
	}

	public final Function_paramsContext function_params() throws RecognitionException {
		Function_paramsContext _localctx = new Function_paramsContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_function_params);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(320);
			match(LEFT_PAREN);
			setState(329);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==TUPLE || _la==ID) {
				{
				setState(321);
				var_inst();
				setState(326);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__2) {
					{
					{
					setState(322);
					match(T__2);
					setState(323);
					var_inst();
					}
					}
					setState(328);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(331);
			match(RIGHT_PAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Var_instContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(VoxScriptParser.ID, 0); }
		public TerminalNode TUPLE() { return getToken(VoxScriptParser.TUPLE, 0); }
		public Type_annotationContext type_annotation() {
			return getRuleContext(Type_annotationContext.class,0);
		}
		public Var_instContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_var_inst; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).enterVar_inst(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof VoxScriptListener ) ((VoxScriptListener)listener).exitVar_inst(this);
		}
	}

	public final Var_instContext var_inst() throws RecognitionException {
		Var_instContext _localctx = new Var_instContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_var_inst);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(333);
			_la = _input.LA(1);
			if ( !(_la==TUPLE || _la==ID) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(335);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(334);
				type_annotation();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 19:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 15);
		case 1:
			return precpred(_ctx, 14);
		case 2:
			return precpred(_ctx, 13);
		case 3:
			return precpred(_ctx, 12);
		case 4:
			return precpred(_ctx, 11);
		case 5:
			return precpred(_ctx, 10);
		case 6:
			return precpred(_ctx, 9);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001<\u0152\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007\u001b"+
		"\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002\u001e\u0007\u001e"+
		"\u0002\u001f\u0007\u001f\u0002 \u0007 \u0001\u0000\u0001\u0000\u0001\u0001"+
		"\u0001\u0001\u0003\u0001G\b\u0001\u0005\u0001I\b\u0001\n\u0001\f\u0001"+
		"L\t\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002\\\b\u0002\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\b\u0001\b\u0001\b\u0001\b\u0003\bu\b\b\u0001\b\u0001\b\u0001\b"+
		"\u0001\b\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0003\u000b\u008b\b\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0003\u000b\u0091\b\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001"+
		"\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0003"+
		"\r\u00a6\b\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0003\u0010\u00b5\b\u0010\u0001\u0010\u0003\u0010"+
		"\u00b8\b\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011"+
		"\u0001\u0011\u0003\u0011\u00c0\b\u0011\u0001\u0012\u0001\u0012\u0001\u0012"+
		"\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013"+
		"\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013"+
		"\u0001\u0013\u0001\u0013\u0001\u0013\u0003\u0013\u00d4\b\u0013\u0001\u0013"+
		"\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013"+
		"\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013"+
		"\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013"+
		"\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0005\u0013"+
		"\u00ee\b\u0013\n\u0013\f\u0013\u00f1\t\u0013\u0001\u0014\u0001\u0014\u0001"+
		"\u0014\u0003\u0014\u00f6\b\u0014\u0001\u0014\u0001\u0014\u0001\u0015\u0001"+
		"\u0015\u0001\u0015\u0005\u0015\u00fd\b\u0015\n\u0015\f\u0015\u0100\t\u0015"+
		"\u0001\u0015\u0003\u0015\u0103\b\u0015\u0001\u0016\u0001\u0016\u0001\u0016"+
		"\u0005\u0016\u0108\b\u0016\n\u0016\f\u0016\u010b\t\u0016\u0001\u0016\u0003"+
		"\u0016\u010e\b\u0016\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001"+
		"\u0018\u0001\u0018\u0003\u0018\u0116\b\u0018\u0001\u0019\u0001\u0019\u0001"+
		"\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0001\u0019\u0003\u0019\u011f"+
		"\b\u0019\u0001\u001a\u0001\u001a\u0005\u001a\u0123\b\u001a\n\u001a\f\u001a"+
		"\u0126\t\u001a\u0001\u001b\u0001\u001b\u0001\u001b\u0003\u001b\u012b\b"+
		"\u001b\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001d\u0001\u001d\u0001"+
		"\u001d\u0001\u001d\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e\u0005"+
		"\u001e\u0138\b\u001e\n\u001e\f\u001e\u013b\t\u001e\u0003\u001e\u013d\b"+
		"\u001e\u0001\u001e\u0001\u001e\u0001\u001f\u0001\u001f\u0001\u001f\u0001"+
		"\u001f\u0005\u001f\u0145\b\u001f\n\u001f\f\u001f\u0148\t\u001f\u0003\u001f"+
		"\u014a\b\u001f\u0001\u001f\u0001\u001f\u0001 \u0001 \u0003 \u0150\b \u0001"+
		" \u0000\u0001&!\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014"+
		"\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@\u0000\u0002\u0001\u0000"+
		"-.\u0002\u0000\u0017\u0017\u001a\u001a\u0166\u0000B\u0001\u0000\u0000"+
		"\u0000\u0002J\u0001\u0000\u0000\u0000\u0004[\u0001\u0000\u0000\u0000\u0006"+
		"]\u0001\u0000\u0000\u0000\b`\u0001\u0000\u0000\u0000\ne\u0001\u0000\u0000"+
		"\u0000\fi\u0001\u0000\u0000\u0000\u000em\u0001\u0000\u0000\u0000\u0010"+
		"p\u0001\u0000\u0000\u0000\u0012z\u0001\u0000\u0000\u0000\u0014}\u0001"+
		"\u0000\u0000\u0000\u0016\u0085\u0001\u0000\u0000\u0000\u0018\u0097\u0001"+
		"\u0000\u0000\u0000\u001a\u00a3\u0001\u0000\u0000\u0000\u001c\u00a7\u0001"+
		"\u0000\u0000\u0000\u001e\u00a9\u0001\u0000\u0000\u0000 \u00ab\u0001\u0000"+
		"\u0000\u0000\"\u00b9\u0001\u0000\u0000\u0000$\u00c1\u0001\u0000\u0000"+
		"\u0000&\u00d3\u0001\u0000\u0000\u0000(\u00f2\u0001\u0000\u0000\u0000*"+
		"\u00f9\u0001\u0000\u0000\u0000,\u0104\u0001\u0000\u0000\u0000.\u010f\u0001"+
		"\u0000\u0000\u00000\u0115\u0001\u0000\u0000\u00002\u0117\u0001\u0000\u0000"+
		"\u00004\u0120\u0001\u0000\u0000\u00006\u012a\u0001\u0000\u0000\u00008"+
		"\u012c\u0001\u0000\u0000\u0000:\u012f\u0001\u0000\u0000\u0000<\u0133\u0001"+
		"\u0000\u0000\u0000>\u0140\u0001\u0000\u0000\u0000@\u014d\u0001\u0000\u0000"+
		"\u0000BC\u0003\u0002\u0001\u0000C\u0001\u0001\u0000\u0000\u0000DF\u0003"+
		"\u0004\u0002\u0000EG\u0005\u001b\u0000\u0000FE\u0001\u0000\u0000\u0000"+
		"FG\u0001\u0000\u0000\u0000GI\u0001\u0000\u0000\u0000HD\u0001\u0000\u0000"+
		"\u0000IL\u0001\u0000\u0000\u0000JH\u0001\u0000\u0000\u0000JK\u0001\u0000"+
		"\u0000\u0000K\u0003\u0001\u0000\u0000\u0000LJ\u0001\u0000\u0000\u0000"+
		"M\\\u0003\b\u0004\u0000N\\\u0003\n\u0005\u0000O\\\u0003\f\u0006\u0000"+
		"P\\\u0003\u000e\u0007\u0000Q\\\u0003\u0012\t\u0000R\\\u0003\u0010\b\u0000"+
		"S\\\u0003\u001a\r\u0000T\\\u0003\u001c\u000e\u0000U\\\u0003\u001e\u000f"+
		"\u0000V\\\u0003\u0014\n\u0000W\\\u0003\u0016\u000b\u0000X\\\u0003\u0018"+
		"\f\u0000Y\\\u0003 \u0010\u0000Z\\\u0003\u0006\u0003\u0000[M\u0001\u0000"+
		"\u0000\u0000[N\u0001\u0000\u0000\u0000[O\u0001\u0000\u0000\u0000[P\u0001"+
		"\u0000\u0000\u0000[Q\u0001\u0000\u0000\u0000[R\u0001\u0000\u0000\u0000"+
		"[S\u0001\u0000\u0000\u0000[T\u0001\u0000\u0000\u0000[U\u0001\u0000\u0000"+
		"\u0000[V\u0001\u0000\u0000\u0000[W\u0001\u0000\u0000\u0000[X\u0001\u0000"+
		"\u0000\u0000[Y\u0001\u0000\u0000\u0000[Z\u0001\u0000\u0000\u0000\\\u0005"+
		"\u0001\u0000\u0000\u0000]^\u0005\u0001\u0000\u0000^_\u0003&\u0013\u0000"+
		"_\u0007\u0001\u0000\u0000\u0000`a\u0005\t\u0000\u0000ab\u0003@ \u0000"+
		"bc\u0005\u0002\u0000\u0000cd\u0003&\u0013\u0000d\t\u0001\u0000\u0000\u0000"+
		"ef\u00034\u001a\u0000fg\u0005\u0002\u0000\u0000gh\u0003&\u0013\u0000h"+
		"\u000b\u0001\u0000\u0000\u0000ij\u00034\u001a\u0000jk\u0005)\u0000\u0000"+
		"kl\u0003&\u0013\u0000l\r\u0001\u0000\u0000\u0000mn\u00034\u001a\u0000"+
		"no\u0007\u0000\u0000\u0000o\u000f\u0001\u0000\u0000\u0000pq\u0005\n\u0000"+
		"\u0000qr\u0005\u001a\u0000\u0000rt\u0003>\u001f\u0000su\u0003$\u0012\u0000"+
		"ts\u0001\u0000\u0000\u0000tu\u0001\u0000\u0000\u0000uv\u0001\u0000\u0000"+
		"\u0000vw\u0005#\u0000\u0000wx\u0003\u0002\u0001\u0000xy\u0005$\u0000\u0000"+
		"y\u0011\u0001\u0000\u0000\u0000z{\u00034\u001a\u0000{|\u0003<\u001e\u0000"+
		"|\u0013\u0001\u0000\u0000\u0000}~\u0005\r\u0000\u0000~\u007f\u0005\u001f"+
		"\u0000\u0000\u007f\u0080\u0003&\u0013\u0000\u0080\u0081\u0005 \u0000\u0000"+
		"\u0081\u0082\u0005#\u0000\u0000\u0082\u0083\u0003\u0002\u0001\u0000\u0083"+
		"\u0084\u0005$\u0000\u0000\u0084\u0015\u0001\u0000\u0000\u0000\u0085\u0086"+
		"\u0005\u000b\u0000\u0000\u0086\u0087\u0005\u001f\u0000\u0000\u0087\u008a"+
		"\u0005\u001a\u0000\u0000\u0088\u0089\u0005\u0002\u0000\u0000\u0089\u008b"+
		"\u0003&\u0013\u0000\u008a\u0088\u0001\u0000\u0000\u0000\u008a\u008b\u0001"+
		"\u0000\u0000\u0000\u008b\u008c\u0001\u0000\u0000\u0000\u008c\u008d\u0005"+
		"\u0003\u0000\u0000\u008d\u0090\u0003&\u0013\u0000\u008e\u008f\u0005\u0003"+
		"\u0000\u0000\u008f\u0091\u0003&\u0013\u0000\u0090\u008e\u0001\u0000\u0000"+
		"\u0000\u0090\u0091\u0001\u0000\u0000\u0000\u0091\u0092\u0001\u0000\u0000"+
		"\u0000\u0092\u0093\u0005 \u0000\u0000\u0093\u0094\u0005#\u0000\u0000\u0094"+
		"\u0095\u0003\u0002\u0001\u0000\u0095\u0096\u0005$\u0000\u0000\u0096\u0017"+
		"\u0001\u0000\u0000\u0000\u0097\u0098\u0005\f\u0000\u0000\u0098\u0099\u0005"+
		"\u001f\u0000\u0000\u0099\u009a\u0003@ \u0000\u009a\u009b\u0005\u0003\u0000"+
		"\u0000\u009b\u009c\u0003@ \u0000\u009c\u009d\u0005\u000e\u0000\u0000\u009d"+
		"\u009e\u0003&\u0013\u0000\u009e\u009f\u0005 \u0000\u0000\u009f\u00a0\u0005"+
		"#\u0000\u0000\u00a0\u00a1\u0003\u0002\u0001\u0000\u00a1\u00a2\u0005$\u0000"+
		"\u0000\u00a2\u0019\u0001\u0000\u0000\u0000\u00a3\u00a5\u0005\u0004\u0000"+
		"\u0000\u00a4\u00a6\u0003&\u0013\u0000\u00a5\u00a4\u0001\u0000\u0000\u0000"+
		"\u00a5\u00a6\u0001\u0000\u0000\u0000\u00a6\u001b\u0001\u0000\u0000\u0000"+
		"\u00a7\u00a8\u0005\u000f\u0000\u0000\u00a8\u001d\u0001\u0000\u0000\u0000"+
		"\u00a9\u00aa\u0005\u0010\u0000\u0000\u00aa\u001f\u0001\u0000\u0000\u0000"+
		"\u00ab\u00ac\u0005\u0011\u0000\u0000\u00ac\u00ad\u0005\u001f\u0000\u0000"+
		"\u00ad\u00ae\u0003&\u0013\u0000\u00ae\u00b4\u0005 \u0000\u0000\u00af\u00b5"+
		"\u0003\u0004\u0002\u0000\u00b0\u00b1\u0005#\u0000\u0000\u00b1\u00b2\u0003"+
		"\u0002\u0001\u0000\u00b2\u00b3\u0005$\u0000\u0000\u00b3\u00b5\u0001\u0000"+
		"\u0000\u0000\u00b4\u00af\u0001\u0000\u0000\u0000\u00b4\u00b0\u0001\u0000"+
		"\u0000\u0000\u00b5\u00b7\u0001\u0000\u0000\u0000\u00b6\u00b8\u0003\"\u0011"+
		"\u0000\u00b7\u00b6\u0001\u0000\u0000\u0000\u00b7\u00b8\u0001\u0000\u0000"+
		"\u0000\u00b8!\u0001\u0000\u0000\u0000\u00b9\u00bf\u0005\u0012\u0000\u0000"+
		"\u00ba\u00c0\u0003\u0004\u0002\u0000\u00bb\u00bc\u0005#\u0000\u0000\u00bc"+
		"\u00bd\u0003\u0002\u0001\u0000\u00bd\u00be\u0005$\u0000\u0000\u00be\u00c0"+
		"\u0001\u0000\u0000\u0000\u00bf\u00ba\u0001\u0000\u0000\u0000\u00bf\u00bb"+
		"\u0001\u0000\u0000\u0000\u00c0#\u0001\u0000\u0000\u0000\u00c1\u00c2\u0005"+
		"\u001c\u0000\u0000\u00c2\u00c3\u0005\u001a\u0000\u0000\u00c3%\u0001\u0000"+
		"\u0000\u0000\u00c4\u00c5\u0006\u0013\uffff\uffff\u0000\u00c5\u00c6\u0005"+
		"\u001f\u0000\u0000\u00c6\u00c7\u0003&\u0013\u0000\u00c7\u00c8\u0005 \u0000"+
		"\u0000\u00c8\u00d4\u0001\u0000\u0000\u0000\u00c9\u00ca\u0005%\u0000\u0000"+
		"\u00ca\u00d4\u0003&\u0013\u0010\u00cb\u00d4\u0005\u0013\u0000\u0000\u00cc"+
		"\u00d4\u0005\u0014\u0000\u0000\u00cd\u00d4\u0005\u0015\u0000\u0000\u00ce"+
		"\u00d4\u0005\u0016\u0000\u0000\u00cf\u00d4\u0003(\u0014\u0000\u00d0\u00d4"+
		"\u0003\u0012\t\u0000\u00d1\u00d4\u00034\u001a\u0000\u00d2\u00d4\u0003"+
		"2\u0019\u0000\u00d3\u00c4\u0001\u0000\u0000\u0000\u00d3\u00c9\u0001\u0000"+
		"\u0000\u0000\u00d3\u00cb\u0001\u0000\u0000\u0000\u00d3\u00cc\u0001\u0000"+
		"\u0000\u0000\u00d3\u00cd\u0001\u0000\u0000\u0000\u00d3\u00ce\u0001\u0000"+
		"\u0000\u0000\u00d3\u00cf\u0001\u0000\u0000\u0000\u00d3\u00d0\u0001\u0000"+
		"\u0000\u0000\u00d3\u00d1\u0001\u0000\u0000\u0000\u00d3\u00d2\u0001\u0000"+
		"\u0000\u0000\u00d4\u00ef\u0001\u0000\u0000\u0000\u00d5\u00d6\n\u000f\u0000"+
		"\u0000\u00d6\u00d7\u0005\u0005\u0000\u0000\u00d7\u00ee\u0003&\u0013\u0010"+
		"\u00d8\u00d9\n\u000e\u0000\u0000\u00d9\u00da\u0005&\u0000\u0000\u00da"+
		"\u00ee\u0003&\u0013\u000f\u00db\u00dc\n\r\u0000\u0000\u00dc\u00dd\u0005"+
		"\'\u0000\u0000\u00dd\u00ee\u0003&\u0013\u000e\u00de\u00df\n\f\u0000\u0000"+
		"\u00df\u00e0\u0005;\u0000\u0000\u00e0\u00ee\u0003&\u0013\r\u00e1\u00e2"+
		"\n\u000b\u0000\u0000\u00e2\u00e3\u0005<\u0000\u0000\u00e3\u00ee\u0003"+
		"&\u0013\f\u00e4\u00e5\n\n\u0000\u0000\u00e5\u00e6\u0005(\u0000\u0000\u00e6"+
		"\u00ee\u0003&\u0013\u000b\u00e7\u00e8\n\t\u0000\u0000\u00e8\u00e9\u0005"+
		"\u0006\u0000\u0000\u00e9\u00ea\u0003&\u0013\u0000\u00ea\u00eb\u0005\u001c"+
		"\u0000\u0000\u00eb\u00ec\u0003&\u0013\n\u00ec\u00ee\u0001\u0000\u0000"+
		"\u0000\u00ed\u00d5\u0001\u0000\u0000\u0000\u00ed\u00d8\u0001\u0000\u0000"+
		"\u0000\u00ed\u00db\u0001\u0000\u0000\u0000\u00ed\u00de\u0001\u0000\u0000"+
		"\u0000\u00ed\u00e1\u0001\u0000\u0000\u0000\u00ed\u00e4\u0001\u0000\u0000"+
		"\u0000\u00ed\u00e7\u0001\u0000\u0000\u0000\u00ee\u00f1\u0001\u0000\u0000"+
		"\u0000\u00ef\u00ed\u0001\u0000\u0000\u0000\u00ef\u00f0\u0001\u0000\u0000"+
		"\u0000\u00f0\'\u0001\u0000\u0000\u0000\u00f1\u00ef\u0001\u0000\u0000\u0000"+
		"\u00f2\u00f5\u0005#\u0000\u0000\u00f3\u00f6\u0003*\u0015\u0000\u00f4\u00f6"+
		"\u0003,\u0016\u0000\u00f5\u00f3\u0001\u0000\u0000\u0000\u00f5\u00f4\u0001"+
		"\u0000\u0000\u0000\u00f5\u00f6\u0001\u0000\u0000\u0000\u00f6\u00f7\u0001"+
		"\u0000\u0000\u0000\u00f7\u00f8\u0005$\u0000\u0000\u00f8)\u0001\u0000\u0000"+
		"\u0000\u00f9\u00fe\u0003.\u0017\u0000\u00fa\u00fb\u0005\u0003\u0000\u0000"+
		"\u00fb\u00fd\u0003.\u0017\u0000\u00fc\u00fa\u0001\u0000\u0000\u0000\u00fd"+
		"\u0100\u0001\u0000\u0000\u0000\u00fe\u00fc\u0001\u0000\u0000\u0000\u00fe"+
		"\u00ff\u0001\u0000\u0000\u0000\u00ff\u0102\u0001\u0000\u0000\u0000\u0100"+
		"\u00fe\u0001\u0000\u0000\u0000\u0101\u0103\u0005\u0003\u0000\u0000\u0102"+
		"\u0101\u0001\u0000\u0000\u0000\u0102\u0103\u0001\u0000\u0000\u0000\u0103"+
		"+\u0001\u0000\u0000\u0000\u0104\u0109\u0003&\u0013\u0000\u0105\u0106\u0005"+
		"\u0003\u0000\u0000\u0106\u0108\u0003&\u0013\u0000\u0107\u0105\u0001\u0000"+
		"\u0000\u0000\u0108\u010b\u0001\u0000\u0000\u0000\u0109\u0107\u0001\u0000"+
		"\u0000\u0000\u0109\u010a\u0001\u0000\u0000\u0000\u010a\u010d\u0001\u0000"+
		"\u0000\u0000\u010b\u0109\u0001\u0000\u0000\u0000\u010c\u010e\u0005\u0003"+
		"\u0000\u0000\u010d\u010c\u0001\u0000\u0000\u0000\u010d\u010e\u0001\u0000"+
		"\u0000\u0000\u010e-\u0001\u0000\u0000\u0000\u010f\u0110\u00030\u0018\u0000"+
		"\u0110\u0111\u0005\u0002\u0000\u0000\u0111\u0112\u0003&\u0013\u0000\u0112"+
		"/\u0001\u0000\u0000\u0000\u0113\u0116\u0005\u001a\u0000\u0000\u0114\u0116"+
		"\u0003&\u0013\u0000\u0115\u0113\u0001\u0000\u0000\u0000\u0115\u0114\u0001"+
		"\u0000\u0000\u0000\u01161\u0001\u0000\u0000\u0000\u0117\u0118\u0003>\u001f"+
		"\u0000\u0118\u011e\u0005\u0007\u0000\u0000\u0119\u011a\u0005#\u0000\u0000"+
		"\u011a\u011b\u0003\u0002\u0001\u0000\u011b\u011c\u0005$\u0000\u0000\u011c"+
		"\u011f\u0001\u0000\u0000\u0000\u011d\u011f\u0003\u0004\u0002\u0000\u011e"+
		"\u0119\u0001\u0000\u0000\u0000\u011e\u011d\u0001\u0000\u0000\u0000\u011f"+
		"3\u0001\u0000\u0000\u0000\u0120\u0124\u0005\u001a\u0000\u0000\u0121\u0123"+
		"\u00036\u001b\u0000\u0122\u0121\u0001\u0000\u0000\u0000\u0123\u0126\u0001"+
		"\u0000\u0000\u0000\u0124\u0122\u0001\u0000\u0000\u0000\u0124\u0125\u0001"+
		"\u0000\u0000\u0000\u01255\u0001\u0000\u0000\u0000\u0126\u0124\u0001\u0000"+
		"\u0000\u0000\u0127\u012b\u00038\u001c\u0000\u0128\u012b\u0003:\u001d\u0000"+
		"\u0129\u012b\u0003<\u001e\u0000\u012a\u0127\u0001\u0000\u0000\u0000\u012a"+
		"\u0128\u0001\u0000\u0000\u0000\u012a\u0129\u0001\u0000\u0000\u0000\u012b"+
		"7\u0001\u0000\u0000\u0000\u012c\u012d\u0005\b\u0000\u0000\u012d\u012e"+
		"\u0005\u001a\u0000\u0000\u012e9\u0001\u0000\u0000\u0000\u012f\u0130\u0005"+
		"!\u0000\u0000\u0130\u0131\u0003&\u0013\u0000\u0131\u0132\u0005\"\u0000"+
		"\u0000\u0132;\u0001\u0000\u0000\u0000\u0133\u013c\u0005\u001f\u0000\u0000"+
		"\u0134\u0139\u0003&\u0013\u0000\u0135\u0136\u0005\u0003\u0000\u0000\u0136"+
		"\u0138\u0003&\u0013\u0000\u0137\u0135\u0001\u0000\u0000\u0000\u0138\u013b"+
		"\u0001\u0000\u0000\u0000\u0139\u0137\u0001\u0000\u0000\u0000\u0139\u013a"+
		"\u0001\u0000\u0000\u0000\u013a\u013d\u0001\u0000\u0000\u0000\u013b\u0139"+
		"\u0001\u0000\u0000\u0000\u013c\u0134\u0001\u0000\u0000\u0000\u013c\u013d"+
		"\u0001\u0000\u0000\u0000\u013d\u013e\u0001\u0000\u0000\u0000\u013e\u013f"+
		"\u0005 \u0000\u0000\u013f=\u0001\u0000\u0000\u0000\u0140\u0149\u0005\u001f"+
		"\u0000\u0000\u0141\u0146\u0003@ \u0000\u0142\u0143\u0005\u0003\u0000\u0000"+
		"\u0143\u0145\u0003@ \u0000\u0144\u0142\u0001\u0000\u0000\u0000\u0145\u0148"+
		"\u0001\u0000\u0000\u0000\u0146\u0144\u0001\u0000\u0000\u0000\u0146\u0147"+
		"\u0001\u0000\u0000\u0000\u0147\u014a\u0001\u0000\u0000\u0000\u0148\u0146"+
		"\u0001\u0000\u0000\u0000\u0149\u0141\u0001\u0000\u0000\u0000\u0149\u014a"+
		"\u0001\u0000\u0000\u0000\u014a\u014b\u0001\u0000\u0000\u0000\u014b\u014c"+
		"\u0005 \u0000\u0000\u014c?\u0001\u0000\u0000\u0000\u014d\u014f\u0007\u0001"+
		"\u0000\u0000\u014e\u0150\u0003$\u0012\u0000\u014f\u014e\u0001\u0000\u0000"+
		"\u0000\u014f\u0150\u0001\u0000\u0000\u0000\u0150A\u0001\u0000\u0000\u0000"+
		"\u001bFJ[t\u008a\u0090\u00a5\u00b4\u00b7\u00bf\u00d3\u00ed\u00ef\u00f5"+
		"\u00fe\u0102\u0109\u010d\u0115\u011e\u0124\u012a\u0139\u013c\u0146\u0149"+
		"\u014f";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}