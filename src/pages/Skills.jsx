/* eslint-disable react/prop-types */
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const dev = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;

// `icon` is optional – items without one show their initials instead.
const skillGroups = {
  Frontend: [
    {name: "React.js", icon: dev("react")},
    {name: "JavaScript (ES6)", icon: dev("javascript")},
    {name: "HTML5", icon: dev("html5")},
    {name: "CSS3", icon: dev("css3")},
    {name: "Tailwind CSS", icon: dev("tailwindcss")},
    {name: "Bootstrap", icon: dev("bootstrap")},
    {name: "React Router", icon: dev("reactrouter")},
    {name: "React Query"},
    {name: "Axios"},
  ],
  Backend: [
    {name: "Node.js", icon: dev("nodejs")},
    {name: "Express.js", icon: dev("express")},
    {name: "Core Java", icon: dev("java")},
    {name: "REST APIs"},
    {name: "JWT Auth"},
  ],
  Databases: [
    {name: "MongoDB", icon: dev("mongodb")},
    {name: "MySQL", icon: dev("mysql")},
  ],
  Tools: [
    {name: "Git", icon: dev("git")},
    {name: "GitHub", icon: dev("github")},
    {name: "Postman", icon: dev("postman")},
    {name: "Cloudinary"},
  ],
};

const tabs = ["All", ...Object.keys(skillGroups)];

const initials = (name) =>
  name
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const SkillCard = ({skill}) => {
  const [broken, setBroken] = useState(false);
  return (
    <motion.div
      layout
      initial={{opacity: 0, scale: 0.9}}
      animate={{opacity: 1, scale: 1}}
      exit={{opacity: 0, scale: 0.9}}
      transition={{duration: 0.25}}
      className="card p-5 flex flex-col items-center gap-3 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/10 transition duration-300"
    >
      {skill.icon && !broken ? (
        <img
          src={skill.icon}
          alt=""
          loading="lazy"
          onError={() => setBroken(true)}
          className="h-12 w-12 sm:h-14 sm:w-14"
        />
      ) : (
        <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl grid place-items-center font-display font-bold text-white bg-gradient-to-br from-accent to-accent2">
          {initials(skill.name)}
        </div>
      )}
      <span className="text-sm font-medium text-center text-muted">
        {skill.name}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  const [active, setActive] = useState("All");
  const items =
    active === "All" ? Object.values(skillGroups).flat() : skillGroups[active];

  return (
    <section
      id="skills"
      className="section"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="Skills"
          title="Tech I work with"
          subtitle="Tools and technologies I use to build full stack applications."
        />

        <Reveal>
          <div
            className="flex flex-wrap justify-center gap-2 mb-10"
            role="tablist"
          >
            {tabs.map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={active === t}
                onClick={() => setActive(t)}
                className={`rounded-full px-5 py-2 text-sm font-medium border transition duration-300 ${
                  active === t
                    ? "text-white border-transparent bg-gradient-to-r from-accent to-accent2"
                    : "text-muted hover:text-ink hover:border-accent/60"
                }`}
                style={
                  active === t ? undefined : {borderColor: "rgb(var(--line))"}
                }
              >
                {t}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {items.map((s) => (
              <SkillCard
                key={s.name}
                skill={s}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal className="mt-12">
          <p className="text-center text-sm text-muted">
            Soft skills: problem solving · adaptability · time management
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
