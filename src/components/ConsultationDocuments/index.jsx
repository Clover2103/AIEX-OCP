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
      
    </div>
  );
};

export { ConsultationDocuments };
