import React from "react";
import Title from "./sections/Title";
import Events from "./sections/Events";
import Banner from "./sections/Banner";
import Brands from "./sections/Brands";
import Sports from "./sections/Sports";
import Others from "./sections/Others";
import Quote from "./sections/Quote";




const services = () => {
  return (
    <div className="font-futura">
      <Title/>
      <Events/>
      <Banner/>
      <Brands/>
      <Sports/>
      <Others/>
      <Quote/>
    </div>
  );
};

export default services;