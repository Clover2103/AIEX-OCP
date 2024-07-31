import React from "react";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import isme from "../../assets/Logo ISME.png";
import onac from "../../assets/footer/Logo ONAC.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer row g-3">

      <div className="cont-area col-md-4">
        <div className="cont-acred">
          <p>Acreditado por: </p>
          <div className="cont-logo-footer">
            <img src={onac} alt="ONAC" />
          </div>
        </div>

        <div className="cont-acred">
          <p>Auditado y verificado por: </p>
          <div className="cont-logo-footer">
            <img src={isme} alt="ISME" />
          </div>
        </div>
      </div>

      <div className="cont-area col-md-4">
        <div className="redes">
          <div>
            <a href="" target="_blank">
              <FaTiktok className="red-icon"/>
            </a>
          </div>
          <div>
            <a href="" target="_blank">
              <FaFacebook className="red-icon"/>
            </a>
          </div>
          <div>
            <a href="" target="_blank">
              <FaInstagram className="red-icon"/>
            </a>
          </div>
        </div>
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
          <p>Politicas de la organización</p>
          <p>¿Quienes somos?</p>
          <p>Nuestros alcances</p>
          <p>Contactanos</p>
          <p>Derechos y deberes</p>
          <p>Reglas del servicio de certificación</p>
          <p>Quejas / Apelaciónes</p>
        </div>
      </div>
      
    </div>
  );
};

export { Footer };