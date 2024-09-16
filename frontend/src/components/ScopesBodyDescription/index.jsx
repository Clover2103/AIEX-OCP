import React from 'react';
import './ScopesBodyDescription.css';


const ScopesBodyDescription = () => {
  return ( 
    <div className='container mb-5 mt-5'>
      <h1 className='text-center h1'>QUÉ ES EL ENFOQUE FUNCIONAL</h1>
      <p className='text-justify'>La evaluación de la conformidad es una serie de tres funciones que satisfacen unanecesidad, o una solicitud, de demostrar que se cumplen los requisitos especificados</p>
      <ul>
        <li>SELECCIÓN</li>
        <li>DETERMINACIÓN</li>
        <li>REVISIÓN Y ATESTACIÓN</li>
      </ul>
      <p className='text-justify'>Tal demostración puede aportar solidez o credibilidad a las afirmaciones de que se cumplen los requisitos especificados, proporcionando a los usuarios una mayor confianza en tales afirmaciones. Las normas se utilizan a menudo como los requisitos especificados, ya que representan un amplio consenso de lo que se quiere en una determinada situación. Como consecuencia, la evaluación de la conformidad es a menudo considerada como una actividad relacionada con las normas.</p>
    </div>
  );
};

export { ScopesBodyDescription };