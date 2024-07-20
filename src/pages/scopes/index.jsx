import React from "react";
import { NavBar } from "../../components/NavBar";
import { ScopesSlider } from "../../components/ScopesSlider";
import { Footer } from "../../components/Footer";


const Scopes = () => {  
  return ( 
    <div>
      <NavBar />
      <ScopesSlider />
      <h1>Scopes</h1>
      <Footer />
    </div>
  );
};

export { Scopes };