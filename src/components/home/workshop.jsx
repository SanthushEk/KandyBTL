import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import image1 from "../../assets/WS-1.jpg"; // Replace with actual image paths
import image2 from "../../assets/WS-2.jpg"; // Replace with actual image paths

const Workshop = () => {
  return (
    <div className="h-auto bg-primary w-full flex flex-col md:flex-row">
      {/* Left Section with Animation */}
      <motion.div
        className="w-full md:w-1/2 p-6 flex flex-col justify-center items-center text-center text-secondary font-futura"
        initial={{ opacity: 0, x: -300 }} // Start from left side
        whileInView={{ opacity: 1, x: 0 }} // Move to original position
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xl md:text-3xl font-bold mb-4">
          Very Own Workshop Channel
        </h2>
        <ul className="space-y-4">
          <li className="text-lg md:text-2xl text-yellow">Signage</li>
          <li className="px-6 md:px-20 text-sm md:text-xl">
            Capacity of handling multiple projects at a raw, since we are the 1st hand business manager and not third-party involvement or sub-delivery. 
            Our very own workmanship enables a faster routine to execute jobs on deadlines.
          </li>
        </ul>
      </motion.div>

      {/* Right Section with Animation */}
      <motion.div
        className="w-full md:w-1/2 p-6 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4"
        initial={{ opacity: 0, y: -300 }} // Start from above
        whileInView={{ opacity: 1, y: 0 }} // Slide down to original position
        transition={{ duration: 0.8 }}
      >
        <img
          src={image1}
          alt="Workshop 1"
          className="w-full md:w-1/2 h-auto rounded-lg shadow-lg object-cover hover:border-2 hover:border-yellow"
        />
        <img
          src={image2}
          alt="Workshop 2"
          className="w-full md:w-1/2 h-auto rounded-lg shadow-lg object-cover hover:border-2 hover:border-yellow"
        />
      </motion.div>
    </div>
  );
};

export default Workshop;
