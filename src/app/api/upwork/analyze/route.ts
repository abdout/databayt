import { NextResponse } from 'next/server';
import { openai } from '@/lib/openai';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const { description, repositories } = await request.json();

    if (!description || description.trim().length === 0) {
      return NextResponse.json({ error: 'Missing description' }, { status: 400 });
    }

    // Build chat messages. We'll ask OpenAI to produce structured JSON.
    const systemMessage = {
      role: 'system',
      content:
        'You are a senior software architect and Upwork proposal expert. Analyse job descriptions, score relevance, and craft tailored proposals in Markdown. Return valid JSON only.'
    } as const;

    const userMessage = {
      role: 'user',
      content: `Job description:\n\n${description}\n\nRepositories:\n\n${JSON.stringify(repositories)}`
    } as const;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: 0.3,
      messages: [systemMessage, userMessage],
      response_format: { type: 'json_object' },
      max_tokens: 1024
    });

    const json = JSON.parse(response.choices[0].message.content || '{}');

    return NextResponse.json(json);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
} 