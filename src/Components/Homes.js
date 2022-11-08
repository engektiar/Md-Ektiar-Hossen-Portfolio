import React from "react";
import About from "./Pages/About";
import Banner from "./Pages/Banner";
import Mycontact from "./Pages/Contactp";
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import MYblog from "./Pages/MyBloge";
import MyWork from "./Pages/MyWork";
import Skill from "./Pages/Skill";
import Servieses from "../Components/Pages/Servises/Servieses";
import "../App.css";
import Work from "./Pages/Work";
const Homes = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Servieses />
      <Skill />
      <Work />
      <MYblog />
      <Mycontact />
      <Footer />
    </div>
  );
};

export default Homes;
