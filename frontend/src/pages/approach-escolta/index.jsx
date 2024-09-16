import React from "react";
import { ApploachSlider } from "../../components/ApploachSlider";
import { ApproachEscoltaBody } from "../../components/ApproachEscoltaBody";
import img from "../../assets/alcances/approach scopes/seguridad.png";

const ApproachEscolta = () => {
  return (
    <div>
      <ApploachSlider
        imageSrc={img}
        title="ESCOLTA DE SEGURIDAD"
      />
      <ApproachEscoltaBody />
    </div>
  );
};

export { ApproachEscolta };