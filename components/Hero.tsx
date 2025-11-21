
import React from 'react';
import { portfolioData } from '../constants';
import { ArrowDownIcon } from './icons';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            {portfolioData.title}
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          {portfolioData.bio}
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={scrollToProjects}
            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Veja Meus Projetos
          </button>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="border-2 border-gray-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-800 hover:border-gray-800 transition-all duration-300"
          >
            Entre em Contato
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce">
        <ArrowDownIcon className="w-8 h-8 text-gray-500" />
      </div>
    </section>
  );
};

export default Hero;
