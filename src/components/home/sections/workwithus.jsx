import React from "react";
import { FaLeaf, FaClock, FaDesktop, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion
import rightImage from "../../../assets/Images/town.jpg"; // Example image
import bgImage from "../../../assets/Images/town.jpg"; // Example background image

const WorkWithUs = () => {
  const isMobile = window.innerWidth < 768; // Detect mobile screens

  return (
    <div className="flex flex-col lg:flex-row h-auto bg-primary font-futura m-4">
      {/* Left Section */}
      <motion.div
        className="w-full lg:w-1/2 h-auto p-6 lg:p-12 bg-cover relative"
        style={{ backgroundImage: `url(${bgImage})` }}
        initial={{ opacity: 0, x: isMobile ? -50 : -500 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-secondary opacity-90 rounded-lg"></div>

        {/* Content */}
        <div className="relative z-10 text-white font-futura border-2 border-gray-500 p-14 lg:pt-24 rounded-sm mb-6 h-full">
          <h2 className="text-xl lg:text-3xl font-extrabold mb-2">
            Follow The Best Practices
          </h2>
          <h3 className="text-lg lg:text-xl mb-8">
            Brand positioning through Public Private Partnership Programmes
          </h3>

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl text-center flex flex-col justify-center items-center border-2 border-yellow">
              <FaLeaf className="text-yellow text-5xl mb-4" />
              <h4 className="text-lg lg:text-lg font-semibold">Sustainability</h4>
            </div>
            <div className="p-6 rounded-xl text-center flex flex-col justify-center items-center border-2 border-yellow">
              <FaClock className="text-yellow text-5xl mb-4" />
              <h4 className="text-lg lg:text-lg font-semibold">Project On Time</h4>
            </div>
            <div className="p-6 rounded-xl text-center flex flex-col justify-center items-center border-2 border-yellow">
              <FaDesktop className="text-yellow text-5xl mb-4" />
              <h4 className="text-lg lg:text-lg font-semibold">Modern Technology</h4>
            </div>
            <div className="p-6 rounded-xl text-center flex flex-col justify-center items-center border-2 border-yellow">
              <FaLightbulb className="text-yellow text-5xl mb-4" />
              <h4 className="text-lg lg:text-lg font-semibold">Creative Concepts</h4>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full lg:w-1/2 h-full p-10 lg:pr-36 relative"
        initial={{ opacity: 0, x: isMobile ? 50 : 500 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="relative z-10 bg-primary p-8 rounded-xl mb-6">
          <img
            src={rightImage}
            alt="Advertising Agency"
            className="w-full h-full object-contain mb-3 p-3 bg-white shadow-lg rounded-lg"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default WorkWithUs;
