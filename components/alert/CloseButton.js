import styled, { css } from 'styled-components';
import { useDispatch } from "react-redux";
import { HIDE_ALERT } from "../../redux/actions/actiontypes";
import { ALERT_PRIMARY, ALERT_DANGER, ALERT_SUCCESS } from './alertTypes';

const Button = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;

    ${props => props.type === ALERT_PRIMARY && css`
        width: 16px;
        height: 16px;
        background-image: url(./img/components/alert/close-button/close-primary.svg);
    `}

    ${props => props.type === ALERT_SUCCESS && css`
        width: 16px;
        height: 16px;
        background-image: url(./img/components/alert/close-button/close-success.svg);
    `}

    ${props => props.type === ALERT_DANGER && css`
        width: 16px;
        height: 16px;
        background-image: url(./img/components/alert/close-button/close-danger.svg);
    `}

    @media(min-width: 769px) {
        top: 24px;
        right: 24px;
    }
`;

const CloseButton = (props) => {
    const dispatch = useDispatch();

    const closeAlert = () => {
        dispatch({type: HIDE_ALERT, payload: null});
    }


    return <Button type={props.type} onClick={closeAlert} />
};

export default CloseButton;