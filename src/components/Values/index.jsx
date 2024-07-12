import React from "react";
import "./Values.css";
import igualdad from "../../assets/inicio/values/valor-igualdad.png";
import confidencialidad from "../../assets/inicio/values/valores-confidencialidad.png";
import imparcialidad from "../../assets/inicio/values/valor-imparcialidad.png";

const Values = () => {
  return (
    <div className="values mt-4">
      <div className="values__container">

        <div className="values__title mb-4">
          <h2 className="text-center">NUESTROS VALORES</h2>
        </div>

        <div className="values__content row g-3">
            
          <div className="valie__container col-md">
            <figure>
                <img src={igualdad} alt="igualdad"/>
                <div className="valie_info">
                    <p>
                      Tratamiento equitativo hacia las personas que solicitan
                      y acceden al proceso de acuerdo a los lineamientos de 
                      esquema de certificación.
                    </p>
                </div>
            </figure>                        
          </div>

          <div className="valie__container col-md">
            <figure>
                <img src={confidencialidad} alt="confidencialidad"/>
                <div className="valie_info">
                    <p>
                      Garantía de que la información personal será protegida para
                      que no sea divulgada sin consentimiento de la persona que 
                      accede a los servicios.
                    </p>
                </div>
            </figure>                        
          </div>

          <div className="valie__container col-md">
            <figure>
                <img src={imparcialidad} alt="imparcialidad"/>
                <div className="valie_info">
                    <p>
                      Presencia de objetividad en los procesos de certificación.
                    </p>
                </div>
            </figure>
          </div>

        </div>
      </div>
    </div>
  );
};

export { Values };