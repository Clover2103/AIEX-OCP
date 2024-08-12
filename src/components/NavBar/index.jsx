import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { GiArchiveRegister } from "react-icons/gi";
import { RegistrationForm } from "../RegistrationForm";
import onac from "../../assets/Logo ONAC.png";
import aiex from "../../assets/Logo AIEX.png";
import "./NavBar.css";

const NavBar = ({ showModal }) => {

  const handleButtonClick = () => {
    const content = 
    <div className="container-iframe-navbar w-100">
      <RegistrationForm />
    </div>;
    showModal(content);
  };

  return (
      <div className="navBar">
        <div className="navBarIzq gap-2">
          <div className="navBar__logo aiex-logo-navbar">
            <Link to="/home" style={{ textDecoration: 'none' }}>
              <img src={aiex} alt="AIEX" />
            </Link>
          </div>
          <div className="navBar__logo onac-logo-navbar">
            <a href="https://onac.org.co/directorio3/index.php/acreditaciones/15-ocp-005" target="_blank" rel="noopener noreferrer">
              <img src={onac} alt="ONAC" />
            </a>
          </div>
        </div>
        
        <div className="navBar__links gap-3">
          <Link to="/home">INICIO</Link>
          <Link to="/scopes">ALCANCES</Link>
          <Link to="/consultation">CONSULTAS</Link>
          <Link to="/contact">CONTACTO</Link>
        </div>

        <div className="btnForm">
          <button onClick={ handleButtonClick }>
            <GiArchiveRegister /> REGISTRARME
          </button>
        </div>
      </div>
  );
};

export { NavBar };