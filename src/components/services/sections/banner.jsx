import React from "react";
import { motion } from "framer-motion"; // Import motion
import leftImage from "../../../assets/Images/servicepic.jpg"; // Left section image

const Banner = () => {
  return (
    <div className="h-auto flex flex-col lg:flex-row items-center justify-center bg-cover bg-center relative w-full max-w-7xl mx-auto p-5 lg:space-x-6">
      {/* Left Section: Image */}
      <motion.div
        className="w-full lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{
          duration: 1,
          delay: 0.3, // Delay the animation
        }}
        viewport={{ once: false }} // Trigger animation on both scroll down and up
      >
        <img
          src={leftImage}
          alt="Event Marketing"
          className="w-full h-auto object-cover rounded-lg"
        />
      </motion.div>

      {/* Right Section: Content */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col justify-center items-start p-6 lg:p-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{
          duration: 1,
          delay: 0.3, // Delay the animation
        }}
        viewport={{ once: false }} // Trigger animation on both scroll down and up
      >
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-wide text-secondary mb-4">
          Shifting Mindsets For a Positive Change
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-sm sm:text-base md:text-lg tracking-wide mb-6">
          KandyBTL is an award-winning event marketing and management agency
          that redefines how modern brands connect with their audiences. By
          crafting unforgettable experiences and innovative marketing campaigns,
          we ensure that every interaction leaves a lasting impact. Our
          expertise lies in creating dynamic event marketing assets that bring
          brands to life, driving them forward into a new era of engagement and
          relevance. With a deep commitment to creativity and excellence, we
          empower organizations to ignite meaningful connections that resonate
          on both local and global scales.
        </p>

        {/* Subtitle */}
        <p className="text-secondary text-base sm:text-lg font-medium mb-6">
          Turning ideas into assets and delivering them to the world.
        </p>

        {/* Button */}
        <button className="text-black px-8 py-2 border-2 border-secondary rounded-lg font-bold tracking-wide hover:bg-yellow transition duration-300 hover:bg-opacity-90">
          Learn More
        </button>
      </motion.div>
    </div>
  );
};

export default Banner;
