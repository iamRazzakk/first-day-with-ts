"use strict";
{
    const users = {
        name: "Md abdur Razzak",
        details: {
            firstName: "Abdur",
            lastName: "Razzak"
        }
    };
    const { name, details: { lastName } } = users;
    console.log(name, lastName);
    const complexObject = {
        id: 12345,
        name: "John Doe",
        age: 30,
        address: {
            street: "123 Main St",
            city: "New York",
            country: "USA",
            coordinates: {
                latitude: 40.7128,
                longitude: -74.0060
            }
        },
        contacts: {
            email: "john.doe@example.com",
            phone: {
                home: "(123) 456-7890",
                work: "(987) 654-3210",
                mobile: "(555) 123-4567"
            }
        },
        hobbies: ["Reading", "Cooking", "Traveling"],
        education: {
            degree: "Bachelor's",
            major: "Computer Science",
            university: {
                name: "University of XYZ",
                location: "New York"
            }
        }
    };
    const { address: { coordinates: { longitude } } } = complexObject;
    console.log(longitude);
    const { education: { university: { location } } } = complexObject;
    console.log(location);
    //longitude
    const complexObject = {
        id: 12345,
        name: "John Doe",
        age: 30,
        address: {
            street: "123 Main St",
            city: "New York",
            country: "USA",
            coordinates: {
                latitude: 40.7128,
                longitude: -74.0060
            }
        },
        contacts: {
            email: "john.doe@example.com",
            phone: {
                home: "(123) 456-7890",
                work: "(987) 654-3210",
                mobile: "(555) 123-4567"
            }
        },
        hobbies: ["Reading", "Cooking", "Traveling"],
        education: {
            degree: "Bachelor's",
            major: "Computer Science",
            university: {
                name: "University of XYZ",
                location: "New York",
                departments: {
                    computerScience: {
                        head: "Dr. Smith",
                        courses: ["Introduction to Computer Science", "Data Structures", "Algorithms"]
                    },
                    mathematics: {
                        head: "Dr. Johnson",
                        courses: ["Calculus", "Linear Algebra", "Probability"]
                    }
                }
            }
        }
    };
    const { education: { university: { departments: { computerScience: { courses } } } } } = complexObject;
    const friends = [
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Emily",
        "Frank",
        "Grace",
        "Hannah",
        "Isaac",
        "Julia",
        "Kevin",
        "Lily"
    ];
    const [a, b, c, d, bestFriend, ...rest] = friends;
    console.log(bestFriend);
    console.log(rest);
}
