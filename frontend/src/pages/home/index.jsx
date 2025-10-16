import React , { useEffect } from "react";
import { HomeSlider } from "../../components/HomeSlider";
import { HomeAboutUs } from "../../components/HomeAboutUs";
import { HomeMAndV } from "../../components/HomeMAndV"
import { Values } from "../../components/Values";
import { Beginning } from "../../components/Beginning"
import { Policies } from "../../components/Policies";
import { HomeAllies } from "../../components/HomeAllies";

import image1 from '../../assets/inicio/modalHome/imagen1.png';
import image2 from '../../assets/inicio/modalHome/imagen2.png';
import image3 from '../../assets/inicio/modalHome/imagen3.png';

const imagesWithLinks = [
  { src: image1, link: "https://api.whatsapp.com/send?phone=573165294689" },
  { src: image2, link: "https://api.whatsapp.com/send?phone=573054009393" },
  { src: image3, link: "https://api.whatsapp.com/send?phone=573054009393" },
];

const Home = ({ showModal }) => {


  useEffect(() => {
    const imageShown = sessionStorage.getItem('imageShown');

    if (!imageShown) {
      const randomImage = imagesWithLinks[Math.floor(Math.random() * imagesWithLinks.length)];
      sessionStorage.setItem('imageShown', 'true');

      showModal(
        <a href={randomImage.link} target="_blank" rel="noopener noreferrer">
          <img src={randomImage.src} style={{ width: '100%', height: '95%', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} alt="Imagen aleatoria" />
          <button className="w-100 btn btn-dark text-white ">CONOCER MAS</button>
        </a>
      );
    }
  }, [showModal]);


  return (
    <div>
      <HomeSlider />
      <HomeAboutUs showModal={showModal} id="homeAboutUs"/>
      <HomeMAndV />
      <Values />
      <Beginning />
      <Policies />
      <HomeAllies />
    </div>
  );
};

export { Home };