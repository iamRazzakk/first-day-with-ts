{
    type user = {
        name: string,
        age: number,
        email: string
    }
    type isAdmin = {
        name: string,
        age: number,
        email: string,
        isAdmin: boolean,
    }
    type PremiumUser = {
        name: string,
        email: string,
        subscriptionType: "Gold" | "Silver" | "Bronze"
    }
    type GuestUser = {
        guestId: string;
        email: string;
    };
    // Define a type alias for a user of any type
    type anyUser = user | isAdmin | PremiumUser | GuestUser

    const user1: user = {
        name: "Rakib",
        age: 23,
        email: "mdabdurrazzakrakib290@gmail.com"
    }
    const user2: user = {
        name: "Mazhar",
        age: 30,
        email: "Hello@gmail.com"
    }
    const admin1: isAdmin = {
        name: "Md Abdur Razzak",
        age: 23,
        email: "mdabdurrazzakrakib290@gmail.com",
        isAdmin: true
    }
    const admin2: isAdmin = {
        name: "SRK",
        age: 43,
        email: "mdabdurrazzakrakib290@gmail.com",
        isAdmin: true
    }



    // type aliases for function
    type Add = (a: number, b: number) => number;
    const myFunction: Add = (num1, num2) => num1 + num2
    myFunction(10, 20)
}