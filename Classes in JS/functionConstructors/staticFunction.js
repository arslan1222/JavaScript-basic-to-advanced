class Product{
    name;
    price;
    rating;

    constructor(n, p, r){  // Refernce of constructor in (this) keyword
        this.name = n;
        this.price = p;
        this.rating = r;
    }

    static method(){
        console.log("Static method called:");
    }
}

let obj1 = new Product();
// obj1.method(); -> X // we can't call static fuction by the object
// Product.method(); -> YES // We only can call the static functions by class name  