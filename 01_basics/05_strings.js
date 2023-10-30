const name = "muku"
const repoCount = 1

//console.log(name + repoCount + " value");
 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // prefer using this instead of the above one

const gameName = new String("muku-mr-com")

console.log(gameName[0]); // m
console.log(gameName.length); // 11
console.log(gameName.toUpperCase()); //MUKU-MR-COM
console.log(gameName.charAt(2)); // k
console.log(gameName.indexOf("u")); // 1 when same character is searched then the 1st appearance is counted

const newString = gameName.substring(0,4) //(startIndex,endIndex(not included))
//ignores negative index
console.log(newString);
const anotherString = gameName.slice(-6,-4)
// same as substring 
// doesnot ignore negative index
console.log(anotherString);

const newStringOne = "   muku   "
console.log(newStringOne.trim()); // muku

// includes
// replace.....etc etc
// cheakout all the methods of string in MDN