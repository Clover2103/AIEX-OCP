import React from "react";
import slider from "../../assets/policies/sliderPolicies.png";
import "./PoliciesSlider.css";

const PoliciesSlider = () => {
  return (
    <div className="PoliciesSlider">
      <img src={slider} alt="slider" />
      <h1 className="h1">POLITICAS DEL ORGANISMO</h1>
      <div className="back"></div>
    </div>
  );
};

export { PoliciesSlider };