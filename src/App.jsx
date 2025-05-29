import React from "react";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import ContactMe from "./pages/ContactMe";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white scroll-smooth">
      <NavBar />
      <main className="pt-24"> 
        <Home />
        <AboutMe />
        <Skills />
        <Portfolio />
        <Resume />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
};

export default App;
