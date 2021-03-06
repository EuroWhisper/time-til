import Link from 'next/link';
import styled, { css, keyframes } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_MENU } from '../../redux/actions/actiontypes';
import { userSelector } from '../../redux/reducers/user';
import { toggleMenuSelector } from '../../redux/reducers/navMenu';

const Wrapper = styled.nav`
    display: none;
    flex-basis: 100%;

    ${ props => props.toggleMenu && css`
        display: block;
    `}

    @media(min-width: 769px) {
        display: flex;
        flex-basis: auto;
    }
`;

const Menu = styled.ul`
    list-style: none;
    @media (min-width: 768px) {
        display: flex;
        align-items: center;
    }
`;

const MenuItem = styled.li`
    margin-bottom: 24px;

    @media(min-width: 769px) {
        margin: 0 0 0 24px;
    }
`;

const MenuLink = styled.a`
    color: #F7CCFF;

    &:hover {
        color: white;
    }
`;
const fadeIn = keyframes`
    from {
        background-color: transparent;
    }

    to {
        background-color: white;
    }
`;
const Button = styled.button`
    background-color: transparent;
    border-color: white;
    color: white;
    border-style: solid;
    border-width: 1px;
    border-radius: 8px;
    height: 48px;
    width: 128px;

    &:hover {
        animation: ${fadeIn} 400ms linear;
        animation-fill-mode: forwards;
        color: black;
    }
`;



const NavMenu = () => {
    const user = useSelector(userSelector);
    const toggleMenu = useSelector(toggleMenuSelector);
    const dispatch = useDispatch();

    return (
        <Wrapper toggleMenu={toggleMenu}>
        {
            user && (
                <Menu>
                    <MenuItem onClick={() => { dispatch({ type: TOGGLE_MENU })}}><Link href="/"><MenuLink>Home</MenuLink></Link></MenuItem>
                    <MenuItem onClick={() => { dispatch({ type: TOGGLE_MENU })}}><Link href="/profile"><MenuLink>Profile</MenuLink></Link></MenuItem>
                    <MenuItem><Link href="/events"><MenuLink>Events</MenuLink></Link></MenuItem>
                    <MenuItem><Link href="/about"><MenuLink>About</MenuLink></Link></MenuItem>
                    <MenuItem><Link href="/contact"><MenuLink>Contact</MenuLink></Link></MenuItem>
                    <MenuItem><Link href="/logout"><Button>Logout</Button></Link></MenuItem>
                </Menu>
            )
        }
        {
            !user && (
                <Menu>
                    <MenuItem><Link href="/"><MenuLink>Home</MenuLink></Link></MenuItem>
                    <MenuItem><Link href="/about"><MenuLink>About</MenuLink></Link></MenuItem>
                    <MenuItem><Link href="/contact"><MenuLink>Contact</MenuLink></Link></MenuItem>
                    <MenuItem><Link href="/login"><Button>Login</Button></Link></MenuItem>
                </Menu>
            )
        }
        </ Wrapper>
    );
};

export default NavMenu;