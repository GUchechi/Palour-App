import React from 'react'
import styled from "styled-components";
import Title from './Title'

const Skills = () => {
  const skillsData = [
    {
      name: "Facial",
      amount: 75,
    },
    {
      name: "Skin",
      amount: 50,
    },
    {
      name: "SPA",
      amount: 90,
    },
    {
      name: "Cosmetic",
      amount: 70,
    },
    {
      name: "Salon",
      amount: 90,
    },
    {
      name: "Massage",
      amount: 90,
    },
  ];
  return (
    <Section id='skills'>
      <Title value="skills" />
      <div className="skills_title">
        <p>Our Skills</p>
        <h2>Check our super awesome skills</h2>
      </div>
      <div className="skills">
        <div className="skills_bars">
          {
            skillsData.map(({name, amount}) => {
              return (
                <div className="skills_bars_bar" key={name}>
                  <div className="container">
                    <progress value={amount} max="100"/> 
                    <span>{name}</span>
                  </div>
                  <h3>{amount}%</h3>
                </div>
              );
            })
          }
        </div>
        <div className="skills_content">
          <p className="title">
            Beauty Services and Products
          </p>
          <p className="description">
            To be a successful beautician, you should have a wide range 
            of skills in beauty services, good communication skills, 
            and the ability to advise clients on suitable hairstyles.
          </p>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  min-height: 100vh;
  height: 140vh;
  background-color: var(--secondary-color);
  .sideTitle{
    h1{
      color: #fff;
      font-size: 9rem;
      z-index: 2;
    }
  }
  .skills_title {
    padding: 6rem 10rem;
    p{
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      color: var(--primary-color);
    }
    h2{
      color: #fff;
      font-size: 2rem;
    }
  }
  .skills {
    display: flex;
    padding: 0 5rem 0 20rem;
    gap: 10rem;
    &_bars{
      transform: rotate(-90deg);
      width: max-content;
      height: max-content;
      display: flex;
      flex-direction: column;
      gap: 4rem;
      &_bar{
        display:flex;
        flex-direction: row-reverse;
        gap: 1rem;
        .container{
          display: flex;
          flex-direction: column;
          gap:2.5rem;
          span{
            text-transform: uppercase;
            letter-spacing: 0.2rem;
            color: var(--primary-color);
          }
          progress{
            width: 30rem;
            -webkit-appearance: none;
            appearance: none;
            &::-webkit-progress-bar {
              height: 3rem;
              background-color: var(--primary-color);
              border-radius: 20px;
            }
            &::-webkit-progress-value {
              background-color: white; 
              border-radius: 20px;
            }
          }
        }
        h3{
          transform: rotate(90deg);
          color: #fff;
          font-size: 2rem;
        }
      }
    }
    &_content{
      display: flex;
      flex-direction: column;
      gap: 2rem;
      color: #fff;
      z-index: 2;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) { 
    overflow-x: hidden;
    padding: 2rem 0;
    height: 120vh;
    .background {
      display: none;
    }
    .skills_title {
      padding: 2rem;
      text-align: center;
      h2 {
        font-size: 1.5rem;
      }
    }
    .skills {
      padding: 0;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      &_bars {
        padding: 0.2rem;
        gap: 0rem;
        align-items: center;
        justify-content: center;
        &_bar {
          .container {
            gap: 1rem;
            progress {
              width: 12rem;
              height: 0.5rem;
              &::-webkit-progress-bar {
                height: 0.3rem;
              }
            }
          }
          h3 {
            font-size: 1rem;
          }
        }
      }
      &_content {
        padding: 0 2rem;
      }
    }
  }
`
export default Skills