import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { TOGGLE_MENU } from '../../redux/actions/actiontypes';

const ToggleButton = styled.button`
    width: 32px;
    height: 32px;
    margin: 0;
    padding: 0;
    border-style: none;
    background-color: transparent;

    @media (min-width: 769px) {
        display: none;
    }
`;

const BurgerIcon = styled.span`
    display: inline-block;
    background-image: url(./img/components/navbar/burger-menu.svg);
    width: 100%;
    height: 100%;
`;

const MenuToggle = () => {
    const dispatch = useDispatch();
    return <ToggleButton onClick={() => {dispatch({type: TOGGLE_MENU})}}><BurgerIcon></BurgerIcon></ToggleButton>;
};

export default MenuToggle;