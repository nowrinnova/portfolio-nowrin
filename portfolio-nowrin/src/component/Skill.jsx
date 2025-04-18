import React from 'react';

const Skill = () => {
  const skills = {
    Frontend: ['HTML', 'Tailwind CSS', 'JavaScript', 'React'],
    Backend: ['Node.js', 'Express', 'MongoDB'],
  };

  return (
    <section className="bg-gray-100 py-10 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Skills</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {Object.entries(skills).map(([category, techs]) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">{category}</h3>
            <div className="space-y-4">
              {techs.map((skill) => (
                <div key={skill}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">{skill}</span>
                    {/* Example proficiency level, can customize later */}
                    <span className="text-gray-500 text-sm">Proficient</span>
                  </div>
                  <div className="w-full bg-gray-300 h-2 rounded-full">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{
                        width: getSkillLevel(skill),
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Helper function to return skill level based on skill name
const getSkillLevel = (skill) => {
  switch (skill) {
    case 'HTML':
    case 'JavaScript':
    case 'React':
      return '90%';
    case 'Tailwind CSS':
    case 'Node.js':
      return '80%';
    case 'Express':
    case 'MongoDB':
      return '75%';
    default:
      return '70%';
  }
};

export default Skill;
