import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { FaImage, FaBus, FaBuilding, FaLeaf, FaMap } from "react-icons/fa"; // Import icons

import G1 from "../../../assets/Images/G1.jpg";
import G2 from "../../../assets/Images/G2.jpg";
import G3 from "../../../assets/Images/G3.jpg";
import G4 from "../../../assets/Images/G4.jpg";
import G5 from "../../../assets/Images/G5.jpg";
import G6 from "../../../assets/Images/G6.jpg";

const images = [
  { id: 1, src: G1, title: "Large Format hoardings", icon: <FaImage className="text-yellow-500 text-3xl" /> },
  { id: 2, src: G2, title: "Medium scale hoardings", icon: <FaBus className="text-yellow-500 text-3xl" /> },
  { id: 3, src: G3, title: "Large scale Bus shelters", icon: <FaBuilding className="text-yellow-500 text-3xl" /> },
  { id: 4, src: G4, title: "Smart Bus Shelters", icon: <FaLeaf className="text-yellow-500 text-3xl" /> },
  { id: 5, src: G5, title: "Large building branding", icon: <FaMap className="text-yellow-500 text-3xl" /> },
  { id: 6, src: G6, title: "Outdoor Branding", icon: <FaImage className="text-yellow-500 text-3xl" /> },
];

const Gallery = () => {
  return (
    <div className="container mx-auto py-10 px-6 font-futura">
      <h2 className="text-2xl md:text-4xl font-bold tracking-wide text-center mt-8 mb-2">Outdoor Advertising Hoardings & Bus Shelter Ads</h2>
      <h2 className="text-xl md:text-2xl tracking-wide text-center mb-8">Kandy City and Urban Area</h2>

      {/* Apply motion to the grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {images.map((image) => (
          <motion.div
            key={image.id}
            className="relative group overflow-hidden rounded-lg shadow-lg border-2 border-transparent transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: image.id * 0.2 }} // Delay each card's animation
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-300"
            />

            {/* Top Left Icon */}
            <div className="absolute top-4 left-4 text-yellow">{image.icon}</div>

            {/* Bottom Overlay and Title */}
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-60 p-4 text-center rounded-b-lg">
              <h3 className="text-lg font-semibold text-white tracking-wider">{image.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Gallery;
