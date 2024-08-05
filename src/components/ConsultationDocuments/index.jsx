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
  { title: "Documento 1", file: DICPDF1 },
  { title: "Documento 2", file: DGPCPDF2 },
  { title: "Documento 3", file: PCPDF3 },
  { title: "Documento 4", file: PQAPDF4 },
  { title: "Documento 5", file: PUCLMPDF5 },
  { title: "Documento 6", file: RSCPDF6 },
  { title: "Documento 7", file: SRRAPDF7 }
];

const ConsultationDocuments = () => {
  const [activeKey, setActiveKey] = useState("0");

  return (
    <div className="ConsultationDocuments container">
      <h1>Consultation Documents</h1>
      

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Declaración de Imparcialidad y Confidencialidad
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              
            </div>
          </div>
        </div>
        

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Descripción general del proceso de certificación
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              
            </div>
          </div>
        </div>


        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Procedimiento Confidencialidad
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              
            </div>
          </div>
        </div>


        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Procedimiento Quejas y Apelaciones
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              
            </div>
          </div>
        </div>


        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Protocolo uso de certificados, logotipos y marcas
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              
            </div>
          </div>
        </div>


        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Reglas del Servicio de Certificación
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              
            </div>
          </div>
        </div>


        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Suspension, Retiro y Reduccion del alcance
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              
            </div>
          </div>
        </div>

      </div>




    </div>
  );
};

export { ConsultationDocuments };
