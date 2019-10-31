import defaultState from './defaultState';
import { actionTypes }  from './actions';
import { fromJS, List } from "immutable"
import { FINISHED } from '../../constants'


const list = (state = defaultState, action) => {
    switch (action.type) {
      case actionTypes.FETCH: {
        if (action.state === FINISHED) {
          let res = action.response;
          res = res.map((person) => {
            return person
              .set('dateOfBirth',new Date(person.get('dateOfBirth')))
              .set('gender', person.get('sex'))
              .deleteIn(['sex']);
          });
          return state.set('users', res);
        }
        return state;
      }
      default: {
        return state;
      }
    }
  };

  export default list;