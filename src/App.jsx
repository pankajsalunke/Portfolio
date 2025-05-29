import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import ContactMe from "./pages/ContactMe";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const App = () => {
  // const location = useLocation();

  return (
    <div >
      <NavBar />
      <Home />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Resume />
      <ContactMe />
      <Footer />
    </div>
    // <div>
    //   <NavBar />
    //   <div className="">
    //     <Routes>
    //       <Route
          
    //         path="/"
    //         element={<Home  />}
    //       />
    //       <Route
    //         path="/aboutme"
    //         element={<AboutMe />}
    //       />
    //       <Route
    //         path="/skills"
    //         element={<Skills />}
    //       />
    //       <Route
    //         path="/resume"
    //         element={<Resume />}
    //       />
    //       <Route
    //         path="/contactme"
    //         element={<ContactMe />}
    //       />
    //       <Route
    //         path="/portfolio"
    //         element={<Portfolio />}
    //       />
    //     </Routes>
    //   </div>

    //   {location.pathname !== "/" && <Footer />}
    // </div>
  );
};

export default App;
