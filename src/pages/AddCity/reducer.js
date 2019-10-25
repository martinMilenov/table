import defaultState from './defaultState';
import {actionTypes} from './action';
import { fromJS, List } from "immutable"

const newCity = (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_FIELD: {
            return state.setIn([action.key], action.value);
        }
        case actionTypes.CLEAN_FIELD: {
            return state.setIn([action.value], "")
        }
        case actionTypes.ADD_CITY: {
            const city = fromJS({
                label: action.label
            })
            return state.set('citys', state.get('citys', List()).push(city)).set('city', '');
        }
        default: {
            return state;
        }
    }
}

export default newCity;