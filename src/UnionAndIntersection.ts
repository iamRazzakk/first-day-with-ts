{

    // For Union Type
    type FrontEndDeveloper = "Lazy man" | "Jr Front end developer"
    type FullStackDeveloper = "Front end developer" | "Jr Full Stack Developer"
    type DeveloperMood = FrontEndDeveloper | FullStackDeveloper

    type user = {
        name: string,
        age: number,
        number?: number, //Optional property
        email: "mdabdurrazzakrakib290@gmail.com" //string literal
    }
    const user1: user = {
        name: "Md Abdur Razzak",
        age: 23 | 24, //Should be either 23 or 24
        email: "mdabdurrazzakrakib290@gmail.com"
    }
    console.log(user1)




    // For intersection
    type FrontEndDeveloper1 = {
        skills: string[]
        designation: "Front end developer",
    }
    type BackEndDeveloper = {
        skills: string[]
        designation2: "Backend developer"
    }
    type FullStackDeveloper1 = FrontEndDeveloper & BackEndDeveloper
    const fullStackDeveloper: FullStackDeveloper1 = {
        skills: ["HTML", "CSS", "JAVAsCRIPT",
            "rEACTJS", "nODEJS"]
    }
    const designation = "Front end developer"
    const designation2 = "Backend developer"
}
