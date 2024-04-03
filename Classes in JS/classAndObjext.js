// new Pruduct(); -Creates an empty plain object 
// -When we create an object first of all, the constructor is called 
// -At the time of creation of an object the custom constructor must be called
// -There is no multiple constructors in one class
// -this (-this) keyword in javascript is different from other languages 
class Product{

    // -States -Properties - Variables -Data members
    // name = "iphone";   //-These name values are optional we can deny these values
    //-> price = 50000;
    //-> rating = 4;

    constructor(n, p, r){   // This is my default constructor -Custom Constructor
        console.log("Hello World");
        this.name = n;   // This -(this) is an empty object
        this.price = p;
        this.rating = r;
        // return 10 // -If we are returning primitive it will avoid 
        // return {x: 20, y: 30}; // -If we are returning non-pritmitive it returned
        // return this; // -If return the same values (n,p,r);
        // -Generally we do not use return keyword
    }

    // Behaviour -Function -Member Function
    Product(){  // -Default constructor
        console.log("Behaviour of class");
        
    }
    // -We can write as the defualt constructor
    Product(){
        console.log(this);
        console.log("Behaviour of class", this.name, this.price, this.rating);
    }
}

let obj1 = new Product("iphone", 500000, 10);  // (new operator) new operator is very imp. when we use new operator it create a empty plain object

console.log(obj1);
console.log(obj1.name);
obj1.Product();
