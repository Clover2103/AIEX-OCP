import React from "react";
import { ScopesSlider } from "../../components/ScopesSlider";
import { ScopesMain } from "../../components/ScopesMain";
import { ScopesProcesses } from "../../components/ScopesProcesses";


const Scopes = () => {  
  return ( 
    <div>
      <ScopesSlider />
      <ScopesMain />
      <ScopesProcesses />
    </div>
  );
};

export { Scopes };