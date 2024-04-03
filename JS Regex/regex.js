// -Regular Expressions
// -1st way to define regular expression
let pattern = "pw";
let regExpone = new RegExp(pattern);

let flag = 'gi';   // g->global, i->case insensitve
let regExpTwo = new RegExp(pattern, flag);

// 2nd way to define regular expression

let regExpthree = /skills/gi;  // Another way to define regex

const checkStr = "Pw skills is knowing the one of the best india's website now working on data structure. I like pw skills because i have enrolled fulstack web development course at pw skills";

const result = regExpthree.test(checkStr); // This will give us -TRUE if the keywords that we have given are match
console.log(result);

const resultTwo = checkStr.match(regExpthree); // This will give us the keywords that are matched
console.log(resultTwo);

const resultThree = checkStr.replace(regExpthree, 'school'); // This will change the keywords that we have passed before and print the -SCHOOL at this place
console.log(resultThree);

const myURL = "https://www.google.com/Arslan%20Haider";

const changeURL = myURL.replace(/%\d\d/, '-');  // change the space
console.log(changeURL);
