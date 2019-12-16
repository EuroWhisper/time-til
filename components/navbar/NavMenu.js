import Link from 'next/link';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { userSelector } from '../../redux/reducers/user';

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

const NavMenu = () => {
    const user = useSelector(userSelector);

    return (
        <nav>
        {
            user && (
                <Menu>
                    <MenuItem><Link href="/"><MenuLink>Home</MenuLink></Link></MenuItem>
                    <MenuItem><Link href="/profile"><MenuLink>Profile</MenuLink></Link></MenuItem>
                    <MenuItem><Link href="/events"><MenuLink>Events</MenuLink></Link></MenuItem>
                    <MenuItem><Link href="/about"><MenuLink>About</MenuLink></Link></MenuItem>
                    <MenuItem><Link href="/contact"><MenuLink>Contact</MenuLink></Link></MenuItem>
                    <MenuItem><Link href="/logout"><button>Logout</button></Link></MenuItem>
                </Menu>
            )
        }
        {
            !user && (
                <Menu>
                    <MenuItem><Link href="/"><MenuLink>Home</MenuLink></Link></MenuItem>
                    <MenuItem><Link href="/about"><MenuLink>About</MenuLink></Link></MenuItem>
                    <MenuItem><Link href="/contact"><MenuLink>Contact</MenuLink></Link></MenuItem>
                    <MenuItem><Link href="/login"><button>Login</button></Link></MenuItem>
                </Menu>
            )
        }
        </nav>
    );
};

export default NavMenu;