import React from "react";
import { NavBar } from "../../components/NavBar";
import { ApploachSlider } from "../../components/ApploachSlider";
import { ApproachSupervisorBody } from "../../components/ApproachSupervisorBody";
import { Footer } from "../../components/Footer";
import img from "../../assets/alcances/approach scopes/seguridad.png";

const ApproachSupervisor = () => {
  return (
    <div>
      <NavBar />
      <ApploachSlider 
        imageSrc={img}
        title="SUPERVISOR DE SEGURIDAD"
      />
      <ApproachSupervisorBody />
      <Footer />
    </div>
  );
};

export { ApproachSupervisor };