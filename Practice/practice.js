const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray);
// combinedArray will be [1, 2, 3, 4, 5, 6]

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num);
  }
  const result = sum(1, 2, 3, 4, 5);
  console.log(result);
  // result will be 15

  //-Rest operator
  function myFunction(arg1, arg2, arg3, ...restArgs) {
    console.log(arg1); // Print the first argument
    console.log(arg2); // Print the second argument
    console.log(arg3); // Print the second argument
    console.log(restArgs); // Rest parameters as an array
  }
  myFunction(1, 2, 3, 4, 5);
  // Output:
  // 1
  // 2
  // [3, 4, 5]

  // Destructuring of array

const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

const { name, age, ...restProps } = { name: 'Alice', age: 25, city: 'New York' };
console.log(name); // 'Alice'
console.log(age); // age
console.log(restProps); // { age: 25, city: 'New York' }

let newname = [1,2,3,4,5];

let newName = new Set([...newname]);
console.log(newName);


  
  