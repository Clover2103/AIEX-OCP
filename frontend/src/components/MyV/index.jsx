import React from "react";
import "./MyV.css";

const MyV = () => {
  return (
    <div className="row g-2 body-myv">
      <div className="col-md text-center container-myv container-mision">
        <div className="cont-myv cont-mision">
          <h2>MISIÓN</h2>
          <p>
            Aplicar procesos de certificacón e independientes cumpliendo con las actividades descritas 
            en el enfoque funcional, a través del desarrollo de esquemas de certificación aliados con 
            requisitos normativos, implementación de métodos estandarizados aplicados por personal 
            competente utilizado tecnologia de punta. Aplicamos en nuestras actividades los 
            principlios fundamentales de imparcialidad, igualdad y confidencialidad, que nos permiten demostrar 
            objetivamente el cumplimiento de los requisitos de competencias de las personas certificadas para 
            desempeñarse de forma eficaz en las diferentes actividades productivas.
          </p>
        </div>
      </div>
      <div className="col-md text-center container-myv container-vision">
        <div className="cont-myv cont-vision">
          <h2>VISIÓN</h2>
          <p>
            Para el año 2028, CERTIFICACIÓN DE PERSONAS AIEX S.A.S. será reconocido en el mercado como 
            un Organismo de Certificación de Personas confiable, que contribuye a la generación de cadenas 
            de valor en diversos sectores de la economía a través de la aplicación de procesos de 
            certificación válidos, satisfaciendo las necesidades cambiantes de los grupos de interés y 
            aplicando en cada etapa del enfoque funcional los lineamientos normativos de referencia en diversos 
            alcances de conformidad y competencia.
          </p>
        </div>
      </div>
    </div>)
  ;
};

export { MyV };