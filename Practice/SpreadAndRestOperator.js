// SPREAD
// -Spread is used to open an array

// REST
// -Rest is used to pack an array


/*  So, How we determine this is SPREAD Operator or REAST Operator?
    - We determines that if multiple values are given so it pack these valuse in one array this is colled the the REST Operator:

    - If the given an Array so it determine that it open (unpack) the array.. this is called SPREAD Operator:
*/

// SPREAD 

let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
console.log(arr1);

// SPREAD

function spread(...arr1){
    let result = arr1.map(element => element);
    console.log(...result);
}

spread(1,2,3);


// arr1 is now [0, 1, 2, 3, 4, 5]

/*
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

//  Prepend all items from arr2 onto arr1

Array.prototype.unshift.apply(arr1, arr2);
console.log(arr1); // [3, 4, 5, 0, 1, 2]
*/