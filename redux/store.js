import { createStore } from "redux";
import rootReducer from "./reducers";

let store;

// window does not exist in the NodeJS runtime environment
// so only load Redux devtools on the client-side.
if (typeof window !== 'undefined') {
    store = createStore(rootReducer, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());    
} else {
    store = createStore(rootReducer);
}

export default store;