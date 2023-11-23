
// function one(){
//     const username = "muku"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);

//     two()
// }
// one()

if(true){
    const username = "muku"
    if(username === "muku"){
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

//+++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++

function addOne(num){
    return num + 1
}
addOne(5)

const number = function addTwo(num){
    return num + 2
}
addTwo(6)

//here in 1, only function is created and in 2, function is stored in a variable
//In 1st case, addOne is called before declaring function, it will not give an error
/*
addOne(5)
function addOne(num){
    return num + 1
}
*/          //No Error

//But in 2nd case, it will give an error as it is stored in a variable.
//this is called hosting
/*
const number = function addTwo(num){
    return num + 2
}
addTwo(6)
*/          //Error