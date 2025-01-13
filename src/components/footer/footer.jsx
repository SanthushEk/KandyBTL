import React from "react";
import logo from "../../assets/logo.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-footer text-white py-10 font-poppins">
      {/* KANDY BTL Section */}
      <div className="container mx-auto mb-8">
        {/* Text Section */}
        <div>
          <h2 className="text-2xl font-semibold">
            KANDY <span className="text-yellow">BTL</span>
          </h2>
          <p className="mt-4">
            The <span className="text-yellow">Living Room</span> changed and our{" "}
            <span className="text-yellow">Commute</span> stopped following
            patterns and set transport choices.
            <span className="text-yellow">Personas</span> are outdated. Two very
            similar individuals, or groups, can have completely different
            behaviours and tastes. And{" "}
            <span className="text-yellow">Mass Media or above-the-line</span> is
            a concept from the past. Great effective advertising starts here,
            from creative to activation, with industry-leading media buying and
            planning.
          </p>
          <p className="mt-2">
            <strong>Mon - Sat:</strong> 8:00 - 17:30
          </p>
          <p>
            <strong>Sunday:</strong> CLOSED
          </p>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="container mx-auto mb-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* City Office Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">City Office</h3>
          <p>
            94, Captain's Square, Rajapihilla Mw,
            <br />
            Kandy, 20000, Sri Lanka
          </p>
        </div>

        {/* Our Locations Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Locations</h3>
          <ul>
            <li>Studio Complex in Pallekele</li>
            <li>Activation House - Aniwatthe</li>
            <li>Workshop 23, Rosita Estate, Nillambe, Kandy</li>
          </ul>
        </div>
      </div>
      
      {/* Horizontal Line */}
      <hr className="border-gray-600 mb-8" />
      
      {/* Bottom Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mb-4 text-center md:text-left">
        {/* Left side - Updated Text */}
        <p>
          &copy; 2025 All Rights Reserved | Designed & Developed by{" "}
          <span className="font-semibold text-yellow">
            Silicon Radon Networks (Pvt) Ltd
          </span>
        </p>

        {/* Right side - Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
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
    </footer>
  );
};

export default Footer;
