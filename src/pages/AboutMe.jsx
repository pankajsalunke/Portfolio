const AboutMe = () => {
  return (
    <section
      id="about me"
      className="bg-slate-900 text-white min-h-screen flex items-center justify-center px-4 sm:px-6 py-20"
    >
      <div className="w-full max-w-3xl text-center">
        <h2 className="text-5xl font-bold text-white mb-12">About Me</h2>

        <h1 className="text-4xl sm:text-5xl font-bold text-orange-500 mt-2 transition-transform duration-300 hover:scale-105">
          Full Stack Developer
        </h1>

        <p className="mt-4 text-gray-400 text-md sm:text-lg">
          Developing Efficient & Scalable Applications
        </p>

        <p className="text-gray-300 leading-loose mt-6 text-md sm:text-lg">
          I am a passionate and detail-oriented Full Stack Developer dedicated
          to building high-performance web applications. With a strong
          foundation in both frontend and backend technologies, I create
          seamless, user-friendly digital experiences.
        </p>

        <p className="text-gray-300 leading-loose mt-4 text-md sm:text-lg">
          My expertise includes modern frameworks like React, Node.js, and
          databases such as MongoDB. I thrive on solving complex problems,
          optimizing performance, and ensuring scalable solutions.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
