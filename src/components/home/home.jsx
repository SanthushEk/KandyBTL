import React from "react";
import Hero from "./sections/hero"; 
import Services from "./sections/services"; 
import Modules from "./sections/module"; 
import WorkWithUs from "./sections/workwithus";
import Number from "./sections/number";
import Gallery from "./sections/gallery";
import Brands from "./sections/brands";
import Banner from "./sections/banner";


const Home = () => {
  return (
    <div>
        <Hero/>
        <Services/>
        <Modules/>
        <WorkWithUs/>
        <Number/>
        <Gallery/>
        <Brands/>
        <Banner/>
    </div>
  );
};

export default Home;