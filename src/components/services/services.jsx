import React from "react";
import Title from "./sections/Title";
import Banner from "./sections/banner";
import Events from "./sections/events";
import Brands from "./sections/brands";
import Others from "./sections/others";
import Sports from "./sections/sports";
import Quote from "./sections/Quote";

const Service = () => {
  return (
    <div>
        <Title/>
        <Banner/>
        <Events/>
        <Brands/>
        <Others/>
        <Sports/>
        <Quote/>
    </div>
  );
};

export default Service;