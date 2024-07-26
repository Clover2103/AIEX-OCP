import React from "react";
import { NavBar } from "../../components/NavBar";
import { ApploachSlider } from "../../components/ApploachSlider";
import { ApploachGISCBody } from "../../components/ApploachGISCBody";
import { Footer } from "../../components/Footer";
import img from "../../assets/alcances/approach scopes/atencion-cliente.png";

const ApproachGISC = () => {
  return (
    <div>
      <NavBar />
      <ApploachSlider
        imageSrc={img}
        title="GESTOR DE INFORMACIÓN Y SERVICIO AL CLIENTE"
      />
      <ApploachGISCBody />
      <Footer />
    </div>
  );
};

export { ApproachGISC };