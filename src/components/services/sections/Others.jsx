import React from "react";
import { FaCode, FaPaintBrush, FaLaptop, FaChartLine } from "react-icons/fa"; // Icons for each card
import techImg from "../../../assets/other01.jpg"; // Image import for Tech card
import studioImg from "../../../assets/others02.jpg"; // Image import for Studio card
import softwaresImg from "../../../assets/others03.jpg"; // Image import for Softwares card
import strategiesImg from "../../../assets/other4.jpg"; // Image import for Strategies card
import { motion } from "framer-motion"; // Import Framer Motion

const Others = () => {
  // Variants for scroll-triggered animations
  const cardVariants = {
    hidden: { opacity: 0, y: 100 }, // Start from below and invisible
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }, // Slow fade-in and move to position
  };

  // Variants for Title and Subtitle animation
  const textVariants = {
    hidden: { opacity: 0, y: 50 }, // Start from below and invisible
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }, // Fade in and move to position
  };

  return (
    <div className="bg-white text-secondary font-poppins p-6">
      {/* Title and Subtitle Section */}
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
      >
        <h2 className="text-3xl font-semibold">Without Boundaries</h2>
        <p className="text-lg text-secondary mt-2">
          Igniting brands and events through our Event Marketing led design studio.
        </p>
      </motion.div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <motion.div
          className="relative cursor-pointer"
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
        >
          <img
            src={techImg} // Use imported image for Tech
            alt="Tech"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-between p-4">
            <FaCode className="text-yellow text-4xl self-start" />
            <h3 className="text-white text-xl font-semibold mt-4 self-end">Tech</h3>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="relative cursor-pointer"
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
        >
          <img
            src={studioImg} // Use imported image for Studio
            alt="Studio"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-between p-4">
            <FaPaintBrush className="text-yellow text-4xl self-start" />
            <h3 className="text-white text-xl font-semibold mt-4 self-end">STUDIO</h3>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="relative cursor-pointer"
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
        >
          <img
            src={softwaresImg} // Use imported image for Softwares
            alt="Softwares"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-between p-4">
            <FaLaptop className="text-yellow text-4xl self-start" />
            <h3 className="text-white text-xl font-semibold mt-4 self-end">SOFTWARES</h3>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="relative cursor-pointer"
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
        >
          <img
            src={strategiesImg} // Use imported image for Strategies
            alt="Strategies"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-between p-4">
            <FaChartLine className="text-yellow text-4xl self-start" />
            <h3 className="text-white text-xl font-semibold mt-4 self-end">STRATEGIES</h3>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Others;
