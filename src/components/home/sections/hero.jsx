import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import "swiper/css";

// Import images
import bgImage1 from "../../../assets/Images/contactbg.jpg";
import bgImage2 from "../../../assets/Images/bg_image.jpg";

const Hero = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // Track the active slide index

  const slides = [
    {
      bgImage: bgImage1,
      title: "Out-of-Home Advertising",
      subtitle: "Driving Brand Visibility in Kandy",
      description: `Kandy BTL is a premier outdoor advertising company in Kandy, 
        offering a vast and diverse portfolio that includes railway stations ads, 
        roadside hoardings, roundabout branding, and bus shelter advertisements. 
        Our reach extends further with branding on transport networks, covering 
        SLTB buses, private coaches, and app-based tuk-tuk branding.`,
    },
    {
      bgImage: bgImage2,
      title: "Out-of-Home Advertising",
      subtitle: "Kandy BTL’s Diverse Outdoor Advertising Solutions",
      description: `We specialize in seamlessly integrating traditional outdoor 
        advertising with advanced digital strategies, utilizing CGI marketing, 
        AI-driven productions, and the latest innovations from industry leaders 
        like Meta and ByteDance. Our holistic approach delivers a powerful, 
        one-stop solution that ensures brands, clients, and agencies achieve 
        maximum visibility and engagement across both physical and digital landscapes.`,
    },
  ];

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="relative w-full h-[80vh] font-futura">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        loop
        className="h-[80vh]"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <div
              className="relative h-[80vh] flex items-center justify-center"
              style={{
                backgroundImage: `url(${slide.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-secondary bg-opacity-50 z-0"></div>
              <motion.div
                className="relative z-10 text-center text-white p-6 max-w-5xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: [0, 1, 1, 0], // Fade in, stay, and fade out
                  y: [50, 0, 0, 50], // Slide in, stay, and slide out
                }}
                transition={{
                  duration: 4, // Matches slide delay (5000ms)
                  times: [0, 0.25, 0.75, 1], // Keyframe percentages
                  repeat: Infinity, // Infinite loop
                }}
              >
                <motion.h2
                  className="text-2xl md:text-6xl font-bold tracking-wider flex items-center justify-center"
                  animate={{
                    opacity: [0, 1, 1, 0], // Same keyframes as parent
                  }}
                  transition={{
                    duration: 4,
                    times: [0, 0.25, 0.75, 1],
                    repeat: Infinity,
                  }}
                >
                  <span className="w-10 h-1 bg-yellow mr-3"></span>
                  {slide.title}
                  <span className="w-10 h-1 bg-yellow ml-3"></span>
                </motion.h2>
                <motion.h3
                  className="text-xl md:text-3xl tracking-wide text-yellow font-medium mt-2 mb-4"
                  animate={{
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 4,
                    times: [0, 0.25, 0.75, 1],
                    repeat: Infinity,
                  }}
                >
                  {slide.subtitle}
                </motion.h3>
                <motion.p
                  className="text-base md:text-xl mb-16 font-medium"
                  animate={{
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 4,
                    times: [0, 0.25, 0.75, 1],
                    repeat: Infinity,
                  }}
                >
                  {slide.description}
                </motion.p>
                <motion.button
                  className="bg-yellow hover:bg-yellow text-secondary px-6 py-2 rounded-md text-lg font-bold"
                  animate={{
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 4,
                    times: [0, 0.25, 0.75, 1],
                    repeat: Infinity,
                  }}
                  onClick={() => window.open("https://wa.me/", "_blank")}
                >
                  WhatsApp Us
                </motion.button>
              </motion.div>
              <div className="absolute inset-y-0 left-4 hidden md:flex items-center justify-center z-10">
                <button
                  className="text-white rounded-full p-3 hover:bg-opacity-75"
                  onClick={handlePrev}
                >
                  <FaArrowLeft size={20} />
                </button>
              </div>
              <div className="absolute inset-y-0 right-4 hidden md:flex items-center justify-center z-10">
                <button
                  className="text-white rounded-full p-3 hover:bg-opacity-75"
                  onClick={handleNext}
                >
                  <FaArrowRight size={20} />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
