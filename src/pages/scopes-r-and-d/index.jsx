import React from 'react';
import { ScopesSliderStatic } from '../../components/ScopesSliderStatic';
import image from '../../assets/alcances/slider scopes/scopes slider static derechos y deberes.png'

const ScopesRAndD = () => {
  return (
    <div className="scopes-r-and-d-body w-100">
      <ScopesSliderStatic
        imageSrc={image}
        title="DERECHOS Y DEBERES"
        description="A continuación mostraremos los derechos y deberes de los aspirantes a certificación"
      />
    </div>
  );
};

export { ScopesRAndD };