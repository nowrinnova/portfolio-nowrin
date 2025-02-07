import { IoMdArrowDropright } from "react-icons/io";

const AboutMe = () => {
  return (
    <div className="flex justify-center py-5 px-4">
      <div className="w-full md:max-w-2xl">
        <h1 className="text-2xl py-5 text-center font-semibold text-gray-600">
          About Me
        </h1>
        <p className="text-gray-500 text-lg leading-8 font-lora text-justify">
          I am a passionate Frontend Web Developer dedicated to creating modern, 
          responsive, and engaging web applications. I specialize in building 
          interactive user interfaces using JavaScript, React, HTML5, CSS3, 
          Node.js, and MongoDB. I am committed to writing clean, efficient code 
          and continuously learning new technologies to stay ahead in this 
          fast-paced industry. I strive for excellence in user experience and 
          collaborate closely with backend teams to deliver seamless, full-stack solutions.
          <br />
          <span className="font-semibold">Here are a few technologies I've been working with recently:</span>
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-5">
          {[
            "JavaScript (ES6+)",
            "React",
            "HTML5 & CSS3",
            "Node.js",
            "MongoDB",
            "Version Control (Git)"
          ].map((tech, index) => (
            <li key={index} className="flex items-center">
              <span className="text-purple-700">
                <IoMdArrowDropright />
              </span>
              <span className="ml-2">{tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
