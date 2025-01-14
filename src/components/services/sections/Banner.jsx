import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import bannerImage from "../../../assets/ground.jpg"; // Replace with the actual path to your image

const Banner = () => {
  // Variants for animations when scrolling down
  const textVariants = {
    hidden: { opacity: 0, y: 50 }, // Start from below and invisible
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }, // Fade in and move to position
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 }, // Start from below and invisible
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3, ease: "easeOut" } }, // Fade in and move to position
  };

  return (
    <div
      className="h-[50vh] flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative text-center z-10 px-5 sm:px-10">
        {/* Subtitle */}
        <motion.h3
          className="text-base sm:text-lg font-medium text-yellow uppercase tracking-widest mb-2"
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
        >
          SPORTS & ENTERTAINMENT SPONSORSHIPS
        </motion.h3>

        {/* Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-semibold font-quoteFonts text-white mb-6"
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
        >
          SPORTS Advertising
        </motion.h1>

        {/* Button */}
        <motion.button
          className="px-6 py-3 bg-yellow text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
          initial="hidden"
          whileInView="visible"
          variants={buttonVariants}
        >
          Engage with Our Events
        </motion.button>
      </div>
    </div>
  );
};

export default Banner;
