import { combineReducers } from "redux";
import { cardsReducer } from "./cards";
import { projectsReducer } from "./projects";

export const rootReducer = combineReducers({
  cardsReducer,
  projectsReducer,
});
