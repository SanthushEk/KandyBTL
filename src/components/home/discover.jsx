import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion
import slide1 from "../../assets/slide01.jpg";
import slide2 from "../../assets/slide02.jpg";
import slide3 from "../../assets/slide03.jpg";
import slide4 from "../../assets/slide04.jpg";
import slide5 from "../../assets/slide05.jpg";

const Discover = () => {
  const images = [slide1, slide2, slide3, slide4, slide5];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNext, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col md:flex-row h-auto bg-primary m-4">
      {/* Left Section: Image Slider */}
      <div className="w-full md:w-1/2 h-full p-4 relative">
        <img
          src={images[currentIndex]}
          alt={`Ad ${currentIndex + 1}`}
          className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover rounded-lg shadow-lg"
        />

        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white">
          <button
            className="bg-black p-2 rounded-full hover:bg-yellow-500 transition-colors"
            onClick={goToPrevious}
          >
            <FaChevronLeft size={20} />
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white">
          <button
            className="bg-black p-2 rounded-full hover:bg-yellow-500 transition-colors"
            onClick={goToNext}
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index
                  ? "bg-yellow"
                  : "bg-white opacity-50 hover:opacity-100"
              } transition-opacity`}
            ></button>
          ))}
        </div>
      </div>

      {/* Right Section with Motion Frame */}
      <div className="w-full md:w-1/2 h-full p-4 md:p-20 flex flex-col justify-center font-futura">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Discover the Power of Kandy's Leading Advertising Agency
          </h2>
          <h3 className="text-lg sm:text-base font-semibold text-secondary mb-4">
            Out of Home Ads by KANDY BTL, The Ultimate Way to Connect with Your On-the-Go Audience
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Looking to engage your audience while they’re outdoors? Kandy BTL offers a diverse range of advertising
            modules, available in both static and interactive formats, designed to capture attention whether your audience
            is enjoying a coffee or commuting.
          </p>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            We recognize the impact of outdoor advertising and provide extensive reach and engagement with your key
            demographics. Our comprehensive advertising solutions encompass all outdoor media channels, strategically
            planned and positioned to ensure you connect with the right target audience.
          </p>
          <div className="text-left mt-6 mb-5">
            <button className="px-6 py-3 bg-yellow text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors">
              Work With Us
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Discover;
