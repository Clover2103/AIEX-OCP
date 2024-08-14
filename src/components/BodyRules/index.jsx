import React from "react";
import "./BodyRules.css";
import RSCPDF6 from "../../assets/consultas/documentos/Reglas-del-Servicio-de-Certificacion.pdf";

const BodyRules = () => {
  return (
    <div className="body-rules">
      <iframe
        src={`${RSCPDF6}#toolbar=0&navpanes=0&scrollbar=0`}
        style={{ width: "100%", height: "500px", border: "none" }}
      ></iframe>
    </div>
  );
};

export { BodyRules };