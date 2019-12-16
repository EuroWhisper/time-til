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
    color: white;
    margin-bottom: 24px;
`;

const NavMenu = () => {
    const user = useSelector(userSelector);

    return (
        <nav>
        {
            user && (
                <Menu>
                    <MenuItem><Link href="/">Home</Link></MenuItem>
                    <MenuItem><Link href="/profile">Profile</Link></MenuItem>
                    <MenuItem><Link href="/events">Events</Link></MenuItem>
                    <MenuItem><Link href="/about">About</Link></MenuItem>
                    <MenuItem><Link href="/contact">Contact</Link></MenuItem>
                    <MenuItem><Link href="/logout"><button>Logout</button></Link></MenuItem>
                </Menu>
            )
        }
        {
            !user && (
                <Menu>
                    <MenuItem><Link href="/">Home</Link></MenuItem>
                    <MenuItem><Link href="/about">About</Link></MenuItem>
                    <MenuItem><Link href="/contact">Contact</Link></MenuItem>
                    <MenuItem><Link href="/login"><button>Login</button></Link></MenuItem>
                </Menu>
            )
        }
        </nav>
    );
};

export default NavMenu;