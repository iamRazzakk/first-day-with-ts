// const myAge: number = 10
// if (myAge > 9) {
//     console.log("Hello")
// } else {
//     console.log("Hi")
// }

// myAge > 6 ? console.log("Hello Brother") : console.log("Hi brother")

// Nullish Operator
// const isAdult = null;
// const isAdmin = undefined;
// const isRakib = ""
// const result = isRakib ?? "Rakib"
// const result1 = isAdult ?? "Hello Brother go to mosjid"
// const result2 = isAdmin ?? "Hello Brother go to mosjid"
// console.log(result)
// console.log(result1)
// console.log(result2)
type USER = {
    name: string,
    age: number,
    adress: {
        presentAdress: string,
        parmanentAdress?: string
    },
    education: string
}
const user: USER = {
    name: "Md Abdur Razzak",
    age: 23,
    adress: {
        presentAdress: "Chittagong"
    },
    education: "BBA"
}
const myResult = user?.adress?.parmanentAdress ?? "Chittagong"
console.log({myResult})