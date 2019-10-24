export const actionTypes = {
    ADD_CITY: Symbol("ADD_CITY")
}

export const addCity = () => {
    return {
        type: actionTypes.ADD_CITY
    }
}
