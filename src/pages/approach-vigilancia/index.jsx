import React from "react";
import { NavBar } from "../../components/NavBar";
import { ApploachSlider } from "../../components/ApploachSlider";
import { ApproachVigilanciaBody } from "../../components/ApproachVigilanciaBody";
import { Footer } from "../../components/Footer";
import img from "../../assets/alcances/approach scopes/seguridad.png";

const ApproachVigilancia = () => {
  return (
    <div>
      <NavBar />
      <ApploachSlider 
        imageSrc={img}
        title="VIGILANTE DE SEGURIDAD"
      />
      <ApproachVigilanciaBody />
      <Footer />
    </div>
  );
};

export { ApproachVigilancia };