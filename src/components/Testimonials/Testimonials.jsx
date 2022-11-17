import React from 'react'
import { useState } from 'react';
import loadmore from "assets/loadmore.png";
import play from "assets/play.png";
import './Testimonials.css';
import { testimonialsData } from 'data/testimonialsData';
import { motion } from 'framer-motion' 

const Testimonials = () => {
  const transition = { type: "spring", duration: 3}
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  return (
      <div className="testimonials" id='testimonials'>
        <div className="left-t">  
          <span>Testimonials</span>
          <span className='stroke-text'>what they</span>
          <span>say about us</span>
          <motion.span
            key={selected}
            initial={{opacity: 0, x: -100}}
            transition={{...transition, duration: 2}}
            whileInView={{opacity: 1, x: 0}}
          >
            {testimonialsData[selected].review}
          </motion.span>
          <span>
            <span style={{color: "var(--secondary-color)"}}>
              {testimonialsData[selected].name}
            </span>{" "}
            <span>
            - {testimonialsData[selected].designation}
            </span>
          </span>
        </div>
        <div className="right-t">
          <motion.div
            initial={{opacity: 0, x: -100}}
            transition={{...transition, duration: 2}}
            whileInView={{opacity: 1, x: 0}}
          ></motion.div>
          <motion.div
            initial={{opacity: 0, x: 100}}
            transition={{ ...transition, duration: 2}}
            whileInView={{opacity: 1, x: 0}}
          ></motion.div>
          <motion.img 
             key={selected}
            initial={{opacity: 0, x: 100}}
            transition={transition}
            animate={{opacity: 1, x:0}}
            exit={{opacity: 1, x: -100}}
          src={testimonialsData[selected].image} alt="" />
          <div className="arrows">
            <img 
              onClick={() => {
                selected === 0
                  ? setSelected(tLength - 1)
                  : setSelected((prev) => prev - 1);
              }}
              src={play} 
              className="leftArrow" 
              alt="" />
            <img 
              onClick={() => {
                selected === tLength - 1
                  ? setSelected(0)
                  : setSelected((prev) => prev +1)
              }}
              src={play} 
              alt="" />
          </div>
        </div>
      </div>
   
  )
}


export default Testimonials