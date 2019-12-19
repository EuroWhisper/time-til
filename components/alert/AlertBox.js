import styled, { css } from 'styled-components';
import { ALERT_PRIMARY, ALERT_DANGER, ALERT_SUCCESS } from './alertTypes';
import CloseButton from './CloseButton';

const Wrapper = styled.div`
    box-sizing: border-box;
    padding: 8px;
    border-style: solid;
    border-width: 1px;
    border-radius: 8px;
    position: relative;
    display: flex;

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

    @media(min-width: 769px) {
        padding: 16px;
    }

    @media(min-width: 1024px) {
        width: 50%;
    }

`;

const Icon = styled.div`
    margin-right: 24px;
    display: none;

    ${props => props.type === ALERT_SUCCESS && css`
        width: 56px;
        height: 56px;
        background-image: url(./img/components/alert/success.svg);
    `}

    ${props => props.type === ALERT_DANGER && css`
        width: 56px;
        height: 56px;
        background-image: url(./img/components/alert/danger.svg);
    `}

    @media(min-width: 769px) {
        display: block;
    }
`;

const Content = styled.div`
    max-width: 90%;
`;

const Title = styled.h2`
    margin-top: 0;

`;

const Message = styled.p`

`;

const AlertBox = ({type, title, message}) => (
    <Wrapper type={type}>
        <Icon type={type}/>
        <Content>
            <Title>{title}</Title>
            <Message>{message}</Message>
        </Content>
        <CloseButton type={type} />
    </Wrapper>
);

export default AlertBox;