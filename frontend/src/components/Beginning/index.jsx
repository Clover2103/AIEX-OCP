import React from 'react';
import './Beginning.css';
import img1 from '../../assets/inicio/beginning/Calidad.png';
import img2 from '../../assets/inicio/beginning/Eficiencia.png';
import img3 from '../../assets/inicio/beginning/Enfoqueal-cliente.png';
import img4 from '../../assets/inicio/beginning/Integridad-1.png';
import img5 from '../../assets/inicio/beginning/Mejora-continua.png';
import img6 from '../../assets/inicio/beginning/Veracidad.png';
import { useSlider } from '../../hooks/useSlider';

const images = [img1, img2, img3, img4, img5, img6];

const Beginning = () => {
  
  const {
    currentIndex,
    sliderRef,
    scrollLeft,
    scrollRight,
    handleMouseEnter,
    handleMouseLeave,
  } = useSlider(images.length, true, 5000);

  return (
    <div className="beginning-slider" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="beginning__title mb-4">
        <h2 className="text-center">NUESTROS PRINCIPIOS</h2>
      </div>
      <div>
        <button className="nav-btn prev-btn" onClick={scrollLeft}>&#10094;</button>
        <div className="cont-slider-b" ref={sliderRef}>
          {images.map((img, index) => {
            let className = 'slider-img';
            if (index === currentIndex) {
              className += ' focus-b';
            } else if (index === (currentIndex - 1 + images.length) % images.length) {
              className += ' left-b';
            } else if (index === (currentIndex + 1) % images.length) {
              className += ' right-b';
            }
            return (
              <div className={className} key={index}>
                <img src={img} alt={`img-slider-${index + 1}`} />
              </div>
            );
          })}
        </div>
        <button className="nav-btn next-btn" onClick={scrollRight}>&#10095;</button>
      </div>
    </div>
  );
};

export { Beginning };
