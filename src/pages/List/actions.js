export const actionTypes =  {
    FETCH: Symbol("FETCH"),
    GET: Symbol("GET")
}

export const fetch = () => {
    return {
        type: actionTypes.FETCH,
        request: 'persons',
        method: 'GET',
    }
}

export const get = (params) => {
    return {
        type: actionTypes.GET,
        request: `persons/${params.personId}`,
        method: 'GET'
    }
}