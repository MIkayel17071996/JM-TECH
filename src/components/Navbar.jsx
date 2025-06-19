import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Added useLocation to detect active route
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "../assets/logo1-P.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Hook to get current route

  // List of navigation items
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent overflow-hidden">
      <div className="w-full px-2 sm:px-4 lg:px-6 backdrop-blur-md bg-white/5">
        <div className="flex justify-between items-center h-40 w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="JM Tech Logo"
                className="h-45 sm:h-50 md:h-55 lg:h-62 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <ul className="flex gap-5 list-none p-0 m-0">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className={`px-4 py-2 rounded-full text-lg font-medium transition-colors duration-300 ${
                        isActive
                          ? "bg-[#FBBF1F] text-black"
                          : "text-white hover:text-[#FBBF24]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#FBBF24] focus:outline-none focus:ring-2 focus:ring-[#FBBF24] p-2 rounded-md transition-colors duration-300"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden w-full ${
            isOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4 bg-gray-900/95 rounded-lg shadow-lg py-4 w-full px-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  to={item.href}
                  key={item.label}
                  className={`text-lg font-medium transition-all duration-300 ease-in-out block px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FBBF24] focus:ring-opacity-75 ${
                    isActive
                      ? "bg-white text-black"
                      : "text-gray-200 hover:bg-[#FBBF24]/20 hover:text-[#FBBF24]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;