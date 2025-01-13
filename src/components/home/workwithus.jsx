import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import bgimage from "../../assets/image1.jpg";
import { FaPenFancy, FaUsers, FaBullhorn, FaGlobe } from "react-icons/fa"; // Importing icons for the cards

const WorkWithUs = () => {
  // Intersection Observer hook to detect when cards are visible
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  return (
    <div className="flex flex-col md:flex-row h-auto md:h-[70vh] mt-8 mb-8">
      {/* Left section with bg-primary */}
      <div className="w-full md:w-1/2 bg-primary p-2 flex items-center font-poppins">
        {/* New container to align content to the left and center it vertically */}
        <div className="w-full text-left pl-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Kandy, Sri Lanka</h2>
          <p className="text-sm sm:text-base md:text-base mb-4">
            Kandy BTL's expansive outdoor advertising network covers a wide range of impactful platforms, including roadside billboards, bus shelter ads, roundabout and iconic locations branding, street marketing as well as underpass, overpass, and railway station advertising. Our reach extends into the heart of local communities and bustling high streets across Kandy, effectively engaging both local and foreign audiences alike. Whether it's tourism destinations or high-traffic urban areas, our strategic placements ensure maximum visibility as people move through the region.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">10 Years of Undefeated Successes</h2>

          {/* Work With Us Button */}
          <div className="text-left mt-6 mb-5">
            <button className="px-6 py-3 bg-yellow text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors">
              Work With Us
            </button>
          </div>
        </div>
      </div>

      {/* Right section with background image and black overlay */}
      <div
        className="w-full md:w-1/2 relative bg-cover bg-center h-[50vh] md:h-full"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>

        {/* Cards grid centered in the background */}
        <div
          ref={ref}
          className="p-5 absolute inset-0 flex justify-center items-center font-poppins"
        >
          <div className="grid grid-cols-2 gap-6 w-[500px] md:w-[600px]">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-white border border-yellow rounded-lg p-4">
              <FaPenFancy className="text-3xl md:text-5xl text-yellow mb-4" />
              <h3 className="text-sm md:text-lg text-center mb-2">
                Creatives per Year
              </h3>
              <p className="text-xl md:text-2xl font-bold">
                {inView && (
                  <CountUp start={4000} end={5000} duration={2} separator="," />
                )}
                +
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-white border border-yellow rounded-lg p-4">
              <FaUsers className="text-3xl md:text-5xl text-yellow mb-4" />
              <h3 className="text-sm md:text-lg text-center mb-2">
                International Designers
              </h3>
              <p className="text-xl md:text-2xl font-bold">
                {inView && <CountUp start={0} end={36} duration={2} />}
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-white border border-yellow rounded-lg p-4">
              <FaBullhorn className="text-3xl md:text-5xl text-yellow mb-4" />
              <h3 className="text-sm md:text-lg text-center mb-2">
                OOH Marketing Campaigns
              </h3>
              <p className="text-xl md:text-2xl font-bold">
                {inView && (
                  <CountUp start={0} end={1120} duration={2} separator="," />
                )}
                +
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center text-white border border-yellow rounded-lg p-4">
              <FaGlobe className="text-3xl md:text-5xl text-yellow mb-4" />
              <h3 className="text-sm md:text-lg text-center mb-2">
                Globally Merged Agencies
              </h3>
              <p className="text-xl md:text-2xl font-bold">
                {inView && <CountUp start={0} end={7} duration={2} />}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
