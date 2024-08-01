import React from "react";
import { ApploachSlider } from "../../components/ApploachSlider";
import { ApproachOMTBody } from "../../components/ApploachOMTBody";
import img from "../../assets/alcances/approach scopes/seguridad.png";

const ApproachOMT = () => {
  return (
    <div>
      <ApploachSlider
        imageSrc={img}
        title="OPERADOR DE MEDIOS TECNOLÓGICOS EN SEGURIDAD"
      />
      <ApproachOMTBody />
    </div>
  );
};

export { ApproachOMT };