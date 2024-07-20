import React from 'react';
import vigilante from "../../assets/alcances/schemes scopes/esquema-vigilante.png";
import supervisor from "../../assets/alcances/schemes scopes/esquema-supervisor.png";
import escolta from "../../assets/alcances/schemes scopes/esquema-escolta.png";
import medios from "../../assets/alcances/schemes scopes/esquema-operador-medios.png";
import AOEA from "../../assets/alcances/schemes scopes/esquema-AOEA.png";
import GISC from "../../assets/alcances/schemes scopes/esquema-GISC.png";
import riesgos from "../../assets/alcances/schemes scopes/esquema-riesgos.png";
import './ScopesMain.css';

const schemesData = [
  { src: vigilante, alt: "vigilante", url: "#" },
  { src: supervisor, alt: "supervisor", url: "#" },
  { src: escolta, alt: "escolta", url: "#" },
  { src: medios, alt: "medios", url: "#" },
  { src: AOEA, alt: "AOEA", url: "#" },
  { src: GISC, alt: "GISC", url: "#" },
  { src: riesgos, alt: "riesgos", url: "#" },
];

const ScopesMain = () => {
  return (
    <div className='cont-scopes-main w-100'>
      <div className='scopes-main-title text-center mt-4 mb-3'>
        <h3>NUESTROS ESQUEMAS</h3>
      </div>
      <div className='container'>
        <div className="schemes row g-3 justify-content-center">
          {schemesData.map(({ src, alt, url }, index) => (
            <div key={index} className="scheme-item col-md-4">
              <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={src} alt={alt} className="scheme-image" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { ScopesMain };

