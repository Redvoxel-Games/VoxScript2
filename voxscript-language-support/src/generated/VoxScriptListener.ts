// Generated from VoxScript.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { ProgramContext } from "./VoxScriptParser.js";
import { BlockContext } from "./VoxScriptParser.js";
import { StatementContext } from "./VoxScriptParser.js";
import { PrintContext } from "./VoxScriptParser.js";
import { Var_defineContext } from "./VoxScriptParser.js";
import { Val_assignContext } from "./VoxScriptParser.js";
import { Arith_assignContext } from "./VoxScriptParser.js";
import { Val_incrementContext } from "./VoxScriptParser.js";
import { Func_defineContext } from "./VoxScriptParser.js";
import { Func_callContext } from "./VoxScriptParser.js";
import { Cont_whileContext } from "./VoxScriptParser.js";
import { Cont_forContext } from "./VoxScriptParser.js";
import { Cont_foreachContext } from "./VoxScriptParser.js";
import { Cont_returnContext } from "./VoxScriptParser.js";
import { Cont_continueContext } from "./VoxScriptParser.js";
import { Cont_breakContext } from "./VoxScriptParser.js";
import { Cont_ifContext } from "./VoxScriptParser.js";
import { Cont_elseContext } from "./VoxScriptParser.js";
import { Type_annotationContext } from "./VoxScriptParser.js";
import { ExpressionContext } from "./VoxScriptParser.js";
import { Table_definitionContext } from "./VoxScriptParser.js";
import { Table_member_dictContext } from "./VoxScriptParser.js";
import { Table_member_listContext } from "./VoxScriptParser.js";
import { Table_memberContext } from "./VoxScriptParser.js";
import { Table_keyContext } from "./VoxScriptParser.js";
import { LambdaContext } from "./VoxScriptParser.js";
import { IdentifierContext } from "./VoxScriptParser.js";
import { PostfixContext } from "./VoxScriptParser.js";
import { Id_postfixContext } from "./VoxScriptParser.js";
import { Expression_postfixContext } from "./VoxScriptParser.js";
import { Function_postfixContext } from "./VoxScriptParser.js";
import { Function_paramsContext } from "./VoxScriptParser.js";
import { Var_instContext } from "./VoxScriptParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `VoxScriptParser`.
 */
