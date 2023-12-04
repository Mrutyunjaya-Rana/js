// Immediately Invoked Function Expressions (IIFE)
//uses:
//immediately executes a function
/*(like sometimes we write a file specially for database connection 
   and in this case we want the file to immediately execute as soon
   as the application starts)*/
//be safe from global scope pollution
/*(like the variables from local scope can aquire from global 
   variables. To make them safe, we use)*/

//for immediate execution
function chai(){
    console.log(`DB CONNECTED`);
}
chai();// DB CONNECTED 

//saving from global scope pollution
(function coffee(){
    console.log(`DB NOT CONNECTED`);
})();// DB NOT CONNECTED

//both the above are not running simultaneously..showing some error
//because iife doesn't know after immediately executoing where to stop
//so, we put a ';' at the end of one to do so

((name) => {
    console.log(`my name is ${name}`);
})("muku") // my name is muku