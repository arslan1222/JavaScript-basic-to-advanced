/*
    -Introduction demo of call stack

function hello(){
    console.log("hello function called");
}

function demo(){
    console.log("Demo function called");
    hello();
}

console.log("outside of function");
demo();
*/
/*
function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}
three();
*/

// -Single threaded language / -> JavaScript
// 1 time mein javascript 1 hi kam krti hai isi ko hum single threaded language kehte hain
// ignore (API -> basic job -> take request and send data (request -> API -> response))

// Syncronous nature / one after one
/*
let a = 20;
console.log(a);
let b = 10;
console.log(b);
console.log(a+b);
*/

// here js not wait for timeout
// Because setTimeout is not a function of javascript it's a function of browser // Browsers are generaly written in C++

// Asyncronous
/*
    -Basics
setTimeout(()=>{
    console.log("set time out!");
},2000);
console.log("After time out");
*/
let h1 = document.querySelector("h1");
/*
function colorChange(color, delay) {
    setTimeout(()=>{
        h1.style.color = color;
    }, delay);
}
colorChange("red", 1000);
colorChange("yellow", 2000);
colorChange("green", 3000);
*/

/*
// Advance way to change color

// We say this callback nesting / callback Hell 

function colorChange(color, delay, nextColorChange) {
    setTimeout(()=>{
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    }, delay);
}
colorChange("red", 1000, ()=>{   // Here we can add so many functions
    colorChange("yellow", 1000, ()=>{
        colorChange("green", 1000, ()=>{
            colorChange("blue", 1000);
        })
    })
});
*/




