{
    // Generics with constrain with key of operator
    type Vehicle = {
        bike: string,
        car: string,
        ship: string
    }
    type Owner = keyof Vehicle
    const person: Owner = "bike"
    console.log(person)
}