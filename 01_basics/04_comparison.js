// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//console.log("2" > 1); //true but logically it's wrong

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

//The reason is that an equality cheak == and comparisons > < >= <= work differently.
//comparisons convert null to a number, treating it as 0.
//That's why (3) null >=0 is true and (1) null > 0 is false

console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined == 0); //false

// === => strict cheak => this not only cheaks the values but also their datatypes

console.log("2" === 2); //false becz of the above reason

// Therefore, it is recomended to compare values with same datatypes
// Hence write clean codes
// Code readability is very very imp in corporate world