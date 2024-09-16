import React from 'react';
import './ConsultationSelect.css';

const ConsultationSelect = ({ onSelectChange }) => {
  const handleSelectChange = (event) => {
    const value = event.target.value;
    console.log(value);
    onSelectChange(value);
  };

  return (
    <div className="ConsultationSelect container m-5">
      <div className="form-floating consultation-cont">
        <select 
          className="form-select" 
          id="selectConsultation" 
          aria-label="Floating label select example" 
          onChange={handleSelectChange}
          defaultValue="certificado"
        >
          <option value="certificado">CERTIFICADO</option>
          <option value="documentos">DOCUMENTOS</option>
          <option value="manuales">MANUALES</option>
        </select>
        <label htmlFor="selectConsultation">Realizar consulta</label>
      </div>
    </div>
  );
};

export { ConsultationSelect };

