import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Roadmap from "../components/Roadmap";

const StoryPage = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Roadmap />
      <Footer />
    </>
  );
};

export default StoryPage;
