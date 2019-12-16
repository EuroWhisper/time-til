import { TOGGLE_MENU } from '../actions/actiontypes';
const initialState = false;

const toggleNavMenu = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_MENU:
            return !state;
        default:
            return state;
    }
};

export const toggleMenuSelector = (state) => {
    return state.toggleNavMenu;
};

export default toggleNavMenu;