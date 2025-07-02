// src/pages/Home.js

import React from "react";
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Work from './component/ProjectCarousel'
import Contact from './component/Contact'
import AddProjectForm from "./component/AddProjectForm";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
    </>
  );
};

export default Home;
