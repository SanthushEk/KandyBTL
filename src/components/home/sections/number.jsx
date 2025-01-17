import React, { useState } from "react";
import { FaBusinessTime, FaBullhorn, FaRecycle, FaHandsHelping, FaPaintBrush, FaGlobe, FaUsers, FaTasks } from "react-icons/fa";
import { useInView } from "react-intersection-observer"; // For scroll detection
import { motion } from "framer-motion"; // Framer Motion
import CountUp from "react-countup"; // For number animation
import bgImage from "../../../assets/Images/image3.jpg"; // Replace with your actual background image path

const Numbers = () => {
  const [hasAnimated, setHasAnimated] = useState(false); // Track animation state
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    onChange: (inView) => {
      if (inView) setHasAnimated(true);
    },
  });

  const data = [
    {
      icon: <FaBusinessTime />,
      title: "Years in Business",
      count: 10,
      duration: 2,
    },
    {
      icon: <FaBullhorn />,
      title: "BTL Advertising Projects",
      count: 3278,
      duration: 2.5,
      separator: ",",
    },
    {
      icon: <FaHandsHelping />,
      title: "CSR & PR Campaigns",
      count: 320,
      duration: 2,
    },
    {
      icon: <FaRecycle />,
      title: "Sustainability Projects",
      count: 260,
      duration: 2,
    },
    {
      icon: <FaPaintBrush />,
      title: "Creatives per Year",
      count: 5000,
      duration: 2.5,
      separator: ",",
    },
    {
      icon: <FaUsers />,
      title: "International Designers",
      count: 36,
      duration: 2,
    },
    {
      icon: <FaTasks />,
      title: "OOH Marketing Campaigns",
      count: 1120,
      duration: 2.5,
      separator: ",",
    },
    {
      icon: <FaGlobe />,
      title: "Globally Merged Agencies",
      count: 7,
      duration: 2,
    },
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="w-full h-auto md:h-[50vh] lg:h-[70vh] bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-secondary opacity-60"></div>

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 container mx-auto py-10 px-6 font-futura text-center"
      >
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-wider text-white mb-8">
          Numbers Speak
        </h2>

        {/* Grid Layout with Framer Motion */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"} // Animate based on inView
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center text-white bg-opacity-80 border border-gray-500"
              variants={itemVariants}
            >
              <div className="text-3xl sm:text-3xl text-yellow mb-4 ">
                {item.icon}
              </div>
              <h3 className="text-xl sm:text-xl font-bold mb-2 ">
                {hasAnimated && (
                  <CountUp
                    start={0}
                    end={item.count}
                    duration={item.duration}
                    separator={item.separator}
                  />
                )}
              </h3>
              <p className="text-sm sm:text-base">{item.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Numbers;
