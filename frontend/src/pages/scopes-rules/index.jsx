import React from 'react';
import { ScopesSliderStatic } from '../../components/ScopesSliderStatic';
import { BodyRules } from "../../components/BodyRules";
import image from "../../assets/alcances/slider scopes/Reglas.png";


const ScopesRules = () => {
  return (
    <div className="scopes-rules-body w-100 mb-5">
      <ScopesSliderStatic
        imageSrc={image}
        title="REGLAS DEL SERVICIO DE CERTIFICACIÓN"
      />
      <div className='container mt-5'>
        <BodyRules/>
      </div>
      
    </div>
  );
};

export { ScopesRules };