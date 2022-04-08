import React, { useState } from "react";
import Gallery from "../components/Gallery";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Roadmap from "../components/Roadmap";
import Sidebar from "../components/Sidebar";
import Story from "../components/Story";
import Team from "../components/Team";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Gallery />
      <Story />
      <Roadmap />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
