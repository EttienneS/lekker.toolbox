import { createStore, combineReducers } from "redux";
import { tools } from "./tools/reducers";

const reducers = {
  tools,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
