import defaultState from './defaultState';
import {actionTypes} from './action';

const newCity = (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.ADD_CITY: {
            
        }
        default: {
            return state;
        }
    }
}

export default newCity;