import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Navbar from '../components/navbar';
import Container from '../components/container';
import Alert from '../components/alert';

const Title = styled.h1`
  font-weight: 500;
`;

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navbar />
    <Container darkBackground>
      <Alert />
      <Title>Latest events (everyone)</Title>
    </Container>
  </div>
)

export default Home
