import React, { useState } from "react";
import $ from "jquery";
import Swal from "sweetalert2";

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

  const handleSubmit = (event) => {
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

    // Si todas las validaciones pasan, enviar la solicitud
    $.ajax({
      url: "http://localhost/aiexocp/aiex-ocp/src/backend/send_email/sendEmail.php",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify(formData),
      success: function (response) {
        Swal.close(); // Cerrar el mensaje de carga
        if (response.status === "success") {
          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Correo enviado exitosamente.',
          });
        } else {
          Swal.fire({
            icon: 'success',
            title: '¡Estupendo!',
            text: 'tu mensaje a sido enviado exitosamente.',
          });
        }
      },
      error: function () {
        Swal.close(); // Cerrar el mensaje de carga
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al enviar el correo.',
        });
      },
    });
  };

  return (
    <div className="container container-form-contact mt-5 mb-5">
      <div className="body-form-contact">
        <form onSubmit={handleSubmit}>

          <div className="form-floating mb-2">
            <select
              className="form-select"
              id="solicitud"
              name="solicitud"
              value={formData.solicitud}
              onChange={handleInputChange}
            >
              <option value="">--</option>
              <option value="contacto">Contacto</option>
              <option value="queja">Queja</option>
              <option value="peticion">Petición</option>
              {/* Agrega más opciones según sea necesario */}
            </select>
            <label htmlFor="solicitud">Tipo de Solicitud</label>
          </div>

          <div className="form-floating mb-2">
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

          <div className="form-floating mb-2">
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

          <div className="form-floating mb-2">
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

          <div className="form-floating mb-2 msg-contact">
            <textarea
              className="form-control "
              id="message"
              type="text"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <label htmlFor="message">Mensaje</label>
          </div>

          <button className="w-100 btn btn-lg btn-dark" type="submit">Enviar</button>

        </form>
      </div>
    </div>
  );
};

export { ContactForm };