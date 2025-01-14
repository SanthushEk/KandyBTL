import React from "react";
import Hero from "./hero"; // Import the Hero component
import Service from "./services";
import WorkWithUs from "./workwithus";
import Numbers from "./numbers";
import Discover from "./discover";
import Outdoor from "./outdoor";
import StreetPromo from "./StreetPromo";
import Gallery from "./gallery";
import Workshop from "./workshop";
import Practices from "./practices";
import Quote from "./quote";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service/>
      <Numbers/>
      <WorkWithUs/>
      <Discover/>
      <Outdoor/>
      <StreetPromo/>
      <Gallery/>
      <Workshop/>
      <Practices/>
      <Quote/>
    </div>
  );
};

export default Home;