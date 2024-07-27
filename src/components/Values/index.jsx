import React from "react";
import "./Values.css";
import igualdad from "../../assets/inicio/values/valor-igualdad.png";
import confidencialidad from "../../assets/inicio/values/valores-confidencialidad.png";
import imparcialidad from "../../assets/inicio/values/valor-imparcialidad.png";

const datos = [
  { title: "Igualdad", img: igualdad, description: "Tratamiento equitativo hacia las personas que solicitan y acceden al proceso de acuerdo a los lineamientos de esquema de certificación."},
  { title: "Confidencialidad", img: confidencialidad, description: "Garantía de que la información personal será protegida para que no sea divulgada sin consentimiento de la persona que accede a los servicios."},
  { title: "Imparcialidad", img: imparcialidad, description: "Presencia de objetividad en los procesos de certificación."},
];

const Values = () => {
  return (
    <div className="values mt-4">
      <div className="values__container">
        <div className="values__title mb-4">
          <h2 className="text-center">NUESTROS VALORES</h2>
        </div>
        <div className="values__content mt-4 row g-3">
          {datos.map((dato, index) => (
            <div className="valie__container col-md-4" key={index}>
              <figure>
                <img src={dato.img} alt={dato.title} />
                <div className="valie_info">
                  <p>{dato.description}</p>
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Values };
