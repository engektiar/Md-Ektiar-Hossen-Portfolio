import React from "react";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import About from "./Components/Pages/About";
import Servieses from "./Components/Pages/Servises/Servieses";
import Skill from "./Components/Pages/Skill";
import Mycontact from "./Components/Pages/Contactp";
import Header from "./Components/Pages/Header";

import Work from "./Components/Pages/Work";
function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/servises" element={<Servieses />} />
          <Route path="/Skill" element={<Skill />} />
          <Route path="/MyProject" element={<Work />} />
          <Route path="/Contact" element={<Mycontact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
