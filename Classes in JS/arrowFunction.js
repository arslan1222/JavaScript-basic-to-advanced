// Note: The theory of -(this) keyword is not aplicable with arrow function
/*
product = (n,p,r) =>{
    this.name = n;
    this.price = p;
    this.rating = r;
}

let arrofunc = new product("iphone" ,3000, 4);
console.log(arrofunc);
*/

//

// -Correct
let obj = {
    x: 10, fun1(){
        console.log(this.x);
    }
}
obj.fun1();

// -With arrow function // Arrow function is aplicable for this keyword
let obj2 = {
    x: 12,
    fun2: ()=>{
        console.log(this.x);
    }
}
obj2.fun2();