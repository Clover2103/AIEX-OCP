import React from "react";
import { NavBar } from "../../components/NavBar";
import { ApproachEscoltaBody } from "../../components/ApproachEscoltaBody";
import { Footer } from "../../components/Footer";

const ApproachEscolta = () => {
  return (
    <div>
      <NavBar />
      <ApproachEscoltaBody />
      <h1>APROACH ESCOLTA</h1>
      <Footer />
    </div>
  );
};

export { ApproachEscolta };