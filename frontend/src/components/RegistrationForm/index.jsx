import React, { useState, useEffect } from 'react';
import Swal from "sweetalert2";
import './RegistrationForm.css';

const sendPin = process.env.REACT_APP_SEND_EMAIL_PIN_URL;

function RegistrationForm() {

  const [formData, setFormData] = useState({
    apellidos: '',
    nombres: '',
    correo: ''
  });
  const [isAceptoChecked, setIsAceptoChecked] = useState(false);
  const [isCheckboxDisabled, setIsCheckboxDisabled] = useState(true);
  const [codigopin, setCodigoPin] = useState('');
  const [inputPin, setInputPin] = useState(''); 
  const [isCodeValid, setIsCodeValid] = useState(false);
  
  useEffect(() => {
    const allFieldsFilled = Object.values(formData).every(field => field.length > 0);
    setIsCheckboxDisabled(!allFieldsFilled);
  }, [formData]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const generarAleatorios = (cantidad) => {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
    return caracteres.sort(() => Math.random() - 0.5).slice(0, cantidad).join("");
  };
  
  const handleCheckboxChange = () => {
    if (!isAceptoChecked && !codigopin) {
      const newPin = generarAleatorios(5);
      setCodigoPin(newPin);
      enviarCorreo(formData, newPin);
    }
    setIsAceptoChecked(!isAceptoChecked);
  };
  
  const enviarCorreo = async (formData, pin) => {
    Swal.fire({
      title: 'Enviando...',
      text: 'Por favor, espera mientras enviamos tu mensaje.',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const response = await fetch(`${sendPin}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          correo: formData.correo,
          nombre: `${formData.nombres} ${formData.apellidos}`,
          pin: pin,
        }),
      });

      const data = await response.json();
      Swal.close();

      if (data.status === "success") {
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Correo enviado exitosamente.',
        });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      Swal.close();
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al enviar el correo.',
      });
    }
  };

  const validarCodigoPin = () => {
    if (inputPin === codigopin) {
      Swal.fire({
        icon: 'success',
        title: 'Pin correcto',
        text: 'El pin ingresado es correcto.',
      });
      setIsCodeValid(true);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Pin incorrecto',
        text: 'El pin ingresado no es correcto. Por favor, verifica.',
      });
    }
  };

  return (
    <div className='container-form-registro'>

    {!isCodeValid && (

      <div className='registro-intro form-registro'>

      <h2 className='pt-4 '>SOLICITUD DE CERTIFICACIÓN</h2>
      <h5 className=' text-center mb-3 codigo-label-version'>Codigo: FO-25 - Vigencia: 2024-01-22 - Versión: 14</h5>

      <div className="cont-text-form-reg">
        <p>Apreciado solicitante le damos la bienvenida a nuestro Organismo CERTIFICACIÓN DE PERSONAS AIEX S.A.S., a continuación, usted se registrará para solicitar el acceso al proceso de certificación en el alcance deseado. Le pedimos muy atentamente diligenciar toda la información en total apego a la verdad y suministrar la documentación requerida para poder programar la fecha y hora de su proceso de evaluación, la cual se notificará mediante comunicación valida.</p>
        <p>Para esto, es de vital importancia que tanto el teléfono como el correo electrónico suministrados sean de uso personal y exclusivo ya que mediante estos canales realizaremos la validación de su identidad y la autenticación de firma digital por medio de Código OTP (Contraseña de un solo uso) para los formatos y contratos de todo el proceso de certificación.</p>
        <p>Por favor diligencie completamente la siguiente información:</p>
      </div>

      <form action="">
        <div className="form-floating mb-2">
          <input 
            type="text" 
            className="form-control" 
            id="apellidos" 
            name="apellidos" 
            placeholder="apellidos"
            value={formData.apellidos}
            onChange={handleInputChange}
          ></input>
          <label htmlFor="apellidos">Apellidos:</label>
        </div>

        <div className="form-floating mb-2">
          <input 
            type="text" 
            className= "form-control" 
            id="nombres" 
            name="nombres" 
            placeholder="nombres"
            value={formData.nombres}
            onChange={handleInputChange}
          ></input>
          <label htmlFor="nombres">Nombres:</label>
        </div>

        <div className="form-floating mb-2">
          <input 
            type="text" 
            className="form-control" 
            name="correo" 
            id="correo" 
            placeholder='correo'
            value={formData.correo}
            onChange={handleInputChange}
          ></input>
          <label htmlFor="correo">Correo Electronico:</label>
        </div>  
      </form>

      {/* Contrato */}
      <div>
        <h3 id="titulo1" className='mt-5 mb-4'>CONTRATO DE PRESTACIÓN DE SERVICIOS DE CERTIFICACIÓN DE PERSONAS</h3>
        <textarea readOnly id="contrato" name="contrato" className='contrato' value="DISPOSICIONES GENERALES Y CÓDIGO DE ÉTICA: 1. El Organismo de Certificación de Personas (En adelante OCP) ofrece la prestación de un servicio de evaluación para la obtención del Certificado de conformidad de los requisitos de competencia para el alcance solicitado de acuerdo con la demostración de conocimientos y desempeños de los lineamientos de la normativa de referencia, la cual fue dada a conocer con antelación; El Solicitante a través del diligenciamiento de la solicitud especifica de evaluación, cumpliendo con los requisitos establecidos en el esquema podrá acceder al Servicio, aceptando desde ya, que la información personal, laboral y de formación (Si es requerida) será veraz y transparente, así mismo autoriza al OCP a consultar esta información para determinar el cumplimiento de los Prerrequisitos. 2. La prestación del servicio posibilitará el registro digital del solicitante en la(s) base(s) de datos, la aplicación de evaluaciones para evaluar los requisitos de competencia y, de acuerdo con los resultados, obtener el certificado de conformidad según el alcance de la certificación. 3. El acceso a los servicios de evaluación podrá realizarse únicamente por medio del ingreso de la información del solicitante a esta base de datos con un número único de tipificación dentro del mismo, que servirá para identificarlo y cumplir con las condiciones de trazabilidad. 4. El Solicitante reconoce que el servicio se instrumenta como un método voluntario de acceso, por lo que el OCP asume toda la responsabilidad por las condiciones, características, modalidades de evaluación y demás detalles relativos al proceso de evaluación y certificación adquiridos o contratados por medio del presente, los que en todo caso serán de entero conocimiento del solicitante. 5. Se vigilará la actuación de la persona durante todo el ciclo del esquema para evitar prácticas inadecuadas que pueda afectar la imparcialidad, objetividad, equidad y confidencialidad del proceso, para cada caso el OCP ha establecido políticas internas claras de actuación para minimizar los riesgos que pudiesen presentarse al afectar estas directrices. DESCRIPCIÓN DEL SERVICIO: 1. A efectos de poder acceder al Servicio de evaluación y certificación, el solicitante suministrara la información personal y su experiencia laboral asociada al objetivo de la certificación. Esta información será de uso exclusivo de los responsables de cada etapa del esquema de certificación designados por el OCP y será tratada únicamente para los fines de evaluación y certificación. 2. Una vez realizado el registro de la información del solicitante, se practicarán los exámenes definidos en el esquema para evaluar la experticia y aplicación de criterios de conocimiento y desempeño para la obtención del certificado. Se informará oportunamente al candidato los resultados de cada prueba y las decisiones de certificación, si los resultados de los exámenes practicados no son satisfactorios según los requisitos del esquema y la normatividad se podrá aplicar un examen Supletorio en los tiempos que defina el OCP en sus Reglas del servicio de certificación. El OCP tiene la autonomía para tomar la decisión de certificación en función a las evidencias objetivas recopiladas durante todo el proceso y la demostración efectiva de las competencias requeridas para la obtención de la certificación. Al finalizar el proceso y si el candidato aprobó todas y cada una de las evaluaciones practicadas se entregará el certificado de conformidad el cual deberá cumplir con unas condiciones de uso específicas. 3. Está prohibido el uso de ayudas extras no permitidas que puedan afectar el normal desarrollo de las evaluaciones y no se permite falsificar información que pueda alterar los resultados obtenidos por el candidato. 4. El solicitante/candidato reconoce, en forma expresa, que los procedimientos de seguridad relacionados con el esquema de certificación, los que declara conocer y aceptar, están destinados exclusivamente a verificar las competencias, habilidades y aplicación eficaz de los requisitos de conformidad del esquema teniendo en cuenta las directrices de la normativa de referencia. 5. El candidato podrá, cuando lo considere oportuno, y sin necesidad de expresar causa alguna, acceder a la información de los resultados obtenidos en cada una de las evaluaciones, a cuyos efectos deberá seguir los procedimientos que el OCP, determine para efectuar tal consulta.  DISPOSICIONES VARIAS: 1. EL OCP queda expresamente autorizado para incluir en su website el estado de la certificación. Los resultados totales y parciales obtenidos durante la etapa de evaluación que serán de exclusivo cargo del OCP, así como los registros, informes de evaluación, expedientes, certificados otorgados y demás documentación resultante de la aplicación del esquema de certificación serán tratados en forma confidencial y no serán revelados a ningún agente externo sin la autorización del titular. 2. Se aceptará la firma digital en formatos, documentos, contratos y demás documentos del proceso de certificación siempre y cuando se cumplan las condiciones establecidas en la Ley 527 de 1999 y Decreto 1074 de 2015, para lo cual se ha establecido el mecanismo de Códigos OTP. 3. Las partes constituyen contactos especiales para todos los efectos a que pudiera dar lugar este documento, en los indicados como suyos en registros diligenciados, acordando otorgar validez a las comunicaciones que se efectúen vía correo electrónico, SMS al número de contacto o por correo certificado u otro medio auténtico al domicilio reportado. Estos contactos se tendrán por válidos mientras no fueren cambiados y notificados a la otra parte por medio fehaciente. 4. Cualquier controversia que se suscite concerniente al presente, se esclarecerá ante Tribunales de la República de Colombia, con renuncia expresa de otro fuero o jurisdicción que le pudiere corresponder. 5. EL OCP no será responsable en ningún caso por los daños y perjuicios derivados de hurtos, accidentes, errores y mal funcionamiento de equipos, interrupción del servicio para tareas de mantenimiento o por cualquier otra contingencia tales como huelgas, paros, falta de energía, fallos en las líneas de comunicación o mal funcionamiento de redes internas y externas, así como por cualquier otro hecho o circunstancia ajeno a la voluntad y diligencia normal del OCP, o que provenga de la fuerza mayor o el caso fortuito. 6. En la medida en que la prestación de los servicios contratados, o parte de ellos, se impida, obstaculice, demore o dificulte en razón de fuerza mayor o caso fortuito, EL OCP quedará excusado de dicha demora o atraso y no tendrá ninguna responsabilidad por la no prestación de los servicios o cualquier parte de los mismos. Entre las situaciones que se pueden catalogar como de fuerza mayor o caso fortuito definimos las siguientes: Catástrofes naturales (Inundaciones, sismos, derrumbes, deslizamientos de tierra, etc.), Huelgas, paros, manifestaciones, Interrupciones eléctricas no provocadas por el OCP, Fallas en redes internas y externas no provocadas por el OCP, Hurto en la propiedad del OCP de elementos que imposibiliten la prestación del servicio, Conflictos, guerras, confrontaciones, Hechos imprevistos e inevitables provocados por terceros, Incendios no provocados o inducidos por el OCP ni las personas que en el laboran, y otros casos no contemplados que pueden clasificarse como de fuerza mayor o caso fortuito. 7. El solicitante autoriza desde ya a EL OCP a suministrar cualquier información acerca de los resultados de evaluaciones y proceso de certificación, cuando una autoridad competente y legalmente autorizada lo solicite para efectos de inspección, vigilancia, control, acreditación u otro fin específico documentado y en el marco de la ley. 8. Una vez registrado el solicitante NO se hará ningún tipo de devolución de dinero, si la persona por algún motivo decide no continuar con su proceso de evaluación.  LEY DE PROTECCIÓN DE DATOS PERSONALES: Al firmar el presente documento el usuario faculta al OCP para que dé a sus datos recopilados durante todo el proceso de certificación el tratamiento señalado en la POLÍTICA DE CONFIDENCIALIDAD (TRATAMIENTO DE LA INFORMACIÓN), la cual incluye entre otras, conservar datos en la medida en que ésta sea necesaria para demostrar el estado de una persona evaluada y/o certificada para efectos de trazabilidad y asegurar el desarrollo efectivo de las actividades de certificación, o bien por exigencias de ley. El titular de los datos podrá, en cualquier momento solicitar que la información sea modificada, actualizada o retirada de las bases de datos. Lo anterior según las disposiciones de la Ley 1581 de 2012. DECLARACIONES DEL SOLICITANTE: 1. Declaro bajo la gravedad de juramento que he suministrado con total apego a la verdad la información personal y complementaria solicitada en el formulario de solicitud. 2. Acepto cumplir con los requisitos para ser evaluado(a) y proporcionar la información adicional necesaria que sea requerida para acceder al proceso de certificación. 3. Declaro conocer mis Derechos y deberes, Detalle del proceso de evaluación, Procedimiento de quejas y apelaciones, Procedimiento de renovación, ampliación, suspensión y cancelación de la certificación del alcance del esquema y demás información importante previo a la aplicación de los exámenes. 4. Me comprometo a no divulgar materiales de examen confidenciales ni tomar parte en prácticas fraudulentas de examen. 5. Declaro que he aceptado aplicar al esquema de certificación del OCP, sin que existiese alguna coacción, imposición, obligación o exigencia de ninguna persona o estamento para hacerlo. 6. Declaro conocer el esquema de certificación del OCP y acepto aplicar al proceso de evaluación y certificación voluntariamente. 7. Declaro conocer los requisitos para salvaguardar la imparcialidad y confidencialidad del proceso de evaluación y cumplirlos en su totalidad. 8. Acepto mediante este documento las condiciones y requisitos para acceder al proceso de certificación detallados en el enfoque funcional del esquema de certificación del OCP."></textarea>
      </div>

      {/* Solicitante */}
      <div className="form-group cont-text-el-solicitante col-md-12 pt-2">
        <h3 id="titulo2">El Solicitante</h3>
        <p>Si usted está de acuerdo con las disposiciones del organismo, le invitamos a que acepte los términos y condiciones del contrato de prestación de servicio de certificación de personas. De conformidad con lo dispuesto en la Ley 1581 de 2012, su Decreto Reglamentario 1377 de 2013.</p>
      </div>

        <div className="form-group form-check pb-4">
          <input 
            className="form-check-input w-2" 
            type="checkbox" 
            id="acepto" 
            name="acepto" 
            checked={isAceptoChecked} 
            onChange={handleCheckboxChange} 
            disabled={isCheckboxDisabled}
          ></input>
          <label class="form-check-label" for="acepto">Autorizo el envío del Código OTP para formalizar la vinculación contractual con el organismo de certificación</label>
        </div>

        {/* Nuevo input para validar el pin */}
        <div className={` mb-5 ${isAceptoChecked ? '' : 'd-none'}`} >
          <div className={`form-floating col-md-12 pt-2 mb-3`}  id="cont_codigo">
            <input 
              type="text" 
              id="codigo" 
              className='form-control' 
              name="codigo" 
              placeholder="codigo"
              onChange={(e) => setInputPin(e.target.value)}
              value={inputPin}
            ></input>
            <label htmlFor="codigo" className='codigo-label'>Ingrese el codigo y acepte terminos y condiciones</label>
          </div>
           
           
           {/* Botón para validar el pin */}
          <button 
            type="button" 
            className="btn btn-primary mb-4 w-100" 
            onClick={validarCodigoPin}
          >
            VALIDAR CODIGO
          </button>
          
        </div>

      </div>
    )}

    {isCodeValid && (
      <div className='registro-body-form'>

        <h2 className='pt-4 '>SOLICITUD DE CERTIFICACIÓN</h2>
        <h5 className=' text-center mb-3 codigo-label-version-body'>Codigo: FO-25 - Vigencia: 2024-01-22 - Versión: 14</h5>

        <div className="cont-text-form-reg-body">
          <p>Apreciado solicitante le damos la bienvenida a nuestro Organismo CERTIFICACIÓN DE PERSONAS AIEX S.A.S., a continuación, usted se registrará para solicitar el acceso al proceso de certificación en el alcance deseado. Le pedimos muy atentamente diligenciar toda la información en total apego a la verdad y suministrar la documentación requerida para poder programar la fecha y hora de su proceso de evaluación, la cual se notificará mediante comunicación valida.</p>
          <p>Para esto, es de vital importancia que tanto el teléfono como el correo electrónico suministrados sean de uso personal y exclusivo ya que mediante estos canales realizaremos la validación de su identidad y la autenticación de firma digital por medio de Código OTP (Contraseña de un solo uso) para los formatos y contratos de todo el proceso de certificación.</p>
          <p>Por favor diligencie completamente la siguiente información:</p>
        </div>

        <div className="cont-form-reg-iframe">
          <iframe
            src="https://e-learning-ocp.aiex.com.co/login/signup.php"
            title="Signup Page"
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        </div>

      </div>
    )}
    </div>
  );
}

export { RegistrationForm };