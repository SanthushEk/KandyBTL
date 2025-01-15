import React, { useState } from "react";
import { FaBusinessTime, FaBullhorn, FaRecycle, FaHandsHelping } from "react-icons/fa";
import { useInView } from "react-intersection-observer"; // For scroll detection
import CountUp from "react-countup"; // For number animation
import bgImage from "../../assets/image3.jpg"; // Replace with your actual background image path

const Numbers = () => {
  const [hasAnimated, setHasAnimated] = useState(false); // Track animation state
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    onChange: (inView) => {
      if (inView) setHasAnimated(true);
    },
  });

  return (
    <div
      className="w-full h-auto md:h-[45vh] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})`,
      backgroundAttachment: "fixed",    
      backgroundSize: "cover", }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div ref={ref} className="relative z-10 container mx-auto py-10 px-6 font-futura">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold text-white mb-8">
          Numbers Speak
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-6">
          {/* Card 1: Years in Business */}
          <div className="p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center text-white bg-opacity-80">
            <FaBusinessTime className="text-4xl sm:text-5xl text-yellow mb-3 sm:mb-5" />
            <h3 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-3">
              {hasAnimated && <CountUp start={0} end={10} duration={2} />}
            </h3>
            <p className="text-sm sm:text-lg">Years in Business</p>
          </div>

          {/* Card 2: BTL Advertising Projects */}
          <div className="p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center text-white bg-opacity-80">
            <FaBullhorn className="text-4xl sm:text-5xl text-yellow mb-3 sm:mb-5" />
            <h3 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-3">
              {hasAnimated && <CountUp start={0} end={3278} duration={2.5} separator="," />}
            </h3>
            <p className="text-sm sm:text-base">BTL Advertising Projects</p>
          </div>

          {/* Card 3: CSR & PR Campaigns */}
          <div className="p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center text-white bg-opacity-80">
            <FaHandsHelping className="text-4xl sm:text-5xl text-yellow mb-3 sm:mb-5" />
            <h3 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-3">
              {hasAnimated && <CountUp start={0} end={320} duration={2} />}
            </h3>
            <p className="text-sm sm:text-lg">CSR & PR Campaigns</p>
          </div>

          {/* Card 4: Sustainability Projects */}
          <div className="p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center text-white bg-opacity-80">
            <FaRecycle className="text-4xl sm:text-5xl text-yellow mb-3 sm:mb-5" />
            <h3 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-3">
              {hasAnimated && <CountUp start={0} end={260} duration={2} />}
            </h3>
            <p className="text-sm sm:text-lg">Sustainability Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
