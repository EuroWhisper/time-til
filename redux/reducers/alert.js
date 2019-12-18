import { HIDE_ALERT, SHOW_ALERT } from '../actions/actiontypes';

const initialState = null;

const alert = (state = initialState, action) => {
    switch(action.type) {
        case HIDE_ALERT:
            return null;
        case SHOW_ALERT:
            return action.payload;
        default:
            return state;
    }  
};

export const alertSelector = (state) => {
    return state.alert;
};

export default alert;