import { SET_USER } from '../actions/actiontypes';

// const initialState = {
//     id: 14367453869345334,
//     email: "john@gmail.com"
// };

const initialState = null;

const user = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            return action.payload;
        default:
            return state;
    }
};

export default user;