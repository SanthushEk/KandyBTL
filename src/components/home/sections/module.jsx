import React from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion
import rightImage from "../../../assets/Images/slide04.jpg"; // Example image
import bgImage from "../../../assets/Images/outdorImg.jpg"; // Example background image

const Modules = () => {
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
  ];

  return (
    <div className="flex flex-col p-4 md:flex-row h-auto bg-primary font-futura ">
      {/* Left Section with Card */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center lg:pl-14 m-5 lg:mb-0"
        initial={{ x: "-100%" }} // Start from the left
        whileInView={{ x: 0 }} // Animate to the center
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
        viewport={{ once: true }} // Trigger animation only once
      >
        <div className="bg-primary p-8 rounded-xl pl-0 md:pl-32">
          <h2 className="text-xl md:text-2xl font-extrabold mb-6">
            Discover the Power of Kandy's Leading Advertising Agency
          </h2>
          <img
            src={rightImage}
            alt="Advertising Agency"
            className="w-full h-96 object-cover mb-6 p-5 bg-white shadow-lg rounded-lg"
          />
          <h3 className="text-xl font-bold mb-4">Out of Home Ads by KANDY BTL</h3>
          <p className="text-base md:text-base font-medium mt-4">
            "Engage your audience outdoors with Kandy BTL’s diverse range of static and interactive advertising modules. Whether your audience is commuting or enjoying a coffee, our solutions ensure extensive reach and engagement. With strategic placement across all outdoor media channels, Kandy BTL helps you connect with the right audience at the right time, boosting your brand visibility in the outdoor landscape."
          </p>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full md:w-1/2 h-auto p-6 md:p-10 relative"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
        initial={{ opacity: 0, x: 100 }} // Start from the right
        whileInView={{ opacity: 1, x: 0 }} // Animate to the center
        transition={{ duration: 1 }}
        viewport={{ once: true }} // Trigger animation only once
      >
        <div className="absolute inset-0 bg-secondary opacity-90 rounded-lg"></div>

        <div className="relative z-10 text-white font-futura border-2 border-gray-500 p-5 md:p-14 rounded-sm mb-6">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Outdoor Modules</h3>
          <p className="mb-6 text-sm md:text-base">
            Boasting an extensive portfolio of over 175 advertising sites across road networks, railway stations, and public locations, our outdoor inventory effectively reaches 95% of the population in the Kandy district. This unparalleled coverage ensures that your message resonates with a wide audience, maximizing visibility and engagement throughout the region.
          </p>
          <button className="px-6 py-3 bg-yellow text-secondary font-semibold rounded-lg hover:bg-yellow-600 transition-colors mb-6">
            Call To Actions
          </button>
          <ul className="grid grid-cols-2 gap-4 text-sm md:text-base mb-4 md:mb-10">
            {outdoorItems.map((item, index) => (
              <li key={index} className="flex items-center">
                <FaCheck className="mr-2 text-yellow " />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Modules;
