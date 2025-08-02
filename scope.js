
// Scope, block scope, access outer scope variable.

let bonus = 20;

function myFunction(first , scound) {
    let result =first + scound + bonus;

    return result;
}

const output = myFunction(3 ,7);
console.log(bonus);
console.log(output);