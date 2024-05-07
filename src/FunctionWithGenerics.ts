{
    // Normal Function
    const createArray = (params: string): string[] => {
        return [params]

    }
    const myFunction = createArray("Md Abdur Razzak")
    // console.log(myFunction)


    // Function With Generics for a object
    

    const createObjectWithGenerics = <T>(params: T): T => {
        return params
    }
    interface myInterfaceObject {
        name: string,
        phone: number,
        isMarried: boolean
    }
    const myObject = createObjectWithGenerics<myInterfaceObject>({
        name: "Md Abdur Razzak",
        phone: 1878265664,
        isMarried: false

    })
    console.log(myObject)
    const createArrayWithGeneric = <T>(params: T): T[] => {
        return [params]
    }
    const myArray = createArrayWithGeneric("Md Abdur Razzak")
    // console.log(myArray)


}