import React from 'react'
import { useState } from 'react';
import loadmore from "assets/loadmore.png";
import play from "assets/play.png";
import './Testimonials.css';
import { testimonialsData } from 'data/testimonialsData';

const Testimonials = () => {
  // const [element, controls] = useScroll();
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  return (
      <div className="Testimonials" id='testimonials'>
        <div className="left-t">  
          <span>Testimonials</span>
          <span className='stroke-text'>what they</span>
          <span>say about us</span>
          <span>
            {testimonialsData[selected].review}
          </span>
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
        <div></div>
        <div></div>
          <img src={testimonialsData[selected].image} alt="" />
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