using System;
using System.Collections.Generic;
using Antlr4.Runtime;
using VoxScript.Interop;
using VoxScript.Runtime;
using static VoxScriptParser;

namespace VoxScript.Compiler;

internal class VxsBuilder(ScriptGlobals globals) : VoxScriptBaseVisitor<Instruction[]>
{
    private List<VoxValue> _constants = [];
    private List<string> _localNames = [];
    
    private readonly ScriptGlobals _globals = globals;
    
    public VxsProgram Build(ProgramContext treeRoot)
    {
        var blockCtx = treeRoot.block();
        
        VxsProgram program = new VxsProgram { _instructions = VisitBlock(blockCtx), _constants = _constants.ToArray() };
        
        _constants.Clear();
        _localNames.Clear();
        
        return program;
    }

    public override Instruction[] VisitBlock(BlockContext context)
    {
        List<Instruction> instructions = [];
        
        foreach (var statementCtx in context.statement())
        {
            instructions.AddRange(Visit(statementCtx));
        }
        
        return instructions.ToArray();
    }

    private bool _hasGlobal(string globalName) => globals._hasGlobal(globalName);

    private uint _getLocalSlot(string localName)
    {
        if (_localNames.Contains(localName))
        {
            return (uint)_localNames.IndexOf(localName);
        }
        _localNames.Add(localName);
        return (uint)_localNames.Count - 1;
    }

    private uint _getConstantSlot(VoxValue constant)
    {
        if (_constants.Contains(constant))
        {
            return (uint)_constants.IndexOf(constant);
        }
        _constants.Add(constant);
        return (uint)_constants.Count - 1;
    }

    private static bool _isNull<T>(T? obj, out T value)
    {
        if (obj == null)
        {
            value = default!;
            return false;
        }
        
        value = (T)obj;
        return true;
    }

    public override Instruction[] VisitExpression(ExpressionContext ctx)
    {
        if (_isNull(ctx.NUMBER(), out var num))
        {
            var dbl = double.Parse(num.GetText());
            var constantSlot = _getConstantSlot(VoxValue.Create(dbl));
            
            return [new(OpCode.Load_Constant, constantSlot)];
        }
        if (_isNull(ctx.STRING(), out var str))
        {
            var text = str.GetText().Trim('"');
            var constantSlot = _getConstantSlot(VoxValue.Create(text));
            
            return [new(OpCode.Load_Constant, constantSlot)];
        }
        if (_isNull(ctx.BOOLEAN(), out var b))
        {
            var isTrue = b.GetText() == "true";
            var constantSlot = _getConstantSlot(VoxValue.Create(isTrue));
            
            return [new(OpCode.Load_Constant, constantSlot)];
        }
        if (ctx.NULL() != null)
        {
            var slot = _getConstantSlot(VoxValue.Null);
            return [new(OpCode.Load_Constant, slot)];
        }

        if (_isNull(ctx.left, out var leftExpr))
        {
            var right = ctx.right!;
            
            var leftInst = VisitExpression(leftExpr);
            var rightInst = VisitExpression(right);

            List<Instruction> fetchInstructions = [];
            fetchInstructions.AddRange(leftInst);
            fetchInstructions.AddRange(rightInst);

            var op = ctx.op!.Text;
            fetchInstructions.Add(new Instruction(op switch
            {
                "+" => OpCode.Add,
                "-" => OpCode.Sub,
                "*" => OpCode.Mul,
                "/" => OpCode.Div,
                "%" => OpCode.Mod,
                "^" => OpCode.Pow,
                
                "==" => OpCode.Equals,
                "!=" => OpCode.NotEquals,
                "<" => OpCode.Less,
                "<=" => OpCode.LessOrEquals,
                ">" => OpCode.Greater,
                ">=" => OpCode.GreaterOrEquals,
                "&&" => OpCode.And,
                "||" => OpCode.Or,
                
                _ => throw new ArgumentOutOfRangeException()
            }));
            
            return fetchInstructions.ToArray();
        }

        if (_isNull(ctx.unary, out var unary))
        {
            var opInst = VisitExpression(ctx.expr);
            
            List<Instruction> fetchInstructions = [];
            fetchInstructions.AddRange(opInst);
            fetchInstructions.Add(new Instruction(OpCode.Invert));
            
            return fetchInstructions.ToArray();
        }

        if (_isNull(ctx.paren, out var paren))
        {
            return VisitExpression(paren);
        }

        if (_isNull(ctx.identifier(), out var identifier))
        {
            return VisitIdentifier(identifier);
        }

        if (_isNull(ctx.func_call(), out var callCtx))
        {
            return VisitFunc_call(callCtx);
        }

        if (_isNull(ctx.table_definition(), out var table))
        {
            return VisitTable_definition(table);
        }
        
        throw new Exception("Failed to compile expression!");
    }

