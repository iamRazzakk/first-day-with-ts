"use strict";
// array and object Destructuring
const bestFriend = {
    fullName: "Mahbubul Ahsan Nayem",
    age: 24
};
// const { fullName } = bestFriend
// console.log(fullName)
const { fullName: name } = bestFriend;
console.log(name);
