"use strict";
// How we difiend type like
// type user1 = {
//     name: string,
//     age: number
// }
// like this but if i use interface its work like type 
// Here some exampole
// interface Users { //Just different can't user ( = ) That's it
//     name: string
//     age: number,
//     adress: string
// }
// const User: Users = {
//     name: "Md Abdur Razzak",
//     age: 23,
//     adress: "Chittagong"
// }
// console.log(User)
const myUser = {
    name: "MD Abdur Razzak",
    age: 23,
    rote: "CEO"
};
console.log(myUser);
const userWithInterface = {
    name: "Mark Vai",
    age: 50,
    role: "Manager"
};
console.log(userWithInterface);
