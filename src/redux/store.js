import { combineReducers, createStore } from "redux";
import { phoneReducer } from "./phone.reduser";
import { devToolsEnhancer } from "@redux-devtools/extension";



const rootReducer = combineReducers({
    phoneStore: phoneReducer
})
 
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer,enhancer);