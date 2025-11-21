
import React from 'react';
import type { Application } from '../types';
import { ExternalLinkIcon } from './icons';

interface ApplicationsProps {
  applications: Application[];
}

const Applications: React.FC<ApplicationsProps> = ({ applications }) => {
  return (
    <section id="applications" className="py-24 bg-gray-900/30">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Minhas Aplicações
      </h2>
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, index) => (
            <a 
              key={index} 
              href={app.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {app.name}
                </h3>
                <ExternalLinkIcon className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {app.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
