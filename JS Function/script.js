/* Function and declaration */
function sqrt(x){
    // console.log(x*x);
    return x*x;
}

sqrt(6);

let a = sqrt(8);
console.log(a);

/* Funtions without parameters */

function greet(){
    console.log("Hello World");
}

greet();
greet();
greet();

function passvalue(){

    return "pakistam Zindabad";
}

let returned_value = passvalue();
console.log(returned_value);


/* Function with default parameter */

function
    displayMessege(
    messegToBeDisplayed = "Hello World"
    )
    {
        console.log(messegToBeDisplayed);
    }

    displayMessege("PW Skills");
    displayMessege();

    function add(x, y = 9){
        return x + y;
    }

    console.log(add(5));

    /* Functions with unlimited numbers of parameters */

    // Function Declaration
    function unNoOfparameters(){
        let sum = 0;
        for(let i = 0; i < arguments.length; i++){
            sum = sum + arguments[i];
        }
        return sum;
    }
    // Function call
    let result = unNoOfparameters(1,2,3,4,5,6);
    //output
    console.log(result);

    /* Anonymous Functions */
/*
    let s = function(){
        console.log("Hello Worrld");
    }
    s();
*/   

/*       self invoked function
imediately invoked Functions expressin (iffy)*/
(function exec(){
    console.log("Named");
})();

/* anonymous function */ 
(function (x){
    console.log(x*x);
})(5);




