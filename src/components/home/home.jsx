import React from "react";
import Hero from "./hero"; // Import the Hero component
import Service from "./services";
import WorkWithUs from "./workwithus";
import Numbers from "./numbers";
import Discover from "./discover";
import Outdoor from "./outdoor";
import StreetPromo from "./StreetPromo";
import Gallery from "./gallery";

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
    </div>
  );
};

export default Home;