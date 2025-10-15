import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { GiArchiveRegister } from "react-icons/gi";
import { RegistrationForm } from "../RegistrationForm";
import { FaBars } from "react-icons/fa";
import onac from "../../assets/Logo ONAC.png";
import aiex from "../../assets/Logo AIEX.png";
import "./NavBarResponsive.css";

const NavBarResponsive = ({ showModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = () => {
    const content = (
      <div className="container-iframe-navbar w-100">
        <RegistrationForm />
      </div>
    );
    showModal(content);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navBarResponsive">
      <div className="navBarResponsive__header">
        <div className="navBarResponsive__logo">
          <div className="navBarResponsive__logo aiex-logo-navbar">
            <Link to="/">
              <img src={aiex} alt="AIEX" />
            </Link>
          </div>
          <div className="navBarResponsive__logo onac-logo-navbar">
            <a href="https://onac.org.co" target="_blank" rel="noopener noreferrer">
              <img src={onac} alt="ONAC" />
            </a>
          </div>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>

      {isMenuOpen && (
        <div className="navBarResponsive__links">
          <Link to="/" onClick={toggleMenu}>INICIO</Link>
          <Link to="/scopes" onClick={toggleMenu}>ALCANCES</Link>
          <Link to="/consultation" onClick={toggleMenu}>CONSULTAS</Link>
          <Link to="/contact" onClick={toggleMenu}>CONTACTO</Link>
          <div className="btnFormRes">
            <button onClick={() => { handleButtonClick(); toggleMenu(); }}>
              <GiArchiveRegister /> REGISTRARME
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export { NavBarResponsive };
