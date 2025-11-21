
import React from 'react';
import type { Certification } from '../types';
import { ExternalLinkIcon } from './icons';

interface CertificationsProps {
  certifications: Certification[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <section id="certifications" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Certificações e Credenciais
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-md flex justify-between items-center transition-shadow hover:shadow-lg hover:shadow-blue-500/20">
            <div>
              <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
              <p className="text-gray-400">{cert.issuer} - {cert.year}</p>
            </div>
            {cert.credentialUrl && (
              <a 
                href={cert.credentialUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label={`Verificar credencial para ${cert.name}`}
              >
                <ExternalLinkIcon className="w-6 h-6" />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
