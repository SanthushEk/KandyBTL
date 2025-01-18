import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const Quote = () => {
  return (
    <div className="flex justify-center items-center p-8 md:p-16 bg-gray-100 rounded-lg shadow-md">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }} // Enable animation when scrolling up or down
      >
        <motion.h2
          className="text-2xl md:text-4xl font-semibold text-secondary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Shifting Mindsets
        </motion.h2>

        <motion.p
          className="text-base md:text-2xl text-secondary mt-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Powered by a <span className="text-yellow">systematic</span> platform,
          we connect <span className="text-yellow">freelancers</span> to jobs,
          clients, and each <span className="text-yellow">other</span>.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Quote;
