let hero = ["Hero1", "Hero2", "Hero3"];
let Hero2 = ["newHero1", "newHero2", "newHero3"];

let objectHero = {
    spiderman: "Spder",
    Superman: "flying",

    spidermanPower: () =>{
        console.log(`Spiderman power: ${this.spiderman}`);  // if we want to access any property of an oject we use this operator
    }
}

Object.prototype.arslan = () =>{     // Object have access of any array.. but Array have no access of any object
    console.log(`Hello Arslan:`);
}

console.log(hero.arslan());          // -Object have access of any array.. and also objects
console.log(objectHero.arslan());

Array.prototype.Haider = function(){   // -Array have no access of any object
    console.log(`Hello Haider:`);
}

console.log(hero.Haider());
// console.log(objectHero.Haider());  // <- will give -Error   // -Array have no access of any object

// -INHERITENCE IN JAVASCRIPT
//  -These are objects that willl inherit

let Principal = {
    Fprincipal: "principal1",
    Sprincipal: "principal2",
}

let teacher = {
    professor: "Naeem Sahib",
    studanet: "Arslan Haider",
    // use of inheritence
    __proto__: Principal,

}

teacher.__proto__ = Principal; // We also give the properties of any object to another object in outside

console.log(teacher.Fprincipal);  // Works correctly

// new way to give the properties of any object to another
Object.setPrototypeOf(teacher, Principal);  // This is easiest way to give properties of one object to another     

console.log(Principal);  // Works correctly

// length of a sring

String.prototype.truelength = function(){
    console.log(`True length of string ${this.trim().length} `);
}

"Hiteshchoudhary  ".truelength();



