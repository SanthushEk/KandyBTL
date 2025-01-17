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
import backgroundImage from '../../../assets/Images/brands.jpg'; // Import your background image

const Brands = () => {
  const items = [
    { icon: <FaHotel className="text-4xl text-yellow" />, title: "Hospitality", description: "We provide top-tier hospitality services to enhance customer experience during events." },
    { icon: <FaHeart className="text-4xl text-yellow" />, title: "Fan Engagement", description: "Engaging fans with creative content and activities to increase brand loyalty." },
    { icon: <FaRocket className="text-4xl text-yellow" />, title: "Launches", description: "We specialize in product launches, ensuring a successful introduction to the market." },
    { icon: <FaWrench className="text-4xl text-yellow" />, title: "Event Build", description: "Expertise in constructing events from the ground up, including logistics and setup." },
    { icon: <FaPalette className="text-4xl text-yellow" />, title: "Design and Styling", description: "Crafting visually appealing designs and styling for events to create memorable experiences." },
    { icon: <FaRoute className="text-4xl text-yellow" />, title: "Consumer Journey", description: "Mapping out and optimizing the consumer journey to improve brand interactions." },
    { icon: <FaBullhorn className="text-4xl text-yellow" />, title: "Event Brand", description: "Creating a cohesive and impactful event brand identity that resonates with audiences." },
    { icon: <FaMapMarkerAlt className="text-4xl text-yellow" />, title: "Event Collateral", description: "Designing and producing event-specific materials such as signage, brochures, and promotional items." },
    { icon: <FaDrawPolygon className="text-4xl text-yellow" />, title: "Event Design", description: "Full event design services, from conceptualization to execution, ensuring everything aligns with your vision." },
    { icon: <FaPenFancy className="text-4xl text-yellow" />, title: "Concept Drawing", description: "Providing detailed concept drawings to visualize event layouts and setups." },
    { icon: <FaTools className="text-4xl text-yellow" />, title: "CAD & Render", description: "Using CAD software to create detailed designs and 3D renderings for event spaces." },
    { icon: <FaDraftingCompass className="text-4xl text-yellow" />, title: "Creative Services", description: "Offering a range of creative services, including graphic design, branding, and marketing." },
    { icon: <FaPaintBrush className="text-4xl text-yellow" />, title: "Graphic Design", description: "Designing visually compelling graphics that communicate your brand message effectively." },
    { icon: <FaUsers className="text-4xl text-yellow" />, title: "In-House Design Team", description: "A dedicated in-house team focused on delivering high-quality design solutions." },
  ];

  return (
    <div
      className="relative w-full bg-cover bg-center text-white font-futura"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use imported background image
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-secondary opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center text-center py-10 px-5">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-wide text-white mb-2">
          Brand Activation
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white tracking-wide mb-8">
          Developing event marketing campaigns and projects for brands and not-for-profits.
        </p>

        {/* Icons Section */}
        <div className="flex flex-col items-center gap-8">
          {/* First Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-8 w-full">
            {items.slice(0, 7).map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center p-4  rounded-lg transition-all"
              >
                {item.icon}
                <span className="text-sm sm:text-base mt-2">{item.title}</span>
                <p className="text-xs sm:text-sm mt-2 text-center">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 w-full">
            {items.slice(7).map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center p-4  rounded-lg transition-all"
              >
                {item.icon}
                <span className="text-sm sm:text-base mt-2">{item.title}</span>
                <p className="text-xs sm:text-sm mt-2 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
