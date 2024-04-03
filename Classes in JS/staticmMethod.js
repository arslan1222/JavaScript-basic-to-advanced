class Product{

    static fun1(){  // -Static methods are attatched with class these are not refered to the object
        console.log("Static method is used:");
    }

}

let obj1 = new Product();
Product.fun1();  // -Static methods are attatched with class these are not refered to the object