import { combineReducers } from "redux";
import createForm from "./pages/Create/reducer";
import list from "./pages/List/reducer";

export default combineReducers({ createForm, list });