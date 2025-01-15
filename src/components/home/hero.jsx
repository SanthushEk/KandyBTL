import React, { useState, useEffect } from "react";
import bg1 from "../../assets/bg_image.jpg";
import bg2 from "../../assets/contactbg.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion

const Hero = () => {
  const slides = [
    {
      image: bg1,
      title: "Out-of-Home Advertising",
      subtitle: "Driving Brand Visibility in Kandy",
      description:
        "Kandy BTL is a premier outdoor advertising company in Kandy, offering a vast and diverse portfolio that includes railway stations ads, roadside hoardings, roundabout branding, and bus shelter advertisements. Our reach extends further with branding on transport networks, covering SLTB buses, private coaches, and app-based tuk-tuk branding.",
    },
    {
      image: bg2,
      title: "Out-of-Home Advertising",
      subtitle: "Kandy BTL’s Diverse Outdoor Advertising Solutions",
      description:
        "We specialize in seamlessly integrating traditional outdoor advertising with advanced digital strategies, utilizing CGI marketing, AI-driven productions, and the latest innovations from industry leaders like Meta and ByteDance. Our holistic approach delivers a powerful, one-stop solution that ensures brands, clients, and agencies achieve maximum visibility and engagement across both physical and digital landscapes",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Navigate to the previous slide
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Navigate to the next slide
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const { image, title, subtitle, description } = slides[currentImageIndex];

  return (
    <div
      className="h-[80vh] bg-cover bg-center relative transition-all duration-1000 flex items-center justify-center font-futura"
      style={{
        backgroundImage: `url(${image})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Navigation arrows */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition z-20"
      >
        <FaArrowLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition z-20"
      >
        <FaArrowRight size={24} />
      </button>

      {/* Hero content */}
      <div className="relative text-center z-10 px-5 sm:px-10">
        {/* Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold font-futura mb-4 flex justify-center items-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="w-10 h-0.5 bg-yellow mr-3"></span>
          {title}
          <span className="w-10 h-0.5 bg-yellow ml-3"></span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl sm:text-3xl mb-4 font-bold  text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {subtitle}
        </motion.p>

        {/* Description */}
        <motion.p
          className="px-10 md:px-40 text-lg sm:text-xl md:text-xl  mb-16 text-white font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          {description}
        </motion.p>

        {/* WhatsApp button */}
        <a
          href="#contact"
          className="bg-yellow text-secondary py-3 px-10 rounded-lg text-lg transition font-poppins font-semibold"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Hero;
