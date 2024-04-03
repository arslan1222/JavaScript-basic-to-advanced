let array = [1,2,3,4];

array.forEach(function(element, index, array){
    console.log(element, index, array);
});

array.forEach((element, index, array)=>{
    console.log("Arrow", element, index, array);
});

// use of map. it is same as forEach loop

array.map((element, index, array)=>{
    console.log("use of map", element, index, array);
});

const hero1 = ["Arsalan", "haider", "Muneeb"];

hero1.forEach((ele) => {
    console.log(ele.toUpperCase());
})

const hero2 = ["Arsalan", "haider", "Muneeb"];

hero2.forEach((ele) => {
    console.log(ele.toLowerCase());
})

// Use of filter

const hero3 = ["Arslan", "Usman", "Salman", "Muneeb"];

let heroesEndWithAn = hero3.filter((ele) =>{     
    return ele.endsWith("an");               // use return must
})

console.log(heroesEndWithAn);


// - Use of REDUCE operator
// Shopping cart The use of reduce function

const shoppingCart = [20,30,50];

// this function will add all values where you start // and also add the given in parameter
const showBill = shoppingCart.reduce((prev, curr) =>  prev+curr, 40);

console.log(showBill);

//  Check datatypes if all values are numbers

const gameScore = [200, 300, 400, 50, 322, 54];  // TRUE
// const gameScore = [200, 300, 400, 50, 322, 54, "String"];  //FALSE
console.log(typeof gameScore[3])

const Check = gameScore.every((ele) =>
    typeof ele === 'number'
);
console.log(Check);

// Use of FIND Operator
// above any number
const above200 = gameScore.find((element) => element > 200);

console.log(above200);