import { createStore } from "redux";
import rootReducer from "./reducer";



const store = createStore(
    rootReducer, 
    // composeWithDevTools(), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
    serialize: true
  }));
window.storage = store;
export default store;
