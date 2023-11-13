
const marvelHeros = ["Thor","Ironman", "Spiderman"]
const dcHeros = ["Superman", "Batman", "Flash"]

marvelHeros.push(dcHeros)

console.log(marvelHeros);//[ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Batman', 'Flash' ] ]
console.log(marvelHeros[3]);//[ 'Superman', 'Batman', 'Flash' ]
console.log(marvelHeros[3][1]);//Batman

const allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros);//[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Batman', 'Flash' ]

//.....................
//push() -> changes done in existing array
//concat() -> changes done in a new array
//.....................

//Spread Operator
const allNewHeros = [...marvelHeros, ...dcHeros]
console.log(allNewHeros);//[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Batman', 'Flash' ]
//does same thing as concat but is more used than concat as more values can be added here easily if necessary

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]

const realAnotherArray = anotherArray.flat(Infinity)//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//parameter-- the depth u want to flat..usually the depth is given but u can also use Infinity to automate it
console.log(realAnotherArray);
/*
[
   1, 2, 3, 4,  5,
   6, 7, 8, 9, 10,
  11
]
*/

//to know if anything is array
console.log(Array.isArray("muku"));//false
//to make this an array 

//from -> Creates an array from an array-like object.
console.log(Array.from("muku"));//[ 'm', 'u', 'k', 'u' ]
const aa = "123muku"
console.log(Array.from(aa));
/*[
  '1', '2', '3',
  'm', 'u', 'k',
  'u'
]
*/
const ab = 123489
console.log(Array.from(ab));//[]
console.log(Array.from({name: "muku"}));//[]

// of -> Returns a new array from a set of elements.
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));//[ 100, 200, 300 ]
let name = "muku"
console.log(Array.of(score1, score2, score3, name));//[ 100, 200, 300, 'muku' ]

