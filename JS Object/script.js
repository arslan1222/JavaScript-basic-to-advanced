/* Need of Objects
 Variables limit us to handling only one value at a time whereas objects enable us to have multiple values of multiple data types to be stored under one name.  */

 /* Three ways for defining an object
.1
 let obj = {id: 101, fName: "Arslan", sName: "Haider", salary: 3000000};

//  console.log(obj);
 console.log(obj.id);
 console.log(obj["fName"]);

 // adding new attribute in the objects
 obj.class = 12;        // integer
 obj["section"] = 'A';  // char
 

 // We also can update existing attribute's values

 // Delete any attribute from an object


 delete obj["section"];
 delete obj.id
 console.log(obj);






//  .2
 let emp = new Object();
 emp.name = "sam";
 emp.id = 102;

 console.log(emp);

 .3
 function student(i, n, s){
    this.id = i;
    this.name = n;
    this.salary = s;
 }

 const std = new student(103, "Ahsan", 200000);
 console.log(std);

*/

// Here we ca call the function before intialization because of pure function name but when we use anonymous function we can't call the function before intialization

/*
function factorial(n) {
   if (n === 0 || n === 1) {
     return 1;
   } else {
     return n * factorial(n - 1);
   }
 }

 console.log(factorial(5));

 // we use anonymous function we can't call the function before  intialization
 const sqr = function(x){
   return x*x;
 };
 console.log(sqr(6));

 */

 function loop(x) {
   // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
   if (x > 6) {
     return 0;
   }
   // do stuff
   return x + loop(x + 1); // the recursive call
 }
 console.log(loop(0));
 
