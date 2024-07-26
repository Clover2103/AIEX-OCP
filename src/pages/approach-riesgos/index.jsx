import React from "react";
import { NavBar } from "../../components/NavBar";
import { ApploachSlider } from "../../components/ApploachSlider";
import { ApploachRiesgosBody } from "../../components/ApploachRiesgosBody";
import { Footer } from "../../components/Footer";
import img from "../../assets/alcances/approach scopes/seguridad.png";

const ApproachRiesgos = () => {
  return (
    <div>
      <NavBar />
      <ApploachSlider
        imageSrc = {img}
        title="GESTOR DE ANALISIS DE RIESGOS Y PLANES DE SEGURIDAD"
      />
      <ApploachRiesgosBody />
      <Footer />
    </div>
  );
};

export { ApproachRiesgos };