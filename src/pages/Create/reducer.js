import defaultState from './defaultState';
import { actionTypes } from './actions';

const createForm = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_FIELD: {
        return state.setIn([action.key],action.value);
    }
    case actionTypes.CLEAR_FIELD: {
        state = defaultState;
    }
    case actionTypes.CLEAR_FIELD: {
        state = defaultState;
    }
    default: {
      return state;
    }
  }
};

export default createForm;