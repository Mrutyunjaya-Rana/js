
//keyword functionName() {}// {} is function scope or defination
function sayMyName() {
    console.log("M");
    console.log("U");
    console.log("K");
    console.log("U");
}
//sayMyname // function reference
//sayMyName()// function execution

// function addTwoNumbers(number1, number2){//parameters
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

// addTwoNumbers()//NaN
// addTwoNumbers(3, 2)//5 //arguments
// addTwoNumbers(4,"a")//4a

// const result = addTwoNumbers(3, 5)
// console.log("Result : ", result);//Result :  undefined // when result not returned
//                                 //Result :  8 // when result returned 


function loginUserMessage(username){
    return `${username} just logged in`
}
//console.log(loginUserMessage("muku"));
//console.log(loginUserMessage());//undefined just logged in


//when u dont know the no of arguments
function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(2));//2
console.log(calculateCartPrice(200, 300, 400));//200

function calculateCartPrice2(...num1){//rest operator
    return num1
}
console.log(calculateCartPrice2(200, 300, 400));//[ 200, 300, 400 ]

//pass an object to a function
const user = {
    username : "muku",
    price : 199
}
function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and the price is ${anyobject.price}`);
}
handleObject(user)//user name is muku and the price is 199
// u can also pass object directly while calling the function
handleObject({
    username: "muku",
    price: 199
})//user name is muku and the price is 199

//pass an array to a function
const myNewArray = [100, 200, 300, 400]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));//200

// u can also pass array directly while calling the function
console.log(returnSecondValue([100, 200, 300, 400]));//200
