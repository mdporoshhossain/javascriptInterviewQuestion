
// map, filter, find, smart way to run for loop

const numbers =[2,3,4,5,6,7,8];

let outPut =[];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    outPut.push(result);
}
console.log("defult", outPut);

// 01. map 
const result = numbers.map(function(element){
    return element * element;
});
console.log("Map", result);

// using arrow

const arrowVariable = numbers.map(x => x * x);

console.log('arrow Variable' , arrowVariable);

const filterName =  numbers.filter( x => x < 5);
console.log('filter' , filterName);

const findName =  numbers.find( x => x > 3);
console.log('find' , findName);
