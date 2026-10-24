/* eslint-disable react/prop-types */
import {FiBriefcase, FiBookOpen, FiMapPin, FiMail} from "react-icons/fi";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Counter from "../components/Counter";

const stats = [
  {value: 4, suffix: "", label: "Projects built"},
  {value: 1, suffix: "", label: "Industry internship"},
];

const experience = {
  role: "Frontend Intern",
  company: "PJSofttech, Pune",
  period: "July 2026 – Present",
  points: [
    "Building the frontend of an Inventory Management System with React.js, Tailwind CSS, Java and MySQL.",
    "Created order, product type, sub category and attribute screens using reusable paginated tables, forms and modals.",
    "Integrated backend REST APIs and used React Query for fetching, caching and keeping the UI in sync after create, update and delete.",
    "Fixed UI and data display bugs and collaborated with backend developers through Git.",
  ],
};

const education = [
  {
    degree: "MSc Computer Science",
    school: "R.B.N.B College, Shrirampur",
    period: "2023 – 2025",
  },
  {
    degree: "BSc Computer Science",
    school: "R.B.N.B College, Shrirampur",
    period: "2020 – 2023",
  },
  {degree: "HSC", school: "R.B.N.B College, Shrirampur", period: "2019 – 2020"},
];

const TimelineItem = ({icon: Icon, children}) => (
  <div className="group relative pl-12 pb-8 last:pb-0">
    <span
      className="absolute left-5 top-8 bottom-0 w-px group-[&:last-child]:hidden"
      style={{background: "rgb(var(--line))"}}
    />
    <span className="absolute left-0 top-0 h-10 w-10 grid place-items-center rounded-full text-white bg-gradient-to-br from-accent to-accent2">
      <Icon />
    </span>
    {children}
  </div>
);

const AboutMe = () => {
  return (
    <section
      id="about"
      className="section bg-surface/40"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="About me"
          title="Building things for the web"
          subtitle="Full Stack Developer with an MSc in Computer Science, focused on clean, scalable applications."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          {/* left: summary + stats + quick facts */}
          <div className="lg:col-span-2 space-y-6">
            <Reveal>
              <p className="text-muted leading-loose">
                I build web applications with{" "}
                <b className="text-ink">
                  React.js, Node.js, Express and MongoDB
                </b>
                . I&apos;m currently a Frontend Intern at PJSofttech, working on
                a company inventory management system with React, Java and
                MySQL.
              </p>
              <p className="text-muted leading-loose mt-4">
                I have hands-on experience with JWT authentication, role-based
                access, REST API integration and reusable UI components.
                I&apos;m looking for a frontend or full stack developer role
                where I can keep growing and ship real products.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="card p-4 text-center"
                  >
                    <div className="font-display text-3xl font-bold gradient-text">
                      <Counter
                        value={s.value}
                        suffix={s.suffix}
                      />
                    </div>
                    <div className="text-xs text-muted mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="card p-5 space-y-3 text-sm">
                <p className="flex items-center gap-3 text-muted">
                  <FiMapPin className="text-accent2" /> Pune, Maharashtra, India
                </p>
                <p className="flex items-center gap-3 text-muted">
                  <FiMail className="text-accent2" /> salunkepankaj520@gmail.com
                </p>
              </div>
            </Reveal>
          </div>

          {/* right: experience + education timeline */}
          <div className="lg:col-span-3 space-y-10">
            <Reveal>
              <h3 className="font-display text-xl font-bold mb-5">
                Experience
              </h3>
              <TimelineItem icon={FiBriefcase}>
                <div className="card p-5 hover:border-accent/50 transition duration-300">
                  <div className="flex flex-wrap justify-between gap-2">
                    <div>
                      <h4 className="font-semibold text-lg">
                        {experience.role}
                      </h4>
                      <p className="text-accent2 text-sm">
                        {experience.company}
                      </p>
                    </div>
                    <span className="chip h-fit">{experience.period}</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {experience.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-3"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent2" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </TimelineItem>
            </Reveal>

            <Reveal>
              <h3 className="font-display text-xl font-bold mb-5">Education</h3>
              {education.map((e) => (
                <TimelineItem
                  key={e.degree}
                  icon={FiBookOpen}
                >
                  <div className="card p-4 hover:border-accent/50 transition duration-300">
                    <div className="flex flex-wrap justify-between gap-2">
                      <div>
                        <h4 className="font-semibold">{e.degree}</h4>
                        <p className="text-sm text-muted">{e.school}</p>
                      </div>
                      <span className="chip h-fit">{e.period}</span>
                    </div>
                  </div>
                </TimelineItem>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
