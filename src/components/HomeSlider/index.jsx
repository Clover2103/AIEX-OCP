import React, { useRef, useState } from 'react';
import './HomeSlider.css';
import img1 from '../../assets/inicio/slider/img 1.jpg';
import img2 from '../../assets/inicio/slider/img 2.jpg';
import img3 from '../../assets/inicio/slider/img 3.jpg';
import img4 from '../../assets/inicio/slider/img 4.jpg';
import img5 from '../../assets/inicio/slider/img 5.png';
import { useSlider } from '../../hooks/useSlider';

const images = [img1, img2, img3, img4, img5];

const HomeSlider = () => {
  
  const {
    currentIndex,
    sliderRef,
    scrollLeft,
    scrollRight,
    goToIndex,
    handleMouseEnter,
    handleMouseLeave,
  } = useSlider(images.length, true, 5000);

  return (
    <div className="homeSlider"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="cont-slider">
        <button className="nav-btn prev-btn" onClick={scrollLeft}>&#10094;</button>
        <div className="slider" ref={sliderRef}>
          {images.map((img, index) => {
            let className = 'slider-img';
            if (index === currentIndex) {
              className += ' focus';
            } else if (index === (currentIndex - 1 + images.length) % images.length) {
              className += ' left';
            } else if (index === (currentIndex + 1) % images.length) {
              className += ' right';
            }
            return (
              <div className={className} key={index}>
                <img src={img} alt={`img-slider-${index + 1}`} />
              </div>
            );
          })}
        </div>
        <button className="nav-btn next-btn" onClick={scrollRight}>&#10095;</button>
        <div className="slider-msg">
          <h2>CERTIFICA TUS</h2>
          <span>COMPETENCIAS</span>
          <h2>LABORALES</h2>
        </div>
      </div>
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToIndex(index)}
          ></span>
        ))}
      </div>

      <div className="slider-deg">
          
      </div>
    </div>
  );
};

export { HomeSlider };