    public override Instruction[] VisitTable_definition(Table_definitionContext context)
    {
        List<Instruction> fetchInstructions = [];
        fetchInstructions.Add(new(OpCode.Create_Table));

        if (_isNull(context.table_member_list(), out var list))
        {
            var expressions = list.expression();

            uint index = 1;
            foreach (var expr in expressions)
            {
                fetchInstructions.AddRange(VisitExpression(expr));
                fetchInstructions.Add(new(OpCode.Assemble_Index, index++));
            }
        }
        else
        {
            var dict = context.table_member_dict()!;

            foreach (var member in dict.table_member())
            {
                if (member.key.ID() != null)
                {
                    var keyText = member.key.ID().GetText();
                    var constantSlot = _getConstantSlot(VoxValue.Create(keyText));
                    fetchInstructions.Add(new(OpCode.Load_Constant, constantSlot));
                }
                else
                {
                    fetchInstructions.AddRange(VisitExpression(member.key.expression()));
                }
                
                fetchInstructions.AddRange(VisitExpression(member.expression()));
                
                fetchInstructions.Add(new(OpCode.Assemble_Key));
            }
        }
        
        return fetchInstructions.ToArray();
    }

    public override Instruction[] VisitFunc_call(Func_callContext context)
    {
        List<Instruction> fetchInstructions = [];
        fetchInstructions.AddRange(VisitIdentifier(context.identifier()));
            
        uint paramCount = 0;
        foreach (var expr in context.function_postfix().expression())
        {
            paramCount++;
            fetchInstructions.AddRange(VisitExpression(expr));
        }
                
        fetchInstructions.Add(new(OpCode.Call, paramCount));
        
        return fetchInstructions.ToArray();
    }

    public override Instruction[] VisitIdentifier(IdentifierContext context)
    {
        List<Instruction> fetchInstructions = [];
        
        var init = context.ID().GetText();

        if (_hasGlobal(init))
        {
            fetchInstructions.Add(new(OpCode.Load_Constant, _getConstantSlot(VoxValue.Create(init))));
            fetchInstructions.Add(new(OpCode.Load_Global));
        }
        else
        {
            var localSlot = _getLocalSlot(init);
            fetchInstructions.Add(new(OpCode.Load_Local, localSlot));
        }

        foreach (var postfixCtx in context.postfix())
        {
            if (_isNull(postfixCtx.id_postfix(), out var id_pf))
            {
                fetchInstructions.Add(new(OpCode.Load_Constant, _getConstantSlot(VoxValue.Create(id_pf.ID().GetText()))));
            }
            else if (_isNull(postfixCtx.expression_postfix(), out var expr_pf))
            {
                fetchInstructions.AddRange(VisitExpression(expr_pf.expression()));
            }
            else if (_isNull(postfixCtx.function_postfix(), out var func_pf))
            {
                uint paramCount = 0;
                foreach (var expr in func_pf.expression())
                {
                    paramCount++;
                    fetchInstructions.AddRange(VisitExpression(expr));
                }
                
                fetchInstructions.Add(new(OpCode.Call, paramCount));
            }
                
            fetchInstructions.Add(new(OpCode.Get_Value));
        }
        
        return fetchInstructions.ToArray();
    }

    public override Instruction[] VisitVar_define(Var_defineContext context)
    {
        var inst = context.var_inst();
        var localSlot = _getLocalSlot(inst.ID().GetText());

        var exprInst = VisitExpression(context.expression());

        List<Instruction> all = [];
        all.AddRange(exprInst);
        all.Add(new(OpCode.Store_Local, localSlot));
        
        return all.ToArray();
    }

    public override Instruction[] VisitPrint(PrintContext context)
    {
        var exprInst = VisitExpression(context.expression());

        List<Instruction> all = [];
        all.AddRange(exprInst);
        all.Add(new(OpCode.Print));
        
        return all.ToArray();
    }
}