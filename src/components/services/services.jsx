import React from "react";
import Title from "./sections/Title";
import Events from "./sections/events";
import Banner from "./sections/Banner";
import Brands from "./sections/brands";
import Sports from "./sections/Sports";
import Others from "./sections/Others";
import Quote from "./sections/Quote";




const services = () => {
  return (
    <div>
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