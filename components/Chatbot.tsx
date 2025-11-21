
import React, { useState, useRef, useEffect, FormEvent } from 'react';
import { getChatbotResponse } from '../services/geminiService';
import type { ChatMessage } from '../types';
import { CloseIcon, SendIcon, SparkleIcon, UserIcon } from './icons';
import { portfolioData } from '../constants';

interface ChatbotProps {
  portfolioContext: string;
  onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ portfolioContext, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'ai', text: `Olá! Sou o assistente de IA de ${portfolioData.name}. Pergunte-me qualquer coisa sobre suas habilidades ou projetos.` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const aiResponse = await getChatbotResponse(portfolioContext, input);
      const aiMessage: ChatMessage = { sender: 'ai', text: aiResponse };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = { sender: 'ai', text: "Desculpe, estou com problemas de conexão. Por favor, tente novamente mais tarde." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 w-full max-w-md h-[70vh] max-h-[600px] z-50 flex flex-col">
      <div className="bg-gray-900 text-white rounded-t-lg p-4 flex justify-between items-center shadow-lg border-b border-gray-700">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <SparkleIcon className="text-blue-400 w-6 h-6" />
          Assistente de IA do Portfólio
        </h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <CloseIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-grow bg-gray-800 p-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
              {msg.sender === 'ai' && <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1"><SparkleIcon className="w-5 h-5 text-white" /></div>}
              <div className={`max-w-xs md:max-w-sm px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-700 text-gray-200 rounded-bl-none'}`}>
                <p className="text-sm break-words">{msg.text}</p>
              </div>
               {msg.sender === 'user' && <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0 mt-1"><UserIcon className="w-5 h-5 text-white" /></div>}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-3">
               <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1"><SparkleIcon className="w-5 h-5 text-white" /></div>
              <div className="bg-gray-700 px-4 py-3 rounded-lg rounded-bl-none">
                <div className="flex items-center space-x-1">
                  <span className="h-2 w-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="h-2 w-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="h-2 w-2 bg-blue-400 rounded-full animate-bounce"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-gray-900 p-4 rounded-b-lg border-t border-gray-700">
        <div className="flex items-center bg-gray-700 rounded-full">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pergunte sobre meus projetos..."
            className="w-full bg-transparent text-white px-4 py-2 focus:outline-none"
            disabled={isLoading}
          />
          <button type="submit" className="text-white p-2" disabled={isLoading || !input.trim()}>
            <SendIcon className={`w-6 h-6 ${isLoading || !input.trim() ? 'text-gray-500' : 'text-blue-500'}`} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chatbot;
