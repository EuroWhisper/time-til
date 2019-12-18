import styled, { css } from 'styled-components';
import { ALERT_PRIMARY } from './alertTypes';

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
    </Wrapper>
);

export default AlertBox;