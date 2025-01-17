import React, { useState, useEffect } from "react";
import { FaBullhorn, FaRegHandPointRight, FaExclamationTriangle, FaChartLine, FaUsers, FaTrophy, FaGraduationCap, FaCogs, FaClipboardList, FaAppleAlt, FaBuilding, FaTree, FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Add FaArrowLeft and FaArrowRight
import { motion } from "framer-motion";
import bgImage from "../../../assets/Images/OutdorBG.jpg"; // Replace with your actual background image path

const items = [
  { title: "Flyer promotions", description: "Engage audiences with flyers.", icon: <FaBullhorn /> },
  { title: "Street activation", description: "Create interactive street events.", icon: <FaRegHandPointRight /> },
  { title: "Mall events", description: "Host promotions in malls.", icon: <FaBuilding /> },
  { title: "Consumer Experience promos", description: "Boost brand with hands-on promos.", icon: <FaAppleAlt /> },
  { title: "Exhibitions", description: "Showcase at events.", icon: <FaExclamationTriangle /> },
  { title: "Guerrilla marketing", description: "Creative, unconventional tactics.", icon: <FaTrophy /> },
  { title: "Sports Marketing", description: "Engage through sports events.", icon: <FaUsers /> },
  { title: "Customer engagement activities", description: "Build relationships with customers.", icon: <FaClipboardList /> },
  { title: "Research and Data Collection", description: "Understand markets better.", icon: <FaChartLine /> },
  { title: "Gym & Salon promotions", description: "Specialized promotional activities.", icon: <FaCogs /> },
  { title: "Campus and Garment factory activations", description: "Target specific locations.", icon: <FaGraduationCap /> },
  { title: "Seasonal promotions", description: "Promotions for special times of the year.", icon: <FaTree /> },
];

const Brands = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 4;  // Ensure this is defined correctly

  // Automatic sliding functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Adjust timing (e.g., 5000ms for 5 seconds)
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [startIndex]);

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + cardsToShow < items.length ? prevIndex + cardsToShow : 0
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex - cardsToShow >= 0 ? prevIndex - cardsToShow : items.length - cardsToShow
    );
  };

  const visibleItems = items.slice(startIndex, startIndex + cardsToShow);

  return (
    <div
      className="w-full h-auto bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-secondary opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto py-10 px-6 font-futura text-center text-white">
        {/* Title with fade-in effect */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl tracking-wide font-semibold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Brand Activations & Street Promotions
        </motion.h2>

        {/* Card Display with fade-in effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 m-8">
          {visibleItems.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg shadow-lg text-white flex flex-col items-center border-2 border-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.3 }} // Stagger delay for each card
            >
              <div className="text-4xl text-yellow mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons with fade-in effect */}
        <div className="flex justify-center space-x-4">
          <motion.button
            onClick={handlePrev}
            className="px-4 py-2 text-yellow rounded-full hover:bg-yellow-600 transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <FaArrowLeft />
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="px-4 py-2  text-yellow rounded-full hover:bg-yellow-600 transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <FaArrowRight />
          </motion.button>
        </div>

        {/* Call to Action Button with fade-in effect */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <button className="px-8 py-3 bg-yellow text-black rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors">
            Get Started Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Brands;
