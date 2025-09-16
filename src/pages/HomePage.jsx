import React from "react";
import Header from "../components/Layout/Header";

import Footer from "../components/Layout/Footer";
import About from "../components/Route/About/About";
import Hero from "../components/Route/Hero/Hero";
import Projects from "../components/Route/Project/Project";
import Skills from "../components/Route/Skill/Skill";
import Contact from "../components/Route/Contact/Contact";
import Photographer from "../components/Route/Photographer/photographer";
const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <About id="about" />
   
      <Photographer id="photographer" />
         <Projects id="projects" />
      <Skills id="skills" />
      <Contact id="contact" />

      <Footer />
    </div>
  );
};

export default HomePage;
