import styled, { css } from 'styled-components';
import { ALERT_PRIMARY, ALERT_DANGER, ALERT_SUCCESS } from './alertTypes';
import CloseButton from './CloseButton';

const Wrapper = styled.div`
    box-sizing: border-box;
    padding: 16px;
    border-style: solid;
    border-width: 1px;
    border-radius: 8px;

    ${props => props.type === ALERT_PRIMARY && css`
        background-color: #FCEEFF;
        color: #434343;
        border-color: #5A415F;
    `}

    ${props => props.type === ALERT_SUCCESS && css`
        background-color: #DBFFF8;
        color: #434343;
        border-color: #1AB394;
    `}

    ${props => props.type === ALERT_DANGER && css`
        background-color: #F8D7DA;
        color: #434343;
        border-color: #DC5361;
    `}
`;

const Content = styled.div``;

const Title = styled.h3`

`;

const Message = styled.p`

`;

const AlertBox = ({type, title, message}) => (
    <Wrapper type={type}>
        {/* <Icon/> */}
        <Content>
            <Title>{title}</Title>
            <Message>{message}</Message>
        </Content>
        <CloseButton/>
    </Wrapper>
);

export default AlertBox;