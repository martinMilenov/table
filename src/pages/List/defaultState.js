import { fromJS } from "immutable"

export default fromJS({
    users: [{
        firstName: "Martin",
        secondName: "Ivanov",
        lastName: "Milenov",
        age: 30,
        gender: "m",
        dateOfBirth: new Date("1989-05-01")
    },
    {
        firstName: "Sara",
        secondName: "Jason",
        lastName: "Conner",
        age: 25,
        gender: "f",
        dateOfBirth: new Date("1996-10-18")
    },
    {
        firstName: "Nikolai",
        secondName: "Georgiev",
        lastName: "Petrov",
        age: 29,
        gender: "m",
        dateOfBirth: new Date("1990-04-05")
    }
    ]
});
