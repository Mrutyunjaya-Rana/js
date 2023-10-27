// //Broadly datatypes are divided into two types based on how they arey are stored in the memory and how we can access it.
// // 1.PRIMITIVE: (call by value)
// // 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
// const id = Symbol('123') 
// const anotherId = Symbol('123')
// console.log(id === anotherId); // false as symbol makes them different

// const bigNumber = 2341423525566n 
// console.log(typeof bigNumber); // n at the end makes an int bigInt

// // 2.NON PRIMITIVE: (call by reference)
// // Array, Objects, Functions

// const heros = ["shaktiman","spiderman","superman"] // array

// //object are inside {} and have key value pair
// let muObj = {
//     name: "muku",
//     age: 19,
// }

// //function
// const myFunction = function(){
//     console.log("hello world");
// }

// +++++++++++++ MEMORY ++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)
// when Stack memory is used, u get a copy of the variables used.
// when Heap memory is used, u get a reference of the variables used. Hence what u will change, it will change the original value

//primitive example
let myName = "muku"
let anotherName = myName
anotherName = "mukul"
console.log(myName);  // muku
console.log(anotherName); //mukul

//non primitive example
let userOne = {
    email : "muku@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "mukul@gmail.com"

console.log(userOne.email); //mukul@gmail.com
console.log(userTwo.email); //mukul@gmail.com
