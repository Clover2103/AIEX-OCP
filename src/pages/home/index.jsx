import React , { useEffect } from "react";
import { HomeSlider } from "../../components/HomeSlider";
import { HomeAboutUs } from "../../components/HomeAboutUs";
import { MyV } from "../../components/MyV";
import { Values } from "../../components/Values";
import { Beginning } from "../../components/Beginning"
import { Policies } from "../../components/Policies";
import { OurAllies } from "../../components/OurAllies";

import image1 from '../../assets/inicio/allies/logo-aiexsst.png';
import image2 from '../../assets/inicio/allies/logo-clubdetiro.png';
import image3 from '../../assets/inicio/allies/logo-funhumac.png';
import image4 from '../../assets/inicio/allies/logo-funhumac.png';
import image5 from '../../assets/inicio/allies/logo-vigiempleo.png';
import image6 from '../../assets/inicio/allies/logo-vialseguridad.png';
import image7 from '../../assets/inicio/allies/aliados.png';
import image8 from '../../assets/inicio/allies/logo-funhumac.png';

const images = [image1, image2, image3, image4, image5, image6, image7, image8]; // Array de imágenes

const Home = ({ showModal }) => {


  useEffect(() => {
    const imageShown = sessionStorage.getItem('imageShown');

    if (!imageShown) {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      sessionStorage.setItem('imageShown', 'true'); // Marcar que ya se ha mostrado
      showModal(<img src={randomImage} alt="Imagen aleatoria" />);
    }
  }, [showModal]);


  return (
    <div>
      <HomeSlider />
      <HomeAboutUs showModal={showModal}/>
      <MyV />
      <Values />
      <Beginning />
      <Policies />
      <OurAllies />
    </div>
  );
};

export { Home };