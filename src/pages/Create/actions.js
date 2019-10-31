export const actionTypes = {
    SET_FIELD: Symbol("SET_FIELD"),
    ADD: Symbol("ADD"),
    CLEAR_FIELD: Symbol("CLEAR_FIELD"),
}


export  const setField = (params) => {
    return {
        type: actionTypes.SET_FIELD,
        key: params.key,
        value: params.value
    }
}

export const add = (params) => {
    return {
        type: actionTypes.ADD,
        request: 'persons',
        method: 'POST',
        params
    }
}

export const clearField = () => {
    return {
        type: actionTypes.CLEAR_FIELD
    }
}


