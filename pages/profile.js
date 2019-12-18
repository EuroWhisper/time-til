import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Navbar from '../components/navbar';
import Alert from '../components/alert';
import Container from '../components/container';
import { useSelector } from 'react-redux';
import { userSelector } from '../redux/reducers/user';

const Title = styled.h1`
  font-weight: 500;
`;

const Profile = () => {
    const user = useSelector(userSelector);
    console.log(user);
    return (
    <div>
        <Head>
        <title>Profile</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />
        <Container darkBackground>
            <Alert />
            <Title>Profile</Title>
        </Container>
    </div>
    )
}
export default Profile
