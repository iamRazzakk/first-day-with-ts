"use strict";
// Normal Function
// function sumNumber(num1: number, num2: number) {
//     return num1 + num2
// }
// console.log(sumNumber(10, 20))
// Arrow Function
// const sumNumber2 = (num1: number, num2: number) => {
//     return num1 + num2;
// }
// sumNumber2(20, 30)
// Callback Function
const arr = [1, 5, 6, 78, 9, 5];
const newArray = arr.map(newArr => newArr * newArr);
console.log(newArray);
