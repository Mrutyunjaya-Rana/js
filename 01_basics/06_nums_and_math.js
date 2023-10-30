const score = 400
console.log(score); // 400 // automatically detects as number

const balance = new Number(100)
console.log(balance); // [Number: 100] //specifically casted to number

//console.log(balance.toString());
const type = balance.toString()
console.log(typeof(type)); // string

console.log(balance.toFixed(2)); // 100.00
console.log(balance.toFixed(1)); // 100.0

const otherNumber = 23.5363
console.log(otherNumber.toPrecision(3)); // returns a string
//here 3 means 3 digits

const hundreds =100000
console.log(hundreds.toLocaleString('en-IN')); // converts to local number...in this case, 1,00,000

// ++++++++++++++ MATHS +++++++++++++++++++

console.log(Math.abs(-4)); // 4 // gives absolute values
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.6)); // 5 //ceiling value
console.log(Math.floor(4.6)); // 4 //floor value

//sqrt,min,max ...etc

console.log(Math.random()); //gives a random value under between 0 and 1
console.log(Math.random()*10); // shifts the value to one decimal point to right
console.log((Math.random()*10) + 1); // 1 is added becz if the value is 0.469890 in that case Math.floor will give value 0...to ignore that it is added
console.log(Math.floor(Math.random()*10) + 1); // this will give a vlaue between 1 and 9 as 1 is added



//when we have to find random between the given min and max :
const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min);
//Math.random is multiplied by (max-min+1) , max - min: so that the range will come, + 1: to avoid the 0 case as discussed in line 32 above
//+ min : to get value equal or greater than min value