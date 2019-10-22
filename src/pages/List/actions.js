export const actionTypes =  {
    ADD: Symbol("ADD")
}

export const add = (params) => {
    return {
        type: actionTypes.ADD,
        firstName: params.firstName,
        secondName: params.secondName,
        lastName: params.lastName,
        dateOfBirth: params.dateOfBirth,
        age: params.age,
        gender: params.gender
    }
}