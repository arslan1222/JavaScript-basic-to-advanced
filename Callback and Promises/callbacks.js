// -Functions that take functions as an argument is called higher order 
// The function we use as argument is called callback


function func(x, fun){
    // func -> is Higher Order function
    // fun -> is callback
    console.log(x*x);
    fun();
}

func(10, function fun(){
    console.log("callback function:");
})


// JavaScript print the code (line by line) and wait for printing the one line and start another line for printing (Here is the timer function and javascript not wait for this function why? -> The setTimeOut is not the javascript funtion it is browser defined function and javascript recognise only it native code)

// When the process come who is not javascript native so javascript not wait for its execution and run other line of code

// -Javassript not wait for runTime's features But JS wiat for his native functions if they are time consuming

// -VERSION CONROL // When give the any function's execution power to another function this is called version control

console.log("Start");
setTimeout(function(){
    console.log("Timer function");
}, 3000);
console.log("End");

