import React, { useState } from "react";
import $ from "jquery";
import "./ConsultationCertificate.css";

const ConsultationCertificate = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const CC = $("#floatingInput").val();
    
    if (CC) {
      $.ajax({
        url: "http://localhost/aiexocp/aiex-ocp/src/backend/consultas/consulta_certificado.php",
        method: "POST",
        data: { CC },
        success: function (response) {
          try {
            const parsedData = JSON.parse(response);
            setData(parsedData);
            setError("");
          } catch (e) {
            setError("Error al parsear la respuesta del servidor.");
          }
        },
        error: function () {
          setError("Error al realizar la consulta.");
        },
      });
    } else {
      setError("Por favor, ingrese un número de documento.");
    }
  };

  return (
    <div className="container certificate-body mb-5">
      <div className="certificate">
        <h3>Contenido del certificado</h3>
      </div>
      <form id="formConsultationCertificate" onSubmit={handleSubmit}>
        <div className="row g-2">
          <div className="col-md-5">
            <div className="form-floating mb-3">
              <input type="number" className="form-control" id="floatingInput" placeholder="Número de documento" />
              <label htmlFor="floatingInput">Número de documento</label>
            </div>
          </div>
          <div className="col-md-4">
            <button type="submit" className="btn btn-dark">Consultar</button>
          </div>
        </div>
      </form>
      <div>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
      {data && (
        <div>
          <h4>Resultados de Vigilante de Seguridad</h4>
          {data.vigilante && data.vigilante.length > 0 ? (
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>NRO</th>
                  <th>Fecha Emisión</th>
                  <th>Fecha Vencimiento</th>
                  <th>Alcance</th>
                  <th>Versión</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {data.vigilante.map((item, index) => (
                  <tr key={index}>
                    <td>{item.NRO}</td>
                    <td>{item.FechaEmi}</td>
                    <td>{item.FechaVen}</td>
                    <td>{item.Alc}</td>
                    <td>{item.version}</td>
                    <td>{item.Edo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No hay datos de Vigilante de Seguridad.</p>
          )}

          <h4>Resultados de Otros Alcances</h4>
          {data.otros && data.otros.length > 0 ? (
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>NRO</th>
                  <th>Fecha Emisión</th>
                  <th>Fecha Vencimiento</th>
                  <th>Alcance</th>
                  <th>Versión</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {data.otros.map((item, index) => (
                  <tr key={index}>
                    <td>{item.NRO}</td>
                    <td>{item.FechaEmi}</td>
                    <td>{item.FechaVen}</td>
                    <td>{item.Alc}</td>
                    <td>{item.version}</td>
                    <td>{item.Edo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No hay datos de otros alcances.</p>
          )}
        </div>
      )}
    </div>
  );
};

export { ConsultationCertificate };
