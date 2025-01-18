import React from "react";
import techImage from "../../../assets/Images/tech.jpg";
import studioImage from "../../../assets/Images/studio.jpg";
import softwareImage from "../../../assets/Images/software.jpg";
import strategyImage from "../../../assets/Images/STRATAGIE.jpg";

const Others = () => {
  const items = [
    {
      image: techImage,
      title: "Tech",
      description:
        "Our cutting-edge technology solutions are designed to simplify complex processes, enhance user experiences, and drive innovation. From advanced tools to seamless integrations, we empower businesses to thrive in the digital era.",
    },
    {
      image: studioImage,
      title: "Studio",
      description:
        "Our creative studio transforms ideas into visually compelling realities. Specializing in design, branding, and multimedia content, we ensure your brand's story is communicated effectively across all platforms.",
    },
    {
      image: softwareImage,
      title: "Softwares",
      description:
        "We develop robust software solutions tailored to your unique business needs. Our expertise spans web applications, enterprise systems, and mobile apps to help your organization achieve its goals efficiently.",
    },
    {
      image: strategyImage,
      title: "Strategies",
      description:
        "We offer strategic insights and solutions to elevate your brand's presence and maximize impact. Our comprehensive approach ensures that every campaign is both innovative and results-driven.",
    },
  ];

  return (
    <div className="bg-primary py-12 px-6 font-futura">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-wide text-secondary mb-2">
          Without Boundaries
        </h1>
        <p className="text-lg sm:text-xl text-secondary tracking-wide mb-8">
          Igniting brands and events through our Event Marketing-led design
          studio. We bring together innovative ideas and strategic execution to
          deliver unparalleled results.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm sm:text-sm lg:text-base text-gray-600 mt-4 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Others;
