export const actionTypes = {
    UPDATE_FIELD: Symbol("UPDATE_FIELD"),
    FETCH_COUNTRIES: Symbol("FETCH_COUNTRIES"),
    ADD_COUNTRY: Symbol("ADD_COUNTRY")
}


export const updateField = (params) => {
    return {
        type: actionTypes.UPDATE_FIELD,
        key: params.key,
        value: params.value
    }
}

export const addCountry = (params) => {
    return {
        type: actionTypes.ADD_COUNTRY,
        request: 'countries',
        method: "POST",
        params
    }
}

export const fetchCountries = () => {
    return {
        type: actionTypes.FETCH_COUNTRIES,
        request: 'countries',
        method: "GET"
    }
}

