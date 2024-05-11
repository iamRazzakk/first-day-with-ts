{

    // This is typeof operator type Guard
    type alpaNuameric = string | number
    const addNumber = (params1: alpaNuameric, params2: alpaNuameric): alpaNuameric => {
        if (typeof params1 === "number" && typeof params2 === "number") {
            return params1 + params2
        } else {
            return params1.toString() + params2.toString()
        }
    }
    const result = addNumber("Md Abdur Razzak", " Rakib")
    console.log(result)

    // Now lets talk about in guard
    type normalUser = {
        name: string
    }
    type adminUser = {
        name: string;
        role: "Admin"
    }
    const myUser = (user: normalUser | adminUser) => {
        if ("role" in user){
            console.log(`My name is ${user.name} and my role is ${user.role}`)
        }else{
            console.log(`My name is ${user.name}`)
        }
    }
   const normalUser:normalUser ={
    name:"Md Abdur Razzak"
   } 
   const adminUser:adminUser = {
    name:"Md Rakib",
    role:"Admin"
   }
   const result1 = myUser(normalUser)
//    console.log(result1)
}