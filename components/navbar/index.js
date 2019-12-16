import styled from 'styled-components';
import Container from '../container';
import NavMenu from './NavMenu';

const Header = styled.header`
    width: 100%;
    min-height: 64px;
    background-color: #333;
    display: flex;
    align-items: center;

    @media(min-width: 769px) {
        height: 80px;
    }
`;

const NavbarInner = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;

const LogoWrapper = styled.div`
    display: flex;
`;

const Logo = styled.div`
    background-image: url(./img/components/navbar/logo.svg);
    width: 48px;
    height: 48px;
    margin-right: 8px;

    @media(min-width: 769px) {
        margin-right: 24px;
    }
`;

const Title = styled.h1`
    color: white;
    margin: 0;
`;

const MenuToggle = styled.button`
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


const Navbar = () => {
    return (
        <Header>
            <Container>
                <NavbarInner>
                    <LogoWrapper>
                        <Logo />
                        <Title>Time 'til</Title>
                    </LogoWrapper>
                    <MenuToggle>
                        <BurgerIcon/>
                    </MenuToggle>
                    <NavMenu />
                </NavbarInner>
            </Container>
        </Header>
    );
};

export default Navbar;