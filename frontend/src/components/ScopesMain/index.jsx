import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import vigilante from "../../assets/alcances/schemes scopes/esquema-vigilante.png";
import supervisor from "../../assets/alcances/schemes scopes/esquema-supervisor.png";
import escolta from "../../assets/alcances/schemes scopes/esquema-escolta.png";
import medios from "../../assets/alcances/schemes scopes/esquema-operador-medios.png";
import AOEA from "../../assets/alcances/schemes scopes/esquema-AOEA.png";
import GISC from "../../assets/alcances/schemes scopes/esquema-GISC.png";
import riesgos from "../../assets/alcances/schemes scopes/esquema-riesgos.png";
import certificado from "../../assets/alcances/certificate.jpg";
import './ScopesMain.css';

const schemesData = [
  { src: vigilante, alt: "vigilante", url: "/approach-vigilancia" },
  { src: supervisor, alt: "supervisor", url: "/approach-supervisor" },
  { src: escolta, alt: "escolta", url: "/approach-escolta" },
  { src: medios, alt: "medios", url: "/approach-OMT" },
  { src: AOEA, alt: "AOEA", url: "/approach-AOEA" },
  { src: GISC, alt: "GISC", url: "/approach-GISC" },
  { src: riesgos, alt: "riesgos", url: "/approach-riesgos" },
];

const ScopesMain = () => {
  return (
    <div className='cont-scopes-main w-100' id='scopesBody'>
      <div className='scopes-main-title text-center mt-4 mb-3'>
        <h3>NUESTROS ESQUEMAS</h3>
      </div>
      <div className='container'>
        <div className="schemes row g-3 justify-content-center">
          {schemesData.map(({ src, alt, url }, index) => (
            <div key={index} className="scheme-item col-md-4">
              <Link to={url} >
                <img src={src} alt={alt} className="scheme-image" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className='text-center'>
        <h2 className='mt-5'>Modelo de nuestro certificado</h2>
        <img src={certificado} alt="Modelo certificado aiex sas" className='img-certificate'/>
      </div>
    </div>
  );
};

export { ScopesMain };

