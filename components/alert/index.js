
import { useSelector, useDispatch } from 'react-redux';
import { alertSelector } from '../../redux/reducers/alert';
import { ALERT_PRIMARY, ALERT_SUCCESS, ALERT_DANGER } from './alertTypes';
import { useEffect } from 'react';
import { HIDE_ALERT } from '../../redux/actions/actiontypes';
import AlertBox from '../alert/AlertBox';

const Alert = () => {
    const dispatch = useDispatch();
    const alert = useSelector(alertSelector);


    // Hide alerts on unmount;
    useEffect(() => {
        return function cleanup() {
            dispatch({type: HIDE_ALERT, payload: null});
        };
    });

    

    if (alert) {
        switch (alert.type) {
            case ALERT_PRIMARY:
                return <AlertBox type={ALERT_PRIMARY} title={alert.title} message={alert.message} />;
            case ALERT_SUCCESS:
                return <AlertBox type={ALERT_SUCCESS} title={alert.title} message={alert.message} />;
            case ALERT_DANGER:
                return <AlertBox type={ALERT_DANGER} title={alert.title} message={alert.message} />;
            default:
                return null;
        }
    }

    return null;
    

};

export default Alert;