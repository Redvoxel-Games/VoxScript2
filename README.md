# VoxScript

Easily embeddable scripting language for C#.

Directly inspired by [Lua](https://www.lua.org/).

## Core features

* Easy to set up
* Easily embeddable
* Fast (Almost as fast as lua)

### INCOMPLETE

Missing features in order of priority:

1. foreach
2. UserData
3. Coroutines/Threads

## Easy to set up

First of all, Install the package via NuGet:
`dotnet --install VoxScript2`

And then running a script is as easy as:

```csharp
// Source code written in VoxScript
var source = """
    print "Hello, World!"
""";

// Object for containing global values
var globals = new ScriptGlobals();

// Compile source code into bytecode instructions
var program = VxsCompiler.CompileScript(source, globals);

// Run the compiled code
var runtime = new VxsRuntime(globals);
runtime.RunProgram(program);
```

### Value type

VoxScript uses a unified value struct. This struct can contain a string, number, boolean, etc.

To create a value, use `VoxValue.Create()`, and put in a valid object.

Valid types:

* `double`
* `string`
* `bool`
* `Func<VoxValue[], VoxValue[]>`
* `FunctionPrototype`
* `Table`

### Globals

To create a global value, use `ScriptGlobals.SetGlobal()`:

```csharp
var globals = new ScriptGlobals();

globals.SetGlobal("PI", VoxValue.Create(3.14159));
```
