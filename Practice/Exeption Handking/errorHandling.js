
// The Unaspected situations in the program are called exception handling

// -Two types of errors Syntax errors & Runtime errors
// -Syntax errors occur when the syntax is not not properly define in the code
// -Run Time errors // Run time errors occur at the time of execution 

try {
    console.log("Hello World");
    console.log(a);
} catch(error) {       // (error)-> this will tell us what is the problem // To solve these situations we have (try-catch) statements

    console.log("Catch: error handled", error);  
}finally{
    console.log("finally: It must be executed:");
}

console.log("end");