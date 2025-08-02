
const student =[
    {id : 11 , age:'22', Name:'Noman'},
    {id : 12 , age:'10', Name:'Hafsa'},
    {id : 13 , age:'23', Name:'fourty'},
    {id : 14 , age:'24', Name:'twenty4'},
    {id : 15 , age:'25', Name:'twenty5'},
]

// let look = [];
// for (let i = 0; i < student.length; i++) {
//     const element = student[i].Name;
//      look.push(element);
// }
//     console.log(look);


const result = student.map(x =>x.Name);
console.log(result);

const resultFi = student.filter(x => x.age < 22);
console.log('child' , resultFi);