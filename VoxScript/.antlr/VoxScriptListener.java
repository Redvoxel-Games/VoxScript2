// Generated from c:/Users/Timothy/RiderProjects/VoxScript/VoxScript/VoxScript.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link VoxScriptParser}.
 */
public interface VoxScriptListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(VoxScriptParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(VoxScriptParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#block}.
	 * @param ctx the parse tree
	 */
	void enterBlock(VoxScriptParser.BlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#block}.
	 * @param ctx the parse tree
	 */
	void exitBlock(VoxScriptParser.BlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(VoxScriptParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(VoxScriptParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#print}.
	 * @param ctx the parse tree
	 */
	void enterPrint(VoxScriptParser.PrintContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#print}.
	 * @param ctx the parse tree
	 */
	void exitPrint(VoxScriptParser.PrintContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#var_define}.
	 * @param ctx the parse tree
	 */
	void enterVar_define(VoxScriptParser.Var_defineContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#var_define}.
	 * @param ctx the parse tree
	 */
	void exitVar_define(VoxScriptParser.Var_defineContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#val_assign}.
	 * @param ctx the parse tree
	 */
	void enterVal_assign(VoxScriptParser.Val_assignContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#val_assign}.
	 * @param ctx the parse tree
	 */
	void exitVal_assign(VoxScriptParser.Val_assignContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#arith_assign}.
	 * @param ctx the parse tree
	 */
	void enterArith_assign(VoxScriptParser.Arith_assignContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#arith_assign}.
	 * @param ctx the parse tree
	 */
	void exitArith_assign(VoxScriptParser.Arith_assignContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#val_increment}.
	 * @param ctx the parse tree
	 */
	void enterVal_increment(VoxScriptParser.Val_incrementContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#val_increment}.
	 * @param ctx the parse tree
	 */
	void exitVal_increment(VoxScriptParser.Val_incrementContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#func_define}.
	 * @param ctx the parse tree
	 */
	void enterFunc_define(VoxScriptParser.Func_defineContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#func_define}.
	 * @param ctx the parse tree
	 */
	void exitFunc_define(VoxScriptParser.Func_defineContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#func_call}.
	 * @param ctx the parse tree
	 */
	void enterFunc_call(VoxScriptParser.Func_callContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#func_call}.
	 * @param ctx the parse tree
	 */
	void exitFunc_call(VoxScriptParser.Func_callContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#cont_while}.
	 * @param ctx the parse tree
	 */
	void enterCont_while(VoxScriptParser.Cont_whileContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#cont_while}.
	 * @param ctx the parse tree
	 */
	void exitCont_while(VoxScriptParser.Cont_whileContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#cont_for}.
	 * @param ctx the parse tree
	 */
	void enterCont_for(VoxScriptParser.Cont_forContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#cont_for}.
	 * @param ctx the parse tree
	 */
	void exitCont_for(VoxScriptParser.Cont_forContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#cont_foreach}.
	 * @param ctx the parse tree
	 */
	void enterCont_foreach(VoxScriptParser.Cont_foreachContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#cont_foreach}.
	 * @param ctx the parse tree
	 */
	void exitCont_foreach(VoxScriptParser.Cont_foreachContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#cont_return}.
	 * @param ctx the parse tree
	 */
	void enterCont_return(VoxScriptParser.Cont_returnContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#cont_return}.
	 * @param ctx the parse tree
	 */
	void exitCont_return(VoxScriptParser.Cont_returnContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#cont_continue}.
	 * @param ctx the parse tree
	 */
	void enterCont_continue(VoxScriptParser.Cont_continueContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#cont_continue}.
	 * @param ctx the parse tree
	 */
	void exitCont_continue(VoxScriptParser.Cont_continueContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#cont_break}.
	 * @param ctx the parse tree
	 */
	void enterCont_break(VoxScriptParser.Cont_breakContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#cont_break}.
	 * @param ctx the parse tree
	 */
	void exitCont_break(VoxScriptParser.Cont_breakContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#cont_if}.
	 * @param ctx the parse tree
	 */
	void enterCont_if(VoxScriptParser.Cont_ifContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#cont_if}.
	 * @param ctx the parse tree
	 */
	void exitCont_if(VoxScriptParser.Cont_ifContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#cont_else}.
	 * @param ctx the parse tree
	 */
	void enterCont_else(VoxScriptParser.Cont_elseContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#cont_else}.
	 * @param ctx the parse tree
	 */
	void exitCont_else(VoxScriptParser.Cont_elseContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#type_annotation}.
	 * @param ctx the parse tree
	 */
	void enterType_annotation(VoxScriptParser.Type_annotationContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#type_annotation}.
	 * @param ctx the parse tree
	 */
	void exitType_annotation(VoxScriptParser.Type_annotationContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(VoxScriptParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(VoxScriptParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#table_definition}.
	 * @param ctx the parse tree
	 */
	void enterTable_definition(VoxScriptParser.Table_definitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#table_definition}.
	 * @param ctx the parse tree
	 */
	void exitTable_definition(VoxScriptParser.Table_definitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#table_member_dict}.
	 * @param ctx the parse tree
	 */
	void enterTable_member_dict(VoxScriptParser.Table_member_dictContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#table_member_dict}.
	 * @param ctx the parse tree
	 */
	void exitTable_member_dict(VoxScriptParser.Table_member_dictContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#table_member_list}.
	 * @param ctx the parse tree
	 */
	void enterTable_member_list(VoxScriptParser.Table_member_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#table_member_list}.
	 * @param ctx the parse tree
	 */
	void exitTable_member_list(VoxScriptParser.Table_member_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#table_member}.
	 * @param ctx the parse tree
	 */
	void enterTable_member(VoxScriptParser.Table_memberContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#table_member}.
	 * @param ctx the parse tree
	 */
	void exitTable_member(VoxScriptParser.Table_memberContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#table_key}.
	 * @param ctx the parse tree
	 */
	void enterTable_key(VoxScriptParser.Table_keyContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#table_key}.
	 * @param ctx the parse tree
	 */
	void exitTable_key(VoxScriptParser.Table_keyContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#lambda}.
	 * @param ctx the parse tree
	 */
	void enterLambda(VoxScriptParser.LambdaContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#lambda}.
	 * @param ctx the parse tree
	 */
	void exitLambda(VoxScriptParser.LambdaContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#identifier}.
	 * @param ctx the parse tree
	 */
	void enterIdentifier(VoxScriptParser.IdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#identifier}.
	 * @param ctx the parse tree
	 */
	void exitIdentifier(VoxScriptParser.IdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#postfix}.
	 * @param ctx the parse tree
	 */
	void enterPostfix(VoxScriptParser.PostfixContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#postfix}.
	 * @param ctx the parse tree
	 */
	void exitPostfix(VoxScriptParser.PostfixContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#id_postfix}.
	 * @param ctx the parse tree
	 */
	void enterId_postfix(VoxScriptParser.Id_postfixContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#id_postfix}.
	 * @param ctx the parse tree
	 */
	void exitId_postfix(VoxScriptParser.Id_postfixContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#expression_postfix}.
	 * @param ctx the parse tree
	 */
	void enterExpression_postfix(VoxScriptParser.Expression_postfixContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#expression_postfix}.
	 * @param ctx the parse tree
	 */
	void exitExpression_postfix(VoxScriptParser.Expression_postfixContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#function_postfix}.
	 * @param ctx the parse tree
	 */
	void enterFunction_postfix(VoxScriptParser.Function_postfixContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#function_postfix}.
	 * @param ctx the parse tree
	 */
	void exitFunction_postfix(VoxScriptParser.Function_postfixContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#function_params}.
	 * @param ctx the parse tree
	 */
	void enterFunction_params(VoxScriptParser.Function_paramsContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#function_params}.
	 * @param ctx the parse tree
	 */
	void exitFunction_params(VoxScriptParser.Function_paramsContext ctx);
	/**
	 * Enter a parse tree produced by {@link VoxScriptParser#var_inst}.
	 * @param ctx the parse tree
	 */
	void enterVar_inst(VoxScriptParser.Var_instContext ctx);
	/**
	 * Exit a parse tree produced by {@link VoxScriptParser#var_inst}.
	 * @param ctx the parse tree
	 */
	void exitVar_inst(VoxScriptParser.Var_instContext ctx);
}