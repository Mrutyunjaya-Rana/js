const accountId = 1235453 //The value in const can't be overridden
let accountEmail = "muku@gmail.com"
var accountPassword = "12345"
accountCity = "Bhadrak" // variables can be assigned in this manner but it is not recomended

//let and var both are used to assign variables but
//let is recomended to use as var has issue with block scope and function scope

console.table([accountId,accountEmail,accountPassword]) //multiple outputs can be printed in a tabular manner instead of using console.log multiple times

let accountState
console.log(accountState) //output:- undefined
//if a variable is only defined but is not assigned any value then its value is undefined 