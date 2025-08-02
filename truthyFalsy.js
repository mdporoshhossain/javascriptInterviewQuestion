

// In JavaScript, values are categorized as either truthy or falsy based on how they behave when evaluated in a Boolean context, such as in if statements, logical operations (&&, ||), or when explicitly converted to a Boolean using Boolean().

// Truthy and Falsy values

// Falsy Values:
// These are the specific values that evaluate to false in a Boolean context. There are a limited number of falsy values in JavaScript:
// false (the Boolean value itself)
// 0 (the number zero, including -0 and 0n for BigInt)
// "" (an empty string)
// null (represents the intentional absence of any object value)
// undefined (represents a variable that has been declared but not assigned a value, or a missing property)
// NaN (Not-a-Number, resulting from invalid mathematical operations)
// document.all (a legacy object, rarely used in modern JavaScript, which behaves as falsy)


// Truthy Values:
// Any value that is not explicitly listed as a falsy value is considered truthy. This means they evaluate to true in a Boolean context. Examples of truthy values include:
// Any non-zero number (e.g., 1, -1, 100)
// Any non-empty string (e.g., "hello", " ", "0")
// Arrays (even empty ones, e.g., [])
// Objects (even empty ones, e.g., {})
// Functions
// The Boolean value true

let Name = 0;
if (Name || Name == 0) {
    console.log(Name ,'this is true');
}else{
     console.log(Name , 'this is false');
}