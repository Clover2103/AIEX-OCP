import React from "react";
import { NavBar } from "../../components/NavBar";
import { HomeSlider } from "../../components/HomeSlider";
import { HomeAboutUs } from "../../components/HomeAboutUs";
import { MyV } from "../../components/MyV";
import { Footer } from "../../components/Footer";
import { Values } from "../../components/Values";
import "./home.css";


const Home = () => {
  return (
    <div>
      <NavBar />
      <HomeSlider />
      <HomeAboutUs />
      <MyV />
      <Values />
      <h1>Home</h1>
      <Footer />
    </div>
  );
};

export { Home };