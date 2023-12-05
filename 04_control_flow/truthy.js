const userEmail = []

if (userEmail) {
    console.log("got user email");
} else {
    console.log("don't have user email");
}
//const userEmail = "muku@gmail.com", got user email
//const userEmail = "", don't have user email
//const userEmail = [], got user email

//falsy values
//false, 0, -0, BigInt 0n, "", undefined, NaN
//all values excluding falsy are truthy

//truthy values(some examples)
// "0", "false", " ", [], {}, function(){}

//Nullish Coalescing Operator (??): null undefined
let val1
//val1 = 5 ?? 10  // 5
//val1 = null ?? 10  // 10
//val1 = undefined ?? 15 //15
val1 = null ?? 10 ?? 20 // 10
console.log(val1);

//Terniary Operator
//condition ? true : false