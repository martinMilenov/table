export const actionTypes = {
    SET_FIELD: Symbol("SET_FIELD")
}

export  const setField = (params) => {
    return {
        type: actionTypes.SET_FIELD,
        key: params.key,
        value: params.value
    }
}