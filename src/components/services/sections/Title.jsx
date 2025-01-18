import React from "react";
import { motion } from "framer-motion"; // Import motion
import bgImage from "../../../assets/Images/servicesBG.jpg"; // Import your background image

const Title = () => {
  return (
    <div
      className="h-[30vh] flex items-center justify-center bg-cover bg-center relative font-futura"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Hero content */}
      <motion.div
        className="relative text-center z-10 px-5 sm:px-10"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }} // Enable animation when scrolling up or down
      >
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-semibold font-quoteFonts text-white">
          Our Services
        </h1>
      </motion.div>
    </div>
  );
};

export default Title;
