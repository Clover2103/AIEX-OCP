import React from "react";
import { NavBar } from "../../components/NavBar";
import { ConsultationSelect } from "../../components/ConsultationSelect";
import { Footer } from "../../components/Footer";

const Consultation = () => { 
  return ( 
    <div>
      <NavBar />
      <ConsultationSelect />
      <h1>Consultation</h1>
      <Footer />
    </div>
  );
};

export { Consultation };