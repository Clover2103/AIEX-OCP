import React from "react";
import { NavBar } from "../../components/NavBar";
import { ScopesSlider } from "../../components/ScopesSlider";
import { ScopesMain } from "../../components/ScopesMain";
import { ScopesProcesses } from "../../components/ScopesProcesses";
import { Footer } from "../../components/Footer";


const Scopes = () => {  
  return ( 
    <div>
      <NavBar />
      <ScopesSlider />
      <ScopesMain />
      <ScopesProcesses />
      <Footer />
    </div>
  );
};

export { Scopes };