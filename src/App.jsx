import React from "react";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero-section/HeroSection";
import TravelPlace from "./components/destinations/TravelPlace";
import Footer from "./components/footer-section/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <TravelPlace/>
      <Footer/>
    </>
  );
}

export default App;
