import React from "react";
import { useNavigate ,Link as nav} from "react-router-dom";
import logo from "../assets/logo.webp";
import { Link } from "react-scroll";



const NavBar = () => {
  const navigate = useNavigate();

  return (


    <div className="bg-gradient-to-r from-gray-950 via-blue-900 to-gray-950 shadow-md fixed top-0 left-0 right-0 z-50">


      <nav className="flex justify-center items-center  p-6 max-w-6xl mx-auto">
        {/* <div className="flex items-center">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={logo}
            alt="Logo"
          />
        </div> */}

        <ul className="flex space-x-6 text-white text-lg font-medium">
  {["home", "about me", "skills", "portfolio", "resume", "contactme"].map((item) => (
    <li
      key={item}
      className="relative group cursor-pointer capitalize transition duration-300"
    >
      <Link
        to={item.toLocaleLowerCase()}
        smooth={true}
        duration={170}
        offset={-80}
        className="hover:text-orange-500 transition-colors duration-300"
      >
        {item}
        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
  ))}
</ul>


        
      </nav>
    </div>
  );
};

export default NavBar;
