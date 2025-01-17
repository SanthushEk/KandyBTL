import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

import G1 from "../../../assets/Images/G1.jpg";
import G2 from "../../../assets/Images/G2.jpg";
import G3 from "../../../assets/Images/G3.jpg";
import G4 from "../../../assets/Images/G4.jpg";
import G5 from "../../../assets/Images/G5.jpg";
import G6 from "../../../assets/Images/G6.jpg";

const images = [
  { id: 1, src: G1, title: "Large Format hoardings" },
  { id: 2, src: G2, title: "Medium scale hoardings" },
  { id: 3, src: G3, title: "Large scale Bus shelters" },
  { id: 4, src: G4, title: "Smart Bus Shelters" },
  { id: 5, src: G5, title: "Large building branding" },
  { id: 6, src: G6, title: "Outdoor Branding" },
];

const Gallery = () => {
  return (
    <div className="container mx-auto py-10 px-6 font-futura">
      <h2 className="text-2xl md:text-4xl font-bold tracking-wide text-center mt-8 mb-2">Outdoor Advertising Hoardings & bus shelter ads</h2>
      <h2 className="text-xl md:text-2xl tracking-wide  text-center mb-8">Kandy city and urban area</h2>

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
            className="relative group overflow-hidden rounded-lg shadow-lg border-2 border-transparent transition-colors duration-300 hover:border-yellow-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: image.id * 0.2 }} // Delay each card's animation
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
            />
            {/* Main Card Hover Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-semibold text-yellow">{image.title}</h3>
            </div>

            {/* Smaller Inner Card (Optional - if you want additional hover effects) */}
            <div className="absolute inset-4 hover:border-2 hover:border-yellow rounded-lg"></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Gallery;