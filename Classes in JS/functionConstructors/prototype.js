let myHeros = ["Spiderman", "Thor"];

let heroPower = {
    spiderman: "spider",
    thor: "splice",

    spiderPower: function(){
        console.log(`Spider power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`Hitesh is pesent in all object`);
}

console.log(myHeros.hitesh());
console.log(heroPower.hitesh());

Array.prototype.sayHitesh = function(){
    console.log(`Hi Hitesh Array`);
}

console.log(myHeros.sayHitesh());
// console.log(heroPower.sayHitesh());

// -INHERITENCE IN JAVASCRIPT

let user1 = {
    name: "Arslan",
    age: 20,
}

const user2 = {
    name2: "Haider",
    age: 21,
    __proto__: user1,  // first way to inherits
}

user2.__proto__ = user1;  // // second way to inherits
console.log(user2.name);
