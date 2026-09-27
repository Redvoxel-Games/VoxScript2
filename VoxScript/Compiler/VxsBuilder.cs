using System;
using System.Collections.Generic;
using Antlr4.Runtime;
using VoxScript.Exceptions;
using VoxScript.Interop;
using VoxScript.Runtime;
using static VoxScriptParser;
using ValueType = VoxScript.Runtime.ValueType;

namespace VoxScript.Compiler;

internal class CompilerScope
{
    public readonly CompilerScope? Parent;
    public readonly List<CompilerScope> Children = [];
    
    public readonly List<string> Locals = [];
    public readonly List<VoxValue> Constants = [];

    public CompilerScope(CompilerScope? parent)
    {
        Parent = parent;
        parent?.Children.Add(this);
    }
}

internal abstract class Closure(Closure[] parents, VoxValue[] constants, uint numLocals)
{
    public Closure[] Parents = parents;
    
    public VoxValue[] Constants = constants;
    public VoxValue[] Locals = new VoxValue[numLocals];
}

internal class FunctionClosure(Closure[] parents, Instruction[] instructions, VoxValue[] constants, uint numLocals) : Closure(parents, constants, numLocals)
{
    public Instruction[] Instructions = instructions;
}

internal class BlockClosure(Closure[] parents, VoxValue[] constants, uint numLocals)
    : Closure(parents, constants, numLocals);

internal class IfClosureStore
{
    public VoxValue[] Constants;
    public uint LocalCount;
    public IfClosureStore(VoxValue[] constants, uint numLocals)
    {
        Constants = constants;
        LocalCount = numLocals;
    }
}

internal class VxsBuilder(ScriptGlobals globals) : VoxScriptBaseVisitor<Instruction[]>
{
    private List<VoxValue> _constants => _currentScope.Constants;
    private List<string> _localNames => _currentScope.Locals;

    private CompilerScope _currentScope = null;
    
    public VxsProgram Build(ProgramContext treeRoot)
    {
        var blockCtx = treeRoot.block();

        var result = VisitBlockSelf(blockCtx);
        VxsProgram program = new VxsProgram { _instructions = result.Instructions, _constants = result.Scope.Constants.ToArray(), _localCount = (uint)result.Scope.Locals.Count };
        
        return program;
    }

    internal record BlockResult(Instruction[] Instructions, CompilerScope Scope);

