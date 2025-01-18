import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion from framer-motion
import bgImage from "../../assets/Images/contactusbg.jpg";

const ContactUs = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="h-[20vh] flex items-center justify-center bg-cover bg-center relative font-futura"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Hero content */}
        <div className="relative text-center z-10 px-5 sm:px-10">
          {/* Title */}
          <motion.h1
            className="text-4xl sm:text-5xl font-semibold font-futura text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Contact Us
          </motion.h1>
        </div>
      </div>

      {/* Contact Us Section */}
      <section className="bg-white">
        {/* Title at the top */}
        <motion.div
          className="text-center mt-10 font-futura"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-xl sm:text-4xl font-semibold tracking-wider text-secondary">
            The <span className="text-yellow">Largest</span> Outdoor{" "}
            <span className="text-yellow">Advertising</span> Agency in Kandy
          </h1>
        </motion.div>

        <div className="container px-6 py-5 mx-auto">
          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-1">
            {/* First Row (Content Section - Display in a Line) */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:grid-cols-4 text-center font-futura"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring" }}
              viewport={{ once: true }}
            >
              {/* Address Card */}
              <div className="flex flex-col items-center border-2 border-yellow p-5 shadow-lg rounded-lg hover:shadow-xl  transition-all duration-300">
                <span className="inline-block p-3 text-secondary rounded-full bg-gray-800">
                  <FaMapMarkerAlt className="w-10 h-10 text-yellow" />
                </span>
                <h2 className="mt-4 text-xl md:text-3xl font-bold text-secondary">
                  Address
                </h2>
                <p className="mt-2 text-lg text-gray-700">
                  93, Captain's Deck, Rajapihilla Mw, Kandy 20000
                </p>
              </div>

              {/* Email Card */}
              <div className="flex flex-col items-center border-2 border-yellow p-5 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
                <span className="inline-block p-3 text-secondary rounded-full bg-yellow-100/80 dark:bg-gray-800">
                  <FaEnvelope className="w-10 h-10 text-yellow" />
                </span>
                <h2 className="mt-4 text-xl md:text-3xl font-bold text-secondary">
                  Email
                </h2>
                <p className="text-lg text-secondary">Our friendly team is here to help.</p>
                <p className="mt-2 text-lg text-blue-600">talk@kandybtl.lk</p>
              </div>

              {/* Phone Card */}
              <div className="flex flex-col items-center border-2 border-yellow p-5 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
                <span className="inline-block p-3 text-secondary rounded-full bg-yellow-100/80 dark:bg-gray-800">
                  <FaPhoneAlt className="w-10 h-10 text-yellow" />
                </span>
                <h2 className="mt-4 text-xl md:text-3xl font-bold text-secondary">
                  Telephone
                </h2>
                <p className="mt-2 text-lg text-blue-600">+94 (70) 7272 420</p>
              </div>

              {/* Opening Hours Card */}
              <div className="flex flex-col items-center border-2 border-yellow p-5 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300">
                <span className="inline-block p-3 text-secondary rounded-full bg-yellow-100/80 dark:bg-gray-800">
                  <FaClock className="w-10 h-10 text-yellow" />
                </span>
                <h2 className="mt-4 text-xl md:text-3xl font-bold text-secondary">
                  Opening Hours
                </h2>
                <p className="mt-2 text-base text-secondary">
                  Monday – Friday: 09:00 - 17:00
                </p>
                <p className="text-bs text-secondary">
                  Saturday – Sunday: 10:00 - 14:00
                </p>
              </div>
            </motion.div>

            {/* Note Section */}
            <motion.div
              className="mt-4 text-center tracking-wider font-futura"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring" }}
              viewport={{ once: true }}
            >
              <p className="text-base md:text-xl text-secondary font-bold">
                <span className="text-red-500">Note:</span> Studio complex and
                workshop is closed on weekends.
              </p>
            </motion.div>

            {/* Second Row (Map Section) */}
            <motion.div
              className="overflow-hidden rounded-lg lg:col-span-1 h-96 lg:h-auto md:p-5 bg-secondary mb-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <iframe
                width="100%"
                height="500"
                frameborder="0"
                title="map"
                marginheight="0"
                marginwidth="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=93,%20Captain's%20Deck,%20Rajapihilla%20Mw,%20Kandy%2020000&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
