class Product{

    name;
    price;
    rating;
    #rating;     // We make the rating private data member

    constructor(n, p, r){  // Reference of constructor in -(this) keyword
        this.name = n;
        this.price = p;
        this.#rating = r;  // rating is Private
    }

    getRating(){
        console.log(this.#rating);
    }
    // We also can write
    get anyNam(){
        console.log(this.#rating);
    }

    setRating(r){
        this.#rating = r;
    }
    // We also can write
    set anyName(r){
        this.#rating = r;
    }

}

let obj1 = new Product("iphone", 200000, 5);
// obj1.setRating(10);
// obj1.getRating();
obj1.anyName = 12;
obj1.anyNam;
console.log(obj1.name);
console.log(obj1);

