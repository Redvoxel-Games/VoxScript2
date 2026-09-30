namespace VoxScript.Exceptions;

public class Exceptions(string message) : Exception(message);
public class ValueConversionException(string message) : Exception(message);