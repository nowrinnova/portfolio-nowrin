import AboutMe from "../component/AboutMe";
import Contact from "../component/Contact";
import Education from "../component/Education";  // Fixed typo
import Footer from "../component/Footer";
import Intro from "../component/Intro";
import NavBar from "../component/NavBar";
import Projects from "../component/Projects";
import Skill from "../component/Skill";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto md:px-10 flex-col space-y-10 md:space-y-20 bg-[#e9edef] font-lora">
      

      <div className="min-h-screen">
        <div className="mb-10">   <NavBar /></div>
        <section id="intro">
          <Intro />
        </section>
        <section id="about">
          <AboutMe />
        </section>
        <section id="skills">
          <Skill />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
