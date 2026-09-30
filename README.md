# VoxScript

Easily embeddable scripting language for C#.

Directly inspired by [Luau](https://www.luau.org/).

## Core features

* Easy to set up
* Easily embeddable
* Fast

### INCOMPLETE

Currently missing coroutines/threads.

## Easy to set up

First of all, Install the package via NuGet:
`dotnet add package VoxScript2`

And then running a script is as easy as:

```csharp
// Source code written in VoxScript
var source = """
    print "Hello, World!"
""";

// Object for containing global values, such as libraries or utilities.
var globals = ScriptGlobals.Create()
    .AddMathLibrary()
    .AddTableLibrary()
    .AddStringLibrary()
    .Build();

// Compile source code into bytecode instructions
var program = VxsCompiler.CompileScript(source, globals);

// Run the compiled code
var runtime = new VxsRuntime(globals);
runtime.RunProgram(program);
```

Globals MUST be defined before compilation.

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

## UserData

VoxScript, like Lua, uses a UserData system to transfer native objects to and from the runtime.

To create UserData for an object, simply use `VxsUserData.Create()`:

```csharp
// Some native object
var nativeObject = new SomeClass();

// Create UserData object
var userData = VxsUserData.Create(nativeObject);

// Create VoxValue
var value = VoxValue.Create(userData);

// Pass to globals
globals.SetGlobal("SomeObject", value);
```

However, only members marked with the `[ExposeToVxs]` attribute can be seen from the runtime.
And only methods that take in and return an array of VoxValues will be exposed.

```csharp
public class SomeClass {
    public int SomeInt = 0; // Can't be accessed from a script.

    [ExposeToVxs]
    public int SomeOtherInt = 1; // Can be accessed from a script.

    // Will not work
    [ExposeToVxs]
    public string RandomMethod(string str) {
        return str;
    }

    // WILL work
    [ExposeToVxs]
    public VoxValue[] PrintHello(VoxValue[] args) {
        Console.WriteLine("Hello, VoxScript!")
        return [VoxValue.Null]
    }
}
```

`[ExposeToVxs]` can only be used on fields, properties, and methods.
