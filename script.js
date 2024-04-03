/*
let first = document.getElementById("one");
// console.log(first.innerText);
console.log(first.innerHTML);

let var2 = document.getElementsByClassName("tech");

    console.log(var2);
    console.log(var2[2]);

    var2[1].innerText = "nodejs";

    let var3 = document.getElementsByTagName("h4");
    console.log(var3[1].innerHTML);

    var3[1].innerText = "PW Skills";

    var3[1].style.color = "red";

    // Use of query selector

    let var4 = document.querySelector(".classs");
    console.log(var4);

    var4.className = "Hello";
    // var4.classList = "box box1";


    // Create an element using javascript
    // Append child
    let var5 = document.createElement("h3");
    var5.className = "pwskills";
    var5.style.fontSize = "35px";
    var5.innerText = "hello World";

    console.log(var5);
    document.body.appendChild(var5);
    

    // Remove an element

    let ul = document.querySelector("ul");
    console.log(ul);
    let lists = document.querySelectorall("li");
    console.log(lists);

    // for(list of lists){
    //     ul.removeChild(list);
    // }
*/




    let first = document.getElementById("one");
// console.log(first.innerText);
console.log(first.innerHTML);

let var2 = document.getElementsByClassName("tech");

console.log(var2);
console.log(var2[2]);

var2[1].innerText = "nodejs";
// let vr2 = document.var2[1];


let var3 = document.getElementsByTagName("h4");
console.log(var3[1].innerHTML);
var3.innerText = "PW skills";

var3[1].innerText = "PW Skills";

console.log(var3[1]);

var3[1].style.color = "red";
var3[1].style.fontSize = 700;

// Use of query selector

let var4 = document.querySelector(".classs");
console.log(var4);

var4.className = "Hello";
// var4.classList = "box box1";

// Create an element using javascript
// Append child
let var5 = document.createElement("h3");
var5.className = "pwskills"; // Fix this line
var5.style.fontSize = "35px";
var5.innerText = "Hello World";

console.log(var5);
document.body.appendChild(var5);

// Remove an element

let ul = document.querySelector("ul");
console.log(ul);
let lists = ul.querySelectorAll("li"); // Fix this line
console.log(lists);

for (list of lists) {
    ul.removeChild(list);
}



    


