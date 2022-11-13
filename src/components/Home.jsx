import React from 'react'
import styled from 'styled-components'
import home from 'assets/home.png'
import play from 'assets/play.png'
import Navbar from './Navbar'

const Home = () => {
  return (
    <Section>
        <Navbar />
    </Section>
  )
}

const Section = styled.section`
    background:url(${home}) no-repeat center;
    min-height: 100vh;
    background-size: cover;
    position: relative;
`

export default Home