
//two ways of declaring objects
//1. literals
//2. constructors

//singleton -> when an constructor is created it is a singleton object

//declaring a symbol
const mySym = Symbol("key1")


// object
const jsUser = {
    name: "muku",
    "full name": "muku rana",
    "age": 18,
    location: "bhadrak",
    mySym: "mykey1", //using symbol wrong way
    email: "muku@gmail.com",
    isLoggedIn: false
}
//here the key is actually in string datatype

//accessing objects
//one way:
console.log(jsUser.name);//muku
//other way:
console.log(jsUser["name"]);//muku

//other way is used if the key is of more than one string becz then the first way can't be used to access values
console.log(jsUser.age);//18
//console.log(jsUser.full name);// Error
console.log(jsUser["full name"]);//muku rana

console.log(jsUser.mySym); //mykey1 
//but here is a PROBLEM, here mySym is not used as symbol, rather, used as a string
console.log(typeof mySym);//symbol // becz it refers to line 8
console.log(typeof jsUser.mySym);//string
//to use it as symbol..enclose the key within[]

const jsUser2 = {
    name: "muku",
    "full name": "muku rana",
    "age": 18,
    location: "bhadrak",
    [mySym]: "mykey1", //using symbol correct way
    email: "muku@gmail.com",
    isLoggedIn: false
}
//to print the symbol
console.log(jsUser2[mySym]);//mykey1
console.log(typeof jsUser2.mySym);//undefined //as it cant access it as symbol should be written in []
console.log(typeof jsUser2[mySym]);//string //becz the value mykey1 is in string
console.log(jsUser2);
/*
{
  name: 'muku',
  'full name': 'muku rana',
  age: 18,
  location: 'bhadrak',
  email: 'muku@gmail.com',
  isLoggedIn: false,
  [Symbol(key1)]: 'mykey1'
}
*/

//overriding values in objects
jsUser2.email = "mukumuku@gmail.com"
console.log(jsUser2["email"]);//mukumuku@gmail.com

//to lock a value in objects
Object.freeze(jsUser2)
jsUser2.email = "muku01@gmail.com"
console.log(jsUser2["email"]);//mukumuku@gmail.com


