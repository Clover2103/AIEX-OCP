import React from "react";
import { ApploachSlider } from "../../components/ApploachSlider";
import { ApploachGISCBody } from "../../components/ApploachGISCBody";
import img from "../../assets/alcances/approach scopes/atencion-cliente.png";

const ApproachGISC = () => {
  return (
    <div>
      <ApploachSlider
        imageSrc={img}
        title="GESTOR DE INFORMACIÓN Y SERVICIO AL CLIENTE"
      />
      <ApploachGISCBody />
    </div>
  );
};

export { ApproachGISC };