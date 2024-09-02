import React from 'react';
import './ScopesSliderStatic.css';

const ScopesSliderStatic = ({imageSrc, title, description}) => {
  return (
    <div className="scopes-slider-f-a-body w-100">
      <img src={imageSrc} alt="slider" />
      <h1 className="h1">{title}</h1>
      <p>{description}</p>
      <div className="back"></div>
    </div>
  );
};

export { ScopesSliderStatic };

