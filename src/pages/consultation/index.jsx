import React, { useState } from "react";
import { NavBar } from "../../components/NavBar";
import { ConsultationSelect } from "../../components/ConsultationSelect";
import { ConsultationCertificate } from "../../components/ConsultationCertificate";
import { ConsultationDocuments } from "../../components/ConsultationDocuments";
import { ConsultationManuals } from "../../components/ConsultationManuals";
import { Footer } from "../../components/Footer";
import './consultation.css';

const Consultation = () => {
  const [selectedOption, setSelectedOption] = useState('certificado');

  const handleSelectChange = (value) => {
    console.log(value);
    setSelectedOption(value);
  };

  return ( 
    <div>
      <NavBar />
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

      <Footer />
    </div>
  );
};

export { Consultation };

