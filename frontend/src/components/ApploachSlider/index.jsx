import React from "react";
import "./ApploachSlider.css";

const ApploachSlider = ({imageSrc, title}) => {
  return (
    <div className="ApploachVigilanciaSlider mb-5">
      <img src={imageSrc} alt="slider" />
      <h1 className="h1">ESQUEMA DE CERTIFICACIÓN: <br></br> {title} </h1>
      <div className="back"></div>
    </div>
  );
};

export { ApploachSlider };