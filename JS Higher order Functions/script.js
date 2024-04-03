// -Functions that take functions as an argument is called higher order 
// The function we use as argument is called callback

/*
const powerOfTwo = (n) => {
    return n ** 2;
}

function cubeFunction (powerOfTwo, n){
    return powerOfTwo(n) * n;
}

console.log(cubeFunction(powerOfTwo , 3));


//

function hellofunc(){
    return () => {
        console.log("Hello World");
    }
}

const guessValue = hellofunc();

console.log(guessValue);
guessValue();


const higherOrder = m =>{
    const funTwo = n =>{
        const funThree = p =>{
            return m + n + p;
        }
        return funThree;
    }
    return funTwo;
}


console.log(higherOrder((2)(3)(4)));

*/


// Use of forEach loop

let myNum = [1,2,3,4,5];

const sumArray = arr =>{

    let total = 0;

    arr.forEach(element =>{
        total = total + element;
    });
        return total;

        /* Same As */
    // arr.forEach(function(element){
    //     total = total + element;
    // });
    //     return total;
}
// console.log(sumArray(myNum));

function oneMoreHello(){

    console.log("Hello World !");    //  ("Hello World", Math.random())
}

// setInterval(oneMoreHello, 1000);  // This will print after every 1 second

setTimeout(oneMoreHello, 2000);   // This will print only one time after give time like 2000=> this define 2 seconds