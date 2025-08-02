
// Null Vs Undefined, different ways you will get undefined

// In JavaScript, null and undefined both represent the absence of a value, but they convey different meanings:

/* . undefined:

Indicates that a variable has been declared but has not been assigned a value.
It is the default value for uninitialized variables, function parameters that are not provided, and properties of objects that do not exist.
The typeof operator returns 'undefined' for undefined.*/

// for example
    let myVariable; // Declared but not assigned, so it's undefined
    console.log(myVariable); // Output: undefined

    function myFunction(a) {
      console.log(a); // If called without an argument for 'a', it will be undefined
    }
    myFunction(); // Output: undefined

const firnd = {Name:'Noman' , age:'22'};
console.log(firnd.phone);

const ages =[22,33,43];
console.log('age' , ages[4]);

/*null:
Represents the intentional absence of any object value.
It is a primitive value that signifies "no value" or "empty."
Programmers explicitly assign null to a variable when they want to indicate that it currently holds no meaningful value.
The typeof operator returns 'object' for null, which is a historical quirk in JavaScript.*/

    let myObject = null; // Intentionally set to null to indicate no object value
    console.log(myObject); // Output: null

    let clearedValue = "some value";
    clearedValue = null; // Clearing the value
    console.log(clearedValue); // Output: null