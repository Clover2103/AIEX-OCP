import React from "react";
import { ApploachSlider } from "../../components/ApploachSlider";
import { ApploachAOEABody } from "../../components/ApploachAOEABody";
import img from "../../assets/alcances/approach scopes/oea.png";

const ApproachAOEA = () => {
  return (
    <div>
      <ApploachSlider
        imageSrc={img}
        title="AGENTE DE OPERADOR ECONÓMICO AUTORIZADO"
      />
      <ApploachAOEABody />
    </div>
  );
};

export { ApproachAOEA };