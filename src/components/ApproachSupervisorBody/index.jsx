import React from "react";
import enfoque from "../../assets/alcances/approach scopes/enfoque.png"; 
const ApproachSupervisorBody = () => {
  return (
    <div className="mb-5">
      <h2 className="h1" style={{ textAlign: "center" }}>ENFOQUE FUNCIONAL</h2>
      <div className="container">
        <div className="row">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th colSpan="2">GENERALIDADES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Esquema y alcance</th>
                <td>
                  Certificación como SUPERVISOR DE SEGURIDAD.
                  Basado en el conocimiento y aplicación de las Normas Sectoriales de Competencia Laboral (NSCL):
                  <ul>
                    <li>260401038 - V2 - 16/11/2022 - Supervisar servicios de seguridad de acuerdo con normativa.</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Costo de certificación inicial</th>
                <td>Tarifa del proceso de certificacion a convenir</td>
              </tr>
              <tr>
                <th>Intentos de presentación de exámenes</th>
                <td>Máximo Dos (2): Si el candidato no aprueba en primera instancia la evaluación integral en las etapas Teórico / Práctica, se programará una nueva fecha de evaluación según los criterios definidos en los procedimientos internos, (Tiempo no mayor a 90 días calendario).</td>
              </tr>
              <tr>
                <th>Competencia requerida</th>
                <td>
                  <ul>
                    <li>Contextualizar al personal.</li>
                    <li>Coordinar acciones.</li>
                    <li>Documentar resultados.</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Vigencia de la certificación</th>
                <td>1 año a partir de la fecha de certificación.</td>
              </tr>
              <tr>
                <th>Tiempos de vigilancia y renovación</th>
                <td>Renovación al año de otorgada la certificación. No aplican actividades de vigilancia.</td>
              </tr>
              <tr>
                <th>Criterios para efectuar cambios en el esquema de certificación</th>
                <td>Únicamente si la NSCL de referencia sufren alguna modificación, actualización o ajuste y el comité del esquema determina que es necesario realizar cambios en el alcance y/o una evaluación adicional para continuar demostrando el cumplimiento de los criterios de conformidad.</td>
              </tr>
              <tr>
                <th>Criterios para retirar o suspender la certificación</th>
                <td>Cuando se identifican actividades que indiquen uso indebido de los certificados otorgados, se ejecuta el Procedimiento para suspender o retirar la certificación de acuerdo a la naturaleza de la situación.</td>
              </tr>
              <tr>
                <th>Modalidad de evaluación</th>
                <td>Presencial en las instalaciones del organismo o a nivel nacional mediante el uso de ayudas tecnológicas en las que se interactúe de manera digital con el candidato. Cumpliendo con lo establecido en la Política de Seguridad.</td>
              </tr>
              <tr>
                <th rowSpan="3">Prerrequisitos</th>
              </tr>
              <tr><td>Aplican personas mayores de edad: 18 años cumplidos.</td></tr>
              <tr><td>Saber leer y escribir.</td></tr>
              <tr>
                <th>Idioma del examen</th>
                <td>Castellano.</td>
              </tr>
              <tr>
                <th>Duración del examen</th>
                <td>240 minutos.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6" style={{ margin: "auto" }}>
          <img src={enfoque} style={{ width: "100%", height: "1200px" }} alt="Imagen de proceso de enfoque" />
        </div>
        <div className="col-md-6 body_inf">
          <div className="row">
            <h3><b>1. SELECCION</b></h3>
            <ul>
              <li>Información previa al solicitante sobre el esquema de certificación: Alcance, Tarifas, derechos y deberes, prerrequisitos, criterios de certificación, metodología, tiempos, objetivos, procedimientos de quejas y apelaciones, criterios para mantener, suspender o retirar la certificación, etc.</li>
              <li>Diligenciamiento de formulario de solicitud.</li>
              <li>Verificación del cumplimiento de prerrequisitos del solicitante y la capacidad del organismo para ofrecer el servicio de evaluación y certificación.</li>
              <li>Firma del Contrato de prestación de servicios de certificación de personas.</li>
              <li>Registro del solicitante en la base de datos.</li>
              <li>Programación de la fecha y hora de evaluación (Máximo tres días hábiles después del registro).</li>
              <li>Facturación y cobro.</li>
            </ul>
          </div>
          <div className="row">
            <h3><b>2. DETERMINACION</b></h3>
            <ul>
              <li>Explicación al candidato acerca de los objetivos, metodología, tiempos y mecanismos de examen, resultados esperados y demás generalidades asociadas al proceso de evaluación.</li>
              <li>Entrega al candidato del material del examen: Paso a paso de ingreso a la plataforma, Ordenador, Audífonos, etc.</li>
              <li>Aplicación de la evaluación en dos fases:</li>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th rowSpan="4">Modulo Teórico (120 minutos):</th>
                  </tr>
                  <tr><td>60 ítems de selección múltiple con única respuesta.</td></tr>
                  <tr><td>10 ítems de Verdadero o Falso.</td></tr>
                  <tr><td>10 ítems de Apareamiento.</td></tr>
                  <tr>
                    <th rowSpan="9">Modulo Practico (120 minutos):</th>
                  </tr>
                  <tr><td>Ejercicio informe de caso relacionado con la NSCL: 260401038 - V2 - 16/11/2022 - Supervisar servicios de seguridad de acuerdo con normativa.</td></tr>
                  <tr><td>Ejercicio de selección de informes, relacionado con la Norma sectorial de competencia laboral de referencia.</td></tr>
                  <tr><td>Ejercicio de Crucigrama con dieciséis (16) definiciones relacionadas con la actividad del Supervisor.</td></tr>
                  <tr><td>Ejercicio de Sopa de letras en el que el candidato deberá identificar veinte (20) palabras relacionadas con la labor del Supervisor.</td></tr>
                </tbody>
              </table>
              <li>Resultados y observaciones: Revisión y calificación de los requisitos de competencia por parte del examinador designado; el candidato deberá obtener un resultado mayor o igual (>=) a setenta (70) puntos en la sumatoria de las dos fases para aprobar. Si el candidato al cuantificar las etapas de la evaluación según la ponderación definida está por debajo del umbral, tendrá noventa (90) días calendario para volver a aplicar el esquema, la cual será programada por el organismo.</li>
              <li>Programación de fecha para entrega de resultados: Máximo ocho (8) días hábiles después de presentada la evaluación.</li>
            </ul>
          </div>
          <div className="row">
            <h3><b>3. REVISIÓN Y ATESTACIÓN</b></h3>
            <ul>
              <li>El certificador revisa y valida el Informe de evaluación suministrado por el examinador designado, así como el cumplimiento de los criterios de conformidad y requisitos de competencia demostrados por el candidato.</li>
              <li>Toma de decisión de certificación registrada en el formato definido para tal fin.</li>
              <li>Si el candidato aprobó los exámenes y alcanzó el umbral, se realiza la impresión y firma del certificado por parte del Gerente general.</li>
              <li>Si el candidato no alcanzó el umbral se elabora el Informe de No conformidad relacionando los criterios de competencia no demostrados por el candidato en el proceso de evaluación.</li>
              <li>Explicación al candidato acerca de los resultados obtenidos en los exámenes y la decisión tomada por el certificador.</li>
              <li>Entrega del Certificado de conformidad a la persona que cumplió con los requisitos de competencia definidos en el esquema.</li>
              <li>Cargue de la información del certificado de conformidad al website del organismo con la información de: Nombres y apellidos completos, Numero de certificado, Alcance, Fecha de emisión, Fecha de vigencia, Estado.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ApproachSupervisorBody };
