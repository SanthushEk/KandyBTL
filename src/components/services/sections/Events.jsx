import React from "react";
import { useInView } from "react-intersection-observer";

import bgimage from "../../../assets/eventsbg.jpg";
import { motion } from "framer-motion"; // Import Framer Motion

const Events = () => {
  // Intersection Observer hook to detect when cards are visible
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[70vh] m-4">
      {/* Left section with updated content */}
      <div className="w-full md:w-1/2 bg-white flex items-center font-poppins">
        {/* New container to align content to the left and center it vertically */}
        <motion.div
          className="w-full text-left pl-8"
          initial={{ opacity: 0, x: -100 }} // Initial state off-screen
          whileInView={{ opacity: 1, x: 0 }} // Animate when element comes into view
          transition={{ duration: 1 }} // Duration of animation
          viewport={{ once: true }} // Trigger once when it comes into the viewport
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Corporate Events
          </h2>
          <h3 className="text-xl md:text-2xl font-medium mb-4 text-yellow">
            AWARD WINNING AGENCY
          </h3>
          <p className="text-sm sm:text-base md:text-base mb-4 mr-5">
            Awards may highlight our achievements, but they do not define us.
            They serve as a testament to the hard work and dedication of our
            talented team, whose passion drives us forward. What we take the
            most pride in is being part of a leading global BTL agency network,
            committed to delivering exceptional results while promoting a
            sustainable future. We are honored to have been recognized as Event
            Management Organisation of the Year at the Middle East Event Show &
            Awards 2021. Additionally, we have been finalists in prestigious
            categories such as Best Brand Event, Best Community Event, Best
            Public Event, Best Regional Event, and for notable Australian live
            music events. Our most recent accomplishment was winning Charity
            Event of the Year for the 2022 Blood Donation Walk, reflecting our
            dedication to meaningful and impactful causes.
          </p>
        </motion.div>
      </div>

      {/* Right section with background image */}
      <div
        className="w-full md:w-1/2 relative bg-cover bg-center h-[50vh] md:h-full"
        style={{
          backgroundImage: `url(${bgimage})`,

        }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
    </div>
  );
};

export default Events;
