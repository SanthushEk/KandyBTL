import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import bgImage from '../../assets/contactbg.jpg';

const ContactUs = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  return (
    <div
      className="relative bg-cover bg-center h-[100vh] flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Title */}
      <motion.h1
        className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold font-quoteFonts mb-8 text-center text-white relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <span className="w-8 md:w-10 h-0.5 bg-yellow inline-block mr-3"></span>
        CONTACT US
        <span className="w-8 md:w-10 h-0.5 bg-yellow inline-block ml-3"></span>
      </motion.h1>

      {/* Cards */}
      <motion.div
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl px-4 sm:px-6 md:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Address Card */}
        <motion.div
          className="p-6 rounded-lg shadow-md flex flex-col border-2 border-yellow items-center text-center bg-opacity-60 bg-secondary"
          variants={cardVariants}
        >
          <div className="text-yellow text-3xl sm:text-4xl mb-4">
            <FaMapMarkerAlt />
          </div>
          <h2 className="text-xl sm:text-2xl text-yellow font-semibold mb-2 font-quoteFonts">
            Our Address
          </h2>
          <p className="text-sm sm:text-base font-medium text-white">
            93, Captain's Deck, Rajapihilla Mw, Kandy 20000
          </p>
        </motion.div>

        {/* Phone Card */}
        <motion.div
          className="p-6 rounded-lg shadow-md flex flex-col border-2 border-yellow items-center text-center bg-opacity-60 bg-secondary"
          variants={cardVariants}
        >
          <div className="text-yellow text-3xl sm:text-4xl mb-4">
            <FaPhoneAlt />
          </div>
          <h2 className="text-xl sm:text-2xl text-yellow font-semibold mb-2 font-quoteFonts">
            Call Us
          </h2>
          <p className="text-sm sm:text-base font-medium text-white">
            +94 (70) 7272420
          </p>
        </motion.div>

        {/* Email Card */}
        <motion.div
          className="p-6 rounded-lg shadow-md flex flex-col border-2 border-yellow items-center text-center bg-opacity-60 bg-secondary"
          variants={cardVariants}
        >
          <div className="text-yellow text-3xl sm:text-4xl mb-4">
            <FaEnvelope />
          </div>
          <h2 className="text-xl sm:text-2xl text-yellow font-semibold mb-2 font-quoteFonts">
            Email Us
          </h2>
          <p className="text-sm sm:text-base font-medium text-white">
            talk@kandybtl.lk
          </p>
        </motion.div>
      </motion.div>

      {/* Opening Hours */}
      <motion.div
        className="relative z-10 mt-8 max-w-4xl px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="border-2 border-yellow p-6 rounded-lg shadow-md text-center bg-opacity-60 bg-secondary">
          <h2 className="text-xl sm:text-2xl text-yellow font-semibold mb-2 font-futura">
            Opening Hours
          </h2>
          <p className="text-sm sm:text-base font-medium text-white mb-4">
            Studio complex and workshop is closed on weekends
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm sm:text-base font-medium text-white">Monday – Friday</p>
              <p className="text-sm sm:text-base font-medium text-yellow">09:00 - 17:00</p>
            </div>
            <div>
              <p className="text-sm sm:text-base font-medium text-white">Saturday – Sunday</p>
              <p className="text-sm sm:text-base font-medium text-yellow">10:00 - 14:00</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
