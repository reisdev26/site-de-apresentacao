
import React from 'react';

interface AboutProps {
  skills: string[];
}

const About: React.FC<AboutProps> = ({ skills }) => {
  return (
    <section id="about" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Minha Expertise
      </h2>
      <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 text-gray-300 text-lg font-medium px-5 py-2 rounded-full shadow-md cursor-default transition-transform transform hover:scale-110 hover:bg-blue-600 hover:text-white"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
