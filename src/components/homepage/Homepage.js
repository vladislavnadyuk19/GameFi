import React from "react";
import Top from "./top/Top";
import Header from "../header/Header";
import Slider from "./slider/Slider";
import Pool from "./pool/Pool";
import Instruction from "./instruction/Instruction";
import About from "./about/About";
import Graphic from "./graphic/Graphic";
import Games from "./games/Games";
import Footer from "../footer/Footer";
import Tables from "./tables/Tables";
import Mission from "./mission/Mission";

function Homepage() {
  return (
    <>
      <Header />
      <main className="main">
        <Top />
        <Slider />
        <Pool />
        <Instruction />
        <About />
        <Games />
        <Tables />
        <Mission />
        <Graphic />
      </main>
      <Footer />
    </>
  );
}

export default Homepage;
