import { combineReducers } from "redux";
import events from "../reducers/events";
import user from "../reducers/user";
import toggleNavMenu from '../reducers/navMenu';

export default combineReducers({ events, user, toggleNavMenu });
