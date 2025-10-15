import React, { useState } from "react";
import vision from "../../assets/inicio/homeMandV/vision.png";
import mision from "../../assets/inicio/homeMandV/mision.png"
import './HomeMAndV.css';

const HomeMAndV = () => {

  const [isCovered, setIsCovered] = useState(true);

  const toggleCover = () => {
    setIsCovered(!isCovered);
  };

  return (
    <div className="bodyMAndV">
      <div className="containerMAndV container mt-5 mb-5">
        <div className="contentMAndV row g-2 w-100">
          {/* Sección de Misión */}
          <div className="mision col-md">
            <div className={`mision col-md ${isCovered ? 'covered' : ''}`}>
              <h3 className="mb-3">MISIÓN</h3>
              <p>Aplicar procesos de certificacón e independientes cumpliendo con las actividades descritas en el enfoque funcional, a través del desarrollo de esquemas de certificación aliados con requisitos normativos, implementación de métodos estandarizados aplicados por personal competente utilizado tecnologia de punta. Aplicamos en nuestras actividades los principlios fundamentales de imparcialidad, igualdad y confidencialidad, que nos permiten demostrar objetivamente el cumplimiento de los requisitos de competencias de las personas certificadas para desempeñarse de forma eficaz en las diferentes actividades productivas.</p>
            </div>
            {/* Botón para alternar la cubierta */}
            <div className={`coverToggle${isCovered ? '' : 'covered'}`} >
              <img src={mision} alt="mision" />
              <button onClick={toggleCover}>
                {isCovered ? 'Mostrar Misión' : 'Mostrar Visión'}
              </button>
            </div>
          </div>

          {/* Sección de Visión */}
          <div className="vision col-md">
            <div className={`${isCovered ? '' : 'covered'}`}>
              <h3 className="mb-3">VISIÓN</h3>
              <p>Para el año 2028, CERTIFICACIÓN DE PERSONAS AIEX S.A.S. será reconocido en el mercado como un Organismo de Certificación de Personas confiable, que contribuye a la generación de cadenas de valor en diversos sectores de la economía a través de la aplicación de procesos de certificación válidos, satisfaciendo las necesidades cambiantes de los grupos de interés y aplicando en cada etapa del enfoque funcional los lineamientos normativos de referencia en diversos alcances de conformidad y competencia.</p>
            </div>
            {/* Botón para alternar la cubierta */}
            <div className={`coverToggle${isCovered ? 'covered' : ''}`} >
              <img src={vision} alt="vision" />
              <button onClick={toggleCover}>
                {isCovered ? 'Mostrar Misión' : 'Mostrar Visión'}
              </button>
            </div>
          </div>

          
        </div>

        <div className="rectanguloMAndV"></div>
      </div>
    </div>
  );
};

export { HomeMAndV };