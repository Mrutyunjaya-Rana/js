// Dates

// let myDate = new Date()
// console.log(myDate); //2023-10-30T16:33:04.028Z //unorganised
// console.log(myDate.toString()); // Mon Oct 30 2023 16:34:01 GMT+0000 (Coordinated Universal Time) // little organised
// console.log(myDate.toDateString()); //Mon Oct 30 2023
// console.log(myDate.toISOString()); //2023-10-30T16:35:44.430Z
// console.log(myDate.toJSON()); //2023-10-30T16:36:20.461Z
// console.log(myDate.toLocaleDateString()); // 10/30/2023
// console.log(myDate.toLocaleString()); //  10/30/2023, 4:40:10 PM 

// let myCreatedDate = new Date(2023, 0, 23) // date format is yy/mm/dd
// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023 // in JS, month starts form 0, which is Jan
// let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate2.toLocaleString()); // 1/23/2023, 5:03:00 AM
// let myCreatedDate3 = new Date("10-30-2023") //month/day/year...prefered in india
// console.log(myCreatedDate3.toLocaleString());

let myCreatedDate4 = new Date("10-30-2023")
let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1698684964324 // millisecond value from 1st Jan 1970
