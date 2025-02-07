import { FaGithub, FaLinkedin } from "react-icons/fa";

const Intro = () => {
  return (
    <div className="max-w-4xl mx-auto text-center px-5">
      <h1 className="font-bold text-lg md:text-xl text-gray-500">
        Hi, my name is
      </h1>
      <br />
      <span className="uppercase text-purple-800 text-5xl md:text-7xl font-semibold">
        Nowrin Islam
      </span>
      <h1 className="text-gray-500 text-3xl md:text-6xl pt-5 leading-tight">
        I'm a Front-End Developer
      </h1>

      {/* Buttons & Social Links */}
      <div className="py-10 flex flex-wrap justify-center items-center gap-4">
        <a className="px-8 py-3 border-2 border-purple-700 text-purple-700 rounded-lg text-lg hover:bg-purple-700 hover:text-white transition cursor-pointer" href="https://drive.google.com/file/d/13StMZCgYJ_Mz8AzF_zddagRdJcnJZk-O/view?usp=drive_link">
          Resume
        </a>
        <a
          href="https://github.com/nowrinnova"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border-2 border-purple-700 rounded-lg text-purple-700 hover:bg-purple-700 hover:text-white transition"
        >
          <FaGithub className="text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/nowrin-islam-8b0744315/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border-2 border-purple-700 rounded-lg text-purple-700 hover:bg-purple-700 hover:text-white transition"
        >
          <FaLinkedin className="text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
