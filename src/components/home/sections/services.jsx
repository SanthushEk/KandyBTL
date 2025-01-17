import React from "react";
import {
  FaBullhorn,
  FaMapSigns,
  FaBus,
  FaFireAlt,
  FaFutbol,
  FaCircle,
  FaStore,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Service = () => {
  const services = [
    {
      icon: <FaBullhorn />,
      title: "Hoardings & Billboards",
      description:
        "We provide large-format advertising solutions on hoardings and billboards for maximum visibility.",
    },
    {
      icon: <FaMapSigns />,
      title: "Signage Branding",
      description:
        "Custom signage to boost brand awareness in high-traffic areas.",
    },
    {
      icon: <FaBus />,
      title: "Bus Shelter Advertising",
      description:
        "Brand your message at key transport points with bus shelter advertising.",
    },
    {
      icon: <FaFireAlt />,
      title: "Brand Activations",
      description:
        "Engage customers through immersive and interactive brand activation campaigns.",
    },
    {
      icon: <FaFutbol />,
      title: "Sports & Entertainment",
      description:
        "Maximize exposure through targeted sports and entertainment sponsorships.",
    },
    {
      icon: <FaCircle />,
      title: "Roundabout Branding",
      description:
        "Position your brand at high-visibility roundabouts for maximum impact.",
    },
    {
      icon: <FaStore />,
      title: "Mall Activations & Events",
      description:
        "Drive traffic and sales through captivating mall events and activations.",
    },
  ];

  return (
    <div className="py-10 px-5 sm:px-10 bg-gray-50">
      <h2 className="text-4xl font-semibold text-center mb-8 font-futura">
        Our Services
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, index) => {
          const { ref, inView } = useInView({
            triggerOnce: false, // Ensure it triggers both on scroll down and up
            threshold: 0.5, // Element considered in view when 50% is visible
          });

          return (
            <motion.div
              key={index}
              className="group relative text-center bg-white shadow-lg h-[22rem] w-[20rem] p-6 transition-all duration-800"
              ref={ref}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }} // Initial state: smaller and rotated
              animate={{
                opacity: inView ? 1 : 0, // Animate opacity based on visibility
                scale: inView ? 1 : 0.8, // Scale up when in view
                rotate: inView ? 0 : -10, // Rotate the element slightly when out of view
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring", // Smooth, natural animation with spring
                stiffness: 150, // Adjust for more dynamic effect
                damping: 25, // More natural movement
              }}
            >
              {/* Clipped Border by Default */}
              <div className="absolute inset-0 border-2 border-gray-300 rounded-lg clip-corners transition-all duration-800 group-hover:border-yellow"></div>

              <div className="relative z-10">
                {/* Centered Icon */}
                <div className="flex items-center justify-center text-5xl text-yellow mb-4 mx-auto group-hover:text-yellow-600 h-20">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold font-futura mb-2 group-hover:text-yellow-600">
                  {service.title}
                </h3>
                <hr className="w-16 border-t-2 border-yellow mx-auto mb-4 transition-all duration-500 group-hover:w-32" />
                <p className="text-lg text-gray-700 group-hover:text-yellow-600 font-futura">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
