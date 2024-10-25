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
import image4 from '../../assets/inicio/modalHome/imagen4.jpg';

const imagesWithLinks = [
  { src: image4, link: "https://forms.gle/XjDmsstiJZJAAuwW6" },
  { src: image4, link: "https://forms.gle/XjDmsstiJZJAAuwW6" },
  { src: image4, link: "https://forms.gle/XjDmsstiJZJAAuwW6" },
  { src: image4, link: "https://forms.gle/XjDmsstiJZJAAuwW6" },
];

const Home = ({ showModal }) => {


  useEffect(() => {
    const imageShown = sessionStorage.getItem('imageShown');

    if (!imageShown) {
      const randomImage = imagesWithLinks[Math.floor(Math.random() * imagesWithLinks.length)];
      sessionStorage.setItem('imageShown', 'true');

      showModal(
        <a href={randomImage.link} target="_blank" rel="noopener noreferrer">
          <img src={randomImage.src} style={{ width: '100%' }} alt="Imagen aleatoria" />
          <button className="w-100 btn btn-danger text-white ">CONOCER MAS</button>
        </a>
      );
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