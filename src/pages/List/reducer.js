import defaultState from './defaultState';
import { actionTypes }  from './actions';

const list = (state = defaultState, action) => {
    switch (action.type) {
      case actionTypes.ADD_MOCK: {
        state = {
            users: [
                ...state.users,
                {
                    firstName: "Sara",
                    secondName: "Jason",
                    lastName: "Conner",
                    age: 25,
                    gender: "F",
                    dateOfBirth: new Date("1996-10-18")
                }
            ]
        };
        return state;
      }
      default: {
        return state;
      }
    }
  };
  
  export default list;