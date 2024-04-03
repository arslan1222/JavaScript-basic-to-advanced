// let newArray = [1,5,6];
// console.log(typeof newArray);

// -Add two arrays
/*
// const array1 = [1,2,3,4];
const array2 = [5,6,7,8];

const array3 = array1.concat(array2);
console.log(array3);
*/
/* wrong use
   const array4 = [array1, array2];
   console.log(array4);
*/

// -Use of REST operator and SPREAD operator

/*
// -SPREAD Operator
console.log(...array1); // -After the spread our array will not be the array

const array5 = [...array1, ...array2];
console.log(array5);

function testOne(){
    console.log(arguments)
}
testOne = (1,2,3,4);
*/

// REST Operator  
// So, How we determine this is SPREAD Operator or REAST Operator?
// - We determines that if multiple values are given so it pack these      valuse in array like this is colled the the REST Operator:

// -REST Operator's use
function manyArguments(){ 
    let arg = Array.from(arguments);
    let newArg = arg.map((element) => element);
    console.log(newArg);
}

function manyArguments2(...args){
    let newArg = args.map(element => element);
    console.log(...newArg);
}

manyArguments(1,2,3);
manyArguments2(1,2,3);
// manyArguments(1,2,3,4,5,6,7);

let arr = ["superman", "flash"];
let newArr = ["spiderman", ...arr, "batam"];

console.log(newArr);

let useOfSpread = "pwskills";

console.log(...useOfSpread);   
console.log([...useOfSpread]);   // SPREAD operator


function useOfRest(...values){
    return values;
}

console.log(useOfRest("Hitman", "ROhit"));  // REST Operator