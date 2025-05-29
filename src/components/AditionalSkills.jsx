import React from "react";

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
    icon: " https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
];

const AdditionalSkills = () => {
  return (
    <section className="bg-gray-900 text-white py-5 rounded-xl px-6 w-full">
      <div className="max-w-5xl mx-auto text-center w-[50%]">
        <h2 className="text-4xl font-bold text-yellow-300 mb-8">
          ADDITIONAL SKILLS
        </h2>

        <div className="bg-gray-800 p-6 rounded-lg flex justify-center items-center gap-8 flex-wrap">
          {additionalSkills.map((skill, index) => (
          <div className="flex flex-col gap-2" key={index}>
              <img
              
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 transition-transform duration-300 transform hover:scale-110"
            />
         
              <h5 className="text-lg text-slate-400 font-medium">{skill.name}</h5>
          </div>
 ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalSkills;
