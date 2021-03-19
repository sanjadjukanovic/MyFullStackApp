import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectReducer from "./projectReducer";
import backlogReducer from "./backlogReducer";
import fudbalerReducer from "./fudbalerReducer";

export default combineReducers({
  errors: errorReducer,
  project: projectReducer,
  backlog: backlogReducer,
  fudbaler: fudbalerReducer,
});
