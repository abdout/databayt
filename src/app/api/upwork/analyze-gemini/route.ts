import { NextResponse } from 'next/server';
import { getGeminiModel } from '@/lib/gemini';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const { description, repositories } = await request.json();

    if (!description) {
      return NextResponse.json({ error: 'Missing description' }, { status: 400 });
    }

    const model = getGeminiModel();

    if (!model) {
      return NextResponse.json({ error: 'Gemini API key not configured' }, { status: 500 });
    }

    // Build prompt instructing Gemini to return JSON.
    const prompt = `You are an Upwork proposal automation agent.\n\nContext repositories: ${JSON.stringify(
      repositories,
      null,
      2,
    )}\n\nJob description: '''${description}'''\n\nRespond with strict JSON: { \n  \"score\": { total: number, breakdown: { technical: number, business: number, scope: number, client: number, budget: number }, viable: boolean },\n  \"details\": { title: string, client: string, industry: string, budget: string, timeline: string, requirements: string[], background: string },\n  \"proposal\": string\n}`;

    const response = await model.generateContent({ contents: [{ role: 'user', parts: [{ text: prompt }] }] });

    // Gemini returns the text in response.text()
    const text = response?.response?.text?.() ?? '';
    const json = JSON.parse(text || '{}');

    return NextResponse.json(json);
  } catch (error) {
    console.error('Gemini route error', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
} 