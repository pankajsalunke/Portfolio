import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.webp";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navItems = ["home", "aboutme", "skills", "portfolio", "resume", "contactme"];

  return (
    <div className="bg-gradient-to-r from-gray-950 via-blue-900 to-gray-950 shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="flex justify-center items-center p-4 max-w-6xl mx-auto">
        {/* Logo */}
        {/* <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={logo}
            alt="Logo"
          />
        </div> */}

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white text-lg font-medium">
          {navItems.map((item) => (
            <li
              key={item}
              className="relative group cursor-pointer capitalize transition duration-300"
            >
              <Link
                to={item}
                smooth={true}
                duration={200}
                offset={-80}
                className="hover:text-orange-500 transition-colors duration-300"
              >
                {item}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gray-950 text-white text-lg font-medium space-y-4 py-4 transition-all duration-300">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={200}
                offset={-80}
                onClick={closeMenu}
                className="hover:text-orange-500 transition-colors duration-300 capitalize"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
