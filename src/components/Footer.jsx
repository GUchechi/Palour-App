import React from 'react';
import styled from "styled-components";
import { BsFacebook, BsTwitter, BsYoutube, BsBehance } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useScroll } from './useScroll'
import { footerTextAnimation } from '../animation'

const Footer = () => {
  const [element, controls] = useScroll()
  return (
    <Foot ref={element}>
      <motion.span
          variants={footerTextAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
        }}
      >
        &copy; React Website Transition Animation
      </motion.span>
      <motion.div className="footer_social_icons"
          variants={footerTextAnimation}
          animate={controls}
          transition={{
            delay: 0.02,
            type: "tween",
            duration: 0.8,
        }}
      >
        <BsFacebook />
        <BsTwitter />
        <BsYoutube />
        <BsBehance />
      </motion.div>
    </Foot>
  )
}

const Foot = styled(motion.footer)`
  background-color: var(--primary-color);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  .footer_social_icons{
    display: flex;
    gap: 2rem;
    svg{
      font-size: 1.6rem;
      cursor: pointer;
      transition: 0.5s ease-out;
      &:hover {
        color: var(--secondary-color);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) { 
  padding: 1rem;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  margin-top: 3rem;
}

`

export default Footer