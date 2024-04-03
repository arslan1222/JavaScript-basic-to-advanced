/*
    -Basics
function dataSaveToDB(){
    let intrnetSpeed = Math.floor(Math.random() * 10) + 1;
    if(intrnetSpeed > 4){
        console.log("Data was saved");
    }else{
        console.log("data was not saved");
    }
}
dataSaveToDB();
*/
// -Promises / Solve -> Success / Reject -> Failure
//    |->(Object)  



/*
function dataSaveToDB(data, success, failure){
    let intrnetSpeed = Math.floor(Math.random() * 10) + 1;
    if(intrnetSpeed > 4){
        success();
    }else{
        failure();
    }
}
// dataSaveToDB("Apna college");
dataSaveToDB("your data", ()=>{  // success
    console.log("Success 1: Data wad saved:");
        dataSaveToDB("Success of data2", ()=>{
            console.log("Success 2: Data was saved:");// We can more and more
            }, ()=>{
            console.log("Weak connection of data 2, Data was not saved:");
        });
}, ()=>{  // failure
    console.log("Weak connection of data 1, Data was not saved:");
});
*/

// -The promise object reperesent the eventual-completion[Success] (or not) of an asycronous operation and its resulting value.
// -Promise is an object (and having two things resolve or reject)->(Success or Failure)


// Use of Promise
/*
function dataSaveToDB(data){
    return new Promise((resolve, reject)=>{   // (success, failure)

        let intrnetSpeed = Math.floor(Math.random() * 10) + 1;
        if(intrnetSpeed > 4){
            resolve("Success: data was saved:");  // success
        }else{
            reject("Failure: data was not saved"); // failure
        }
    });
}
// This function will call in browser console
// |> dataSaveToDB("data");

    /*
let request = dataSaveToDB("Apna College");   // request is the Promise's object
request.then(()=>{     // Success -> try
    console.log("Prmise was resolved!");
    console.log(request);
}).catch(()=>{         // Failure -> catch
    console.log("Promise was rejected!");
    console.log(request);
});
    */

// We also can write this without request object
// We can use nested (.then) but (.catch)

// -Promise chaning
/*
dataSaveToDB("Apna College")
    .then(()=>{
    console.log("data 1 saved:");
    return dataSaveToDB("Apna College"); 
    })
    .then(()=>{
        console.log("data 2 saved:")
        return dataSaveToDB("Apna College"); 
    })
    .then(()=>{
        console.log("data 3 saved:")
    })
    .catch(()=>{
    console.log("Promise was rejected!");
});

*/

//  -Asyncronous function
//  -async keyword
// async function greet(){
//     return "There is no error";
// }

// greet()
//     .then((result)=>{
//         console.log("Promise was resolved", result);
// })
//     .catch((error)=>{
//         console.log("Error has been occured", error);
// });

// //  await keyword

// function 
