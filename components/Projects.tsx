
import React from 'react';
import type { Project } from '../types';
import { ExternalLinkIcon, GithubIcon } from './icons';

interface ProjectsProps {
  projects: Project[];
}

const ProjectCard: React.FC<Project> = ({ title, description, techStack, liveUrl, repoUrl, imageUrl }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-blue-500/30 transform hover:-translate-y-2">
      <div className="relative h-56">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-20 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span key={tech} className="bg-gray-700 text-blue-300 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-4 mt-4">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 flex items-center space-x-1 transition-colors">
              <ExternalLinkIcon className="w-5 h-5" />
              <span>Demonstração</span>
            </a>
          )}
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 flex items-center space-x-1 transition-colors">
              <GithubIcon className="w-5 h-5" />
              <span>Código Fonte</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Projetos em Destaque
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
