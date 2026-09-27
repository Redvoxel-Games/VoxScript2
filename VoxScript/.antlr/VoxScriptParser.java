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
		NUMBER=1, INT=2, STRING=3, BOOLEAN=4, NULL=5, ID=6, SEMICOLON=7, COLON=8, 
		EXCLAMATION=9, QUOTATION=10, LEFT_PAREN=11, RIGHT_PAREN=12, LEFT_BRACE=13, 
		RIGHT_BRACE=14, LEFT_CURLY=15, RIGHT_CURLY=16, MUL_DIV=17, ADD_SUB=18, 
		COMPARE=19, ARITH_ASSIGN=20, WS=21, LINE_COMMENT=22, MULTILINE_COMMENT=23, 
		PLUS=24, MINUS=25, MULTIPLY=26, DIVIDE=27, EXPONENT=28, MODULO=29, EQUALS=30, 
		PERIOD=31, INCREMENT=32, DECREMENT=33, ADD_DIRECT=34, SUB_DIRECT=35, MULT_DIRECT=36, 
		DIV_DIRECT=37, EXPO_DIRECT=38, MOD_DIRECT=39, COND_EQUAL=40, COND_NOTEQUAL=41, 
		COND_GREATERTHAN=42, COND_LESSTHAN=43, COND_GREATEROREQUAL=44, COND_LESSOREQUAL=45, 
		COND_AND=46, COND_OR=47;
	public static final int
		RULE_program = 0, RULE_expression = 1;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "expression"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, "'null'", null, "';'", "':'", "'!'", "'\"'", 
			"'('", "')'", "'['", "']'", "'{'", "'}'", null, null, null, null, null, 
			null, null, "'+'", "'-'", "'*'", "'/'", "'^'", "'%'", "'='", "'.'", "'++'", 
			"'--'", "'+='", "'-='", "'*='", "'/='", "'^='", "'%='", "'=='", "'!='", 
			"'>'", "'<'", "'>='", "'<='", "'&&'", "'||'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "NUMBER", "INT", "STRING", "BOOLEAN", "NULL", "ID", "SEMICOLON", 
			"COLON", "EXCLAMATION", "QUOTATION", "LEFT_PAREN", "RIGHT_PAREN", "LEFT_BRACE", 
			"RIGHT_BRACE", "LEFT_CURLY", "RIGHT_CURLY", "MUL_DIV", "ADD_SUB", "COMPARE", 
			"ARITH_ASSIGN", "WS", "LINE_COMMENT", "MULTILINE_COMMENT", "PLUS", "MINUS", 
			"MULTIPLY", "DIVIDE", "EXPONENT", "MODULO", "EQUALS", "PERIOD", "INCREMENT", 
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
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(4);
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
	public static class ExpressionContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(VoxScriptParser.NUMBER, 0); }
		public TerminalNode INT() { return getToken(VoxScriptParser.INT, 0); }
		public TerminalNode STRING() { return getToken(VoxScriptParser.STRING, 0); }
		public TerminalNode BOOLEAN() { return getToken(VoxScriptParser.BOOLEAN, 0); }
		public TerminalNode NULL() { return getToken(VoxScriptParser.NULL, 0); }
		public TerminalNode ID() { return getToken(VoxScriptParser.ID, 0); }
		public TerminalNode LEFT_PAREN() { return getToken(VoxScriptParser.LEFT_PAREN, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode RIGHT_PAREN() { return getToken(VoxScriptParser.RIGHT_PAREN, 0); }
		public TerminalNode MUL_DIV() { return getToken(VoxScriptParser.MUL_DIV, 0); }
		public TerminalNode ADD_SUB() { return getToken(VoxScriptParser.ADD_SUB, 0); }
		public TerminalNode COMPARE() { return getToken(VoxScriptParser.COMPARE, 0); }
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 2;
		enterRecursionRule(_localctx, 2, RULE_expression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(17);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUMBER:
				{
				setState(7);
				match(NUMBER);
				}
				break;
			case INT:
				{
				setState(8);
				match(INT);
				}
				break;
			case STRING:
				{
				setState(9);
				match(STRING);
				}
				break;
			case BOOLEAN:
				{
				setState(10);
				match(BOOLEAN);
				}
				break;
			case NULL:
				{
				setState(11);
				match(NULL);
				}
				break;
			case ID:
				{
				setState(12);
				match(ID);
				}
				break;
			case LEFT_PAREN:
				{
				setState(13);
				match(LEFT_PAREN);
				setState(14);
				expression(0);
				setState(15);
				match(RIGHT_PAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(30);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(28);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(19);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(20);
						match(MUL_DIV);
						setState(21);
						expression(4);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(22);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(23);
						match(ADD_SUB);
						setState(24);
						expression(3);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(25);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(26);
						match(COMPARE);
						setState(27);
						expression(2);
						}
						break;
					}
					} 
				}
				setState(32);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
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

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 1:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 3);
		case 1:
			return precpred(_ctx, 2);
		case 2:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001/\"\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0001"+
		"\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0003\u0001\u0012\b\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0005"+
		"\u0001\u001d\b\u0001\n\u0001\f\u0001 \t\u0001\u0001\u0001\u0000\u0001"+
		"\u0002\u0002\u0000\u0002\u0000\u0000(\u0000\u0004\u0001\u0000\u0000\u0000"+
		"\u0002\u0011\u0001\u0000\u0000\u0000\u0004\u0005\u0003\u0002\u0001\u0000"+
		"\u0005\u0001\u0001\u0000\u0000\u0000\u0006\u0007\u0006\u0001\uffff\uffff"+
		"\u0000\u0007\u0012\u0005\u0001\u0000\u0000\b\u0012\u0005\u0002\u0000\u0000"+
		"\t\u0012\u0005\u0003\u0000\u0000\n\u0012\u0005\u0004\u0000\u0000\u000b"+
		"\u0012\u0005\u0005\u0000\u0000\f\u0012\u0005\u0006\u0000\u0000\r\u000e"+
		"\u0005\u000b\u0000\u0000\u000e\u000f\u0003\u0002\u0001\u0000\u000f\u0010"+
		"\u0005\f\u0000\u0000\u0010\u0012\u0001\u0000\u0000\u0000\u0011\u0006\u0001"+
		"\u0000\u0000\u0000\u0011\b\u0001\u0000\u0000\u0000\u0011\t\u0001\u0000"+
		"\u0000\u0000\u0011\n\u0001\u0000\u0000\u0000\u0011\u000b\u0001\u0000\u0000"+
		"\u0000\u0011\f\u0001\u0000\u0000\u0000\u0011\r\u0001\u0000\u0000\u0000"+
		"\u0012\u001e\u0001\u0000\u0000\u0000\u0013\u0014\n\u0003\u0000\u0000\u0014"+
		"\u0015\u0005\u0011\u0000\u0000\u0015\u001d\u0003\u0002\u0001\u0004\u0016"+
		"\u0017\n\u0002\u0000\u0000\u0017\u0018\u0005\u0012\u0000\u0000\u0018\u001d"+
		"\u0003\u0002\u0001\u0003\u0019\u001a\n\u0001\u0000\u0000\u001a\u001b\u0005"+
		"\u0013\u0000\u0000\u001b\u001d\u0003\u0002\u0001\u0002\u001c\u0013\u0001"+
		"\u0000\u0000\u0000\u001c\u0016\u0001\u0000\u0000\u0000\u001c\u0019\u0001"+
		"\u0000\u0000\u0000\u001d \u0001\u0000\u0000\u0000\u001e\u001c\u0001\u0000"+
		"\u0000\u0000\u001e\u001f\u0001\u0000\u0000\u0000\u001f\u0003\u0001\u0000"+
		"\u0000\u0000 \u001e\u0001\u0000\u0000\u0000\u0003\u0011\u001c\u001e";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}