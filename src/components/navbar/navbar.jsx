import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
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
import logo from "../../assets/Images/logo.jpg"; // Import logo image (if it's inside src folder)

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
      <div className="bg-secondary text-primary tracking-wide py-2 font-futura font-bold hidden md:block">
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
                className="text-primary hover:text-yellow"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter
                size={18}
                className="text-primary hover:text-yellow"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={18}
                className="text-primary hover:text-yellow"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={18}
                className="text-primary hover:text-yellow"
              />
            </a>
          </div>
        </div>
      </div>

      <nav className="flex justify-between items-center p-4 bg-primary text-secondary font-futura font-bold border-b-2 border-yellow">
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
          <h1 className="text-xl font-sans pl-4">Kandy<span className="text-yellow">BTL</span></h1>
        </div>

        {/* Center: Navbar Menu (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-6 justify-between text-xl tracking-wider">
          {/* Home */}
          <Link
            to="/"
            onClick={() => handleNavItemClick("home")}
            className={`cursor-pointer hover:text-yellow transition-all duration-300 ease-in-out ${
              activeItem === "home" ? "text-yellow" : ""
            }`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <Link
            to="/service"
            onClick={() => handleNavItemClick("services")}
            className={`cursor-pointer hover:text-yellow transition-all duration-300 ease-in-out ${
              activeItem === "services" ? "text-yellow" : ""
            }`}
          >
            Services
          </Link>

          {/* Contact Us */}
          <Link
            to="/contactus"
            onClick={() => handleNavItemClick("contact")}
            className={`cursor-pointer hover:text-yellow transition-all duration-300 ease-in-out ${
              activeItem === "contact" ? "text-yellow" : ""
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Right: Search Bar and More (Mobile) */}
        <div className="flex items-center space-x-2">
          {/* Search Bar - Only show icon initially, input shows when clicked */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="p-2 pl-3 pr-10 rounded-lg bg-transparent border border-yellow text-white focus:outline-none md:w-48 w-32"
            />

            {/* Search Icon Button */}
            <button
              onClick={toggleSearch}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-r-md transition-all duration-300 ease-in-out"
            >
              <FaSearch size={18} className="text-yellow" />
            </button>
          </div>

          {/* Three-dot Menu (Visible only on mobile) */}
          <div className="md:hidden">
            <button
              onClick={toggleMoreMenu}
              className={`text-secondary transition-all duration-300 ease-in-out transform ${
                isMoreMenuOpen ? "scale-60" : "scale-80"
              }`}
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
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu (Toggle this when Hamburger is clicked) */}
      {isMobileMenuOpen && (
        <div className="flex flex-col space-y-4 p-4 bg-primary text-secondary font-futura md:hidden">
          <Link
            to="/"
            onClick={() => handleNavItemClick("home")}
            className="text-xl font-bold text-secondary"
          >
            Home
          </Link>
          <Link
            to="/service"
            onClick={() => handleNavItemClick("services")}
            className="text-xl font-bold text-secondary"
          >
            Services
          </Link>
          <Link
            to="/contactus"
            onClick={() => handleNavItemClick("contactus")}
            className="text-xl font-bold text-secondary"
          >
            Contact Us
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;