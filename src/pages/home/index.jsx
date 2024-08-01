import React from "react";
import { HomeSlider } from "../../components/HomeSlider";
import { HomeAboutUs } from "../../components/HomeAboutUs";
import { MyV } from "../../components/MyV";
import { Values } from "../../components/Values";
import { Beginning } from "../../components/Beginning"
import { Policies } from "../../components/Policies";
import { OurAllies } from "../../components/OurAllies";

const Home = ({ showModal }) => {
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