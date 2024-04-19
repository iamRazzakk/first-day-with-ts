"use strict";
// Normal Function
function sumNumber(num1, num2) {
    return num1 + num2;
}
// console.log(sumNumber(10, 20))
// Arrow Function
const sumNumber2 = (num1, num2) => {
    return num1 + num2;
};
sumNumber2(20, 30);
// Callback Function
const arr = [1, 5, 6, 78, 9, 5];
const newArray = arr.map((newArr) => newArr * newArr);
// console.log(newArray)
// Object in normal function
const person;
person.balance += money;
// Spread Operator
const myFriend = ['Rakib', "Shakil", "kawsar"];
const newFriend = ["Nayem", "akib", "Shakib", "Tanvir"];
myFriend.push(...newFriend);
// console.log(myFriend)
//Rest Parameters
const greatFriend;
const greatFriend = function (friend1, friend2, friend3) {
    console.log(`hi ${friend1}\nhi ${friend2}\nhi ${friend3}`);
};
greatFriend("Rakib", "Shakib", "Shakil");
