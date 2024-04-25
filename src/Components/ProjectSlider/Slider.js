import React, { useRef, useState } from "react";
import Slide from "./Slide";
import './style.css'
const Slider = ({ slidesData }) => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const nextSlide = () => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    };
  
    const prevSlide = () => {
      setCurrentSlideIndex((prevIndex) =>
        prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1
      );
    };
 

  
    return (
        <>
          <div className="slider">
      <div className="slides-container">
        {slidesData.map((slide, index) => (
          <Slide key={index} {...slide} />
        ))}
      </div>
      <div className="buttons">
        <span className="prev" onClick={prevSlide}></span>
        <span className="next" onClick={nextSlide}></span>
      </div>
    </div>
      </>
    );
  };
  export default Slider;