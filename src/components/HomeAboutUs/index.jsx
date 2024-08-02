import React from "react";
import imgAboutUs from "../../assets/inicio/about-us/quienes somos.png";
import imgAboutModal from "../../assets/inicio/about-us/quienes somos - emergente.png";
import { useVisibility } from "../../hooks/useVisibility";
import "./HomeAboutUs.css";

const HomeAboutUs = ( { showModal } ) => {
  const sectionRef = useVisibility();
  const circle1Ref = useVisibility();
  const circle2Ref = useVisibility();
  const circle3Ref = useVisibility();
  const textRef = useVisibility();
  const imgRef = useVisibility();

  const handleButtonClick = () => {
    const content = 
    <div className="about-container-modal">
      <h2>QUIENES SOMOS</h2>
      <div className="about-content-text">
        <p>CERTIFICACIÓN DE PERSONAS AIEX S.A.S. es un Organismo de Evaluación de la Conformidad acreditado bajo la Norma ISO/IEC 17024:2012 de naturaleza privada y alto sentido de responsabilidad social, que busca contribuir a la productividad y competitividad empresarial a partir de la ejecución de procesos de certificación de personas justos, equitativos y confiables que garanticen la capacidad y demostración efectiva de las evidencias de conocimiento y desempeño de las personas certificadas en cada alcance.</p>
        <p>Sabemos lo importante que es alcanzar los objetivos estratégicos en las organizaciones y esto se logra a partir de la gestión del talento humano competente, que aplique los más altos estándares de calidad en sus responsabilidades diarias lo cual redundará en la oferta de productos y servicios de calidad que satisfagan plenamente las expectativas de sus clientes.</p>
        <p>Conózcanos, para así poder ofrecerle un servicio de evaluación y certificación idóneo que ateste la competencia necesaria de una persona para un desarrollo efectivo de su labor.</p>
      </div>
      <img src={imgAboutModal} alt="quienes somos emergente" />
    </div>;
    showModal(content);
  };

  return (
    <div className="homeAboutUs" ref={sectionRef}>
      <div className="body-about row g-2">
        <div className="cont-about-img col-md" ref={imgRef}>
          <div className="cont-img">
            <img src={imgAboutUs} alt="img about us" />
          </div>
        </div>
        <div className="cont-about-text col-md">
          <div className="about-circle-1" ref={circle1Ref}></div>
          <div className="about-circle-2" ref={circle2Ref}></div>
          <div className="about-circle-3" ref={circle3Ref}></div>
          <div className="about-context-text" ref={textRef}>
            <h3><b>QUIENES SOMOS</b></h3>
            <p>
              CERTIFICACIÓN DE PERSONAS AIEX S.A.S. es un Organismo de Evaluación de la Conformidad acreditado bajo la Norma ISO/IEC 17024:2012 de naturaleza privada y alto sentido de responsabilidad social, que busca contribuir a la productividad y competitividad empresarial a partir de la ejecución de procesos de...
            </p>
            <button className="btn-saber-mas" onClick={handleButtonClick}>
              Saber más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HomeAboutUs };