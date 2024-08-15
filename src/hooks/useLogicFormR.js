import { useState } from 'react';


const useLogicFormR = () => {
  const [formData, setFormData] = useState({
    apellidos: '',
    nombres: '',
    tipodocumento: '',
    documento: '',
    expedicion: '',
    nacionalidad: '',
    direccion: '',
    ciudad: '',
    edad: '',
    genero: '',
    fijo: '',
    celular: '',
    correo: '',
    correo1: '',
    estudios: '',
    empresa: '',
    cargo: '',
    experiencia: '',
    certificacion: '',
    especial: '',
    codigo: ''
  });

  const [error, setError] = useState('');
  const [isAceptoChecked, setIsAceptoChecked] = useState(false);
  const [codigopin, setCodigoPin] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = () => {
    setIsAceptoChecked(!isAceptoChecked);
    if (!isAceptoChecked && !codigopin) {
      const newPin = generarAleatorios(5);
      setCodigoPin(newPin);
      enviarCorreo(formData, newPin);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMessage = validarFormulario();
    if (errorMessage) {
      setError(errorMessage);
    } else {
      await enviarFormulario();
    }
  };

  const validarFormulario = () => {
    let msj = '';
    if (formData.apellidos.length === 0) {
      msj += "Ingresar Apellidos <br>";
    } else if (!validarletras(formData.apellidos)) {
      msj += "Apellidos solo debe contener Letras <br>";
    }

    if (formData.nombres.length === 0) {
      msj += "Ingresar Nombres <br>";
    } else if (!validarletras(formData.nombres)) {
      msj += "Nombres solo debe contener Letras <br>";
    }

    if (formData.documento.length === 0) {
      msj += "Ingresar Documento de Identidad <br>";
    } else if (!validarnumeros(formData.documento)) {
      msj += "Documento de Identidad debe ser numérico <br>";
    } else if (formData.documento < 100000) {
      msj += "Documento de Identidad Invalido <br>";
    }

    if (formData.expedicion.length === 0) {
      msj += "Ingresar Fecha de Expedicion <br>";
    }

    if (formData.direccion.length === 0) {
      msj += "Ingresar Direccion <br>";
    }

    if (formData.edad.length === 0) {
      msj += "Ingresar Edad <br>";
    } else if (!validarnumeros(formData.edad)) {
      msj += "Edad debe ser numérico <br>";
    } else if (formData.edad > 90) {
      msj += "Edad Invalida <br>";
    }

    if (formData.fijo.length === 0) {
      msj += "Ingresar Telefono Fijo <br>";
    } else if (!validarnumeros(formData.fijo)) {
      msj += "Telefono Fijo debe ser numérico <br>";
    }

    if (formData.celular.length === 0) {
      msj += "Ingresar Celular <br>";
    } else if (!validarnumeros(formData.celular)) {
      msj += "Celular debe ser numérico <br>";
    }

    if (formData.empresa.length === 0) {
      msj += "Ingresar Empresa <br>";
    }

    if (formData.cargo.length === 0) {
      msj += "Ingresar Cargo <br>";
    }

    let existecorreo = true;

    if (formData.correo.length === 0) {
      msj += "Ingresar Correo Electronico <br>";
      existecorreo = false;
    } else {
      var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      if (!expr.test(formData.correo)) {
        msj += "Ingresar Correo Electronico VALIDO <br>";
      }
    }

    if (formData.correo1.length === 0) {
      msj += "Ingresar Correo Electronico de confirmacion <br>";
      existecorreo = false;
    } else {
      var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      if (!expr.test(formData.correo1)) {
        msj += "Ingresar Correo Electronico de confirmacion VALIDO <br>";
      }
    }

    if (formData.correo !== formData.correo1 && existecorreo) {
      msj += "Los correos suministrados son diferentes <br>";
    }
    return msj;
  };

  const generarAleatorios = (cantidad) => {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
    return caracteres.sort(() => Math.random() - 0.5).slice(0, cantidad).join("");
  };

  const enviarCorreo = async (formData, pin) => {
    try {
      const response = await fetch('enviarcorreo.php?tipo=C', {
        method: 'POST',
        body: JSON.stringify({
          nombres: `${formData.nombres} ${formData.apellidos}`,
          email: formData.correo,
          pin,
          certificacion: formData.certificacion,
          celular: formData.celular
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
      }
    } catch (error) {
      console.error('Error al enviar el correo', error);
      setError('Hubo un error al enviar el correo');
    }
  };

  const enviarFormulario = async () => {
    try {
      const response = await fetch('registrar.php', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return await response.json();
    } catch (error) {
      console.error('Error al enviar el formulario', error);
      throw error;
    }
  };

  const validarletras = (valor) => /^[A-Z ÑÁÉÍÓÚ]+$/i.test(valor);
  const validarnumeros = (valor) => /^[0-9]+$/.test(valor);

  return {
    formData,
    error,
    isAceptoChecked,
    handleInputChange,
    handleCheckboxChange,
    handleSubmit,
  };
};

export { useLogicFormR } ;
