import React from "react";
import "./ConsultationCertificate.css";

const ConsultationCertificate = () => {
  return (
    <div className="container">
      <form id="formConsultationCertificate">
        <div className="row g-2">
          <div className="col-md-5">
            <div className="form-floating mb-3">
              <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
              <label htmlFor="floatingInput">Numero de documento</label>
            </div>
          </div>
          <div className="col-md-4">
            <button className="btn btn-dark">Consultar</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export { ConsultationCertificate };