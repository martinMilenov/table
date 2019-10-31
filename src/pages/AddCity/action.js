export const actionTypes = {
    ADD_CITY: Symbol("ADD_CITY"),
    CHANGE_FIELD: Symbol("CHANGE_FIELD"),
    FETCH_TOWNS: Symbol("FETCH_TOWNS")
}

export const addCity = (params) => {
    return {
        type: actionTypes.ADD_CITY,
        request: 'towns',
        method: 'POST',
        params
    }
}
export const changeField = (params) => {
    return {
        type: actionTypes.CHANGE_FIELD,
        key: params.key,
        value: params.value
    }
}

export const fetchTowns = () => {
    return {
        type: actionTypes.FETCH_TOWNS,
        request: 'towns',
        method: 'GET',
    }
}
