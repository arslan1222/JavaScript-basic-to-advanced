let a = 10;
let b = 2;

function func(){
    let c = a + b;
    // console.log(c);
    return c;

}

func();

console.log(func());

// When any function or block of code called thats time the execution cotext created and then go to the call stack. The call stack already has a Global Execution Context. The Global Execution Context not come to the outside. The javascript program will not complete.

// Lexical Scope
/*
let a = 10;
function fun1(){

    function fun2(){

        function fun3(){

            let n = 9;
            return n;
        }
        return fun3;
    }
    return fun2;
}
*/
