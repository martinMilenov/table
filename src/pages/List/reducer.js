import defaultState from './defaultState';
import { actionTypes }  from './actions';

const list = (state = defaultState, action) => {
    switch (action.type) {
      case actionTypes.ADD: {
          state = {
            users: [
                ...state.users,
                {
                    firstName: action.firstName,
                    secondName: action.secondName,
                    lastName: action.lastName,
                    dateOfBirth: action.dateOfBirth,
                    age: action.age,
                    gender: action.gender
                }
            ]
          }
          return state;
      }
      default: {
        return state;
      }
    }
  };
  
  export default list;