    public BlockResult VisitBlockSelf(BlockContext context, string[]? locals=null)
    {
        _currentScope = new CompilerScope(_currentScope);
        locals ??= [];
        foreach (var localName in locals)
        {
            _getLocalSlot(localName); // Used to reserve local slots for functions
        }
        
        List<Instruction> instructions = [];
        
        foreach (var statementCtx in context.statement())
        {
            instructions.AddRange(Visit(statementCtx));
        }

        var scope = _currentScope;
        
        _currentScope = _currentScope.Parent!;
        
        return new(instructions.ToArray(), scope);
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

    private Instruction[] _getFetchForVariable(string name)
    {
        uint depth = 0;
        var scope = _currentScope;
        while (true)
        {
            if (scope.Locals.Contains(name)) break;
            if (scope.Parent == null)
            {
                // Must be trying to access global
                if (!_hasGlobal(name)) throw new GlobalNotFoundException($"No global or local found for '{name}'");
                
                var constantSlot = _getConstantSlot(VoxValue.Create(name));
                return [
                    new(OpCode.Load_Constant, constantSlot),
                    new(OpCode.Load_Global)
                ];
            }

            scope = scope.Parent;
            depth++;
        }
        
        var slot = (uint)scope.Locals.IndexOf(name);

        if (depth > 0)
        {
            return [new(OpCode.Load_Scoped, depth, slot)];
        }

        return [new(OpCode.Load_Local, slot)];
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

    private static bool _notNull<T>(T? obj, out T value)
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
        if (_notNull(ctx.NUMBER(), out var num))
        {
            var dbl = double.Parse(num.GetText());
            var constantSlot = _getConstantSlot(VoxValue.Create(dbl));
            
            return [new(OpCode.Load_Constant, constantSlot)];
        }
        if (_notNull(ctx.STRING(), out var str))
        {
            var text = str.GetText().Trim('"');
            var constantSlot = _getConstantSlot(VoxValue.Create(text));
            
            return [new(OpCode.Load_Constant, constantSlot)];
        }
        if (_notNull(ctx.BOOLEAN(), out var b))
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

        if (_notNull(ctx.left, out var leftExpr))
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

        if (_notNull(ctx.unary, out var unary))
        {
            var opInst = VisitExpression(ctx.expr);
            
            List<Instruction> fetchInstructions = [];
            fetchInstructions.AddRange(opInst);
            fetchInstructions.Add(new Instruction(OpCode.Invert));
            
            return fetchInstructions.ToArray();
        }

        if (_notNull(ctx.paren, out var paren))
        {
            return VisitExpression(paren);
        }

        if (_notNull(ctx.identifier(), out var identifier))
        {
            return VisitIdentifier(identifier);
        }

        if (_notNull(ctx.func_call(), out var callCtx))
        {
            return VisitFunc_call(callCtx);
        }

        if (_notNull(ctx.table_definition(), out var table))
        {
            return VisitTable_definition(table);
        }

        if (_notNull(ctx.lambda(), out var lambda))
        {
            return VisitLambda(lambda);
        }
        
        throw new Exception("Failed to compile expression!");
    }

    public override Instruction[] VisitFunc_define(Func_defineContext context)
    {
        var init = context.ID().GetText();
        
        List<Instruction> fetchInstructions = [];

        uint paramCount = 0;
        List<string> paramNames = [];
        var paramsCtx = context.function_params();
        foreach (var instCtx in paramsCtx.var_inst())
        {
            paramCount++;
            paramNames.Add(instCtx.ID().GetText());
        }

        var result = VisitBlockSelf(context.block(), paramNames.ToArray());

        FunctionPrototype func = new FunctionPrototype(result.Instructions, result.Scope.Constants.ToArray(), paramCount, (uint)result.Scope.Locals.Count);
        
        var constantSlot = _getConstantSlot(VoxValue.Create(func));
        fetchInstructions.Add(new(OpCode.Load_Constant, constantSlot));
        
        fetchInstructions.Add(new(OpCode.Mark_Ownership));
        
        var localSlot = _getLocalSlot(init);
        fetchInstructions.Add(new(OpCode.Store_Local, localSlot));
        
        return fetchInstructions.ToArray();
    }

    public override Instruction[] VisitLambda(LambdaContext context)
    {
        List<Instruction> fetchInstructions = [];

        uint paramCount = 0;
        List<string> paramNames = [];
        var paramsCtx = context.function_params();
        foreach (var instCtx in paramsCtx.var_inst())
        {
            paramCount++;
            paramNames.Add(instCtx.ID().GetText());
        }

        var result = VisitBlockSelf(context.block(), paramNames.ToArray());

        FunctionPrototype func = new FunctionPrototype(result.Instructions, result.Scope.Constants.ToArray(), paramCount, (uint)result.Scope.Locals.Count);
        
        var constantSlot = _getConstantSlot(VoxValue.Create(func));
        fetchInstructions.Add(new(OpCode.Load_Constant, constantSlot));
        
        return fetchInstructions.ToArray();
    }

    public override Instruction[] VisitTable_definition(Table_definitionContext context)
    {
        List<Instruction> fetchInstructions = [];
        fetchInstructions.Add(new(OpCode.Create_Table));

        if (_notNull(context.table_member_list(), out var list))
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
        foreach (var expr in context.function_postfix().expression().Reverse())
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

        fetchInstructions.AddRange(_getFetchForVariable(init));

        foreach (var postfixCtx in context.postfix())
        {
            if (_notNull(postfixCtx.id_postfix(), out var id_pf))
            {
                fetchInstructions.Add(new(OpCode.Load_Constant, _getConstantSlot(VoxValue.Create(id_pf.ID().GetText()))));
            }
            else if (_notNull(postfixCtx.expression_postfix(), out var expr_pf))
            {
                fetchInstructions.AddRange(VisitExpression(expr_pf.expression()));
            }
            else if (_notNull(postfixCtx.function_postfix(), out var func_pf))
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
        List<Instruction> all = [];
        
        var exprInst = VisitExpression(context.expression());
        all.AddRange(exprInst);
        
        var instances = context.var_inst();
        foreach (var inst in instances)
        {
            var localSlot = _getLocalSlot(inst.ID().GetText());
            
            all.Add(new(OpCode.Store_Local, localSlot));
        }
        
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

    public override Instruction[] VisitCont_return(Cont_returnContext context)
    {
        List<Instruction> fetchInstructions = [];

        foreach (var expr in context.expression())
        {
            fetchInstructions.AddRange(VisitExpression(expr));
        }
        
        fetchInstructions.Add(new(OpCode.Return));
        
        return fetchInstructions.ToArray();
    }

    public override Instruction[] VisitCont_if(Cont_ifContext context)
    {
        List<Instruction> all = [];
        var expr = context.expression();
        
        all.AddRange(VisitExpression(expr));

        Instruction[] blockInstructions;
        if (_notNull(context.statement(), out var statement))
        {
            blockInstructions = VisitStatement(statement);
            
            all.Add(new(OpCode.Jump_If_Not, (uint)blockInstructions.Length));
            all.AddRange(blockInstructions);
        }
        else
        {
            var result = VisitBlockSelf(context.block());
            blockInstructions = result.Instructions;
            
            all.Add(new(OpCode.Jump_If_Not, (uint)blockInstructions.Length+3));

            var constantSlot = _getConstantSlot(new VoxValue
            {
                Type = ValueType.Misc,
                Reference = new IfClosureStore(result.Scope.Constants.ToArray(), (uint)result.Scope.Locals.Count)
            });
            
            all.Add(new(OpCode.Load_Constant, constantSlot));
        
            all.Add(new(OpCode.Make_Closure));
            all.AddRange(blockInstructions);
            all.Add(new(OpCode.Break_Closure));
        }

        if (_notNull(context.cont_else(), out var elseCtx))
        {
            all.AddRange(VisitExpression(expr));
            
            Instruction[] elseBlockInstructions;
            if (_notNull(elseCtx.statement(), out var elseStatement))
            {
                elseBlockInstructions = VisitStatement(elseStatement);
                all.Add(new(OpCode.Jump_If, (uint)elseBlockInstructions.Length));
                all.AddRange(elseBlockInstructions);
            }
            else
            {
                var result = VisitBlockSelf(elseCtx.block());
                elseBlockInstructions = result.Instructions;

                var constantSlot = _getConstantSlot(new VoxValue
                {
                    Type = ValueType.Misc,
                    Reference = new IfClosureStore(result.Scope.Constants.ToArray(), (uint)result.Scope.Locals.Count)
                });
            
                all.Add(new(OpCode.Jump_If, (uint)elseBlockInstructions.Length+3));
                all.Add(new(OpCode.Load_Constant, constantSlot));
        
                all.Add(new(OpCode.Make_Closure));
                all.AddRange(elseBlockInstructions);
                all.Add(new(OpCode.Break_Closure));
            }
        }
        
        return all.ToArray();
    }
}