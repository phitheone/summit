import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import RaritySelector from "../components/Rarity/RaritySelector";
import RarityGallery from "../components/Rarity/RarityGallery";

const RarityPage = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <RaritySelector />
      <RarityGallery />
      <Footer />
    </>
  );
};

export default RarityPage;
