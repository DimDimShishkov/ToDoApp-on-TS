import { combineReducers } from "redux";
import cards from "./cards";
import projects from "./projects";

const rootReducer = combineReducers({ cards, projects });

export default rootReducer;
