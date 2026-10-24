import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
// import Resume from "./pages/Resume";
import ContactMe from "./pages/ContactMe";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import CursorGlow from "./components/CursorGlow";

const App = () => {
  return (
    <div className="relative">
      <ScrollProgress />
      <CursorGlow />
      <NavBar />
      <main className="relative z-10">
        <Home />
        <AboutMe />
        <Skills />
        <Portfolio />
        {/* <Resume /> */}
        <ContactMe />
      </main>
      <Footer />
      <BackToTop />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "rgb(var(--surface))",
            color: "rgb(var(--text))",
            border: "1px solid rgb(var(--line))",
          },
        }}
      />
    </div>
  );
};

export default App;
