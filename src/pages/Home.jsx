import React from "react";
import my_img from "../assets/my_image.png";
import ReactTypingEffect from "react-typing-effect";

const Home = () => {
  return (
    <div
      id="home"
      className="text-white min-h-screen bg-gray-900"
    >
      <section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 sm:px-10 py-16 max-w-7xl mx-auto">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-lg sm:text-xl text-orange-400">Hi, I’m</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Pankaj Salunke</h2>

          <h1 className="text-3xl sm:text-5xl font-bold text-orange-500 mt-2">
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

          <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            Developing efficient and scalable applications with clean code,
            user-centered design, and modern tech stacks.
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
              href="/Pankaj_Salunke_CV.pdf"
              download
              className="border border-gray-400 text-white px-6 py-2 rounded-lg hover:border-orange-500 hover:text-orange-500 active:scale-95 transition-all duration-300 shadow-md text-center"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gray-800 rounded-full flex justify-center items-center overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl ">
            <img
              src={my_img}
              alt="Pankaj Salunke"
              className="w-full h-full object-cover rounded-full "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
