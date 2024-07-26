import React from "react";
import { NavBar } from "../../components/NavBar";
import { ApploachSlider } from "../../components/ApploachSlider";
import { ApproachOMTBody } from "../../components/ApploachOMTBody";
import { Footer } from "../../components/Footer";
import img from "../../assets/alcances/approach scopes/seguridad.png";

const ApproachOMT = () => {
  return (
    <div>
      <NavBar />
      <ApploachSlider
        imageSrc={img}
        title="OPERADOR DE MEDIOS TECNOLÓGICOS EN SEGURIDAD"
      />
      <ApproachOMTBody />
      <Footer />
    </div>
  );
};

export { ApproachOMT };