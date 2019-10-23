import defaultState from './defaultState';
import { actionTypes }  from './actions';
import { fromJS, List } from "immutable"


const list = (state = defaultState, action) => {
    switch (action.type) {
      case actionTypes.ADD: {
        const user = 
          fromJS({
            firstName: action.firstName,
            secondName: action.secondName,
            lastName: action.lastName,
            dateOfBirth: action.dateOfBirth,
            age: action.age,
            gender: action.gender,
            citys: action.citys
          })
          return state.set('users', state.get('users', List()).push(user));
  
      }
      default: {
        return state;
      }
    }
  };

  export default list;