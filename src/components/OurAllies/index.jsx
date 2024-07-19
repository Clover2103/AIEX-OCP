import React from 'react';
import { useSlider } from '../../hooks/useSlider';
import { AllyCard } from '../AllyCard';
import allies from "../../assets/inicio/allies/aliados.png";
import aiexsst from "../../assets/inicio/allies/logo-aiexsst.png";
import clubtiro from "../../assets/inicio/allies/logo-clubdetiro.png";
import cogno from "../../assets/inicio/allies/logo-cognoseguridad.png";
import conasegur from "../../assets/inicio/allies/logo-conasegur.png";
import funhumac from "../../assets/inicio/allies/logo-funhumac.png";
import vialseguridad from "../../assets/inicio/allies/logo-vialseguridad.png";
import vigiempleo from "../../assets/inicio/allies/logo-vigiempleo.png";
import "./OurAlies.css";

const alliesData = [
  { src: aiexsst, alt: "aiex sst", url: "https://aiex.co/", desc: "Contamos con la licencia para la prestacion de los servicios de seguridad y salud en el trabajo, concedida por el Ministerio de Salud y ..." },
  { src: clubtiro, alt: "clubtiro", url: "https://clubdetiroconasegur.com/", desc: "Fomenta el respeto, la sana convivencia, el juego limpio y el espíritu de competencia para el personal de Seguridad Privada..." },
  { src: cogno, alt: "cogno", url: "https://cognoseguridad.com/", desc: "Somos una academia de capacitación con mas de 22 años de experiencia, que tiene por objetivo social proveer enseñanza, capacitación, entrenamiento y actualización..." },
  { src: conasegur, alt: "conasegur", url: "https://conasegur.org/", desc: "Somos la Corporación Nacional de Empresas de Seguridad Privada 'CONASEGUR', gremio del sector de la Vigilancia y Seguridad Privada, con cubrimiento a nivel Nacional..." },
  { src: funhumac, alt: "funhumac", url: "https://funhumac.org/", desc: "La Fundación Humana - Mujer Activa, es una organización que fomenta, fortalece y facilita el mejoramiento de la calidad de vida de las personas,..." },
  { src: vialseguridad, alt: "vialseguridad", url: "https://vialseguridad.com/", desc: "Somos una empresa de Seguridad Privada que cuenta con autorización SuperVigilancia Res. 20224100050807 de  05-08-2022, con un alto..." },
  { src: vigiempleo, alt: "vigiempleo", url: "https://vigiempleo.com/pages/", desc: "Esta plataforma tecnológica permite de forma oportuna y eficiente la solución de las necesidades laborales del talento humano tanto empresariales como personales..." }
];

const OurAllies = () => {
  const { currentIndex, sliderRef, scrollUp, scrollDown, handleMouseEnter, handleMouseLeave } = useSlider(alliesData.length, true, 3000);

  const getVisibleSlides = () => {
    const visibleSlides = [];
    for (let i = 0; i < 3; i++) {
      visibleSlides.push(alliesData[(currentIndex + i) % alliesData.length]);
    }
    return visibleSlides;
  };

  return (
    <div className='our-allies-container mt-4 mb-4 w-100 d-flex justify-content-center align-items-center'>
      <div className="our-allies-content container w-100 row g-2 align-items-center justify-content-center">

        <div className="col-md our-allies-left">
          <h2>NUESTROS ALIADOS</h2>
          <img src={allies} alt="aliados" />
        </div>

        <div className="col-md our-allies-slider" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="our-allies-slider-container">
            <button className="nav-btn-QA prev-btn" onClick={scrollUp}>&#9650;</button>
            <div className="slider" ref={sliderRef} style={{ transform: `translateY(-${currentIndex})` }}>
              {getVisibleSlides().map(({ src, alt, url, desc }) => (
                <AllyCard key={alt} src={src} alt={alt} desc={desc} url={url} />
              ))}
            </div>
            <button className="nav-btn-QA next-btn" onClick={scrollDown}>&#9660;</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export { OurAllies };