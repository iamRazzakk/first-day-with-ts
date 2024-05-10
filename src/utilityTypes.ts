{
    // Pick type in ts
    type person = {
        name: string;
        age: number;
        email?: string;
        contactNumber: number
    }
    type pickNameAge = Pick<person, "name" | "age">
    // Lets Learn omit type
    type contuctInfo = Omit<person, "name" | "age">

    // Let's learn Requeard type in typeScript
    type personRequeard = Required<person>
    // leats learn Partial type in ts
    type PartialType = Partial<person>

    // ReadOnly type
    type readOnly = Readonly<person>
    const person1: readOnly = {
        name: "Md Abdur Razzak",
        age: 23,
        email: "mdabdurrazzakrakib290@gmail.com",
        contactNumber: +8801609502136,
    }
    // person.email = "abc@gmail.com" //error :Property 'email' does not exist on type '{ name: string; age: number; country: string; isMarried: boolean; }'

    // Let's Learn Record type

    type myObject = Record<string, string>
    const empatyObject: Record<string, unknown>={
    }
    const myObject: myObject = {
        a: "AA",
        b: "BB",
        c: "CC",
        d: "DD",
    }





}