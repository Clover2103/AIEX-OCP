import React from "react";
import { NavBar } from "../../components/NavBar";
import { PoliciesSlider } from "../../components/PoliciesSlider";
import { PoliciesBody } from "../../components/PoliciesBody";
import { Footer } from "../../components/Footer";

const Policies = () => {
  return (
    <div>
      <NavBar />
      <PoliciesSlider />
      <PoliciesBody />
      <Footer />
    </div>
  );
};

export { Policies }