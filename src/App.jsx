
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
// import Resume from "./pages/Resume";
import ContactMe from "./pages/ContactMe";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="text-white scroll-smooth">
      <NavBar />
      <main className="">
        <Home />
        <AboutMe />
        <Skills />
        <Portfolio />
        {/* <Resume /> */}
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
};

export default App;
