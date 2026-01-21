const additionalSkills = [
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Axios",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRxuJlSwQHNj7yD55jMfUYg5YNV4LSO31EOg&s",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
];

const AdditionalSkills = () => {
  return (
    <section className="bg-gray-900 text-white py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-8">
          ADDITIONAL SKILLS
        </h2>

        <div className="bg-gray-800 p-6 sm:p-8 rounded-lg grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
          {additionalSkills.map((skill, index) => (
            <div
              className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-110"
              key={index}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-14 h-14 sm:w-16 sm:h-16"
              />
              <h5 className="text-sm sm:text-base text-slate-400 font-medium">
                {skill.name}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalSkills;
