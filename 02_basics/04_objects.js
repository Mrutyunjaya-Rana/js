
//declaring object
//singleton
const tinderUser1 = new Object()//{}
console.log(tinderUser1);

//non singleton
const tinderUser2 = {}
console.log(tinderUser2);//{}

const tinderUser = {}

tinderUser.id = "123bmnb"
tinderUser.name = "muku"
tinderUser.isLoggedIn = false

console.log(tinderUser);//{ id: '123bmnb', name: 'muku', isLoggedIn: false }

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullName : {
            firstName : "muku",
            lastName : "rana"
        }
    }

}

console.log(regularUser.email);//some@gmail.com
console.log(regularUser.fullName.userFullName.firstName);//muku

//combining objects
const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}

const obj3 = {obj1, obj2}
console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign(obj1, obj2) //obj2 is assigned to obj1
const obj5 = Object.assign({},obj1,obj2)//both obj1 and obj2 are assined to empty object//this is used in industry level code
const obj6 = {...obj1, ...obj2}//use of spread operator//mostly used
console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj5);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj6);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//when values come from database

const users = [
    {
        id: 1,
        email: "a@gmail.com",
    },
    {
        id: 2,
        email: "b@gmail.com",
    },
    {
        id: 3,
        email: "c@gmail.com",
    },
    {
        id: 4,
        email: "d@gmail.com",
    },
]
//to access these values
console.log(users[2].email);//c@gmail.com    

//using some methods
//first lets print tinder user to see what kye values are here
console.log(tinderUser);//{ id: '123bmnb', name: 'muku', isLoggedIn: false }

//to get all the keys
console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]//all keys printed in an array
console.log(Object.values(tinderUser));//[ '123bmnb', 'muku', false ]//all values printed in an array
console.log(Object.entries(tinderUser));//[ [ 'id', '123bmnb' ], [ 'name', 'muku' ], [ 'isLoggedIn', false ] ]//key value pair in an array within array

//to see if a method exists
console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true
console.log(tinderUser.hasOwnProperty('isLogged'));//false


//destructuring objects
const course = {
    course : "js in hindi",
    price : "123",
    courseInstructor : "hitesh"
}

//if accessing a value multiple times,lets say 
//course.courseInstructor
//writing it multiple times, code becomes little unhealthy, instead,

const {courseInstructor} = course // const {what to access} = from where to access
//u can give customised name also
const {price: p} = course
//extracting values
console.log(courseInstructor);//hitesh
console.log(p);//123

