import React, { useState, useEffect } from 'react';
import slide1 from "../../assets/slide01.jpg";
import slide2 from "../../assets/slide02.jpg";
import slide3 from "../../assets/slide03.jpg";
import slide4 from "../../assets/slide04.jpg";
import slide5 from "../../assets/slide05.jpg";

const Discover = () => {
  const images = [slide1, slide2, slide3, slide4, slide5];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous image
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  // Function to go to the next image
  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  // Automatically slide every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNext();
    }, 3000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="flex flex-col md:flex-row h-auto bg-primary">
      {/* Left Section: Image Slider */}
      <div className="w-full md:w-1/2 h-full p-4 overflow-hidden relative">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 50}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-[50%] h-full flex-shrink-0 relative border-4 border-yellow-500"
            >
              <img
                src={image}
                alt={`Ad ${index + 1}`}
                className="w-full h-[400px] sm:h-[600px] object-cover rounded-lg shadow-lg"
              />
              {/* Black overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg" />
            </div>
          ))}
        </div>

        {/* Carousel navigation */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white">
          <button className="bg-black p-2 rounded-full" onClick={goToPrevious}>
            ‹
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white">
          <button className="bg-black p-2 rounded-full" onClick={goToNext}>
            ›
          </button>
        </div>
      </div>

      {/* Right Section: Text Content */}
      <div className="w-full md:w-1/2 h-full p-4 md:p-20 flex flex-col justify-center font-poppins">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Discover the Power of Kandy's Leading Advertising Agency
        </h2>
        <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-4">
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
      </div>
    </div>
  );
};

export default Discover;
