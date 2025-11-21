
import { GoogleGenAI } from "@google/genai";
import { portfolioData } from '../constants';

// Assume process.env.API_KEY is configured in the environment
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you'd handle this more gracefully.
  // For this example, we'll throw an error if the key is missing.
  console.error("API_KEY is not set in environment variables.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

/**
 * Generates a response from the Gemini model based on user query and portfolio context.
 * @param portfolioContext A string containing all the portfolio information.
 * @param userQuery The user's question.
 * @returns The AI's response as a string.
 */
export const getChatbotResponse = async (portfolioContext: string, userQuery: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash", // Use a fast model for chat
      contents: `
        Pergunta do Usuário: "${userQuery}"
      `,
      config: {
        systemInstruction: `Você é um assistente de IA prestativo e amigável para o portfólio de ${portfolioData.name}. 
        Seu objetivo é responder a perguntas com base *apenas* no contexto fornecido abaixo.
        Seja profissional, conciso e útil. 
        Se uma pergunta for feita e não puder ser respondida com o contexto fornecido, afirme educadamente que você só pode responder a perguntas sobre o perfil profissional de ${portfolioData.name}.
        Não invente informações.

        --- INÍCIO DO CONTEXTO ---
        ${portfolioContext}
        --- FIM DO CONTEXTO ---
      `,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Desculpe, estou com problemas para me conectar ao sistema no momento. Por favor, tente novamente em alguns instantes.";
  }
};
