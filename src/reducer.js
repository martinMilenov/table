import { combineReducers } from "redux";
import createForm from "./pages/Create/reducer";
import list from "./pages/List/reducer";
import newCity from './pages/AddCity/reducer';

export default combineReducers({ createForm, list, newCity });