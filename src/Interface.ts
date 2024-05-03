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


// Different between type and interface
type user1 = {
    name: string,
    age: number
}
type user2 = {
    name: string,
    age: number
}
// Its for type
type userWithType = user1 & { role: string }
const myUser = {
    name: "MD Abdur Razzak",
    age: 23,
    rote: "CEO"
}
console.log(myUser)

// Its for interface
interface interfaceWithUser extends user2 { role: string }
const userWithInterface = {
    name: "Mark Vai",
    age: 50,
    role: "Manager"
}
console.log(userWithInterface)