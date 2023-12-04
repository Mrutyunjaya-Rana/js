const user = {
    username: "muku", 
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        /*
        {
            username: 'muku',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]
        }
        */
    }
}
user.welcomeMessage()//muku, welcome to website
//here, this is used to refer current context(the variables and all present in the scope)
//becz, if anyone changes the variable later the code will act accordingly.like,
user.username = "sam"
user.welcomeMessage()//sam, welcome to website


console.log(this);//{}//empty object

const chai = function () {
    let username = "muku"
    console.log(this.username);
}
chai()//undefined

const chai1 = () => {
    let username = "muku"
    console.log(this.username);
}
chai1()//undefined

const chai2 = () => {
    let username = "muku"
    console.log(this);
}
chai2()//{}


//++++++++ Arrow Function +++++++++

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(2, 3)); // 5

//another way of using arrow function without using parantheris

const addTwo2 = (num1, num2) =>  num1 + num2
//OR
const addTwoNum = (num1, num2) =>  (num1 + num2)

console.log(addTwo2(2, 3)); // 5
console.log(addTwoNum(2, 3)); // 5


//further in loops
const myArray = [2, 4, 5, 6, 8]
myArray.forEach(function () {}) //one way
myArray.forEach(() => {}) //other way

