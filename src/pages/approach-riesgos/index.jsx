import React from "react";
import { NavBar } from "../../components/NavBar";
import { ApploachRiesgosBody } from "../../components/ApploachRiesgosBody";
import { Footer } from "../../components/Footer"

const ApproachRiesgos = () => {
  return (
    <div>
      <NavBar />
      <ApploachRiesgosBody />
      <h1>APROACH RIESGOS</h1>
      <Footer />
    </div>
  );
};

export { ApproachRiesgos };