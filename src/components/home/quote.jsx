import React from "react";
import { FaRecycle } from "react-icons/fa"; // Import the icon
import { motion } from "framer-motion"; // Import Framer Motion

const Quote = () => {
  // Variants for the typing effect
  const textVariants = {
    hidden: { opacity: 0, x: -100 }, // Start from the left and invisible
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }, // Move to original position and fade in
  };

  return (
    <div className="w-full h-[40vh] flex flex-col justify-center items-center bg-primary text-center px-6">
      {/* Icon Animation */}
      <motion.div
        className="text-6xl text-yellow mb-4"
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
      >
        <FaRecycle /> {/* Icon added here */}
      </motion.div>

      {/* Main Title Animation */}
      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-black mb-4 font-quoteFonts"
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
      >
        TOWARDS A PLASTIC FREE & SMART CITY CONCEPT
      </motion.h2>

      {/* Subtitle Animation */}
      <motion.h3
        className="text-lg md:text-xl font-light text-black font-quoteFonts"
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
      >
        <span className="text-yellow font-bold">SUSTAINABLE</span> OUTDOOR{" "}
        <span className="text-yellow font-bold">ADVERTISING</span>
      </motion.h3>

      {/* Description Animation */}
      <motion.p
        className="text-sm md:text-base font-light text-black mt-4 font-poppins"
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
      >
        Public awareness campaigns that engage and educate local communities on plastic waste can spur community action and affect consumer choices.
      </motion.p>
    </div>
  );
};

export default Quote;
