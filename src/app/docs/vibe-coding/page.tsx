'use client';

import React from 'react';
import { useDocsTranslation } from "@/components/docs/utils/use-docs-translation";

export default function VibeCodingPage() {
  const { t } = useDocsTranslation();

  return (
    <div className="docs-page">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6 rtl:text-right">
        {t('docs.vibeCoding.title', { defaultMessage: 'Vibe Coding' })}
      </h1>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.vibeCoding.introduction', { 
          defaultMessage: 'Welcome to the **Vibe Coding** documentation. This section covers the modern approach to software development using AI-powered code generation and conversational programming.'
        })}
      </p>

      <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 rtl:text-right">
        {t('docs.vibeCoding.whatIs.title', { defaultMessage: 'What is Vibe Coding?' })}
      </h2>

      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.vibeCoding.whatIs.description', { 
          defaultMessage: '**Vibe Coding** refers to a software development approach where developers use large language models (LLMs) to generate code based on natural language prompts. It\'s characterized by a more relaxed and conversational style, where developers provide high-level directions and the AI handles the low-level implementation details.'
        })}
      </p>

      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.vibeCoding.whatIs.characteristics.intro', { 
          defaultMessage: 'Key characteristics of vibe coding:'
        })}
      </p>

      <ul className="mb-6 list-disc rtl:list-inside ltr:ml-6 space-y-2">
        <li className="rtl:text-right">
          <strong>{t('docs.vibeCoding.whatIs.characteristics.prompts.title', { defaultMessage: 'Natural Language Prompts' })}</strong>: 
          {t('docs.vibeCoding.whatIs.characteristics.prompts.description', { defaultMessage: 'Describe what you want in plain English' })}
        </li>
        <li className="rtl:text-right">
          <strong>{t('docs.vibeCoding.whatIs.characteristics.ai.title', { defaultMessage: 'AI-Generated Code' })}</strong>: 
          {t('docs.vibeCoding.whatIs.characteristics.ai.description', { defaultMessage: 'Let LLMs handle the precise coding details' })}
        </li>
        <li className="rtl:text-right">
          <strong>{t('docs.vibeCoding.whatIs.characteristics.conversation.title', { defaultMessage: 'Conversational Development' })}</strong>: 
          {t('docs.vibeCoding.whatIs.characteristics.conversation.description', { defaultMessage: 'Iterate through dialogue with AI assistants' })}
        </li>
        <li className="rtl:text-right">
          <strong>{t('docs.vibeCoding.whatIs.characteristics.direction.title', { defaultMessage: 'High-Level Direction' })}</strong>: 
          {t('docs.vibeCoding.whatIs.characteristics.direction.description', { defaultMessage: 'Focus on the "what" rather than the "how"' })}
        </li>
        <li className="rtl:text-right">
          <strong>{t('docs.vibeCoding.whatIs.characteristics.prototyping.title', { defaultMessage: 'Rapid Prototyping' })}</strong>: 
          {t('docs.vibeCoding.whatIs.characteristics.prototyping.description', { defaultMessage: 'Quickly generate working code from ideas' })}
        </li>
      </ul>

      <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 rtl:text-right">
        {t('docs.vibeCoding.principles.title', { defaultMessage: 'Core Principles' })}
      </h2>

      <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-2 rtl:text-right">
        {t('docs.vibeCoding.principles.promptEng.title', { defaultMessage: '1. Prompt Engineering' })}
      </h3>

      <p className="mb-2 rtl:text-right rtl:leading-loose">
        {t('docs.vibeCoding.principles.promptEng.intro', { defaultMessage: 'Master the art of communicating with AI:' })}
      </p>

      <ul className="mb-6 list-disc rtl:list-inside ltr:ml-6 space-y-2">
        <li className="rtl:text-right">{t('docs.vibeCoding.principles.promptEng.specific', { defaultMessage: 'Be specific about requirements and constraints' })}</li>
        <li className="rtl:text-right">{t('docs.vibeCoding.principles.promptEng.context', { defaultMessage: 'Provide context about your tech stack and preferences' })}</li>
        <li className="rtl:text-right">{t('docs.vibeCoding.principles.promptEng.clear', { defaultMessage: 'Use clear, unambiguous language' })}</li>
        <li className="rtl:text-right">{t('docs.vibeCoding.principles.promptEng.break', { defaultMessage: 'Break complex tasks into smaller, manageable prompts' })}</li>
      </ul>

      <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-2 rtl:text-right">
        {t('docs.vibeCoding.principles.iterative.title', { defaultMessage: '2. Iterative Refinement' })}
      </h3>

      <p className="mb-2 rtl:text-right rtl:leading-loose">
        {t('docs.vibeCoding.principles.iterative.intro', { defaultMessage: 'Develop through conversation:' })}
      </p>

      <ul className="mb-6 list-disc rtl:list-inside ltr:ml-6 space-y-2">
        <li className="rtl:text-right">{t('docs.vibeCoding.principles.iterative.start', { defaultMessage: 'Start with a basic implementation' })}</li>
        <li className="rtl:text-right">{t('docs.vibeCoding.principles.iterative.refine', { defaultMessage: 'Refine through follow-up prompts' })}</li>
        <li className="rtl:text-right">{t('docs.vibeCoding.principles.iterative.ask', { defaultMessage: 'Ask for specific improvements or modifications' })}</li>
        <li className="rtl:text-right">{t('docs.vibeCoding.principles.iterative.build', { defaultMessage: 'Build complexity gradually' })}</li>
      </ul>

      <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-2 rtl:text-right">
        {t('docs.vibeCoding.principles.partner.title', { defaultMessage: '3. AI as a Coding Partner' })}
      </h3>

      <p className="mb-2 rtl:text-right rtl:leading-loose">
        {t('docs.vibeCoding.principles.partner.intro', { defaultMessage: 'Leverage AI effectively:' })}
      </p>

      <ul className="mb-6 list-disc rtl:list-inside ltr:ml-6 space-y-2">
        <li className="rtl:text-right">{t('docs.vibeCoding.principles.partner.boilerplate', { defaultMessage: 'Use AI for boilerplate code generation' })}</li>
        <li className="rtl:text-right">{t('docs.vibeCoding.principles.partner.help', { defaultMessage: 'Get help with complex algorithms and logic' })}</li>
        <li className="rtl:text-right">{t('docs.vibeCoding.principles.partner.docs', { defaultMessage: 'Generate documentation and comments' })}</li>
        <li className="rtl:text-right">{t('docs.vibeCoding.principles.partner.explore', { defaultMessage: 'Explore different implementation approaches' })}</li>
      </ul>

      <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-2 rtl:text-right">
        {t('docs.vibeCoding.principles.oversight.title', { defaultMessage: '4. Human Oversight' })}
      </h3>

      <p className="mb-2 rtl:text-right rtl:leading-loose">
        {t('docs.vibeCoding.principles.oversight.intro', { defaultMessage: 'Maintain quality and control:' })}
      </p>

      <ul className="mb-6 list-disc rtl:list-inside ltr:ml-6 space-y-2">
        <li className="rtl:text-right">{t('docs.vibeCoding.principles.oversight.review', { defaultMessage: 'Review and understand generated code' })}</li>
        <li className="rtl:text-right">{t('docs.vibeCoding.principles.oversight.test', { defaultMessage: 'Test thoroughly before deployment' })}</li>
        <li className="rtl:text-right">{t('docs.vibeCoding.principles.oversight.validate', { defaultMessage: 'Validate security and performance implications' })}</li>
        <li className="rtl:text-right">{t('docs.vibeCoding.principles.oversight.maintain', { defaultMessage: 'Maintain architectural consistency' })}</li>
      </ul>

      {/* Continue with the rest of the sections as needed... */}

      <p className="mt-10 text-sm text-gray-500 rtl:text-right">
        {t('docs.vibeCoding.footer', { 
          defaultMessage: 'Vibe coding represents the future of development - where human creativity meets AI capability. Focus on the big picture and let AI handle the details.'
        })}
      </p>
    </div>
  );
}
