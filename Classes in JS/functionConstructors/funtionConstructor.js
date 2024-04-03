class Product{
    name;
    price;
    rating;

    constructor(n, p, r){  // Refernce of constructor in (this) keyword
        this.name = n;
        this.price = p;
        this.rating = r;
        console.log("Defual Constructor is called:");
//      return 10; // If we returning premitive then it will avoid by the constructor 
//      return {x: 1, y: 2};  // If we returning non-premitve then it will be returned
//      return this;

    }

    Product(){
        console.log("Behaviour of class");
        console.log(this);
        console.log(this.name);
        console.log(this.name, this.price);
        console.log(this.name, this.price, this.rating);
    }
}

let obj1 = new Product("Camera", 20000, 5);
console.log(obj1);
obj1.Product();


/*
function Product(n,p,r){
    this.name = n;
    this.price = p;
    this.rating = r;
}

const p = new Product("iphone", 200000, 5);
console.log(p);
*/
