import React from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion
import bgImage from "../../../assets/Images/ground.jpg"; // Example background image

const Sports = () => {
  const outdoorItems = [
    "Backdrops",
    "Exhibition Stalls",
    "Street name boards",
    "Gantries",
    "Hoardings",
    "Events",
    "Press conference",
    "CSR Events",
    "Bus shelter Ads",
    "Roundabout branding",
    "Light boxes",
    "Outdoor advertising",
    "Pylon signages",
    "Dealer boards",
    "Street marketing",
    "Stand Alone Sports Events",
    "Contract Negotiation",
    "3rd Party Integration",
    "Design and Styling",
    "Brand Events",
    "Mass Participation Events",
    "Spectator Event",
    "Festivals",
    "Sponsorship Activation & Leveraging",
    "Hospitality",
  ];

  return (
    <div className="flex flex-col md:flex-row h-auto bg- font-futura m-4">
      {/* Left Section with Framer Motion */}
      <motion.div
        className="w-full sm:full md:w-2/4 lg:w-1/4 p-6 md:p-12 flex flex-col justify-center items-left"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }} // Make animation trigger on scroll up and down
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-left text-secondary">SPORTS & ENTERTAINMENT</h2>
        <p className="text-sm md:text-base text-secondary mb-6 text-left">
          Limitless creation - Pushing Global boundaries with an ‘Anything’s Possible’ approach.
        </p>
      </motion.div>

      {/* Right Section with Framer Motion */}
      <motion.div
        className="w-full sm:w-full md:w-3/4 lg:w-3/4 h-auto p-6 md:p-12 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImage})`, backgroundAttachment: "fixed", backgroundSize: "cover" }}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }} // Make animation trigger on scroll up and down
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-secondary opacity-90 rounded-lg"></div>

        {/* Content */}
        <div className="relative z-10 text-white font-futura border-2 border-gray-500 p-5 md:p-14 rounded-sm mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-lg">
            {outdoorItems.map((item, index) => (
              <div key={index} className="text-sm md:text-base flex items-center">
                <FaCheck className="mr-2 text-yellow" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sports;
