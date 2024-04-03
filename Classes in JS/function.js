function Product(n,p,r){
    this.name = n;
    this.price = p;
    this.rating = r;
    // return 10;  // Not damage our code
    // return {x:20, y:30};  // <- return only object

}

let obj2 = new Product("iphone", 40, 3);
console.log(obj2);
console.log(obj2.price);