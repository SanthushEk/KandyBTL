import React from "react";
import { FaLeaf, FaClock, FaDesktop, FaLightbulb, FaRecycle, FaRoad, FaBus, FaBuilding, FaTrash, FaCity } from "react-icons/fa"; // Added necessary icons
import { motion } from "framer-motion"; // Import Framer Motion
import bgImage from "../../../assets/Images/town.jpg";
import rightImage from "../../../assets/Images/bg_image2.jpg"; // Example background image

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row h-auto bg-primary font-futura m-4">
      {/* Left Section with New Cards */}
      <motion.div
        className="w-full lg:w-1/2 h-auto p-6 lg:p-12 bg-cover relative"
        style={{ backgroundImage: `url(${bgImage})` }}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-secondary opacity-90 rounded-lg"></div>

        {/* New Card with List and Icons in Grid */}
        <div className="relative z-10 text-white font-futura border-2 border-gray-500 p-10 rounded-sm mb-6 h-full">
          <div>
            {/* New Card with List and Icons in Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="p-6 rounded-xl text-center flex flex-col justify-center items-center ">
                <FaRoad className="text-yellow text-3xl sm:text-4xl mb-4" />
                <h4 className="text-sm sm:text-lg lg:text-xl font-semibold">Roundabout & Traffic Island Branding</h4>
              </div>

              {/* Card 2 */}
              <div className="p-6 rounded-xl text-center flex flex-col justify-center items-center ">
                <FaBus className="text-yellow text-3xl sm:text-4xl mb-4" />
                <h4 className="text-sm sm:text-lg lg:text-xl font-semibold">Green Bus Shelters</h4>
              </div>

              {/* Card 3 */}
              <div className="p-6 rounded-xl text-center flex flex-col justify-center items-center ">
                <FaBus className="text-yellow text-3xl sm:text-4xl mb-4" />
                <h4 className="text-sm sm:text-lg lg:text-xl font-semibold">Smart Bus Shelters</h4>
              </div>

              {/* Card 4 */}
              <div className="p-6 rounded-xl text-center flex flex-col justify-center items-center ">
                <FaCity className="text-yellow text-3xl sm:text-4xl mb-4" />
                <h4 className="text-sm sm:text-lg lg:text-xl font-semibold">City Beautification Projects</h4>
              </div>

              {/* Card 5 */}
              <div className="p-6 rounded-xl text-center flex flex-col justify-center items-center ">
                <FaBuilding className="text-yellow text-3xl sm:text-4xl mb-4" />
                <h4 className="text-sm sm:text-lg lg:text-xl font-semibold">City Development & Cleaning Projects</h4>
              </div>

              {/* Card 6 */}
              <div className="p-6 rounded-xl text-center flex flex-col justify-center items-center ">
                <FaRecycle className="text-yellow text-3xl sm:text-4xl mb-4" />
                <h4 className="text-sm sm:text-lg lg:text-xl font-semibold">Zero Waste & Recycling Projects</h4>
              </div>

              {/* Card 7 */}
              <div className="p-6 rounded-xl text-center flex flex-col justify-center items-center ">
                <FaBuilding className="text-yellow text-3xl sm:text-4xl mb-4" />
                <h4 className="text-sm sm:text-lg lg:text-xl font-semibold">Public Area Branding with PPP</h4>
              </div>

              {/* Card 8 */}
              <div className="p-6 rounded-xl text-center flex flex-col justify-center items-center ">
                <FaLeaf className="text-yellow text-3xl sm:text-4xl mb-4" />
                <h4 className="text-sm sm:text-lg lg:text-xl font-semibold">Green City Projects</h4>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Section with Card and Another List */}
      <motion.div
        className="w-full lg:w-1/2 h-auto p-6 lg:pr-24 relative"
        initial={{ x: "-100%" }} // Start from the left
        animate={{ x: 0 }} // Slide to the center
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
      >
        {/* Card Container */}
        <div className="relative z-10 bg-primary p-8 rounded-xl mb-6">
          {/* Title */}
          <h2 className="text-xl lg:text-3xl font-extrabold mb-6">
            Sustainability Projects in Central Province
          </h2>

          {/* Image */}
          <img
            src={rightImage} // Replace with the image URL
            alt="Advertising Agency"
            className="w-full h-64 object-cover mb-6 p-5 bg-white shadow-lg rounded-lg"
          />

          <button className="text-xl font-bold mb-4 bg-yellow text-secondary px-10 py-2 rounded-md hover:bg-yellow-600">
            Get In Touch
          </button>
          {/* Description */}
          <p className="text-base lg:text-xl font-medium mt-4">
            City beautification and Tree plantation projects, Smart city
            developments, Public area cleaning and maintain with PPP concept,
            Effective campaigns against plastic and polythene, Rural education
            and transportation developments. Safety crossing and public area
            safety assurance projects, Tourism engagements and destination
            promotions.
          </p>

          {/* Quote */}
          <div className="mt-10 text-center text-Secondary tracking-wide text-xl md:text-3xl font-semibold">
            <p>
              TOWARDS A PLASTIC FREE & SMART CITY CONCEPT
              <br />
              SUSTAINABLE OUTDOOR ADVERTISING "
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
