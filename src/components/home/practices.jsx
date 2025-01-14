import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaLeaf, FaClock, FaDesktop, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion
import backgroundImage from "../../assets/town.jpg"; // Import the background image

const Practices = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto bg-white text-white">
      {/* Left Section with Animation */}
      <motion.div
        className="w-full md:w-1/2 h-auto relative bg-cover bg-center p-6 flex flex-col justify-center items-start space-y-4"
        style={{
          backgroundImage: `url(${backgroundImage})`, // Use the imported background image
        }}
        initial={{ opacity: 0 }} // Start with 0 opacity
        whileInView={{ opacity: 1 }} // Fade in to full opacity when in view
        transition={{ duration: 0.8 }} // Duration of the fade-in effect
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        <div className="relative z-10 p-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Sustainability Projects in Central Province
          </h2>
          <p className="mb-4">
            City beautification and Tree plantation projects, Smart city developments, Public area cleaning and maintenance with PPP concept, Effective campaigns against plastic and polythene, Rural education and transportation developments. Safety crossing and public area safety assurance projects, Tourism engagements and destination promotions.
          </p>
          <button className="px-6 py-3 bg-yellow text-black font-semibold rounded-lg hover:bg-yellow-600 transition-colors">
            Get in Touch
          </button>
          <ul className="space-y-2 mt-6">
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-yellow" />
              <span>Roundabout & Traffic island branding</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-yellow" />
              <span>Green Bus shelters | Smart bus shelters</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-yellow" />
              <span>City beautification projects</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-yellow" />
              <span>City development and cleaning projects</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-yellow" />
              <span>Zero waste and recycling projects</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-yellow" />
              <span>Public area branding with public-private-partnerships</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-yellow" />
              <span>Green city projects</span>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Right Section with Animation */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center items-center space-y-4 font-poppins py-5"
        initial={{ opacity: 0 }} // Start with 0 opacity
        whileInView={{ opacity: 1 }} // Fade in to full opacity when in view
        transition={{ duration: 0.8 }} // Duration of the fade-in effect
      >
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-secondary">
            We Follow The Best Practices
          </h2>
          <p className="text-lg text-yellow font-semibold">
            Brand positioning through Public Private Partnership Programmes
          </p>
        </div>

        {/* Icon Section with Border */}
        <motion.div
          className="grid grid-cols-2 gap-6 border-2 border-yellow p-6 rounded-lg"
          initial={{ opacity: 0 }} // Start with 0 opacity
          whileInView={{ opacity: 1 }} // Fade in when in view
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center space-y-4 text-secondary">
            <FaLeaf className="text-secondary text-4xl" />
            <span className="text-xl">Sustainability</span>
          </div>
          
          <div className="flex flex-col items-center space-y-4 text-secondary">
            <FaClock className="text-secondary text-4xl" />
            <span className="text-xl">Project On Time</span>
          </div>

          <div className="flex flex-col items-center space-y-4 text-secondary">
            <FaDesktop className="text-secondary text-4xl" />
            <span className="text-xl">Modern Technology</span>
          </div>

          <div className="flex flex-col items-center space-y-4 text-secondary">
            <FaLightbulb className="text-secondary text-4xl" />
            <span className="text-xl">Creative Concepts</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Practices;
