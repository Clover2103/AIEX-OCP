import React from "react";
import { NavBar } from "../../components/NavBar";
import { ApploachSlider } from "../../components/ApploachSlider";
import { ApploachAOEABody } from "../../components/ApploachAOEABody";
import { Footer } from "../../components/Footer";
import img from "../../assets/alcances/approach scopes/oea.png";

const ApproachAOEA = () => {
  return (
    <div>
      <NavBar />
      <ApploachSlider
        imageSrc={img}
        title="AGENTE DE OPERADOR ECONÓMICO AUTORIZADO"
      />
      <ApploachAOEABody />
      <Footer />
    </div>
  );
};

export { ApproachAOEA };