let score = null 

console.log(typeof score); //number when score = 66
        //OR
//console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); //NaN(not a number) when score = "66abc"

// "66" => 66
// "66abc" => NaN
// true => 1; false => 0

let isLoggedIn = "muku"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true
// "" => false
// " " => true (becz space is there)
// "muku" = true

let someNumber = 66
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);