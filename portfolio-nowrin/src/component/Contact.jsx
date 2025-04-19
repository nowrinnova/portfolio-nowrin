const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto md:mt-5">
      <h1 className="text-2xl py-5 text-center font-semibold text-gray-600 ">
        Find Me On
      </h1>
      <p className="text-center text-2xl">
        Feel free to <span className="text-purple-700 font-bold">connect</span>{" "}
        with me
      </p>

      <div className="py-14 flex items-center justify-center gap-4 ">
        <a
          className="px-10 py-5 border-2 border-purple-700 rounded-lg"
          href="https://github.com/nowrinnova"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://i.ibb.co.com/Kp1KVWJs/github.png"
            alt="GitHub"
            className="w-10 h-7"
          />
        </a>
        
        <a
          className="px-10 py-5 border-2 border-purple-700 rounded-lg cursor-pointer"
          href="https://www.linkedin.com/in/nowrin-islam-8b0744315/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://i.ibb.co.com/x82XCcQW/linkedin.png"
            alt="LinkedIn"
            className="w-10 h-7"
          />
        </a>

        <a
          className="px-10 py-5 border-2 border-purple-700 rounded-lg cursor-pointer"
          href="mailto:nowrinnova0088@gmail.com"
        >
          <img
            src="https://i.ibb.co.com/Kc5jcBXq/gmail.png"
            alt="Gmail"
            className="w-10 h-7"
          />
          {/* <p className="text-sm">nowrinnova0088@gmail.com</p> */}
        </a>
      </div>
    </div>
  );
};

export default Contact;
