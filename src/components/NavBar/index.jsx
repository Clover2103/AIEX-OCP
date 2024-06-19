import React from "react";
import onac from "../../assets/Logo ONAC.png";
import aiex from "../../assets/Logo AIEX.png";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">

      <div className="navBarIzq">
        <div className="navBar__logo">
          <img src={onac} alt="ONAC" />
        </div>
        <div className="navBar__logo">
          <img src={aiex} alt="AIEX" />
        </div>
      </div>
      
      <div className="navBar__links">
        <Link to="/home">INICIO</Link>
        <Link to="/home">ALCANCES</Link>
        <Link to="/home">CONSULTAS</Link>
        <Link to="/home">CONTACTO</Link>
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