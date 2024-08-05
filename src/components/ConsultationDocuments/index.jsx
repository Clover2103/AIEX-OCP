import React, { useState } from "react";
import DICPDF1 from "../../assets/consultas/documentos/Declaracion-de-Imparcialidad-y-Confidencialidad.pdf";
import DGPCPDF2 from "../../assets/consultas/documentos/Descripcion-general-del-proceso-de-certificacion.pdf";
import PCPDF3 from "../../assets/consultas/documentos/Procedimiento-Confidencialidad.pdf";
import PQAPDF4 from "../../assets/consultas/documentos/Procedimiento-Quejas-y-Apelaciones.pdf";
import PUCLMPDF5 from "../../assets/consultas/documentos/Protocolo-uso-de-certificados-logotipos-y-marcas.pdf";
import RSCPDF6 from "../../assets/consultas/documentos/Reglas-del-Servicio-de-Certificacion.pdf";
import SRRAPDF7 from "../../assets/consultas/documentos/Suspension-Retiro-y-Reduccion-del-alcance.pdf";
import "./ConsultationDocuments.css";

const documents = [
  { title: "Declaración de Imparcialidad y Confidencialidad", file: DICPDF1 },
  { title: "Descripción general del proceso de certificación", file: DGPCPDF2 },
  { title: "Procedimiento Confidencialidad", file: PCPDF3 },
  { title: "Procedimiento Quejas y Apelaciones", file: PQAPDF4 },
  { title: "Protocolo uso de certificados, logotipos y marcas", file: PUCLMPDF5 },
  { title: "Reglas del Servicio de Certificación", file: RSCPDF6 },
  { title: "Suspensión, Retiro y Reducción del alcance", file: SRRAPDF7 }
];

const ConsultationDocuments = () => {
  const [activeKey, setActiveKey] = useState(null);

  const toggleActiveKey = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <div className="ConsultationDocuments container mb-5">
      <h1>Documentos de Consulta</h1>
      <div className="accordion" id="accordionExample">
        {documents.map((doc, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${activeKey === index ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggleActiveKey(index)}
                aria-expanded={activeKey === index}
                aria-controls={`collapse${index}`}
              >
                {doc.title}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${activeKey === index ? "show" : ""}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {activeKey === index && (
                  <iframe
                    src={`${doc.file}#toolbar=0&navpanes=0&scrollbar=0`}
                    style={{ width: "100%", height: "500px", border: "none" }}
                    title={doc.title}
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { ConsultationDocuments };
