import React from "react";
import { NavBar } from "../../components/NavBar";
import { HomeSlider } from "../../components/HomeSlider";
import { HomeAboutUs } from "../../components/HomeAboutUs";
import { MyV } from "../../components/MyV";
import { Values } from "../../components/Values";
import { Beginning } from "../../components/Beginning"
import { Policies } from "../../components/Policies";
import { OurAllies } from "../../components/OurAllies";
import { Footer } from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HomeSlider />
      <HomeAboutUs />
      <MyV />
      <Values />
      <Beginning />
      <Policies />
      <OurAllies />
      <Footer />
    </div>
  );
};

export { Home };