export default class VoxScriptListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `VoxScriptParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.print`.
	 * @param ctx the parse tree
	 */
	enterPrint?: (ctx: PrintContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.print`.
	 * @param ctx the parse tree
	 */
	exitPrint?: (ctx: PrintContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.var_define`.
	 * @param ctx the parse tree
	 */
	enterVar_define?: (ctx: Var_defineContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.var_define`.
	 * @param ctx the parse tree
	 */
	exitVar_define?: (ctx: Var_defineContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.val_assign`.
	 * @param ctx the parse tree
	 */
	enterVal_assign?: (ctx: Val_assignContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.val_assign`.
	 * @param ctx the parse tree
	 */
	exitVal_assign?: (ctx: Val_assignContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.arith_assign`.
	 * @param ctx the parse tree
	 */
	enterArith_assign?: (ctx: Arith_assignContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.arith_assign`.
	 * @param ctx the parse tree
	 */
	exitArith_assign?: (ctx: Arith_assignContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.val_increment`.
	 * @param ctx the parse tree
	 */
	enterVal_increment?: (ctx: Val_incrementContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.val_increment`.
	 * @param ctx the parse tree
	 */
	exitVal_increment?: (ctx: Val_incrementContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.func_define`.
	 * @param ctx the parse tree
	 */
	enterFunc_define?: (ctx: Func_defineContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.func_define`.
	 * @param ctx the parse tree
	 */
	exitFunc_define?: (ctx: Func_defineContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.func_call`.
	 * @param ctx the parse tree
	 */
	enterFunc_call?: (ctx: Func_callContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.func_call`.
	 * @param ctx the parse tree
	 */
	exitFunc_call?: (ctx: Func_callContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.cont_while`.
	 * @param ctx the parse tree
	 */
	enterCont_while?: (ctx: Cont_whileContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.cont_while`.
	 * @param ctx the parse tree
	 */
	exitCont_while?: (ctx: Cont_whileContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.cont_for`.
	 * @param ctx the parse tree
	 */
	enterCont_for?: (ctx: Cont_forContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.cont_for`.
	 * @param ctx the parse tree
	 */
	exitCont_for?: (ctx: Cont_forContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.cont_foreach`.
	 * @param ctx the parse tree
	 */
	enterCont_foreach?: (ctx: Cont_foreachContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.cont_foreach`.
	 * @param ctx the parse tree
	 */
	exitCont_foreach?: (ctx: Cont_foreachContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.cont_return`.
	 * @param ctx the parse tree
	 */
	enterCont_return?: (ctx: Cont_returnContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.cont_return`.
	 * @param ctx the parse tree
	 */
	exitCont_return?: (ctx: Cont_returnContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.cont_continue`.
	 * @param ctx the parse tree
	 */
	enterCont_continue?: (ctx: Cont_continueContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.cont_continue`.
	 * @param ctx the parse tree
	 */
	exitCont_continue?: (ctx: Cont_continueContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.cont_break`.
	 * @param ctx the parse tree
	 */
	enterCont_break?: (ctx: Cont_breakContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.cont_break`.
	 * @param ctx the parse tree
	 */
	exitCont_break?: (ctx: Cont_breakContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.cont_if`.
	 * @param ctx the parse tree
	 */
	enterCont_if?: (ctx: Cont_ifContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.cont_if`.
	 * @param ctx the parse tree
	 */
	exitCont_if?: (ctx: Cont_ifContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.cont_else`.
	 * @param ctx the parse tree
	 */
	enterCont_else?: (ctx: Cont_elseContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.cont_else`.
	 * @param ctx the parse tree
	 */
	exitCont_else?: (ctx: Cont_elseContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.type_annotation`.
	 * @param ctx the parse tree
	 */
	enterType_annotation?: (ctx: Type_annotationContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.type_annotation`.
	 * @param ctx the parse tree
	 */
	exitType_annotation?: (ctx: Type_annotationContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.table_definition`.
	 * @param ctx the parse tree
	 */
	enterTable_definition?: (ctx: Table_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.table_definition`.
	 * @param ctx the parse tree
	 */
	exitTable_definition?: (ctx: Table_definitionContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.table_member_dict`.
	 * @param ctx the parse tree
	 */
	enterTable_member_dict?: (ctx: Table_member_dictContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.table_member_dict`.
	 * @param ctx the parse tree
	 */
	exitTable_member_dict?: (ctx: Table_member_dictContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.table_member_list`.
	 * @param ctx the parse tree
	 */
	enterTable_member_list?: (ctx: Table_member_listContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.table_member_list`.
	 * @param ctx the parse tree
	 */
	exitTable_member_list?: (ctx: Table_member_listContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.table_member`.
	 * @param ctx the parse tree
	 */
	enterTable_member?: (ctx: Table_memberContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.table_member`.
	 * @param ctx the parse tree
	 */
	exitTable_member?: (ctx: Table_memberContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.table_key`.
	 * @param ctx the parse tree
	 */
	enterTable_key?: (ctx: Table_keyContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.table_key`.
	 * @param ctx the parse tree
	 */
	exitTable_key?: (ctx: Table_keyContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.lambda`.
	 * @param ctx the parse tree
	 */
	enterLambda?: (ctx: LambdaContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.lambda`.
	 * @param ctx the parse tree
	 */
	exitLambda?: (ctx: LambdaContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.postfix`.
	 * @param ctx the parse tree
	 */
	enterPostfix?: (ctx: PostfixContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.postfix`.
	 * @param ctx the parse tree
	 */
	exitPostfix?: (ctx: PostfixContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.id_postfix`.
	 * @param ctx the parse tree
	 */
	enterId_postfix?: (ctx: Id_postfixContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.id_postfix`.
	 * @param ctx the parse tree
	 */
	exitId_postfix?: (ctx: Id_postfixContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.expression_postfix`.
	 * @param ctx the parse tree
	 */
	enterExpression_postfix?: (ctx: Expression_postfixContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.expression_postfix`.
	 * @param ctx the parse tree
	 */
	exitExpression_postfix?: (ctx: Expression_postfixContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.function_postfix`.
	 * @param ctx the parse tree
	 */
	enterFunction_postfix?: (ctx: Function_postfixContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.function_postfix`.
	 * @param ctx the parse tree
	 */
	exitFunction_postfix?: (ctx: Function_postfixContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.function_params`.
	 * @param ctx the parse tree
	 */
	enterFunction_params?: (ctx: Function_paramsContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.function_params`.
	 * @param ctx the parse tree
	 */
	exitFunction_params?: (ctx: Function_paramsContext) => void;
	/**
	 * Enter a parse tree produced by `VoxScriptParser.var_inst`.
	 * @param ctx the parse tree
	 */
	enterVar_inst?: (ctx: Var_instContext) => void;
	/**
	 * Exit a parse tree produced by `VoxScriptParser.var_inst`.
	 * @param ctx the parse tree
	 */
	exitVar_inst?: (ctx: Var_instContext) => void;
}

