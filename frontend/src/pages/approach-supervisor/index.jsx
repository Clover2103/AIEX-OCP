import React from "react";
import { ApploachSlider } from "../../components/ApploachSlider";
import { ApproachSupervisorBody } from "../../components/ApproachSupervisorBody";
import img from "../../assets/alcances/approach scopes/seguridad.png";

const ApproachSupervisor = () => {
  return (
    <div>
      <ApploachSlider 
        imageSrc={img}
        title="SUPERVISOR DE SEGURIDAD"
      />
      <ApproachSupervisorBody />
    </div>
  );
};

export { ApproachSupervisor };