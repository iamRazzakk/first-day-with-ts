{
    // 
    const addCourse = <T extends {role:number, name:string, email:string}>(student: T): T => {
        return {
            ...student,
        }
    }

    const student1 = addCourse({
        role: 1,
        name: "Md Abdur Razzak",
        email: "mdabdurrazzakrakib290@gmail.com"
    })
    const student2 = addCourse<{
        role: number;
        name: string;
        email: string;
    }>({
        role: 2,
        name: "Md Amdad hossian",
        email: "x@gmail.com"
    })
    const studentDetails = addCourse(student2)
    console.log(studentDetails)

    // 
}