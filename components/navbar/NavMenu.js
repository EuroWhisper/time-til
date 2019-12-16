import Link from 'next/link';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
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
    }
`;

const MenuItem = styled.li`
    margin-bottom: 24px;
`;

const MenuLink = styled.a`
    color: white;
`;

const Button = styled.button`
    background-color: transparent;
    border-color: white;
    color: white;
    border-style: solid;
    border-radius: 8px;
    height: 48px;
    width: 128px;
`;

const NavMenu = () => {
    const user = useSelector(userSelector);
    const toggleMenu = useSelector(toggleMenuSelector);

    return (
        <Wrapper toggleMenu={toggleMenu}>
        {
            user && (
                <Menu>
                    <MenuItem><Link href="/"><MenuLink>Home</MenuLink></Link></MenuItem>
                    <MenuItem><Link href="/profile"><MenuLink>Profile</MenuLink></Link></MenuItem>
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