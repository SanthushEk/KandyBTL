import React from "react";
import { FaLeaf, FaClock, FaDesktop, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion
import rightImage from "../../../assets/Images/nightTown.jpg"; // Updated image
import bgImage from "../../../assets/Images/town.jpg"; // Example background image

const WorkWithUs = () => {
  const isMobile = window.innerWidth < 768; // Detect mobile screens

  return (
    <div className="flex flex-col lg:flex-row h-auto bg-primary font-futura m-4">
      {/* Left Section */}
      <motion.div
        className="w-full lg:w-1/2 h-auto p-6 lg:p-12 bg-cover relative"
        style={{ backgroundImage: `url(${bgImage})` }}
        initial={{ opacity: 0, x: isMobile ? -50 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-secondary opacity-90 rounded-lg"></div>

        {/* Content */}
        <div className="relative z-10 text-white font-futura border-2 border-gray-500 p-14 lg:pt-24 rounded-sm mb-6 h-full">
          {/* Title and Subtitle */}
          <div className="relative z-10 text-white pl-0 md:pl-48">
            <h1 className="text-4xl font-semibold mb-2 tracking-wider">We Follow The Best Practices</h1>
            <h2 className="text-xl font-light mb-6 tracking-wide ">Brand positioning through Public Private Partnership Programmes</h2>
            
            {/* List Section */}
            <ul className="space-y-4">
              <li className="flex items-center space-x-5 mb-6">
                <FaLeaf className="text-4xl text-yellow" />
                <div>
                  <h3 className="text-2xl tracking-wide font-semibold">Sustainability</h3>
                  <p className="text-lg">We prioritize eco-friendly practices in every step of our process.</p>
                </div>
              </li>
              <li className="flex items-center space-x-4 mb-6">
                <FaClock className="text-4xl text-yellow" />
                <div>
                  <h3 className="text-2xl tracking-wide font-semibold">Project On Time</h3>
                  <p className="text-lg">We ensure timely delivery of projects without compromising quality.</p>
                </div>
              </li>
              <li className="flex items-center space-x-4 mb-6">
                <FaDesktop className="text-4xl text-yellow" />
                <div>
                  <h3 className="text-2xl tracking-wide font-semibold">Modern Technology</h3>
                  <p className="text-lg">We leverage the latest technologies for innovative solutions.</p>
                </div>
              </li>
              <li className="flex items-center space-x-4 mb-6">
                <FaLightbulb className="text-4xl text-yellow" />
                <div>
                  <h3 className="text-2xl tracking-wide font-semibold">Creative Concepts</h3>
                  <p className="text-lg">We bring fresh, creative ideas to drive your brand forward.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Right Section */}
{/* Right Section */}
<motion.div
  className="w-full lg:w-1/2 h-full p-10 lg:pr-36 relative"
  initial={{ opacity: 0, x: isMobile ? 50 : 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
  <div className="relative z-10 mb-6">
    <h1 className="text-4xl tracking-wider font-bold text-secondary mb-4">Kandy Sri Lanka</h1>
    <p className="text-lg tracking-wide text-secondary mb-6">
      Kandy BTL's expansive outdoor advertising network covers a wide range of impactful platforms, including roadside billboards, bus shelter ads, roundabout and iconic locations branding, street marketing as well as underpass, overpass, and railway station advertising. Our reach extends into the heart of local communities and bustling high streets across Kandy, effectively engaging both local and foreign audiences alike. Whether it's tourism destinations or high-traffic urban areas, our strategic placements ensure maximum visibility as people move through the region.
    </p>
    {/* Right Image Card */}
  <div className="relative z-10 mt-8 bg-white shadow-lg rounded-lg p-4 mb-5">
    <img
      src={rightImage}
      alt="Kandy Sri Lanka"
      className="w-full h-80 object-cover rounded-lg mb-4"
    />

  </div>
    <h2 className="text-2xl tracking-wide text-secondary font-semibold mb-4">10 Years of Undefeated Successes</h2>
    <button className="bg-yellow text-secondary px-8 py-2 rounded-lg font-bold tracking-wide transition duration-300">Work with Us</button>
  </div> 
</motion.div>

    </div>
  );
};

export default WorkWithUs;
