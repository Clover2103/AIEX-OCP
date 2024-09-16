import React from "react";
import { ContactForm } from "../../components/ContactForm";
import { ScopesSliderStatic } from '../../components/ScopesSliderStatic';
import image from "../../assets/contacto/contacto.png"

const Contact = () => {
  return (
    <div>
      <ScopesSliderStatic
        imageSrc={image}
        title="CONTACTO"
      />
      <div className="container">
        <ContactForm />
      </div>
    </div>
  );
};

export { Contact };