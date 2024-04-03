// let newName = new Set();
// let newName = new Set([...newname]); // We also can set parameters

// newName.add(1);  // -Repeated values not add -We only add unique values
// newName.add(5);



// console.log(newName);
// console.log(newName.delete());

// -Add Arrays

let newname = [1,2,3,4,5];

let newName = new Set([...newname]);   // ([]) -> must be use

console.log(newName);
newName.add(9);       // -Repeated values not add -We only add unique values
// newName.clear();  -Clear all
console.log(newName);

// -Rough -Use of filter -Extract only values that we want

const words = ["ljkdl","iueyeee","iweye","iuw","iouweroe"];

const retrn = words.filter(element => element.length > 5);

console.log(retrn);


let array1 = [1,2,3,4];
let setA = new Set([...array1]);

console.log(setA);

let array2 = [5,6,7,8];
let setB = new Set([...array2]);

console.log(setB);

function comparesetAsetB(setA, setB){
    return new Set(setA.filter(element => element !=setB));
}

let a = comparesetAsetB();
console.log(a);