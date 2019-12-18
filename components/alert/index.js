import { useSelector } from 'react-redux';
import { alertSelector } from '../alert';
import { ALERT_PRIMARY, ALERT_SUCCESS, ALERT_DANGER } from './alertTypes';

const Alert = () => {
    const alert = useSelector(alertSelector);

    switch (alert.type) {
        case ALERT_PRIMARY:
            //...
        case ALERT_SUCCESS:
            //...
        case ALERT_DANGER:
            //...
        default:
            return null;
    }

};

export default Alert;