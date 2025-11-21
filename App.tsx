
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import News from './components/News';
import Certifications from './components/Certifications';
import Applications from './components/Applications';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import { portfolioData, portfolioContext } from './constants';
import { SparkleIcon } from './components/icons';

const App: React.FC = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <div className="bg-black text-gray-200 font-sans leading-relaxed tracking-wide">
      <Header />
      <main className="container mx-auto px-6 md:px-12 py-16">
        <Hero />
        <About skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <News />
        <Certifications certifications={portfolioData.certifications} />
        <Applications applications={portfolioData.applications} />
        <Contact contact={portfolioData.contact} />
      </main>
      <footer className="text-center py-8 text-gray-500 border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} {portfolioData.name}. Todos os direitos reservados.</p>
      </footer>

      {isChatbotOpen && (
        <Chatbot
          portfolioContext={portfolioContext}
          onClose={() => setIsChatbotOpen(false)}
        />
      )}

      <button
        onClick={() => setIsChatbotOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-500 text-white rounded-full p-4 shadow-lg transform hover:scale-110 transition-transform duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 z-50"
        aria-label="Abrir Assistente de IA"
      >
        <SparkleIcon className="w-8 h-8" />
      </button>
    </div>
  );
};

export default App;
