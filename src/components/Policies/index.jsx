import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
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
        <Link to="/policies"><button>HAZ CLICK AQUÍ</button></Link>
      </div>
    
    </div>
  );
};

export { Policies };