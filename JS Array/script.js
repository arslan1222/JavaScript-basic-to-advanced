
let arr = [1,2,3,4,5];
console.log(arr);

// This will add 6and 7
arr.push(6,7);

console.log(arr);

// This will delete last element
arr.pop();
console.log(arr);

// This will delete from starting 1 element
arr.shift();
console.log(arr);

// This will add to starting an element
arr.unshift(9);
console.log(arr);

// This will delete from starting an element and also return that element
let f = arr.shift();
console.log(f);

// This will merged two arrays a and b in c
let a = [1,2,4];
let b = [4,5];

let c = a.concat(b);

console.log(a, b, c);

// This will join every element of the array and what we gives in the join function that will be in the between every every two elements

let d = c.join("");
console.log(d);

c.reverse();

// This will give us the element 5's index
console.log(d.indexOf(5));

// This will give us starting and ending element that we are give in the slice function

let array = [1,2,4,5,6,7,8];

console.log(array.slice(2,5));

// This will add an element in our array that we give the position 

// array.splice(4, 11);
// After this element
array.splice(3, 0, 10);
console.log(array)
// Not delete any element
array.splice(3, 1, 10);
console.log(array)


