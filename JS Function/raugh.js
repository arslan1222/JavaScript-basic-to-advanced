/*
function myfunc(theObject){
    theObject.make = "Toyota";
}

const myCar = {
    make: "honda",
    model: "Acord",
    year: 2026,
};

console.log(myCar.make);

myfunc(myCar);

console.log(myCar.make);

*/

function myfunc(thearray){
    thearray[0] = 30;
}
const arr = [20];
console.log(arr[0]);

myfunc(arr);

console.log(arr[0]);



const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6

function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
      result[i] = f(a[i]);
    }
    return result;
  }
  
  
/* Sir, I have enrolled FSWD 1.0 before 7 months but i have not complete my certification's requirement due my college exams. So, please tell me sir now i have trying to complete my course so certificate will generated or not? */


  const cube = function (x) {
    return x * x * x;
  };
  
  const numbers = [0, 1, 2, 5, 10];
  console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]

  