import React from "react";
import { NavBar } from "../../components/NavBar";
import { HomeSlider } from "../../components/HomeSlider";
import { HomeAboutUs } from "../../components/HomeAboutUs";
import { Footer } from "../../components/Footer";
import "./home.css";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HomeSlider />
      <HomeAboutUs />
      <h1>Home</h1>
      <Footer />
    </div>
  );
};

export { Home };