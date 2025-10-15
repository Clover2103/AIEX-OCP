import React, { useState } from "react";
import "./ContactForm.css"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Swal from "sweetalert2";

const sendContact = process.env.REACT_APP_SEND_EMAIL_URL;

const ContactForm = () => {

  const [formData, setFormData] = useState({
    solicitud: "",
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Validaciones previas usando SweetAlert
    if (!formData.name.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingresa tu nombre.',
      });
      return;
    }
    if (!formData.email.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingresa tu correo electrónico.',
      });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingresa un correo electrónico válido.',
      });
      return;
    }
    if (!formData.subject.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingresa un asunto.',
      });
      return;
    }
    if (!formData.message.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingresa un mensaje.',
      });
      return;
    }
  
    // Mostrar mensaje de carga
  Swal.fire({
    title: 'Enviando...',
    text: 'Por favor, espera mientras enviamos tu mensaje.',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    const response = await fetch(`${sendContact}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // Verifica si la respuesta del servidor es válida
    if (!response.ok) {
      throw new Error('Error en la respuesta del servidor');
    }

    // Intenta parsear la respuesta a JSON
    const data = await response.json();

    // Cierra el mensaje de carga
    Swal.close();

    // Verifica si el servidor retornó "success"
    if (data.status === "success") {
      Swal.fire({
        icon: 'success',
        title: '¡Estupendo!',
        text: 'Tu mensaje ha sido enviado exitosamente.',
      });
    } else {
      // Si no es "success", asume que hay un error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: data.message || 'Error desconocido al enviar el correo.',
      });
    }
  } catch (error) {
    // Maneja cualquier error durante la solicitud
    Swal.close();
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: error.message || 'Error al enviar el correo.',
    });
  }
  };
  

  return (
    <div className="container container-form-contact row g-2 mt-5 mb-5">
      <div className="col-md info-contact-form">
        <div>
          <h3>Contáctanos</h3>
        </div>
        <div>
          <p><FaLocationDot className="icon-info-form"/> Calle 75a #24-65, Bogotá DC</p>
          <p><FaPhoneAlt className="icon-info-form"/> +57 316 5294689</p>
          <p><IoIosMail className="icon-info-form"/>certificacionpersonas@aiex.com.co</p>
        </div>
      </div>
      <div className="body-form-contact col-md">
        <form onSubmit={handleSubmit} className="w-100 form-container">

          <div className="form-floating mb-2 input-cont-form">
            <select
              className="form-select"
              id="solicitud"
              name="solicitud"
              value={formData.solicitud}
              onChange={handleInputChange}
            >
              <option value="">--</option>
              <option value="SOLICITUD">SOLICITUD</option>
              <option value="QUEJA">QUEJA</option>
              <option value="APELACION">APELACIÓN</option>
              {/* Agrega más opciones según sea necesario */}
            </select>
            <label htmlFor="solicitud">Tipo de Solicitud</label>
          </div>

          <div className="form-floating mb-2 input-cont-form">
            <input
              className="form-control"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <label htmlFor="name">Nombre</label>
          </div>

          <div className="form-floating mb-2 input-cont-form">
            <input
              className="form-control"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="form-floating mb-2 input-cont-form">
            <input
              className="form-control"
              id="subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
            />
            <label htmlFor="subject">Asunto</label>
          </div>

          <div className="form-floating mb-2 input-cont-form">
            <textarea
              className="form-control "
              id="message"
              type="text"
              style={{height: "150px"}}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <label htmlFor="message">Mensaje</label>
          </div>

          <button className="btn btn-lg btn-dark input-cont-form" type="submit">Enviar</button>

        </form>
      </div>
    </div>
  );
};

export { ContactForm };