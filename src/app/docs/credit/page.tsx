'use client';

import React from 'react';
import { useDocsTranslation } from "@/components/docs/utils/use-docs-translation";

export default function CreditPage() {
  const { t } = useDocsTranslation();

  return (
    <div className="docs-page">
      <h2 className="text-3xl font-bold mb-6 rtl:text-right">
        {t('docs.credit.title', { defaultMessage: 'Credits' })}
      </h2>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.credit.description', { 
          defaultMessage: 'Databayt is open source and powered by open source software. We\'re incredibly grateful to the amazing developers, designers, and content creators who have inspired and enabled our work.' 
        })}
      </p>

      <h3 className="text-2xl font-bold mt-10 mb-4 rtl:text-right">
        {t('docs.credit.coreInspirations.title', { defaultMessage: 'Core Inspirations' })}
      </h3>

      <h4 className="text-xl font-semibold mt-6 mb-2 rtl:text-right">
        {t('docs.credit.coreInspirations.shadcn.title', { defaultMessage: 'shadcn/ui' })}
      </h4>
      
      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.credit.coreInspirations.shadcn.description', { 
          defaultMessage: 'Our primary inspiration and foundation comes from '
        })}
        <a href="https://ui.shadcn.com/" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
          {t('docs.credit.coreInspirations.shadcn.linkText', { defaultMessage: 'shadcn/ui' })}
        </a>
        {t('docs.credit.coreInspirations.shadcn.descriptionCont', { 
          defaultMessage: ', created by '
        })}
        <a href="https://x.com/shadcn" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
          {t('docs.credit.coreInspirations.shadcn.authorLinkText', { defaultMessage: '@shadcn' })}
        </a>
        {t('docs.credit.coreInspirations.shadcn.descriptionEnd', { 
          defaultMessage: '. This incredible project has set the standard for modern, accessible React components. We extensively use and build upon:' 
        })}
      </p>

      <ul className="mb-6 list-disc rtl:list-inside ltr:ml-6 space-y-2">
        <li className="rtl:text-right">
          <a href="https://github.com/shadcn-ui/ui" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
            {t('docs.credit.coreInspirations.shadcn.links.official', { defaultMessage: 'Official shadcn/ui Components' })}
          </a>
        </li>
        <li className="rtl:text-right">
          <a href="https://awesome-shadcn-ui.vercel.app/" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
            {t('docs.credit.coreInspirations.shadcn.links.awesome', { defaultMessage: 'Awesome shadcn/ui Collection' })}
          </a>
        </li>
        <li className="rtl:text-right">
          <a href="https://www.shadcnblocks.com/" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
            {t('docs.credit.coreInspirations.shadcn.links.blocks', { defaultMessage: 'shadcn Blocks' })}
          </a>
        </li>
        <li className="rtl:text-right">
          <a href="https://tx.shadcn.com/" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
            {t('docs.credit.coreInspirations.shadcn.links.templates', { defaultMessage: 'shadcn Templates' })}
          </a>
        </li>
      </ul>

      <h3 className="text-2xl font-bold mt-10 mb-4 rtl:text-right">
        {t('docs.credit.componentLibraries.title', { defaultMessage: 'Component Libraries' })}
      </h3>

      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.credit.componentLibraries.description', { defaultMessage: 'We\'ve drawn inspiration and learned from these excellent component libraries:' })}
      </p>

      <ul className="mb-6 list-disc rtl:list-inside ltr:ml-6 space-y-2">
        <li className="rtl:text-right">
          <a href="https://ui.aceternity.com/" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
            {t('docs.credit.componentLibraries.links.aceternity', { defaultMessage: 'Aceternity UI' })}
          </a> - {t('docs.credit.componentLibraries.links.aceternityDesc', { defaultMessage: 'Beautiful animated components and micro-interactions' })}
        </li>
        <li className="rtl:text-right">
          <a href="https://nsui.irung.me/" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
            {t('docs.credit.componentLibraries.links.ns', { defaultMessage: 'NS UI' })}
          </a> - {t('docs.credit.componentLibraries.links.nsDesc', { defaultMessage: 'Modern UI components and patterns' })}
        </li>
        <li className="rtl:text-right">
          <a href="https://www.fancycomponents.dev/docs/components/blocks/simple-marquee" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
            {t('docs.credit.componentLibraries.links.fancy', { defaultMessage: 'Fancy Components' })}
          </a> - {t('docs.credit.componentLibraries.links.fancyDesc', { defaultMessage: 'Advanced UI components' })}
        </li>
        <li className="rtl:text-right">
          <a href="https://shadcn-chatbot-kit.vercel.app/" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
            {t('docs.credit.componentLibraries.links.chatbot', { defaultMessage: 'shadcn Chatbot Kit' })}
          </a> - {t('docs.credit.componentLibraries.links.chatbotDesc', { defaultMessage: 'Chat interface components' })}
        </li>
      </ul>

      <h3 className="text-2xl font-bold mt-10 mb-4 rtl:text-right">
        {t('docs.credit.educationalResources.title', { defaultMessage: 'Educational Resources' })}
      </h3>

      <h4 className="text-xl font-semibold mt-6 mb-2 rtl:text-right">
        {t('docs.credit.educationalResources.youtubeChannels.title', { defaultMessage: 'YouTube Channels' })}
      </h4>

      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.credit.educationalResources.youtubeChannels.description', { defaultMessage: 'We\'ve learned immensely from these educational content creators:' })}
      </p>

      <ul className="mb-6 list-disc rtl:list-inside ltr:ml-6 space-y-2">
        <li className="rtl:text-right">{t('docs.credit.educationalResources.youtubeChannels.list.jsm', { defaultMessage: 'JavaScript Mastery - Advanced JavaScript and React tutorials' })}</li>
        <li className="rtl:text-right">{t('docs.credit.educationalResources.youtubeChannels.list.antonio', { defaultMessage: 'Code with Antonio - In-depth web development guides' })}</li>
        <li className="rtl:text-right">{t('docs.credit.educationalResources.youtubeChannels.list.lama', { defaultMessage: 'Lama Dev - Practical web development tutorials' })}</li>
        <li className="rtl:text-right">{t('docs.credit.educationalResources.youtubeChannels.list.fireship', { defaultMessage: 'Fireship - Quick, informative tech explanations' })}</li>
        <li className="rtl:text-right">{t('docs.credit.educationalResources.youtubeChannels.list.wds', { defaultMessage: 'Web Dev Simplified - Clear explanations of complex concepts' })}</li>
      </ul>

      <h3 className="text-2xl font-bold mt-10 mb-4 rtl:text-right">
        {t('docs.credit.community.title', { defaultMessage: 'Community' })}
      </h3>

      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.credit.community.description', { defaultMessage: 'Our project wouldn\'t be possible without the broader open source community. Special thanks to:' })}
      </p>

      <ul className="mb-6 list-disc rtl:list-inside ltr:ml-6 space-y-2">
        <li className="rtl:text-right">{t('docs.credit.community.list.contributors', { defaultMessage: 'All contributors who have submitted PRs, reported issues, or provided feedback' })}</li>
        <li className="rtl:text-right">{t('docs.credit.community.list.react', { defaultMessage: 'The React and Next.js teams for building amazing frameworks' })}</li>
        <li className="rtl:text-right">{t('docs.credit.community.list.tailwind', { defaultMessage: 'The TailwindCSS team for revolutionizing CSS workflows' })}</li>
        <li className="rtl:text-right">{t('docs.credit.community.list.knowledge', { defaultMessage: 'Everyone who has shared their knowledge through blog posts, videos, and discussions' })}</li>
      </ul>

      <h3 className="text-2xl font-bold mt-10 mb-4 rtl:text-right">
        {t('docs.credit.licenseAttribution.title', { defaultMessage: 'License and Attribution' })}
      </h3>

      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.credit.licenseAttribution.description', { defaultMessage: 'While we build upon these amazing resources, Databayt maintains its own unique identity and codebase. We strive to:' })}
      </p>

      <ul className="mb-6 list-disc rtl:list-inside ltr:ml-6 space-y-2">
        <li className="rtl:text-right">{t('docs.credit.licenseAttribution.list.attribute', { defaultMessage: 'Properly attribute code and ideas to their original creators' })}</li>
        <li className="rtl:text-right">{t('docs.credit.licenseAttribution.list.respect', { defaultMessage: 'Respect all license requirements' })}</li>
        <li className="rtl:text-right">{t('docs.credit.licenseAttribution.list.contribute', { defaultMessage: 'Contribute back to the open source community' })}</li>
        <li className="rtl:text-right">{t('docs.credit.licenseAttribution.list.transparency', { defaultMessage: 'Maintain transparency about our inspirations and sources' })}</li>
      </ul>

      <p className="mt-8 mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.credit.wantCredit.prompt', { defaultMessage: 'Want to be credited? If we\'ve used your work and haven\'t properly attributed it, please ' })}
        <a href="https://github.com/databayt/community/issues" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
          {t('docs.credit.wantCredit.link', { defaultMessage: 'let us know' })}
        </a>.
      </p>
    </div>
  );
}
