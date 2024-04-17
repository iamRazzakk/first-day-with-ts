// Normal Function
function sumNumber(num1: number, num2: number) {
    return num1 + num2
}
// console.log(sumNumber(10, 20))

// Arrow Function
const sumNumber2 = (num1: number, num2: number) => {
    return num1 + num2;
}
sumNumber2(20, 30)

// Callback Function
const arr = [1, 5, 6, 78, 9, 5]
const newArray = arr.map((newArr: number) => newArr * newArr)
// console.log(newArray)

// Object in normal function
const person: {
    name: "Md Abdur Razzak",
    age: 24,
    country: "Bangladesh",
    isMarried: false,
    balance: 20,
    addBalance: (money: number = 20) => {
        person.balance += money;
// console.log(`My Total Balance is ${person.balance}`);
    }
}
// Spread Operator
const myFriend = ['Rakib', "Shakil", "kawsar"]
const newFriend = ["Nayem", "akib", "Shakib", "Tanvir"]
myFriend.push(...newFriend)
// console.log(myFriend)


//Rest Parameters
const greatFriend: (
    friend1: string,
    friend2: string,
    friend3: string
) => void;
const greatFriend: GreatFriendType = function (friend1, friend2, friend3) {
    console.log(`hi ${friend1}\nhi ${friend2}\nhi ${friend3}`);
};

greatFriend("Rakib", "Shakib", "Shakil");