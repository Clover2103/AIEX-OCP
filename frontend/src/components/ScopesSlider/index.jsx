import React from 'react';
import './ScopesSlider.css';
import { useSlider } from '../../hooks/useSlider';
import img1 from '../../assets/alcances/slider scopes/scopes1.png';
import img2 from '../../assets/alcances/slider scopes/scopes2.png';
import img3 from '../../assets/alcances/slider scopes/scopes3.png';
import img4 from '../../assets/alcances/slider scopes/scopes4.png';
import img5 from '../../assets/alcances/slider scopes/scopes5.png';
import img6 from '../../assets/alcances/slider scopes/scopes6.png';
import img7 from '../../assets/alcances/slider scopes/scopes7.png';
import img8 from '../../assets/alcances/slider scopes/scopes8.png';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const ScopesSlider = () => {
  const { currentIndex, sliderRef} = useSlider(images.length, true, 3000);

  return (
    <div className='scopes-container'>
      <div className='scopes-slider-body container'>
        <div className='scopes-conten' >
          <div className="slider-scope" ref={sliderRef}>
            {images.map((img, index) => (
              <div key={index} className="scopesSlider__imageContainer" style={{ transform: `translateX(-${currentIndex * 400}px)` }}>
                <img src={img} alt={`Scope ${index + 1}`} className="scopesSlider__image" />
              </div>
            ))}
          </div>
        </div>
        <div className='scopes-slider-title mb-5 mt-3'>
          <h2>ALCANCES PARA CERTIFICAR</h2>
        </div>
      </div>
    </div>
  );
};

export { ScopesSlider };
