
//Array is an object
//Arrays in Js are resizable and contain a mix of different datatypes


const myArr =[0,1,2,3,4,5]

console.log(myArr.length);

const arr2 = new Array(1,2,3,4)// another type of declaring
console.log(arr2[1]);//2

//........Array methods..........

myArr.push(4)/*[
    0, 1, 2, 3,
    4, 5, 4
  ]*/
myArr.push(7)/*[
    0, 1, 2, 3,
    4, 5, 4, 7
  ]*///push method adds elements to the end of the array 
console.log(myArr);

myArr.pop()
console.log(myArr);/*[
    0, 1, 2, 3,
    4, 5, 4
  ]
*/ // deletes last element from the array

myArr.unshift(1)
console.log(myArr);/*[
    1, 0, 1, 2,
    3, 4, 5, 4
  ]*/ // Adds vlaues to start of the array
myArr.shift() // deletes value from the start of the array
console.log(myArr);

console.log(myArr.includes(9));//false (boolean) if 9 is present in array
console.log(myArr.indexOf(3)); // 3

const newArr = myArr.join()
console.log(myArr);/*[
  0, 1, 2, 3,
  4, 5, 4
]*/
console.log(newArr);//0,1,2,3,4,5,4
console.log(typeof myArr); // object
console.log(typeof newArr);//string

// slice, splice

console.log("A : ", myArr);

const myn1 = myArr.slice(1, 3) //1 includes, 3 not includes //Returns a copy of a section of an array
console.log(myn1);
console.log("B : ", myArr);

const myn2 = myArr.splice(1, 3)//1 and 3 includes //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(myn2);
console.log("C : ", myArr);
/*
A :  [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2 ]
B :  [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2, 3 ]
C :  [ 0, 4, 5 ]
*/