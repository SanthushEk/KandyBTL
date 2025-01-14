import React from "react";
import { FaLightbulb } from "react-icons/fa6";
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
        <FaLightbulb />
      </motion.div>

      {/* Main Title Animation */}
      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-black font-quoteFonts"
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
      >
        SHIFTING MINDSET
      </motion.h2>

      {/* Description Animation */}
      <motion.p
        className="text-sm md:text-xl font-light text-black mt-4 font-poppins"
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
      >
        Powered by a systematic platform, we connect freelancers to jobs, clients and each other.
      </motion.p>
    </div>
  );
};

export default Quote;
