import React from "react";
import {
  FaHotel,
  FaHeart,
  FaRocket,
  FaWrench,
  FaPalette,
  FaRoute,
  FaBullhorn,
  FaMapMarkerAlt,
  FaDrawPolygon,
  FaPenFancy,
  FaTools,
  FaDraftingCompass,
  FaPaintBrush,
  FaUsers,
} from "react-icons/fa";

const Brands = () => {
  const items = [
    { icon: <FaHotel className="text-4xl text-yellow" />, title: "Hospitality" },
    { icon: <FaHeart className="text-4xl text-yellow" />, title: "Fan Engagement" },
    { icon: <FaRocket className="text-4xl text-yellow" />, title: "Launches" },
    { icon: <FaWrench className="text-4xl text-yellow" />, title: "Event Build" },
    { icon: <FaPalette className="text-4xl text-yellow" />, title: "Design and Styling" },
    { icon: <FaRoute className="text-4xl text-yellow" />, title: "Consumer Journey" },
    { icon: <FaBullhorn className="text-4xl text-yellow" />, title: "Event Brand" },
    { icon: <FaMapMarkerAlt className="text-4xl text-yellow" />, title: "Event Collateral" },
    { icon: <FaDrawPolygon className="text-4xl text-yellow" />, title: "Event Design" },
    { icon: <FaPenFancy className="text-4xl text-yellow" />, title: "Concept Drawing" },
    { icon: <FaTools className="text-4xl text-yellow" />, title: "CAD & Render" },
    { icon: <FaDraftingCompass className="text-4xl text-yellow" />, title: "Creative Services" },
    { icon: <FaPaintBrush className="text-4xl text-yellow" />, title: "Graphic Design" },
    { icon: <FaUsers className="text-4xl text-yellow" />, title: "In-House Design Team" },
  ];

  return (
    <div className="flex flex-col justify-center bg-white text-center py-10 px-5 font-poppins">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
      Brand Activation
      </h2>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-gray-600 mb-8">
        Developing event marketing campaigns and projects for brands and not-for-profits.
      </p>

      {/* Icons Section */}
      <div className="flex flex-col items-center gap-8">
        {/* First Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-8 w-full">
          {items.slice(0, 7).map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center p-4 border-2 border-yellow rounded-lg  transition-all"
            >
              {item.icon}
              <span className="text-sm sm:text-base text-secondary mt-2">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 w-full">
          {items.slice(7).map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center p-4 border-2 border-yellow rounded-lg  transition-all"
            >
              {item.icon}
              <span className="text-sm sm:text-base text-secondary mt-2">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
