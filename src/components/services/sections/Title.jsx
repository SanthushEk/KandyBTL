import React from "react";
import { motion } from "framer-motion"; // Import motion
import bgImage from "../../../assets/servicesBG.jpg"; // Import your background image

const Title = () => {
  return (
    <div
      className="h-[70vh] flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Hero content */}
      <div className="relative text-center z-10 px-5 sm:px-10">
        {/* Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-semibold font-quoteFonts mb-4 flex justify-center items-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="w-10 h-0.5 bg-yellow mr-3"></span>
          Shifting Mindsets For a Positive Change
          <span className="w-10 h-0.5 bg-yellow ml-3"></span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-white text-sm sm:text-base md:text-base font-poppins font-medium max-w-3xl mx-auto mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          KandyBTL is an award-winning event marketing and management agency
          that redefines how modern brands connect with their audiences. By
          crafting unforgettable experiences and innovative marketing campaigns,
          we ensure that every interaction leaves a lasting impact. Our
          expertise lies in creating dynamic event marketing assets that bring
          brands to life, driving them forward into a new era of engagement and
          relevance. With a deep commitment to creativity and excellence, we
          empower organizations to ignite meaningful connections that resonate
          on both local and global scales.
        </motion.p>

        {/* Subtitle */}
        <motion.p
          className="text-yellow text-base sm:text-lg md:text-xl font-medium mt-6 font-poppins"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Turning ideas into assets and delivering them to the world.
        </motion.p>
      </div>
    </div>
  );
};

export default Title;
