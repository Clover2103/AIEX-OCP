import React, { useState } from "react";
import { ConsultationSelect } from "../../components/ConsultationSelect";
import { ConsultationCertificate } from "../../components/ConsultationCertificate";
import { ConsultationDocuments } from "../../components/ConsultationDocuments";
import { ConsultationManuals } from "../../components/ConsultationManuals";
import './consultation.css';

const Consultation = () => {
  const [selectedOption, setSelectedOption] = useState('certificado');

  const handleSelectChange = (value) => {
    console.log(value);
    setSelectedOption(value);
  };

  return ( 
    <div>
      <ConsultationSelect onSelectChange={handleSelectChange} />
      
      <div className={`certificado-content ${selectedOption === 'certificado' ? 'visible' : 'hidden'}`}>
        <ConsultationCertificate />
      </div>
      <div className={`documentos-content ${selectedOption === 'documentos' ? 'visible' : 'hidden'}`}>
        <ConsultationDocuments />
      </div>
      <div className={`manuales-content ${selectedOption === 'manuales' ? 'visible' : 'hidden'}`}>
        <ConsultationManuals />
      </div>
    </div>
  );
};

export { Consultation };

