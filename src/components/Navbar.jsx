import React from 'react'
import styled from 'styled-components'
import logo from 'assets/logo.png'
import { GiHamBurgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import { useState } from 'react'
import { motion } from 'framer-motion';
import { useScroll } from './useScroll'
import { navAnimation } from 'animation'

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [element, controls] = useScroll();

  return (
    <Nav ref={element}
      variants={navAnimation}
      transition={{delay: 0.1}}
      animate={controls}
    >
        <div className="brand_container">
            <a href="#" className="brand">
                <img src={logo} alt="logo" />
            </a>
            <div className="toggle"></div>
        </div>
        <div className="links">
            <ul>
                <li className="active">
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#blog">Blog</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </Nav>
  )
}

const Nav = styled(motion.nav)`
    display: flex;
    justify-content: space-between;
    margin: 0 2rem;
    color: #fff;
    padding-top: 2rem;
    .brand__container {
    margin: 0 2rem;
    .toggle {
      display: none;
    }
  }
  .links {
    ul {
      list-style-type: none;
      display: flex;
      gap: 3rem;
      .active{
        a {
          border-bottom: 0.2rem solid var(--secondary-color);
        }
      }
      li {
        a {
          color: #fff;
          text-decoration: none;
          font-weight: 400;
          font-size: 0.9rem;
          text-transform: uppercase;
        }
      }
    }
  }
`

export default Navbar