import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducer";
import { requestSendingMiddleware } from './reducer';

const devTools =
	window.devToolsExtension
		? window.devToolsExtension({
				serialize: true,
				actionSanitizer: action => {
					// Adding Symbol functionality to the dev tools.
					if (typeof action.type === 'symbol') {
						const actionCopy = Object.assign({}, action, {
							type: action.type.toString()
						});

						return actionCopy;
					}

					return action;
				}
		  })
		: f => f;

const store = createStore(
    rootReducer, 
    // composeWithDevTools(), 
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
    //   serialize: true
    // })
    compose(
      applyMiddleware(thunk, requestSendingMiddleware),
      devTools
    )
);
window.storage = store;
export default store;
