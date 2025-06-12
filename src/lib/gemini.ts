import { GoogleGenerativeAI } from '@google/generative-ai';

if (!process.env.GEMINI_API_KEY) {
  console.warn('⚠️ GEMINI_API_KEY env var not set – the AI route will fall back.');
}

const genAI = process.env.GEMINI_API_KEY
  ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
  : null;

export const getGeminiModel = (model = 'gemini-1.5-flash'): ReturnType<GoogleGenerativeAI['getGenerativeModel']> | null => {
  if (!genAI) return null;
  return genAI.getGenerativeModel({ model });
}; 