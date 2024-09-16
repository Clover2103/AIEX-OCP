import React from "react";
import { ApploachSlider } from "../../components/ApploachSlider";
import { ApproachVigilanciaBody } from "../../components/ApproachVigilanciaBody";
import img from "../../assets/alcances/approach scopes/seguridad.png";

const ApproachVigilancia = () => {
  return (
    <div>
      <ApploachSlider 
        imageSrc={img}
        title="VIGILANTE DE SEGURIDAD"
      />
      <ApproachVigilanciaBody />
    </div>
  );
};

export { ApproachVigilancia };