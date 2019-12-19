import { useDispatch } from "react-redux";
import { HIDE_ALERT } from "../../redux/actions/actiontypes";


const CloseButton = () => {
    const dispatch = useDispatch();

    const closeAlert = () => {
        dispatch({type: HIDE_ALERT, payload: null});
    }

    return <h3 onClick={closeAlert}>Close</h3>
};

export default CloseButton;