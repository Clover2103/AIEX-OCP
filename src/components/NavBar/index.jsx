import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import onac from "../../assets/Logo ONAC.png";
import aiex from "../../assets/Logo AIEX.png";
import "./NavBar.css";

const NavBar = () => {
  return (
      <div className="navBar">
        <div className="navBarIzq">
          <div className="navBar__logo">
            <a href="https://onac.org.co/directorio3/index.php/acreditaciones/15-ocp-005" target="_blank" rel="noopener noreferrer">
              <img src={onac} alt="ONAC" />
            </a>
          </div>
          <div className="navBar__logo">
            <img src={aiex} alt="AIEX" />
          </div>
        </div>
        
        <div className="navBar__links">
          <Link to="/home">INICIO</Link>
          <Link to="/scopes">ALCANCES</Link>
          <Link to="/consultation">CONSULTAS</Link>
          <Link to="/contact">CONTACTO</Link>
        </div>

        <div className="btnForm">
          <button>
            INSCRIBIRME
          </button>
        </div>
      </div>
  );
};

export { NavBar };