import React, { useState } from "react";
import {
  FaSearch,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { BsFillCaretDownFill } from "react-icons/bs";
import { FiAlignJustify, FiMoreVertical } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai"; // For email icon
import { IoLocationSharp, IoCallSharp, IoTimeOutline } from "react-icons/io5"; // For location and call icons
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo.jpg"; // Import logo image (if it's inside src folder)

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false); // State for managing search visibility
  const [isMoreMenuOpen, setMoreMenuOpen] = useState(false); // State for toggling the three-dot menu
  const [activeItem, setActiveItem] = useState(null); // State for tracking active navbar item

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => {
      console.log(prev); // Log the current state
      return !prev;
    });
  };

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen); // Toggle search visibility
  };

  const toggleMoreMenu = () => {
    setMoreMenuOpen(!isMoreMenuOpen); // Toggle three-dot menu
  };

  const handleNavItemClick = (item) => {
    setActiveItem(item); // Set the active item when clicked
  };

  return (
    <>
      {/* Top Bar with Address, Phone, Email, and Social Media */}
      <div className="bg-white text-secondary py-2 font-montserrat font-medium hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          {/* Left Section */}
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <IoLocationSharp size={18} className="text-yellow" />
              <span>93, Captain's Deck, Rajapihilla Mw, Kandy 20000</span>
            </div>
            <div className="flex items-center space-x-2">
              <IoCallSharp size={18} className="text-yellow" />
              <span>+94 (70) 7272420</span>
            </div>
            <div className="flex items-center space-x-2">
              <AiOutlineMail size={18} className="text-yellow" />
              <span>talk@kandybtl.lk</span>
            </div>
            <div className="flex items-center space-x-2">
              <IoTimeOutline size={18} className="text-yellow" />
              <span>Mon - Sat 8:00 - 17:30, Sunday - CLOSED</span>
            </div>
          </div>

          {/* Right Section: Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={18}
                className="text-secondary hover:text-yellow"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter
                size={18}
                className="text-secondary hover:text-yellow"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={18}
                className="text-secondary hover:text-yellow"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={18}
                className="text-secondary hover:text-yellow"
              />
            </a>
          </div>
        </div>
      </div>

      <nav className="flex justify-between items-center p-4 bg-gray-800 text-primary font-poppins font-medium">
        {/* Left: Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className={`transition-all duration-300 ease-in-out transform ${
              isMobileMenuOpen ? "rotate-180" : ""
            }`}
          >
            {/* Conditionally render Hamburger or Left Arrow icon */}
            {isMobileMenuOpen ? (
              <FiArrowRight
                size={24}
                className="transition-transform transform"
              />
            ) : (
              <FiAlignJustify
                size={24}
                className="transition-transform transform"
              />
            )}
          </button>
        </div>

        {/* Left: Logo */}
        <div className="flex items-center space-x-2 flex-grow md:flex-none justify-start md:justify-center">
          <img src={logo} alt="Logo" className="h-12" />
        </div>

        {/* Center: Navbar Menu (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-6 justify-start">
          {/* Home */}
          <div
            onClick={() => handleNavItemClick("home")}
            className={`cursor-pointer hover:text-yellow transition-all duration-300 ease-in-out ${
              activeItem === "home" ? "text-yellow" : ""
            }`}
          >
            Home
          </div>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center cursor-pointer transition-all duration-300 ease-in-out"
            >
              <span
                className={`mr-2 hover:text-yellow ${
                  activeItem === "services" ? "text-yellow" : ""
                }`}
              >
                Services
              </span>
              <BsFillCaretDownFill />
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white text-black p-2 shadow-lg">
                <li
                  className="py-1 px-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleNavItemClick("corporate")}
                >
                  Corporate Events
                </li>
                <li
                  className="py-1 px-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleNavItemClick("sport")}
                >
                  Sport Events
                </li>
              </ul>
            )}
          </div>

          {/* Contact Us */}
          <div
            onClick={() => handleNavItemClick("contact")}
            className={`cursor-pointer hover:text-yellow transition-all duration-300 ease-in-out ${
              activeItem === "contact" ? "text-secondary" : ""
            }`}
          >
            Contact Us
          </div>
        </div>

        {/* Right: Search Bar and More (Mobile) */}
        <div className="flex items-center space-x-2">
          {/* Search Bar - Only show icon initially, input shows when clicked */}
          <div className="relative">
            {isSearchOpen ? (
              <input
                type="text"
                placeholder="Search"
                className="p-2 pl-3 pr-10 rounded-lg bg-transparent border-2 border-yellow text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : null}

            {/* Search Icon Button */}
            <button
              onClick={toggleSearch}
              className="absolute right-0 top-1/2 transform -translate-y-1/2  p-2 rounded-r-md transition-all duration-300 ease-in-out"
            >
              <FaSearch size={18} />
            </button>
          </div>

          {/* Three-dot Menu (Visible only on mobile) */}
          <div className="md:hidden">
            <button
              onClick={toggleMoreMenu}
              className={`text-white transition-all duration-300 ease-in-out transform ${
                isMoreMenuOpen ? "scale-60" : "scale-80"
              }`} // Apply scaling transition when clicked
            >
              <FiMoreVertical size={24} />
            </button>

            {/* More Menu Content */}
            {isMoreMenuOpen && (
              <div className="absolute top-20 right-0 w-full bg-primary text-secondary p-4 shadow-lg z-50">
                <div className="space-y-4">
                  {/* Address Section */}
                  <div className="flex items-center space-x-2">
                    <IoLocationSharp size={20} className="text-yellow" />
                    <span className="hover:text-yellow">
                      93, Captain's Deck, Rajapihilla Mw, Kandy 20000
                    </span>
                  </div>

                  {/* Phone Number Section */}
                  <div className="flex items-center space-x-2">
                    <IoCallSharp size={20} className="text-yellow" />
                    <span className="hover:text-yellow">+94 (70) 7272420</span>
                  </div>

                  {/* Email Section */}
                  <div className="flex items-center space-x-2">
                    <AiOutlineMail size={20} className="text-yellow" />
                    <span className="hover:text-yellow">talk@kandybtl.lk</span>
                  </div>

                  {/* Working Hours Section */}
                  <div className="flex items-center space-x-2">
                    <IoTimeOutline size={20} className="text-yellow" />
                    <span className="hover:text-yellow">
                      Mon - Sat 8:00 - 17:30, Sunday - CLOSED
                    </span>
                  </div>

                  {/* Social Media Icons - Centered */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook
                        size={24}
                        className="text-secondary hover:text-yellow"
                      />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareXTwitter
                        size={24}
                        className="text-secondary hover:text-yellow"
                      />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram
                        size={24}
                        className="text-secondary hover:text-yellow"
                      />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin
                        size={24}
                        className="text-secondary hover:text-yellow"
                      />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu (Show when hamburger is clicked) */}
        {isMobileMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-primary text-black p-4 shadow-lg md:hidden z-50">
            <ul>
              <li
                className="py-2 px-2 hover:bg-yellow cursor-pointer rounded-lg"
                onClick={() => handleNavItemClick("home")}
              >
                Home
              </li>
              <li
                className="py-2 px-2 hover:bg-yellow cursor-pointer rounded-lg"
                onClick={() => handleNavItemClick("services")}
              >
                Services
              </li>
              <li
                className="py-2 px-2 hover:bg-yellow cursor-pointer rounded-lg"
                onClick={() => handleNavItemClick("contact")}
              >
                Contact Us
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
