"use strict";
var _a, _b;
const myAge = 10;
if (myAge > 9) {
    console.log("Hello");
}
else {
    console.log("Hi");
}
myAge > 6 ? console.log("Hello Brother") : console.log("Hi brother");
// Nullish Operator
const isAdult = null;
const isAdmin = undefined;
const isRakib = "";
const result = isRakib !== null && isRakib !== void 0 ? isRakib : "Rakib";
const result1 = isAdult !== null && isAdult !== void 0 ? isAdult : "Hello Brother go to mosjid";
const result2 = isAdmin !== null && isAdmin !== void 0 ? isAdmin : "Hello Brother go to mosjid";
console.log(result);
console.log(result1);
console.log(result2);
const user = {
    name: "Md Abdur Razzak",
    age: 23,
    adress: {
        presentAdress: "Chittagong"
    },
    education: "BBA"
};
const myResult = (_b = (_a = user === null || user === void 0 ? void 0 : user.adress) === null || _a === void 0 ? void 0 : _a.parmanentAdress) !== null && _b !== void 0 ? _b : "Chittagong";
console.log({ myResult });
