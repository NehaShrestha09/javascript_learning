// const balance=1000
// if (balance < 500) {
//     console.log("less then 500");
    
// }else if(balance < 730){
//     console.log("less then 730");
// }else{
//     console.log("less then 1200");
// }

// const userLoggedIn = true
// const debitcard = true 
// const loggedInFromGoogle =false
// const loggedInFromEmail =true

// if (userLoggedIn && debitcard) {
//     console.log("Allow to buy course");
// } 
// if (loggedInFromEmail || loggedInFromGoogle) {
//     console.log("User logged in");
// } 


//truthy and falsy

const userEmail = "neha@email.com"

if (userEmail) {
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

// true, "0", 'false', " ", [], {}, function(){} --> strings vitra xa vaney true


//Nullish Coalescing Operator (??): null, undefined

let val1;
val1 = 20 ?? 10
//val1 = null ?? 20 ??10
console.log(val1);

//Ternary operator
// condition ? true : false

const num = 30
num >10 ? console.log("Yes") : console.log("No");


