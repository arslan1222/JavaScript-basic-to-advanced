console.log("PW");

let highScore = 200;

console.log(highScore);

highScore = 2000;
console.log(highScore)

let gstprice = 36;

let finalPrice = highScore + gstprice;

console.log("Final Price", finalPrice);

console.log("Final Price", finalPrice * highScore);

console.log("Answer: ", 3 ** 3);

let arslan = 500;
let ahsan = 500;

// let ahsan = "500" ;

console.log(arslan == ahsan);

// Prime Number
function isPrime(ele) {

    if(ele % 2 === 0 || ele < 2){
        return false;
    }
    for(let factor = 3; factor<=Math.sqrt(ele); factor++){
        if(ele % factor === 0){
            return false;
        }
    }
    return true;
}
console.log([4, 6, 8, 9].findIndex(isPrime));
console.log([4, 0, 13].findIndex(isPrime));