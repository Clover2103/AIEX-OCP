import React from "react";
import imgAboutUs from "../../assets/inicio/about-us/quienes somos.png";
import { useVisibility } from "../../hooks/useVisibility";
import "./HomeAboutUs.css";

const HomeAboutUs = () => {
  const sectionRef = useVisibility();
  const circle1Ref = useVisibility();
  const circle2Ref = useVisibility();
  const circle3Ref = useVisibility();
  const textRef = useVisibility();
  const imgRef = useVisibility();

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
            <button className="btn-saber-mas">
              Saber más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HomeAboutUs };

