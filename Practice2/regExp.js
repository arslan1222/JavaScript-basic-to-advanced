
let pattern = 'pw';

let regExpOne = new RegExp(pattern);

let flag = 'gi';

let regExpTwo = new RegExp(pattern, flag);

let regExpThree = /pw/gi

const strToCheck = "Pw skills is the highly growning plateforms now adays that is strated about 10 to 12 months. pw is a very highly content on their pw skills website.";

let checkResult = regExpThree.test(strToCheck);
console.log(checkResult);

let anotherResult = strToCheck.match(regExpThree);
console.log(anotherResult);
let newResult = strToCheck.replace(regExpThree, 'p-w');
console.log(newResult);




let url = "https://www.google.com/Arslan%20Haider";

// let getURL = url.replace(/%20/, '-');

let getURL = url.replace(/%\d\d/, '-');
console.log(getURL);