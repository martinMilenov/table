export const actionTypes = {
    ADD_CITY: Symbol("ADD_CITY"),
    CHANGE_FIELD: Symbol("CHANGE_FIELD"),
}

export const addCity = (params) => {
    return {
        type: actionTypes.ADD_CITY,
        label: params.label,
    }
}
export const changeField = (params) => {
    return {
        type: actionTypes.CHANGE_FIELD,
        key: params.key,
        value: params.value
    }
}
