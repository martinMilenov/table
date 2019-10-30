export const actionTypes =  {
    ADD: Symbol("ADD"),
    FETCH: Symbol("FETCH"),
}

export const add = (params) => {
    return {
        type: actionTypes.ADD,
        firstName: params.firstName,
        secondName: params.secondName,
        lastName: params.lastName,
        dateOfBirth: params.dateOfBirth,
        age: params.age,
        gender: params.gender,
        city: params.city
    }
}

export const fetch = () => {
    return {
        type: actionTypes.FETCH,
        request: 'towns',
        method: 'GET'
    }
}