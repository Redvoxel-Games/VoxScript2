"use strict";
// Generated from VoxScript.g4 by ANTLR 4.13.2
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4_1 = require("antlr4");
/**
 * This interface defines a complete listener for a parse tree produced by
 * `VoxScriptParser`.
 */
class VoxScriptListener extends antlr4_1.ParseTreeListener {
    /**
     * Enter a parse tree produced by `VoxScriptParser.program`.
     * @param ctx the parse tree
     */
    enterProgram;
    /**
     * Exit a parse tree produced by `VoxScriptParser.program`.
     * @param ctx the parse tree
     */
    exitProgram;
    /**
     * Enter a parse tree produced by `VoxScriptParser.block`.
     * @param ctx the parse tree
     */
    enterBlock;
    /**
     * Exit a parse tree produced by `VoxScriptParser.block`.
     * @param ctx the parse tree
     */
    exitBlock;
    /**
     * Enter a parse tree produced by `VoxScriptParser.statement`.
     * @param ctx the parse tree
     */
    enterStatement;
    /**
     * Exit a parse tree produced by `VoxScriptParser.statement`.
     * @param ctx the parse tree
     */
    exitStatement;
    /**
     * Enter a parse tree produced by `VoxScriptParser.print`.
     * @param ctx the parse tree
     */
    enterPrint;
    /**
     * Exit a parse tree produced by `VoxScriptParser.print`.
     * @param ctx the parse tree
     */
    exitPrint;
    /**
     * Enter a parse tree produced by `VoxScriptParser.var_define`.
     * @param ctx the parse tree
     */
    enterVar_define;
    /**
     * Exit a parse tree produced by `VoxScriptParser.var_define`.
     * @param ctx the parse tree
     */
    exitVar_define;
    /**
     * Enter a parse tree produced by `VoxScriptParser.val_assign`.
     * @param ctx the parse tree
     */
    enterVal_assign;
    /**
     * Exit a parse tree produced by `VoxScriptParser.val_assign`.
     * @param ctx the parse tree
     */
    exitVal_assign;
    /**
     * Enter a parse tree produced by `VoxScriptParser.arith_assign`.
     * @param ctx the parse tree
     */
    enterArith_assign;
    /**
     * Exit a parse tree produced by `VoxScriptParser.arith_assign`.
     * @param ctx the parse tree
     */
    exitArith_assign;
    /**
     * Enter a parse tree produced by `VoxScriptParser.val_increment`.
     * @param ctx the parse tree
     */
    enterVal_increment;
    /**
     * Exit a parse tree produced by `VoxScriptParser.val_increment`.
     * @param ctx the parse tree
     */
    exitVal_increment;
    /**
     * Enter a parse tree produced by `VoxScriptParser.func_define`.
     * @param ctx the parse tree
     */
    enterFunc_define;
    /**
     * Exit a parse tree produced by `VoxScriptParser.func_define`.
     * @param ctx the parse tree
     */
    exitFunc_define;
    /**
     * Enter a parse tree produced by `VoxScriptParser.func_call`.
     * @param ctx the parse tree
     */
    enterFunc_call;
    /**
     * Exit a parse tree produced by `VoxScriptParser.func_call`.
     * @param ctx the parse tree
     */
    exitFunc_call;
    /**
     * Enter a parse tree produced by `VoxScriptParser.cont_while`.
     * @param ctx the parse tree
     */
    enterCont_while;
    /**
     * Exit a parse tree produced by `VoxScriptParser.cont_while`.
     * @param ctx the parse tree
     */
    exitCont_while;
    /**
     * Enter a parse tree produced by `VoxScriptParser.cont_for`.
     * @param ctx the parse tree
     */
    enterCont_for;
    /**
     * Exit a parse tree produced by `VoxScriptParser.cont_for`.
     * @param ctx the parse tree
     */
    exitCont_for;
    /**
     * Enter a parse tree produced by `VoxScriptParser.cont_foreach`.
     * @param ctx the parse tree
     */
    enterCont_foreach;
    /**
     * Exit a parse tree produced by `VoxScriptParser.cont_foreach`.
     * @param ctx the parse tree
     */
    exitCont_foreach;
    /**
     * Enter a parse tree produced by `VoxScriptParser.cont_return`.
     * @param ctx the parse tree
     */
    enterCont_return;
    /**
     * Exit a parse tree produced by `VoxScriptParser.cont_return`.
     * @param ctx the parse tree
     */
    exitCont_return;
    /**
     * Enter a parse tree produced by `VoxScriptParser.cont_continue`.
     * @param ctx the parse tree
     */
    enterCont_continue;
    /**
     * Exit a parse tree produced by `VoxScriptParser.cont_continue`.
     * @param ctx the parse tree
     */
    exitCont_continue;
    /**
     * Enter a parse tree produced by `VoxScriptParser.cont_break`.
     * @param ctx the parse tree
     */
    enterCont_break;
    /**
     * Exit a parse tree produced by `VoxScriptParser.cont_break`.
     * @param ctx the parse tree
     */
    exitCont_break;
    /**
     * Enter a parse tree produced by `VoxScriptParser.cont_if`.
     * @param ctx the parse tree
     */
    enterCont_if;
    /**
     * Exit a parse tree produced by `VoxScriptParser.cont_if`.
     * @param ctx the parse tree
     */
    exitCont_if;
    /**
     * Enter a parse tree produced by `VoxScriptParser.cont_else`.
     * @param ctx the parse tree
     */
    enterCont_else;
    /**
     * Exit a parse tree produced by `VoxScriptParser.cont_else`.
     * @param ctx the parse tree
     */
    exitCont_else;
    /**
     * Enter a parse tree produced by `VoxScriptParser.type_annotation`.
     * @param ctx the parse tree
     */
    enterType_annotation;
    /**
     * Exit a parse tree produced by `VoxScriptParser.type_annotation`.
     * @param ctx the parse tree
     */
    exitType_annotation;
    /**
     * Enter a parse tree produced by `VoxScriptParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression;
    /**
     * Exit a parse tree produced by `VoxScriptParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression;
    /**
     * Enter a parse tree produced by `VoxScriptParser.table_definition`.
     * @param ctx the parse tree
     */
    enterTable_definition;
    /**
     * Exit a parse tree produced by `VoxScriptParser.table_definition`.
     * @param ctx the parse tree
     */
    exitTable_definition;
    /**
     * Enter a parse tree produced by `VoxScriptParser.table_member_dict`.
     * @param ctx the parse tree
     */
    enterTable_member_dict;
    /**
     * Exit a parse tree produced by `VoxScriptParser.table_member_dict`.
     * @param ctx the parse tree
     */
    exitTable_member_dict;
    /**
     * Enter a parse tree produced by `VoxScriptParser.table_member_list`.
     * @param ctx the parse tree
     */
    enterTable_member_list;
    /**
     * Exit a parse tree produced by `VoxScriptParser.table_member_list`.
     * @param ctx the parse tree
     */
    exitTable_member_list;
    /**
     * Enter a parse tree produced by `VoxScriptParser.table_member`.
     * @param ctx the parse tree
     */
    enterTable_member;
    /**
     * Exit a parse tree produced by `VoxScriptParser.table_member`.
     * @param ctx the parse tree
     */
    exitTable_member;
    /**
     * Enter a parse tree produced by `VoxScriptParser.table_key`.
     * @param ctx the parse tree
     */
    enterTable_key;
    /**
     * Exit a parse tree produced by `VoxScriptParser.table_key`.
     * @param ctx the parse tree
     */
    exitTable_key;
    /**
     * Enter a parse tree produced by `VoxScriptParser.lambda`.
     * @param ctx the parse tree
     */
    enterLambda;
    /**
     * Exit a parse tree produced by `VoxScriptParser.lambda`.
     * @param ctx the parse tree
     */
    exitLambda;
    /**
     * Enter a parse tree produced by `VoxScriptParser.identifier`.
     * @param ctx the parse tree
     */
    enterIdentifier;
    /**
     * Exit a parse tree produced by `VoxScriptParser.identifier`.
     * @param ctx the parse tree
     */
    exitIdentifier;
    /**
     * Enter a parse tree produced by `VoxScriptParser.postfix`.
     * @param ctx the parse tree
     */
    enterPostfix;
    /**
     * Exit a parse tree produced by `VoxScriptParser.postfix`.
     * @param ctx the parse tree
     */
    exitPostfix;
    /**
     * Enter a parse tree produced by `VoxScriptParser.id_postfix`.
     * @param ctx the parse tree
     */
    enterId_postfix;
    /**
     * Exit a parse tree produced by `VoxScriptParser.id_postfix`.
     * @param ctx the parse tree
     */
    exitId_postfix;
    /**
     * Enter a parse tree produced by `VoxScriptParser.expression_postfix`.
     * @param ctx the parse tree
     */
    enterExpression_postfix;
    /**
     * Exit a parse tree produced by `VoxScriptParser.expression_postfix`.
     * @param ctx the parse tree
     */
    exitExpression_postfix;
    /**
     * Enter a parse tree produced by `VoxScriptParser.function_postfix`.
     * @param ctx the parse tree
     */
    enterFunction_postfix;
    /**
     * Exit a parse tree produced by `VoxScriptParser.function_postfix`.
     * @param ctx the parse tree
     */
    exitFunction_postfix;
    /**
     * Enter a parse tree produced by `VoxScriptParser.function_params`.
     * @param ctx the parse tree
     */
    enterFunction_params;
    /**
     * Exit a parse tree produced by `VoxScriptParser.function_params`.
     * @param ctx the parse tree
     */
    exitFunction_params;
    /**
     * Enter a parse tree produced by `VoxScriptParser.var_inst`.
     * @param ctx the parse tree
     */
    enterVar_inst;
    /**
     * Exit a parse tree produced by `VoxScriptParser.var_inst`.
     * @param ctx the parse tree
     */
    exitVar_inst;
}
exports.default = VoxScriptListener;
//# sourceMappingURL=VoxScriptListener.js.map