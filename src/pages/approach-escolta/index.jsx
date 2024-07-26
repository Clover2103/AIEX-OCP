import React from "react";
import { NavBar } from "../../components/NavBar";
import { ApploachSlider } from "../../components/ApploachSlider";
import { ApproachEscoltaBody } from "../../components/ApproachEscoltaBody";
import { Footer } from "../../components/Footer";
import img from "../../assets/alcances/approach scopes/seguridad.png";

const ApproachEscolta = () => {
  return (
    <div>
      <NavBar />
      <ApploachSlider
        imageSrc={img}
        title="ESCOLTA DE SEGURIDAD"
      />
      <ApproachEscoltaBody />
      <Footer />
    </div>
  );
};

export { ApproachEscolta };