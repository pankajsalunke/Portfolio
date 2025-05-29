import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaBehance,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import {Link, useNavigate} from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-black text-gray-300 py-5">
      <div className="container mx-auto text-center">

        {/* <nav className="mt-4 flex justify-center space-x-6">
          {[
            "Home",
            "Aboutme",
            "Skills",
            "Resume",
            "Portfolio",
            "Contactme",
          ].map((item) => (
            <button
              key={item}
              onClick={() => {
                if (item === "Home") {
                  let ite = item.split("Home").concat("/")[2];
                  navigate(`${ite}`);
                } else {
                  navigate(`/${item.toLocaleLowerCase()}`);
                }
              }}
              className="hover:text-orange-400 transition duration-300"
            >
              {item}
            </button>
          ))}
        </nav> */}

        <div className="flex justify-center space-x-6 mt-6">
          <Link
            to={"https://www.instagram.com/pankajsalunke29/"}
            target="_blank"
            className="text-xl hover:text-orange-400"
          >
            <FaInstagram />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/pankaj-salunke-3342b7203"}
            target="_blank"
            className="text-xl hover:text-orange-400"
          >
            <FaLinkedin />
          </Link>
          <Link
            to={"https://github.com/pankajsalunke"}
            target="_blank"
            className="text-xl hover:text-orange-400"
          >
            <FaGithub />
          </Link>
        </div>

        <div className="mt-6 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <h1 className="font-semibold">:</h1>
            <span>salunkep610@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone />
            <h1 className="font-semibold">:</h1>
            <span>+91 7447890852</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
