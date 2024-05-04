{
    type Generics<T> = Array<T>
    const myFriend: Generics<string> = ["Nayem", "Amdad", "Minhaz"]
    console.log(myFriend)
    const roleNumber: Generics<number> = [20, 30, 40]
    console.log(roleNumber)
    const boolArray: Generics<boolean> = [true, false]
    console.log(boolArray)
    const ObjectArray: Generics<{ name: string, Role: number, Adress: string, designation?: string }> = [
        {
            name: "Md Abdur Razzak",
            Role: 30,
            Adress: "Chittagong",
        },
        {
            name: "Mahfuza Rima",
            Role: 30,
            Adress: "Dhaka",
            designation: "Nurch"
        }
    ]
    console.log(ObjectArray)
}