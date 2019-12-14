import styled from 'styled-components';
import Container from '../container';

const Header = styled.header`
    width: 100%;
    height: 64px;
    background-color: #333;
    display: flex;
    align-items: center;

    @media(min-width: 769px) {
        height: 80px;
    }
`;

const NavbarInner = styled.div`
    display: flex;
    align-items: center;
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



const Navbar = () => {
    return (
        <Header>
            <Container>
                <NavbarInner>
                    <Logo />
                    <Title>Time 'til</Title>
                </NavbarInner>
            </Container>
        </Header>
    );
};

export default Navbar;