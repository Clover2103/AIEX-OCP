import React from "react";
import { ApploachSlider } from "../../components/ApploachSlider";
import { ApploachRiesgosBody } from "../../components/ApploachRiesgosBody";
import img from "../../assets/alcances/approach scopes/seguridad.png";

const ApproachRiesgos = () => {
  return (
    <div>
      <ApploachSlider
        imageSrc = {img}
        title="GESTOR DE ANALISIS DE RIESGOS Y PLANES DE SEGURIDAD"
      />
      <ApploachRiesgosBody />
    </div>
  );
};

export { ApproachRiesgos };