import { legacy_createStore as createStore } from "redux";
import { mainReducer } from "./Reducer";


export const store = createStore(mainReducer);