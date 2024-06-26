import React from "react";
import { NavBar } from "../../components/NavBar";
import { HomeSlider } from "../../components/HomeSlider";
import { Footer } from "../../components/Footer";
import "./home.css";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HomeSlider />
      <h1>Home</h1>
      <Footer />
    </div>
  );
};

export { Home };