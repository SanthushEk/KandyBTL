import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import leftImage from "../../../assets/Images/ground.jpg"; // Example left-section image
import bgImage from "../../../assets/Images/eventsbg.jpg"; // Example background image

const Events = () => {
  return (
    <div className="flex flex-col p-4 md:flex-row h-auto bg-primary font-futura">
      {/* Left Section */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center"
        initial={{ x: "-100%" }} // Start from the left
        whileInView={{ x: 0 }} // Animate to the center
        exit={{ x: "-100%" }} // Fade out when scrolling up
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
        viewport={{ once: false }} // Trigger animation on both scroll directions
      >
        <div className="p-8">
          <h2 className="text-xl md:text-3xl mb-2 font-bold tracking-wide text-secondary">
            SPORTS Advertising
          </h2>
          <h3 className="text-base font-semibold mb-8 tracking-wide text-secondary">
            SPORTS & ENTERTAINMENT SPONSORSHIPS
          </h3>
          <img
            src={leftImage}
            alt="Sports Advertising"
            className="w-full h-80 p-5 object-cover mb-6 rounded-lg shadow-lg"
          />
          <button className="px-6 py-3 bg-yellow text-secondary font-semibold rounded-lg hover:bg-yellow-600 transition-colors">
            Engage with Event
          </button>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full md:w-1/2 h-auto p-6 md:p-10 relative"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
      >
        <div className="absolute inset-0 bg-secondary opacity-80 rounded-lg"></div>

        <div className="relative z-10 text-white font-futura border-2 border-gray-500 p-5 md:p-14 rounded-sm mb-6">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Corporate Events
          </h3>
          <h4 className="text-lg font-bold mb-4 text-yellow">AWARD WINNING AGENCY</h4>
          <p className="mb-6 text-sm md:text-xl">
            Awards may highlight our achievements, but they do not define us.
            They serve as a testament to the hard work and dedication of our
            talented team, whose passion drives us forward. What we take the
            most pride in is being part of a leading global BTL agency network,
            committed to delivering exceptional results while promoting a
            sustainable future. We are honored to have been recognized as Event
            Management Organisation of the Year at the Middle East Event Show & Awards 2021. 
            Additionally, we have been finalists in prestigious categories such as Best Brand Event, 
            Best Community Event, Best Public Event, Best Regional Event, and for notable Australian 
            live music events. Our most recent accomplishment was winning Charity Event of the Year 
            for the 2022 Blood Donation Walk, reflecting our dedication to meaningful and impactful causes.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Events;
