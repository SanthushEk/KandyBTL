import React from "react";
import { FaCheck } from "react-icons/fa";
import bgImage from "../../assets//outdorImg.jpg"; // Example background image


const Outdoor = () => {
  const outdoorItems = [
    "Backdrops",
    "Exhibition Stalls",
    "Street name boards",
    "Gantries",
    "Hoardings",
    "Events",
    "Press conference",
    "CSR Events",
    "Bus shelter Ads",
    "Roundabout branding",
    "Light boxes",
    "Outdoor advertising",
    "Pylon signages",
    "Dealer boards",
    "Street marketing",
  ];

  return (
    <div className="flex flex-col md:flex-row h-auto bg-primary font-poppins m-4">
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-6 md:p-12">

        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Outdoor Modules</h2>
        <p className="text-gray-700 mb-6">
          Boasting an extensive portfolio of over 175 advertising sites across road networks, railway stations, and public
          locations, our outdoor inventory effectively reaches 95% of the population in the Kandy district. This unparalleled
          coverage ensures that your message resonates with a wide audience, maximizing visibility and engagement throughout
          the region.
        </p>
        <button className="px-6 py-3 bg-yellow text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors">
          Call to Action
        </button>
      </div>

      {/* Right Section */}
      <div
        className="w-full md:w-1/2 h-auto p-6 md:p-12 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>

        {/* Content */}
        <div className="relative z-10 text-white font-poppins">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-yellow">Our Offerings</h3>
          <ul className="grid grid-cols-2 gap-4 text-lg">
            {outdoorItems.map((item, index) => (
              <li key={index} className="flex items-center">
                <FaCheck className="mr-2 text-yellow" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Outdoor;
