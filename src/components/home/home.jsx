import React, { useState, useEffect } from "react";
import bg1 from "../../assets/bg_image.jpg";
import bg2 from "../../assets/bg_image3.jpg";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBullhorn,
  FaMapSigns,
  FaBus,
  FaFireAlt,
  FaFutbol,
  FaCircle,
  FaStore,
} from "react-icons/fa";

const home = () => {
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
        "We specialize in seamlessly integrating traditional outdoor advertising with advanced digital strategies, utilizing CGI marketing, AI-driven productions, and the latest innovations from industry leaders like Meta and ByteDance. Our holistic approach delivers a powerful, one-stop solution that ensures brands, clients, and agencies achieve maximum visibility and engagement across both physical and digital landscapes.",
    },
  ];

  const services = [
    {
      title: "Hoardings",
      description: "Premium roadside hoardings for maximum visibility.",
    },
    {
      title: "Bus Branding",
      description:
        "Reach thousands daily with effective SLTB and private bus ads.",
    },
    {
      title: "Roundabout Ads",
      description:
        "Strategically placed roundabout branding for higher engagement.",
    },
    {
      title: "Tuk-tuk Advertising",
      description: "App-based tuk-tuk branding for localized reach.",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change the background image and content every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // 5 seconds interval
    return () => clearInterval(interval);
  }, [slides.length]);

  // Navigate to the previous image
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Navigate to the next image
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const { image, title, subtitle, description } = slides[currentImageIndex];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-[70vh] bg-cover bg-center relative transition-all duration-1000 flex items-center justify-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Navigation arrows */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2  bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition z-20"
        >
          <FaArrowLeft size={30} /> {/* React Icon for left arrow */}
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition z-20"
        >
          <FaArrowRight size={30} /> {/* React Icon for right arrow */}
        </button>

        {/* Hero content */}
        <div className="relative text-center z-10 px-5 sm:px-10">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold font-montserrat mb-4 flex justify-center items-center text-white">
            <span className="w-10 h-0.5 bg-yellow mr-3"></span>
            {title}
            <span className="w-10 h-0.5 bg-yellow ml-3"></span>
          </h1>
          <p className="text-xl sm:text-3xl mb-4 font-montserrat font-medium text-white">
            {subtitle}
          </p>
          <p className="px-10 text-base sm:text-lg md:text-lg font-montserrat mb-6 text-white font-medium">
            {description}
          </p>
          <a
            href="#contact"
            className="bg-yellow text-secondary py-3 px-10 rounded-lg text-sm hover:bg-secondary transition"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* Our Services Section */}
      <section id="services" className="py-16 bg-gray-100">
      <div className="py-8 px-5 sm:px-10">
        <h2 className="text-3xl font-bold text-center mb-12 font-montserrat">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Service 1 - Hoardings & Billboards */}
          <div className="group text-center bg-white shadow-lg rounded-lg p-8 h-80 border-2 border-transparent transition-all duration-500 hover:border-[rgba(255,221,51,1)] hover:shadow-xl">
            <FaBullhorn className="text-5xl text-yellow mb-4 mx-auto group-hover:text-yellow-600" />
            <h3 className="text-xl font-bold font-montserrat mb-2 group-hover:text-yellow-600">Hoardings & Billboards</h3>
            <hr className="w-16 border-t-2 border-yellow mx-auto mb-4 transition-all duration-500 group-hover:w-24" />
            <p className="text-lg text-gray-700 group-hover:text-yellow-600">We provide large-format advertising solutions on hoardings and billboards for maximum visibility.</p>
          </div>

          {/* Service 2 - Signage Branding */}
          <div className="group text-center bg-white shadow-lg rounded-lg p-8 h-80 border-2 border-transparent transition-all duration-500 hover:border-[rgba(255,221,51,1)] hover:shadow-xl">
            <FaMapSigns className="text-5xl text-yellow mb-4 mx-auto group-hover:text-yellow-600" />
            <h3 className="text-xl font-bold font-montserrat mb-2 group-hover:text-yellow-600">Signage Branding</h3>
            <hr className="w-16 border-t-2 border-yellow mx-auto mb-4 transition-all duration-500 group-hover:w-24" />
            <p className="text-lg text-gray-700 group-hover:text-yellow-600">Custom signage to boost brand awareness in high-traffic areas.</p>
          </div>

          {/* Service 3 - Bus Shelter Advertising */}
          <div className="group text-center bg-white shadow-lg rounded-lg p-8 h-80 border-2 border-transparent transition-all duration-500 hover:border-[rgba(255,221,51,1)] hover:shadow-xl">
            <FaBus className="text-5xl text-yellow mb-4 mx-auto group-hover:text-yellow-600" />
            <h3 className="text-xl font-bold font-montserrat mb-2 group-hover:text-yellow-600">Bus Shelter Advertising</h3>
            <hr className="w-16 border-t-2 border-yellow mx-auto mb-4 transition-all duration-500 group-hover:w-24" />
            <p className="text-lg text-gray-700 group-hover:text-yellow-600">Brand your message at key transport points with bus shelter advertising.</p>
          </div>

          {/* Service 4 - Brand Activations */}
          <div className="group text-center bg-white shadow-lg rounded-lg p-8 h-80 border-2 border-transparent transition-all duration-500 hover:border-[rgba(255,221,51,1)] hover:shadow-xl">
            <FaFireAlt className="text-5xl text-yellow mb-4 mx-auto group-hover:text-yellow-600" />
            <h3 className="text-xl font-bold font-montserrat mb-2 group-hover:text-yellow-600">Brand Activations</h3>
            <hr className="w-16 border-t-2 border-yellow mx-auto mb-4 transition-all duration-500 group-hover:w-24" />
            <p className="text-lg text-gray-700 group-hover:text-yellow-600">Engage customers through immersive and interactive brand activation campaigns.</p>
          </div>

          {/* Service 5 - Sports & Entertainment */}
          <div className="group text-center bg-white shadow-lg rounded-lg p-8 h-80 border-2 border-transparent transition-all duration-500 hover:border-[rgba(255,221,51,1)] hover:shadow-xl">
            <FaFutbol className="text-5xl text-yellow mb-4 mx-auto group-hover:text-yellow-600" />
            <h3 className="text-xl font-bold font-montserrat mb-2 group-hover:text-yellow-600">Sports & Entertainment</h3>
            <hr className="w-16 border-t-2 border-yellow mx-auto mb-4 transition-all duration-500 group-hover:w-24" />
            <p className="text-lg text-gray-700 group-hover:text-yellow-600">Maximize exposure through targeted sports and entertainment sponsorships.</p>
          </div>

          {/* Service 6 - Roundabout Branding */}
          <div className="group text-center bg-white shadow-lg rounded-lg p-8 h-80 border-2 border-transparent transition-all duration-500 hover:border-[rgba(255,221,51,1)] hover:shadow-xl">
            <FaCircle className="text-5xl text-yellow mb-4 mx-auto group-hover:text-yellow-600" />
            <h3 className="text-xl font-bold font-montserrat mb-2 group-hover:text-yellow-600">Roundabout Branding</h3>
            <hr className="w-16 border-t-2 border-yellow mx-auto mb-4 transition-all duration-500 group-hover:w-24" />
            <p className="text-lg text-gray-700 group-hover:text-yellow-600">Position your brand at high-visibility roundabouts for maximum impact.</p>
          </div>

          {/* Service 7 - Mall Activations & Events */}
          <div className="group text-center bg-white shadow-lg rounded-lg p-8 h-80 border-2 border-transparent transition-all duration-500 hover:border-[rgba(255,221,51,1)] hover:shadow-xl">
            <FaStore className="text-5xl text-yellow mb-4 mx-auto group-hover:text-yellow-600" />
            <h3 className="text-xl font-bold font-montserrat mb-2 group-hover:text-yellow-600">Mall Activations & Events</h3>
            <hr className="w-16 border-t-2 border-yellow mx-auto mb-4 transition-all duration-500 group-hover:w-24" />
            <p className="text-lg text-gray-700 group-hover:text-yellow-600">Drive traffic and sales through captivating mall events and activations.</p>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default home;
