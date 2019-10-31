import defaultState from './defaultState';
import {actionTypes} from './action';
import { fromJS, List } from "immutable"
import { FINISHED } from '../../constants';

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
        case actionTypes.FETCH_TOWNS: {
            if(action.state === FINISHED) {
              let res = action.response;
              res = res.map(town => {
                return town
                .set('label', town.get('name'))
                .set('value', town.get('id'))
              });
              return state.set('citys', res)
            }
            return state
          }
        default: {
            return state;
        }
    }
}

export default newCity;