import AdditionalSkills from "../components/AditionalSkills";

const skills = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Mysql",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-16 px-8"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-white mb-12">MY SKILLS</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg flex justify-center items-center shadow-sm flex-col gap-2
                         transition-transform duration-30 transform hover:scale-110 hover:shadow-yellow-100"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-20 h-20"
              />
              <h5 className="text-lg text-slate-400 font-medium">
                {skill.name}
              </h5>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-800 p-8 rounded-xl shadow-lg">
          <AdditionalSkills />
        </div>
      </div>
    </section>
  );
};

export default Skills;
