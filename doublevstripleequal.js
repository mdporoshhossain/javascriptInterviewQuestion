// double vs triple equal, implicit conversion

// double equal it wil be cheacking Value
// triple equal it wil be cheacking Value & data type

/*In JavaScript, the double equals (==) and triple equals (===) operators are used for comparison, but they differ in how they handle implicit type conversion (type coercion).

Double Equals (==) - Loose Equality:
The == operator performs type coercion before comparing values. This means if the operands are of different types, JavaScript attempts to convert one or both operands to a common type before performing the comparison.
For example, 1 == "1" evaluates to true because the string "1" is implicitly converted to the number 1 before the comparison. Similarly, 0 == false evaluates to true because false is coerced to 0.
*/
const p = 5;
const q = '5';
if (p==q) {
    console.log('Double Equals this is true');
}else{
     console.log('Double Equals this is false');
}
/*
Triple Equals (===) - Strict Equality:
The === operator performs strict equality comparison, meaning it does not perform type coercion. It checks if both the value and the data type of the operands are identical.
If the operands have different types, === will immediately return false without attempting any type conversions.
For example, 1 === "1" evaluates to false because, although the values appear similar, their types (Number and String) are different. Similarly, 0 === false evaluates to false.*/

const x = 5;
const y = '5';
if (x === y) {
    console.log('Triple this is true');
}else{
     console.log('Triple this is false');
}