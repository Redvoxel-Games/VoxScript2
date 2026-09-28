grammar VoxScript;

program: block;

block: (statement SEMICOLON?)*;

statement
    : var_define
    | val_assign
    | arith_assign
    | val_increment
    | func_call
    | func_define
    | cont_return
    | cont_continue
    | cont_break
    | cont_while
    | cont_for
    | cont_foreach
    | cont_if
    | print
    ;
    
print: 'print' expression;

var_define: VAR var_inst (',' var_inst)* '=' expression;
val_assign: identifier '=' expression;
arith_assign: identifier ASSIGNMENT expression;
val_increment: identifier (INCREMENT | DECREMENT);

func_define: FUNC ID function_params type_annotation? LEFT_CURLY block RIGHT_CURLY;
func_call: identifier function_postfix;

cont_while: 'while' LEFT_PAREN expression RIGHT_PAREN LEFT_CURLY block RIGHT_CURLY;
cont_for: 'for' LEFT_PAREN ID '=' expression ',' expression ',' expression RIGHT_PAREN LEFT_CURLY block RIGHT_CURLY;
cont_foreach: 'foreach' LEFT_PAREN var_inst ',' var_inst 'in' expression RIGHT_PAREN LEFT_CURLY block RIGHT_CURLY;

cont_return: 'return' (expression (',' expression)*)?;
cont_continue: 'continue';
cont_break: 'break';

cont_if: 'if' LEFT_PAREN expression RIGHT_PAREN (statement | LEFT_CURLY block RIGHT_CURLY) cont_else?;
cont_else: 'else' (statement | LEFT_CURLY block RIGHT_CURLY);

type_annotation: ':' ID;

expression
    : '(' paren=expression ')'
    | unary=UNARY expr=expression
    | left=expression op='^' right=expression
    | left=expression op=MUL_DIV right=expression
    | left=expression op=ADD_SUB right=expression
    | left=expression op=COND_AND right=expression
    | left=expression op=COND_NAND right=expression
    | left=expression op=COND_OR right=expression
    | left=expression op=COND_NOR right=expression
    | left=expression op=COND_XOR right=expression
    | left=expression op=COMPARE right=expression
    | condition=expression '?' primary=expression ':' secondary=expression
    | NUMBER
    | STRING
    | BOOLEAN
    | NULL
    | table_definition
    | func_call
    | identifier
    | lambda
    ;
    
table_definition: LEFT_CURLY (table_member_dict | table_member_list)? RIGHT_CURLY;
table_member_dict: table_member (',' table_member)* ','?;
table_member_list: expression (',' expression)* ','?;
table_member: key=table_key '=' value=expression;
table_key: ID | expression;
    
lambda: function_params '->' (LEFT_CURLY block RIGHT_CURLY | statement);
    
identifier: ID postfix*;
postfix: id_postfix | expression_postfix | function_postfix;
id_postfix: '.' ID;
expression_postfix: LEFT_BRACE expression RIGHT_BRACE;
function_postfix: LEFT_PAREN (expression (',' expression)*)? RIGHT_PAREN;

function_params: LEFT_PAREN (var_inst (',' var_inst)*)? RIGHT_PAREN;

var_inst: ID type_annotation? | DISCARD;
    
// Keywords
VAR: 'var';
FUNC: 'func';

FOR: 'for';
FOREACH: 'foreach';
WHILE: 'while';
IN: 'in';
CONTINUE: 'continue';
BREAK: 'break';
IF: 'if';
ELSE: 'else';

// Primitives
NUMBER: MINUS? ([1-9] [0-9]* | [0-9]) ('.' [0-9]+)?;
STRING: '"' ( ESC | ~["\\\r\n] )* '"';
BOOLEAN: TRUE | FALSE;
NULL: 'null';
TUPLE: '...';
TRUE: 'true';
FALSE: 'false';
ID: [a-zA-Z_][a-zA-Z0-9_]*;
DISCARD: '_';

fragment ESC
    : '\\' (
          ["\\/bfnrt]
        | 'u' HEX HEX HEX HEX
      )
    ;
fragment HEX
    : [0-9a-fA-F]
    ;

// Basic tokens
SEMICOLON: ';';
COLON: ':';
EXCLAMATION: '!';
QUOTATION: '"';
LEFT_PAREN: '(';
RIGHT_PAREN: ')';
LEFT_BRACE: '[';
RIGHT_BRACE: ']';
LEFT_CURLY: '{';
RIGHT_CURLY: '}';

// >Eval
fragment PLUS: '+';
fragment MINUS: '-';
fragment MULTIPLY: '*';
fragment DIVIDE: '/';
fragment EXPONENT: '^';
fragment MODULO: '%';
fragment EQUALS: '=';
fragment PERIOD: '.';
fragment EXCLAIM: '!';
UNARY: '-' | '!';

// Operators
MUL_DIV: MULTIPLY | DIVIDE | MODULO;
ADD_SUB: PLUS | MINUS;
COMPARE: COND_EQUAL | COND_NOTEQUAL | COND_GREATERTHAN | COND_LESSTHAN | COND_GREATEROREQUAL | COND_LESSOREQUAL;

ASSIGNMENT: ADD_DIRECT | SUB_DIRECT | MULT_DIRECT | DIV_DIRECT | EXPO_DIRECT | MOD_DIRECT;

// Channels
WS: [ \n\r\t]+ -> skip;
LINE_COMMENT: '//' .*? '\n' -> channel(HIDDEN);
MULTILINE_COMMENT: '/*' .*? '*/' -> channel(HIDDEN);

// >Direct
INCREMENT: '++';
DECREMENT: '--';
ADD_DIRECT: '+=';
SUB_DIRECT: '-=';
MULT_DIRECT: '*=';
DIV_DIRECT: '/=';
EXPO_DIRECT: '^=';
MOD_DIRECT: '%=';
// >Conditions
COND_EQUAL: '==';
COND_NOTEQUAL: '!=';
COND_GREATERTHAN: '>';
COND_LESSTHAN: '<';
COND_GREATEROREQUAL: '>=';
COND_LESSOREQUAL: '<=';
COND_AND: '&&';
COND_NAND: '!&';
COND_OR: '||';
COND_NOR: '!|';
COND_XOR: '#|';