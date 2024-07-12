import React from "react";
import { NavBar } from "../../components/NavBar";
import { HomeSlider } from "../../components/HomeSlider";
import { HomeAboutUs } from "../../components/HomeAboutUs";
import { MyV } from "../../components/MyV";
import { Values } from "../../components/Values";
import { Beginning } from "../../components/Beginning"
import { Policies } from "../../components/Policies";
import { Footer } from "../../components/Footer";
import "./home.css";


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
      <h1>Home</h1>
      <Footer />
    </div>
  );
};

export { Home };