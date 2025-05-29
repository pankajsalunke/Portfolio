import React from "react";
import my_img from "../assets/my_img.png";
import ReactTypingEffect from "react-typing-effect";
import {Link} from 'react-router-dom'

const Home = () => {
    return (
    <div
      id="home"
      className="text-white min-h-screen bg-slate-900"
    >
      <section className="flex flex-col md:flex-row justify-center items-center min-h-screen px-6 sm:px-10 py-12 md:py-0">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-lg text-orange-400">Hi, I’m</p>
          <h2 className="text-4xl font-bold">Pankaj Salunke</h2>

          <h1 className="text-4xl sm:text-5xl font-bold text-orange-500 mt-2">
            <ReactTypingEffect
              text={[
                "Full Stack Developer",
                "MERN Stack Developer",
                "React Enthusiast",
              ]}
              speed={100}
              eraseSpeed={50}
              eraseDelay={1000}
              typingDelay={500}
            />
          </h1>

          <p className="mt-4 text-gray-300 text-md sm:text-lg">
            Developing Efficient & Scalable Applications
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/pankaj-salunke-3342b7203"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 active:scale-95 transition-transform duration-300 text-white px-6 py-2 rounded-lg font-semibold shadow-md text-center"
            >
              Let&apos;s Connect
            </a>

            <a
              href="/Pankaj_Salunke_Resume.pdf"
              download
              className="border border-gray-400 text-white px-6 py-2 rounded-lg hover:border-orange-500 hover:text-orange-500 active:scale-95 transition-all duration-300 shadow-md text-center"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gray-800 rounded-full flex justify-center items-center overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl">
            <img
              src={my_img}
              alt="Pankaj Salunke"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
