import React from "react";
import "./Policies.css";

const Policies = () => {
  return (
    <div className="policies-container w-100 row g-2">

      <div className="col-md-5 policie-info-left">
        <h2>NUESTRA EMPRESA</h2>
        <p>Queremos ser sus aliados en la certificación de personas</p>
      </div>

      <div className="col-md-4 policie-info-rigth">
        <h2>CONOCE NUESTRAS POLITICAS</h2>
        <button>HAZ CLICK AQUÍ</button>
      </div>
    
    </div>
  );
};

export { Policies };