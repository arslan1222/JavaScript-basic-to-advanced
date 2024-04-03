
function Product(n,p,r){
    this.name = n;
    this.price = p;
    this.rating = r;
}

const p = new Product("iphone", 200000, 5);
console.log(p);

let x = {
    p: Product
};

x.p("Samsung", 150000, 4);
console.log(x);

/*
// use of Anonymous Function
const Product = function(n,p,r){
    this.name = n;
    this.price = p;
    this.rating = r;
}

const p = new Product("iphone", 200000, 5);
console.log(p);

*/

// We can't use arrow fuction as funstion constructor
// In the arrow functions -(this) calling context is not working

// -Arrow function
/*
const Product = (n,p,r) => {
    this.name = n;
    this.price = p;
    this.rating = r;
}

const p = new Product("iphone", 200000, 5);
console.log(p);
*/