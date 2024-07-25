import React from 'react';
import './ConsultationSelect.css';

const ConsultationSelect = () => {
  return (
    <div className="ConsultationSelect container m-5">
      <div class="form-floating consultation-cont">
        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
          <option value="certificado" selected>CERTIFICADO</option>
          <option value="documentos">DOCUMENTOS</option>
        </select>
        <label for="floatingSelect">Realizar consulta</label>
      </div>
    </div>
  );
};

export { ConsultationSelect };