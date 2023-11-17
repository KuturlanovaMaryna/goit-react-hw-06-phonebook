import { combineReducers, createStore } from "redux";
import { phoneReducer } from "./phone.reduser";



const rootReducer = combineReducers({
    phoneStore: phoneReducer
 })
export const store = createStore(rootReducer);