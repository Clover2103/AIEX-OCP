import React, { useState } from 'react';
import { FaGear } from "react-icons/fa6";
import './ScopesFASpecificBody.css';

const ScopesFASpecificBody = ({ showModal }) => {
  const [modalContent, setModalContent] = useState(null);

  const handleButtonClick = (title, description) => {
    const content = 
      <div className="about-container-modal">
        <h2>{title}</h2>
        <div className="">
          {description.map((desc, index) => <p key={index}>{desc}</p>)}
        </div>
        <FaGear className='gear-modal' />
      </div>;

    showModal(content);  // Usar la función pasada como prop
  };

  return (
    <div className="container container-FASpecificBody mb-5">
      {modalContent && (
        <div className="modal">
          <div className="modal-content">
            {modalContent}
            <button onClick={() => setModalContent(null)}>Close</button>
          </div>
        </div>
      )}

      <div className="gear-container">
        <div className="icon-container">
          <FaGear className="gear" />
          <div className="text-inside">
            <h2 className="title mb-3">1. SELECCIÓN</h2>
            <button 
              className='btn btn-dark' 
              onClick={() => handleButtonClick("SELECCIÓN", [
                "Información previa relativa al esquema: Alcance, tarifas, metodología, duración, etc.",
                "Diligenciamiento del formato de solicitud.",
                "Revisión de la solicitud por parte del organismo: Cumplimiento de prerrequisitos y posibilidad para la prestación de los servicios.",
                "Pago de servicios.",
                "Programación",
                "Notificación a los partícipes del proceso de certificación."
              ])}
            >
              Saber más
            </button>
          </div>
        </div>
      </div>

      <div className="gear-container">
        <div className="icon-container">
          <FaGear className="gear" />
          <div className="text-inside">
            <h2 className="title mb-3">2. DETERMINACIÓN</h2>
            <button 
              className='btn btn-dark' 
              onClick={() => handleButtonClick("DETERMINACIÓN", [
                "Planificación y ejecución del Proceso de evaluación.",
                "Proceso de examen: Aplicación de la metodología diseñada para evaluar la competencia del candidato:",
                "Evaluación teórica (Conocimientos).",
                "Evaluación práctica (Desempeño).",
                "Resultados y observaciones.",
                "Concepto de conformidad de acuerdo con la recopilación de evidencias de conocimiento y desempeño.",
                "Informe de evaluación."
              ])}
            >
              Saber más
            </button>
          </div>
        </div>
      </div>

      <div className="gear-container">
        <div className="icon-container">
          <FaGear className="gear" />
          <div className="text-inside">
            <h2 className="title mb-3">3. REVISIÓN Y ATESTACIÓN</h2>
            <button 
              className='btn btn-dark' 
              onClick={() => handleButtonClick("REVISIÓN Y ATESTACIÓN", [
                "Revisión de evidencias recopiladas en las fases anteriores.",
                "Contraste del concepto de conformidad del examinador con las calificaciones y cualificaciones del proceso de evaluación.",
                "Verificación del cumplimiento de los requisitos de conformidad del esquema.",
                "Toma de decisión de certificación",
                "Impresión del certificado de conformidad.",
                "Notificación y cargue en página web."
              ])}
            >
              Saber más
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export { ScopesFASpecificBody };
