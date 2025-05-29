import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 text-xl mb-6">
          <a
            href="https://www.instagram.com/pankajsalunke29/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/pankaj-salunke-3342b7203"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/pankajsalunke"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            <FaGithub />
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>salunkep610@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone />
            <span>+91 7447890852</span>
          </div>
        </div>


        <p className="mt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} Pankaj Salunke. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
