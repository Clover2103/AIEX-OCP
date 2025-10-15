import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import isme from "../../assets/Logo ISME.png";
import onac from "../../assets/footer/Logo ONAC.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer row g-3">

      <div className="cont-area col-md-4">

        <div className="redes">
          <div>
            <a href="https://www.facebook.com/people/AIEX-SAS/100063556121959/" target="_blank" className="cl-p" >
              <FaFacebook className="red-icon"/>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/aiexsas/" target="_blank" className="cl-p">
              <FaInstagram className="red-icon"/>
            </a>
          </div>
          <div>
            <a href="https://api.whatsapp.com/send?phone=573165294689" target="_blank" className="cl-p">
              <FaWhatsapp className="red-icon"/>
            </a>
          </div>
        </div>

        <div className="cont-acred">
          <p>Auditado y verificado por: </p>
          <div className="cont-logo-footer">
            <img src={isme} alt="ISME" />
          </div>
        </div>

        <div className="orientation-contact">
          <p><FaLocationDot className="icon-info-form"/> Calle 75a #24-65, Bogotá DC</p>
          <p><FaPhoneAlt className="icon-info-form"/> +57 316 5294689</p>
          <p><IoIosMail className="icon-info-form"/>certificacionpersonas@aiex.com.co</p>
        </div>
      </div>

      <div className="cont-area col-md-4">
        
        <div>
          <div>
            <p>NUESTRA UBICACIÓN</p>
            <div className="cont-map">
              <iframe 
                width="250" 
                height="180" 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15906.371572283915!2d-74.065742!3d4.666443!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a57fd8dd739%3A0xca03181d387d1ebe!2sCl.%2075a%20%2324-65%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1ses-419!2sus!4v1718907597716!5m2!1ses-419!2sus" 
                title="Mapa de ubicación"
              >
              </iframe>
            </div>
          </div>
        </div>
        <div>
          <p>© 2024 AIEX. Todos los derechos reservados.</p>
        </div>
      </div>

      <div className="cont-area col-md-4">
        <div className="cont-links">
          <p><Link to="/policies">Politicas de la organización</Link></p>
          <p><Link to="/home#homeAboutUs">¿Quienes somos?</Link></p>
          <p><Link to="/scopes#scopesBody">Nuestros alcances</Link></p>
          <p><Link to="/contact">Contactenos</Link></p>
          <p><Link to="/scopes-r-and-d">Derechos y deberes</Link></p>
          <p><Link to="/scopes-rules">Reglas del servicio de certificación</Link></p>
          <p><Link to="/contact">Quejas / Apelaciónes</Link></p>
        </div>
      </div>
      
    </div>
  );
};

export { Footer };