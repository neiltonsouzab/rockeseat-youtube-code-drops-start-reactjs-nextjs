import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import RocketseatLogo from '../assets/rocketseat.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <RocketseatLogo />
      <h1>ReactJS Structured</h1>
      <p>A ReactJS + Next.js structured mad by Rocketseat.</p>
    </Container>
  )
}

export default Home
