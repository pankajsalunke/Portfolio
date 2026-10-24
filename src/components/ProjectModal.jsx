/* eslint-disable react/prop-types */
import {useEffect} from "react";
import {motion} from "framer-motion";
import {FiX, FiExternalLink} from "react-icons/fi";
import {FaGithub} from "react-icons/fa";
import ImageCarousel from "./ImageCarousel";

const ProjectModal = ({project, onClose}) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-6"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <motion.div
        className="card relative w-full max-w-7xl max-h-[85vh] overflow-y-auto md:overflow-hidden shadow-2xl md:grid md:grid-cols-5"
        initial={{opacity: 0, scale: 0.97}}
        animate={{opacity: 1, scale: 1}}
        exit={{opacity: 0, scale: 0.97}}
        transition={{duration: 0.25}}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-20 h-9 w-9 grid place-items-center rounded-full bg-black/60 hover:bg-black/80 text-white"
        >
          <FiX />
        </button>

        {/* Left: image */}
        <div className="md:col-span-3 bg-black/30 flex items-center justify-center md:max-h-[85vh]">
          {project.images.length > 0 ? (
            <ImageCarousel
              images={project.images}
              title={project.title}
              fit="contain"
              className="h-64 sm:h-96 md:h-full md:min-h-[28rem]"
              autoPlay={false}
            />
          ) : (
            <div className="w-full h-64 md:h-full md:min-h-[28rem] grid place-items-center bg-gradient-to-br from-accent/30 to-accent2/30 px-6 text-center font-display text-2xl font-bold">
              {project.title}
            </div>
          )}
        </div>

        {/* Right: info (scrolls on its own if long) */}
        <div className="md:col-span-2 p-5 sm:p-6 md:max-h-[85vh] md:overflow-y-auto">
          <p className="text-accent2 text-xs font-semibold uppercase tracking-widest pr-10">
            {project.category}
          </p>
          <h3 className="font-display text-xl sm:text-2xl font-bold mt-1">
            {project.title}
          </h3>
          <p className="text-muted text-sm mt-2 leading-relaxed">
            {project.description}
          </p>

          {project.highlights?.length > 0 && (
            <ul className="mt-4 space-y-1.5 text-sm">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-3"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent2" />
                  <span className="text-muted">{h}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((t) => (
              <span
                key={t}
                className="chip"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-5">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={l.type === "code" ? "btn-ghost" : "btn-primary"}
              >
                {l.type === "code" ? <FaGithub /> : <FiExternalLink />}
                {l.label}
              </a>
            ))}
            {project.links.length === 0 && (
              <p className="text-sm text-muted">
                Private company project – source and live link not public.
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
