import ReactTypingEffect from "react-typing-effect";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";
import my_img from "../assets/my_image.png";

const fade = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-5 sm:px-8 pt-24 pb-16"
    >
      {/* decorative background blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl opacity-30"
        style={{ background: "rgb(var(--accent))" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full blur-3xl opacity-20"
        style={{ background: "rgb(var(--accent-2))" }}
      />

      <div className="relative max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.div
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full card px-4 py-1.5 text-sm text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to frontend / full stack roles
          </motion.div>

          <motion.p {...fade(0.1)} className="mt-6 text-lg text-muted">
            Hi, I&apos;m
          </motion.p>
          <motion.h1
            {...fade(0.15)}
            className="font-display text-4xl sm:text-6xl font-bold leading-tight"
          >
            Pankaj Salunke
          </motion.h1>

          <motion.h2
            {...fade(0.25)}
            className="font-display text-2xl sm:text-4xl font-bold gradient-text mt-2 min-h-[2.8rem]"
          >
            <ReactTypingEffect
              text={[
                "Full Stack Developer",
                "React Developer",
                "MERN Stack Developer",
              ]}
              speed={90}
              eraseSpeed={50}
              eraseDelay={1200}
              typingDelay={400}
              cursorClassName="gradient-text"
            />
          </motion.h2>

          <motion.p
            {...fade(0.35)}
            className="mt-5 text-muted text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0"
          >
            MSc Computer Science graduate and Frontend Intern at PJSofttech,
            building fast, responsive web apps with React, Node.js and MongoDB.
          </motion.p>

          <motion.p
            {...fade(0.4)}
            className="mt-3 flex items-center justify-center md:justify-start gap-2 text-sm text-muted"
          >
            <FiMapPin /> Pune, India
          </motion.p>

          <motion.div
            {...fade(0.5)}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link
              to="portfolio"
              smooth
              duration={300}
              offset={-70}
              className="btn-primary cursor-pointer"
            >
              View my work
            </Link>
            <a href="/pankaj_resume.pdf" download className="btn-ghost">
              <FiDownload /> Download CV
            </a>
          </motion.div>

          <motion.div
            {...fade(0.6)}
            className="mt-8 flex gap-3 justify-center md:justify-start text-xl"
          >
            <a
              href="https://github.com/pankajsalunke"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="h-11 w-11 grid place-items-center rounded-full card text-muted hover:text-accent2 hover:-translate-y-1 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/pankaj-salunke-3342b7203"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="h-11 w-11 grid place-items-center rounded-full card text-muted hover:text-accent2 hover:-translate-y-1 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative h-56 w-56 sm:h-72 sm:w-72 md:h-80 md:w-80 hover:scale-105 transition-transform duration-500">
            {/* rotating gradient ring */}
            <div
              aria-hidden="true"
              className="spin-slow absolute -inset-1.5 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, rgb(var(--accent)), rgb(var(--accent-2)), rgb(var(--accent)))",
              }}
            />
            <div className="absolute inset-0 rounded-full bg-bg p-1.5">
              <img
                src={my_img}
                alt="Pankaj Salunke"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
