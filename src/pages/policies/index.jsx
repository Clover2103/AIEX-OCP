import React from "react";
import { PoliciesSlider } from "../../components/PoliciesSlider";
import { PoliciesBody } from "../../components/PoliciesBody";

const Policies = () => {
  return (
    <div>
      <PoliciesSlider />
      <PoliciesBody />
    </div>
  );
};

export { Policies }