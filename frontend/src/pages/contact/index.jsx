import React from "react";
import { ContactForm } from "../../components/ContactForm";
import { ScopesSliderStatic } from '../../components/ScopesSliderStatic';
import "./contact.css";
import image from "../../assets/contacto/contacto.png"

const Contact = () => {
  return (
    <div className="body-cont-form">
      <ScopesSliderStatic
        imageSrc={image}
        title=""
      />
      <div className="container container-cont-form">
        <ContactForm />
      </div>
    </div>
  );
};

export { Contact };