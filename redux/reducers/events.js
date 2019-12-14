import { ADD_EVENT } from '../actions/actiontypes';

const initialState = [
    {
        id: 1,
        title: "UFC 245: Usman vs Covington",
        utcDate: new Date(),
        image: "/img/events/ufc.jpg"
    }    
];

const events = (state = initialState, action) => {
    switch(action.type) {
        case ADD_EVENT:
            return [...state].push(action.payload);

        default:
            return state;
    }
};

export default events;