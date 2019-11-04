import defaultState from './defaultState'
import { actionTypes } from './actions'
import { FINISHED } from '../../constants';


const newCountry = (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_FIELD: {
            return state.setIn([action.key], action.value);
        }
        case actionTypes.FETCH_COUNTRIES: {
            if(action.state === FINISHED) {
                let res = action.response;
                res = res.map(country => {
                    return country
                    .set('label', country.get('name'))
                    .set('value', country.get('id'))
                });
                return state.set('countries', res)
            }
            return state
        }
        case actionTypes.ADD_COUNTRY: {
            if(action.state === FINISHED) {
                return state.set('country', '')
            }
            return state
        }
        default: {
            return state;
        }
    }
}

export default newCountry;