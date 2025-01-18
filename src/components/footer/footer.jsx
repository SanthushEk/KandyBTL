import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-footer text-white py-10 px-5 font-futura">
      {/* Grid Layout with 4 Sections */}
      <div className="container mx-auto mb-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* KANDY BTL Section */}
        <div>
          <h2 className="text-2xl font-bold">
            KANDY <span className="text-yellow">BTL</span>
          </h2>
          <p className="mt-4 text-sm font-medium tracking-wider">
            The <span className="text-yellow">Living Room</span> changed and our{" "}
            <span className="text-yellow">Commute</span> stopped following
            patterns and set transport choices. <span className="text-yellow">Personas</span> are outdated.
            Two very similar individuals, or groups, can have completely different behaviours and tastes. 
            And <span className="text-yellow">Mass Media</span> or above-the-line is a concept from the past.
            Great effective advertising starts here, from creative to activation, with industry-leading media buying and planning.
          </p>
          <p className="mt-5">
            <strong className="text-yellow">Mon - Sat:</strong> 8:00 - 17:30
          </p>
          <p>
            <strong className="text-yellow">Sunday:</strong> CLOSED
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="ml-0 md:ml-20">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/service" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/contactus" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* City Office Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">City Office</h3>
          <p>
            94, Captain's Square, Rajapihilla Mw,
            <br />
            Kandy, 20000, Sri Lanka
          </p>
        </div>

        {/* Our Locations Section with Social Media Icons */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our Locations</h3>
          <ul>
            <li>Studio Complex in Pallekele</li>
            <li>Activation House - Aniwatthe</li>
            <li>Workshop 23, Rosita Estate, Nillambe, Kandy</li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="https://facebook.com" className="hover:text-yellow">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" className="hover:text-yellow">
              <FaSquareXTwitter size={24} />
            </a>
            <a href="https://instagram.com" className="hover:text-yellow">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" className="hover:text-yellow">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-gray-600 mb-2" />

      {/* Bottom Section */}
      <div className="container mx-auto flex justify-center items-center text-center">
        {/* Updated Text */}
        <p className="text-sm md:text-sm">
          &copy; 2025 All Rights Reserved | Designed & Developed by{" "}
          <span className="font-semibold text-yellow">
            Silicon Radon Networks (Pvt) Ltd
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;