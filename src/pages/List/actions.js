export const actionTypes =  {
    ADD_MOCK: Symbol("ADD_MOCK")
}

export const addMock = () => {
    return {
        type: actionTypes.ADD_MOCK
    }
}

