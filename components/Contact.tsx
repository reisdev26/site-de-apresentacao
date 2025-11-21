
import React from 'react';
import type { ContactInfo } from '../types';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons';

interface ContactProps {
  contact: ContactInfo;
}

const Contact: React.FC<ContactProps> = ({ contact }) => {
  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-4xl font-bold mb-4 text-white">Vamos Conectar</h2>
      <p className="text-gray-400 mb-8 max-w-lg mx-auto">
        Estou sempre aberto para discutir novos projetos, ideias criativas ou oportunidades para fazer parte de uma visão ambiciosa.
      </p>
      <div className="flex justify-center space-x-6">
        <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform transform hover:scale-125">
          <GithubIcon className="w-10 h-10" />
        </a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-transform transform hover:scale-125">
          <LinkedinIcon className="w-10 h-10" />
        </a>
        <a href={`mailto:${contact.email}`} className="text-gray-400 hover:text-red-500 transition-transform transform hover:scale-125">
          <MailIcon className="w-10 h-10" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
