import React, { useState, useEffect } from "react";
import { FaBullhorn, FaRegHandPointRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import bgImage from "../../assets/OutdorBG.jpg"; // Replace with your actual background image path

const items = [
  { title: "Flyer promotions", description: "Engage audiences with flyers.", icon: <FaBullhorn /> },
  { title: "Street activation", description: "Create interactive street events.", icon: <FaRegHandPointRight /> },
  { title: "Mall events", description: "Host promotions in malls.", icon: <FaBullhorn /> },
  { title: "Consumer Experience promos", description: "Boost brand with hands-on promos.", icon: <FaRegHandPointRight /> },
  { title: "Exhibitions", description: "Showcase at events.", icon: <FaBullhorn /> },
  { title: "Guerrilla marketing", description: "Creative, unconventional tactics.", icon: <FaRegHandPointRight /> },
  { title: "Sports Marketing", description: "Engage through sports events.", icon: <FaBullhorn /> },
  { title: "Customer engagement activities", description: "Build relationships with customers.", icon: <FaRegHandPointRight /> },
  { title: "Research and Data Collection", description: "Understand markets better.", icon: <FaBullhorn /> },
  { title: "Gym & Salon promotions", description: "Specialized promotional activities.", icon: <FaRegHandPointRight /> },
  { title: "Campus and Garment factory activations", description: "Target specific locations.", icon: <FaBullhorn /> },
  { title: "Seasonal promotions", description: "Promotions for special times of the year.", icon: <FaRegHandPointRight /> },
];

const StreetPromo = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 4;

  // Automatic sliding functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Adjust timing (e.g., 5000ms for 5 seconds)
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [startIndex]);

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + cardsToShow < items.length ? prevIndex + cardsToShow : 0
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex - cardsToShow >= 0 ? prevIndex - cardsToShow : items.length - cardsToShow
    );
  };

  const visibleItems = items.slice(startIndex, startIndex + cardsToShow);

  return (
    <div
      className="w-full h-auto bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})`,
      backgroundAttachment: "fixed",    
      backgroundSize: "cover", }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto py-10 px-6 font-poppins text-center text-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
          Brand Activations & Street Promotions
        </h2>

        {/* Card Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 m-8">
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg text-white flex flex-col items-center border-2 border-yellow"
            >
              <div className="text-4xl text-yellow mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-yellow text-secondary rounded-full hover:bg-yellow-600 transition-colors"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-yellow text-secondary rounded-full hover:bg-yellow-600 transition-colors"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Call to Action Button */}
        <div className="mt-10">
          <button
            className="px-8 py-3 bg-yellow text-black rounded-full font-semibold text-lg hover:bg-yellow-600 transition-colors"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default StreetPromo;
