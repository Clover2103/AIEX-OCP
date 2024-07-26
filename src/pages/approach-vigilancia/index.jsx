import React from "react";
import { NavBar } from "../../components/NavBar";
import { ApproachVigilanciaBody } from "../../components/ApproachVigilanciaBody";
import { Footer } from "../../components/Footer";

const ApproachVigilancia = () => {
  return (
    <div>
      <NavBar />
      <ApproachVigilanciaBody />
      <h1>APROACH VIGILANCIA</h1>
      <Footer />
    </div>
  );
};

export { ApproachVigilancia };