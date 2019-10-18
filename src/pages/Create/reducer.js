import defaultState from './defaultState';
import { actionTypes } from './actions';

const createForm = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_FIELD: {
        state = {
            firstName: state.firstName,
            secondName: state.secondName,
            lastName: state.lastName,
            dateOfBirth: state.dateOfBirth,
            age: state.age,
            gender: state.gender 
        }
        
        state[action.key] = action.value;
        return state;
    }
    default: {
      return state;
    }
  }
};

export default createForm;