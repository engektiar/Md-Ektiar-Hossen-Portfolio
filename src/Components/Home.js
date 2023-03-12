import React from "react";
import About from "./Pages/About";
import Mycontact from "./Pages/Contactp";
import Footer from "./Pages/Footer";
import Skill from "./Pages/Skill";
import Servieses from "./Pages/Servises/Servieses";
import "../App.css";
import Work from "./Pages/Work";
import Banner from "./Pages/Banner";
const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Servieses />
      <Skill />
      <Work />
      <Mycontact />
      <Footer />
    </div>
  );
};

export default Home;
