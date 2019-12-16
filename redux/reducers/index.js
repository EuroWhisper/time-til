import { combineReducers } from "redux";
import events from "../reducers/events";
import user from "../reducers/user";

export default combineReducers({ events, user });
