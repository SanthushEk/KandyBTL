import React from "react";
import Hero from "./hero"; // Import the Hero component
import Service from "./services";
import WorkWithUs from "./workwithus";
import Numbers from "./numbers";
import Discover from "./discover";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service/>
      <Numbers/>
      <WorkWithUs/>
      <Discover/>
    </div>
  );
};

export default Home;