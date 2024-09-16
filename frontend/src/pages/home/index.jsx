import React , { useEffect } from "react";
import { HomeSlider } from "../../components/HomeSlider";
import { HomeAboutUs } from "../../components/HomeAboutUs";
import { MyV } from "../../components/MyV";
import { Values } from "../../components/Values";
import { Beginning } from "../../components/Beginning"
import { Policies } from "../../components/Policies";
import { OurAllies } from "../../components/OurAllies";

import image1 from '../../assets/inicio/modalHome/imagen1.png';
import image2 from '../../assets/inicio/modalHome/imagen2.png';
import image3 from '../../assets/inicio/modalHome/imagen3.png';
import image4 from '../../assets/inicio/modalHome/imagen4.png';
import image5 from '../../assets/inicio/modalHome/imagen5.png';
import image6 from '../../assets/inicio/modalHome/imagen6.png';

const images = [image1, image2, image3, image4, image5, image6]; // Array de imágenes

const Home = ({ showModal }) => {


  useEffect(() => {
    const imageShown = sessionStorage.getItem('imageShown');

    if (!imageShown) {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      sessionStorage.setItem('imageShown', 'true'); // Marcar que ya se ha mostrado
      showModal(<img src={randomImage} style={{ width: '100%', height: '100%' }} alt="Imagen aleatoria" />);
    }
  }, [showModal]);


  return (
    <div>
      <HomeSlider />
      <HomeAboutUs showModal={showModal} id="homeAboutUs"/>
      <MyV />
      <Values />
      <Beginning />
      <Policies />
      <OurAllies />
    </div>
  );
};

export { Home };