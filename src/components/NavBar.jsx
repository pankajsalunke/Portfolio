import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

// `to` must match the section id in the page components.
const navItems = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "portfolio" },
  // { label: "Resume", to: "resume" },
  { label: "Contact", to: "contact" },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(() =>
    document.documentElement.classList.contains("light")
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch (e) {
      /* storage unavailable – ignore */
    }
  };

  const linkProps = {
    smooth: true,
    duration: 300,
    offset: -70,
    spy: true,
    activeClass: "!text-accent2",
    className:
      "cursor-pointer text-muted hover:text-ink transition-colors duration-300 font-medium",
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-lg border-b border-white/5 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16">
        <Link
          to="home"
          smooth
          duration={300}
          className="font-display text-xl font-bold cursor-pointer"
        >
          <span className="gradient-text">Pankaj</span>
          <span className="text-ink">.dev</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to} {...linkProps}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle light/dark theme"
            className="h-10 w-10 grid place-items-center rounded-full text-ink hover:text-accent2 hover:bg-white/5 transition"
          >
            {light ? <FiMoon /> : <FiSun />}
          </button>
          <button
            className="md:hidden h-10 w-10 grid place-items-center text-2xl"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-bg/95 backdrop-blur-lg flex flex-col items-center gap-5 py-6 text-lg"
          >
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  {...linkProps}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
