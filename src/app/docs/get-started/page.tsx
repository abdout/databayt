'use client';

import React from 'react';
import { useDocsTranslation } from "@/components/docs/utils/use-docs-translation";
import Link from 'next/link';

export default function GetStartedPage() {
  const { t } = useDocsTranslation();

  return (
    <div className="docs-page">
      <h2 className="text-3xl font-bold mb-6 rtl:text-right">
        {t('docs.getStarted.title', { defaultMessage: 'Get Started' })}
      </h2>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.getStarted.intro', { defaultMessage: 'This guide will help you quickly set up your development environment and make your first contribution to Databayt. Whether you\'re a seasoned developer or just starting out, we\'ll walk you through everything you need to know.' })}
      </p>

      <div className="text-sm text-muted-foreground py-4 bg-muted rounded-lg px-6 flex items-center rtl:flex-row-reverse justify-between">
        <div className="flex items-center rtl:flex-row-reverse">
          <strong className="rtl:ml-2 ltr:mr-2">
            {t('docs.getStarted.technologyUsed', { defaultMessage: 'Technology used:' })}
          </strong>
          <span>{t('docs.getStarted.techStack', { defaultMessage: 'Next.js, React, TypeScript, Tailwind CSS, pnpm...' })}</span>
        </div>
        <Link 
          href="/docs/stack" 
          className="underline hover:text-primary rtl:mr-2 ltr:ml-2 whitespace-nowrap"
        >
          {t('docs.getStarted.seeFullStack', { defaultMessage: 'see full stack →' })}
        </Link>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.getStarted.prerequisites.title', { defaultMessage: 'Prerequisites' })}
      </h2>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.getStarted.prerequisites.description', { defaultMessage: 'Before you begin, make sure you have the following set up:' })}
      </p>

      <div className="p-6 border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-950/20 my-6 rtl:border-r-4 rtl:border-l-0 rtl:pr-6">
        <h4 className="font-semibold mb-2 rtl:text-right">
          {t('docs.getStarted.completeSetupGuides.title', { defaultMessage: '🔧 Complete Setup Guides' })}
        </h4>
        <p className="text-sm text-muted-foreground mb-2 rtl:text-right">
          {t('docs.getStarted.completeSetupGuides.description', { defaultMessage: 'New to GitHub or local development? We have detailed visual guides to help you:' })}
        </p>
        <div className="flex flex-wrap gap-2 rtl:justify-end">
          <Link href="/docs/github" className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-md text-sm hover:bg-primary/20 transition-colors">
            {t('docs.getStarted.completeSetupGuides.githubSetupGuide', { defaultMessage: '📚 GitHub Setup Guide' })}
          </Link>
          <Link href="/docs/localhost" className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-md text-sm hover:bg-primary/20 transition-colors">
            {t('docs.getStarted.completeSetupGuides.localhostSetupGuide', { defaultMessage: '💻 Localhost Development Setup' })}
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.getStarted.prerequisites.githubAccount.title', { defaultMessage: 'GitHub Account' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right rtl:leading-loose">
            {t('docs.getStarted.prerequisites.githubAccount.description', { defaultMessage: 'Free GitHub account with SSH keys configured. See our' })}
            {' '}
            <Link href="/docs/github" className="underline hover:text-primary">
              {t('docs.getStarted.prerequisites.githubAccount.setupGuide', { defaultMessage: 'GitHub Setup Guide' })}
            </Link>
            {' '}
            {t('docs.getStarted.prerequisites.githubAccount.forInstructions', { defaultMessage: 'for detailed instructions.' })}
          </div>
        </div>
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.getStarted.prerequisites.nodejs.title', { defaultMessage: 'Node.js 18+' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right rtl:leading-loose">
            {t('docs.getStarted.prerequisites.nodejs.downloadFrom', { defaultMessage: 'Download from' })}
            {' '}
            <a href="https://nodejs.org" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
              {t('docs.getStarted.prerequisites.nodejs.website', { defaultMessage: 'nodejs.org' })}
            </a>
            .{' '}
            {t('docs.getStarted.prerequisites.nodejs.recommendation', { defaultMessage: 'We recommend the LTS version for stability.' })}
          </div>
        </div>
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.getStarted.prerequisites.pnpm.title', { defaultMessage: 'pnpm' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right rtl:leading-loose">
            {t('docs.getStarted.prerequisites.pnpm.description', { defaultMessage: 'Fast, disk space efficient package manager. Install with:' })}
            {' '}
            <code className="bg-muted px-1 rounded" dir="ltr">npm install -g pnpm</code>
          </div>
        </div>
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.getStarted.prerequisites.codeEditor.title', { defaultMessage: 'Code Editor' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right rtl:leading-loose">
            {t('docs.getStarted.prerequisites.codeEditor.forFree', { defaultMessage: 'For free, we recommend' })}
            {' '}
            <a href="https://code.visualstudio.com" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
              {t('docs.getStarted.prerequisites.codeEditor.vsCode', { defaultMessage: 'VS Code' })}
            </a>
            .{' '}
            {t('docs.getStarted.prerequisites.codeEditor.forPaid', { defaultMessage: 'For paid, we recommend' })}
            {' '}
            <a href="https://cursor.sh" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
              {t('docs.getStarted.prerequisites.codeEditor.cursor', { defaultMessage: 'Cursor' })}
            </a>
            .
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.getStarted.quickStart.title', { defaultMessage: 'Quick Start' })}
      </h2>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.getStarted.quickStart.description', { defaultMessage: 'Get up and running in 5 minutes:' })}
      </p>

      <div className="p-6 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20 my-6 rtl:border-r-4 rtl:border-l-0 rtl:pr-6">
        <h4 className="font-semibold mb-2 rtl:text-right">
          {t('docs.getStarted.detailedGuide.title', { defaultMessage: '📋 Detailed Step-by-Step Guide' })}
        </h4>
        <p className="text-sm text-muted-foreground rtl:text-right">
          {t('docs.getStarted.detailedGuide.description', { defaultMessage: 'For a comprehensive visual guide with screenshots, check out our' })}
          {' '}
          <Link href="/docs/localhost" className="underline hover:text-primary font-medium">
            {t('docs.getStarted.detailedGuide.localhostLink', { defaultMessage: 'Localhost' })}
          </Link>
          {' '}
          {t('docs.getStarted.detailedGuide.page', { defaultMessage: 'page.' })}
        </p>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.getStarted.quickStart.step1.title', { defaultMessage: '1. Fork & Clone' })}
      </h3>
      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.getStarted.quickStart.step1.description', { defaultMessage: 'First, fork the repository you want to contribute to on GitHub, then clone it locally:' })}
      </p>
      <div className="bg-muted rounded-md p-4 my-4">
        <pre className="text-sm overflow-auto" dir="ltr">
          <code>{t('docs.getStarted.quickStart.step1.code', { defaultMessage: '# Replace [repository] with the specific repo you want to contribute to\ngit clone https://github.com/your-username/[repository].git\ncd [repository]' })}</code>
        </pre>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.getStarted.quickStart.step2.title', { defaultMessage: '2. Install Dependencies' })}
      </h3>
      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.getStarted.quickStart.step2.description', { defaultMessage: 'Install all project dependencies using pnpm:' })}
      </p>
      <div className="bg-muted rounded-md p-4 my-4">
        <pre className="text-sm overflow-auto" dir="ltr">
          <code>{t('docs.getStarted.quickStart.step2.code', { defaultMessage: 'pnpm install' })}</code>
        </pre>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.getStarted.quickStart.step3.title', { defaultMessage: '3. Set Up Environment' })}
      </h3>
      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.getStarted.quickStart.step3.description', { defaultMessage: 'Copy the environment variables file and configure as needed:' })}
      </p>
      <div className="bg-muted rounded-md p-4 my-4">
        <pre className="text-sm overflow-auto" dir="ltr">
          <code>{t('docs.getStarted.quickStart.step3.code', { defaultMessage: 'cp .env.example .env.local' })}</code>
        </pre>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.getStarted.quickStart.step4.title', { defaultMessage: '4. Start Development Server' })}
      </h3>
      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.getStarted.quickStart.step4.description', { defaultMessage: 'Run the development server:' })}
      </p>
      <div className="bg-muted rounded-md p-4 my-4">
        <pre className="text-sm overflow-auto" dir="ltr">
          <code>{t('docs.getStarted.quickStart.step4.code', { defaultMessage: 'pnpm dev' })}</code>
        </pre>
      </div>

      <p className="my-4 rtl:text-right rtl:leading-loose">
        {t('docs.getStarted.quickStart.serverRunning', { defaultMessage: 'Your app should now be running at' })}
        {' '}
        <code className="bg-muted px-1 rounded" dir="ltr">http://localhost:3000</code> 
        {' '}
        🎉
      </p>

      <div className="mt-6 p-4 bg-muted rounded-lg rtl:text-right">
        <p className="text-sm">
          <strong>{t('docs.getStarted.quickStart.needMoreHelp', { defaultMessage: 'Need more help?' })}</strong>
          {' '}
          {t('docs.getStarted.quickStart.ourVisualGuide', { defaultMessage: 'Our' })}
          {' '}
          <Link href="/docs/localhost" className="underline hover:text-primary">
            {t('docs.getStarted.quickStart.visualSetupGuide', { defaultMessage: 'visual localhost setup guide' })}
          </Link>
          {' '}
          {t('docs.getStarted.quickStart.providesScreenshots', { defaultMessage: 'provides detailed screenshots for each step above.' })}
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.getStarted.firstContribution.title', { defaultMessage: 'Your First Contribution' })}
      </h2>

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.getStarted.findingWork.title', { defaultMessage: 'Finding Something to Work On' })}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.getStarted.findingWork.goodFirstIssues.title', { defaultMessage: 'Good First Issues' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right rtl:leading-loose">
            {t('docs.getStarted.findingWork.goodFirstIssues.description', { defaultMessage: 'Look for issues labeled "good first issue" - these are specifically chosen for newcomers.' })}
          </div>
        </div>
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.getStarted.findingWork.documentation.title', { defaultMessage: 'Documentation' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right rtl:leading-loose">
            {t('docs.getStarted.findingWork.documentation.description', { defaultMessage: 'Improve docs, fix typos, add examples. Perfect for getting familiar with our codebase.' })}
          </div>
        </div>
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.getStarted.findingWork.uiComponents.title', { defaultMessage: 'UI Components' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right rtl:leading-loose">
            {t('docs.getStarted.findingWork.uiComponents.description', { defaultMessage: 'Build reusable components following our design system and patterns.' })}
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.getStarted.makingChanges.title', { defaultMessage: 'Making Changes' })}
      </h3>

      <ol className="space-y-4 rtl:list-inside rtl:text-right rtl:leading-loose ltr:ml-6">
        <li>
          <strong>{t('docs.getStarted.makingChanges.step1.title', { defaultMessage: 'Create a branch' })}</strong>
          {' '}
          {t('docs.getStarted.makingChanges.step1.description', { defaultMessage: 'for your changes:' })}
          <div className="bg-muted rounded-md p-4 my-2">
            <pre className="text-sm overflow-auto" dir="ltr">
              <code>{t('docs.getStarted.makingChanges.step1.code', { defaultMessage: 'git checkout -b feature/your-feature-name' })}</code>
            </pre>
          </div>
        </li>
        <li>
          <strong>{t('docs.getStarted.makingChanges.step2.title', { defaultMessage: 'Make your changes' })}</strong>
          {' '}
          {t('docs.getStarted.makingChanges.step2.description', { defaultMessage: 'following our' })}
          {' '}
          <Link href="/docs/pattern" className="underline hover:text-primary">
            {t('docs.getStarted.makingChanges.step2.codingPatterns', { defaultMessage: 'coding patterns' })}
          </Link>
        </li>
        <li>
          <strong>{t('docs.getStarted.makingChanges.step3.title', { defaultMessage: 'Test your changes' })}</strong>
          {' '}
          {t('docs.getStarted.makingChanges.step3.description', { defaultMessage: 'locally:' })}
          <div className="bg-muted rounded-md p-4 my-2">
            <pre className="text-sm overflow-auto" dir="ltr">
              <code>{t('docs.getStarted.makingChanges.step3.code', { defaultMessage: 'pnpm build\npnpm lint' })}</code>
            </pre>
          </div>
        </li>
        <li>
          <strong>{t('docs.getStarted.makingChanges.step4.title', { defaultMessage: 'Commit your changes' })}</strong>
          {' '}
          {t('docs.getStarted.makingChanges.step4.description', { defaultMessage: 'using conventional commits:' })}
          <div className="bg-muted rounded-md p-4 my-2">
            <pre className="text-sm overflow-auto" dir="ltr">
              <code>{t('docs.getStarted.makingChanges.step4.code', { defaultMessage: 'git add .\ngit commit -m "feat: add new component feature"' })}</code>
            </pre>
          </div>
        </li>
        <li>
          <strong>{t('docs.getStarted.makingChanges.step5.title', { defaultMessage: 'Push and create a Pull Request' })}</strong>:
          <div className="bg-muted rounded-md p-4 my-2">
            <pre className="text-sm overflow-auto" dir="ltr">
              <code>{t('docs.getStarted.makingChanges.step5.code', { defaultMessage: 'git push origin feature/your-feature-name' })}</code>
            </pre>
          </div>
        </li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.getStarted.workflow.title', { defaultMessage: 'Development Workflow' })}
      </h2>

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.getStarted.projectStructure.title', { defaultMessage: 'Project Structure' })}
      </h3>

      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.getStarted.projectStructure.description', { defaultMessage: 'Understanding our architecture helps you navigate the codebase:' })}
      </p>

      <div className="bg-muted rounded-md p-4 my-4">
        <pre className="text-sm overflow-auto" dir="ltr">
          <code>{t('docs.getStarted.projectStructure.code', { defaultMessage: 'src/\n├── app/                 # Next.js app router\n├── components/          # Reusable UI components\n│   ├── ui/             # Basic UI primitives\n│   ├── landing/        # Landing page components\n│   └── [feature]/      # Feature-specific components\n├── lib/                # Utility functions\n├── styles/             # Global styles\n└── types/              # TypeScript type definitions' })}</code>
        </pre>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.getStarted.keyCommands.title', { defaultMessage: 'Key Commands' })}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.getStarted.keyCommands.development.title', { defaultMessage: 'Development' })}
          </h4>
          <div className="text-sm text-muted-foreground space-y-1 rtl:text-right">
            <div>
              <code className="bg-muted px-1 rounded" dir="ltr">pnpm dev</code>
              {' - '}
              {t('docs.getStarted.keyCommands.development.devServer', { defaultMessage: 'Start dev server' })}
            </div>
            <div>
              <code className="bg-muted px-1 rounded" dir="ltr">pnpm build</code>
              {' - '}
              {t('docs.getStarted.keyCommands.development.build', { defaultMessage: 'Build for production' })}
            </div>
            <div>
              <code className="bg-muted px-1 rounded" dir="ltr">pnpm start</code>
              {' - '}
              {t('docs.getStarted.keyCommands.development.start', { defaultMessage: 'Run production build' })}
            </div>
          </div>
        </div>
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.getStarted.keyCommands.quality.title', { defaultMessage: 'Quality' })}
          </h4>
          <div className="text-sm text-muted-foreground space-y-1 rtl:text-right">
            <div>
              <code className="bg-muted px-1 rounded" dir="ltr">pnpm lint</code>
              {' - '}
              {t('docs.getStarted.keyCommands.quality.lint', { defaultMessage: 'Run ESLint' })}
            </div>
            <div>
              <code className="bg-muted px-1 rounded" dir="ltr">pnpm type-check</code>
              {' - '}
              {t('docs.getStarted.keyCommands.quality.typeCheck', { defaultMessage: 'Check TypeScript' })}
            </div>
            <div>
              <code className="bg-muted px-1 rounded" dir="ltr">pnpm format</code>
              {' - '}
              {t('docs.getStarted.keyCommands.quality.format', { defaultMessage: 'Format with Prettier' })}
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.getStarted.gettingHelp.title', { defaultMessage: 'Getting Help' })}
      </h2>

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.getStarted.communitySupport.title', { defaultMessage: 'Community Support' })}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.getStarted.communitySupport.discord.title', { defaultMessage: 'Discord Community' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right rtl:leading-loose">
            {t('docs.getStarted.communitySupport.discord.description', { defaultMessage: 'Join our active Discord server with 500+ members. Get real-time help and connect with other contributors.' })}
          </div>
        </div>
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.getStarted.communitySupport.githubDiscussions.title', { defaultMessage: 'GitHub Discussions' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right rtl:leading-loose">
            {t('docs.getStarted.communitySupport.githubDiscussions.description', { defaultMessage: 'Ask questions, share ideas, and discuss features in our GitHub discussions forum.' })}
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.getStarted.mentorship.title', { defaultMessage: 'Mentorship Program' })}
      </h3>

      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.getStarted.mentorship.introduction', { defaultMessage: 'New contributors get paired with experienced mentors who provide:' })}
      </p>
      <ul className="mb-6 space-y-2 rtl:text-right rtl:list-inside ltr:ml-6 list-disc">
        <li>{t('docs.getStarted.mentorship.codeReview', { defaultMessage: 'Code review and feedback' })}</li>
        <li>{t('docs.getStarted.mentorship.bestPractices', { defaultMessage: 'Guidance on best practices' })}</li>
        <li>{t('docs.getStarted.mentorship.technicalChallenges', { defaultMessage: 'Help with technical challenges' })}</li>
        <li>{t('docs.getStarted.mentorship.careerAdvice', { defaultMessage: 'Career development advice' })}</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.getStarted.nextSteps.title', { defaultMessage: 'Next Steps' })}
      </h2>

      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.getStarted.nextSteps.description', { defaultMessage: 'Once you\'re set up and have made your first contribution:' })}
      </p>

      <ol className="mb-6 space-y-2 rtl:text-right rtl:list-inside ltr:ml-6">
        <li>
          <strong>{t('docs.getStarted.nextSteps.exploreCTA', { defaultMessage: 'Explore the codebase' })}</strong>
          {' - '}
          {t('docs.getStarted.nextSteps.exploreDesc', { defaultMessage: 'Browse different repositories to understand our ecosystem' })}
        </li>
        <li>
          <strong>{t('docs.getStarted.nextSteps.readPatternsCTA', { defaultMessage: 'Read the patterns' })}</strong>
          {' - '}
          {t('docs.getStarted.nextSteps.readPatternsDesc', { defaultMessage: 'Check our' })}
          {' '}
          <Link href="/docs/pattern" className="underline hover:text-primary">
            {t('docs.getStarted.nextSteps.developmentPatterns', { defaultMessage: 'development patterns' })}
          </Link>
          {' '}
          {t('docs.getStarted.nextSteps.guide', { defaultMessage: 'guide' })}
        </li>
        <li>
          <strong>{t('docs.getStarted.nextSteps.joinCommunityCTA', { defaultMessage: 'Join the community' })}</strong>
          {' - '}
          {t('docs.getStarted.nextSteps.joinCommunityDesc', { defaultMessage: 'Connect with other contributors on Discord' })}
        </li>
        <li>
          <strong>{t('docs.getStarted.nextSteps.findNicheCTA', { defaultMessage: 'Find your niche' })}</strong>
          {' - '}
          {t('docs.getStarted.nextSteps.findNicheDesc', { defaultMessage: 'Identify areas that match your interests and skills' })}
        </li>
        <li>
          <strong>{t('docs.getStarted.nextSteps.shareWorkCTA', { defaultMessage: 'Share your work' })}</strong>
          {' - '}
          {t('docs.getStarted.nextSteps.shareWorkDesc', { defaultMessage: 'Showcase your contributions and get feedback' })}
        </li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.getStarted.resources.title', { defaultMessage: 'Resources' })}
      </h2>

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.getStarted.essentialReading.title', { defaultMessage: 'Essential Reading' })}
      </h3>

      <ul className="mb-6 space-y-2 rtl:text-right rtl:list-inside ltr:ml-6 list-disc">
        <li>
          <Link href="/docs/architecture" className="underline hover:text-primary">
            {t('docs.getStarted.essentialReading.architecture', { defaultMessage: 'Architecture Overview' })}
          </Link>
          {' – '}
          {t('docs.getStarted.essentialReading.architectureDesc', { defaultMessage: 'Understand our system design' })}
        </li>
        <li>
          <Link href="/docs/pattern" className="underline hover:text-primary">
            {t('docs.getStarted.essentialReading.patterns', { defaultMessage: 'Development Patterns' })}
          </Link>
          {' – '}
          {t('docs.getStarted.essentialReading.patternsDesc', { defaultMessage: 'Learn our coding standards' })}
        </li>
        <li>
          <Link href="/docs/contribute" className="underline hover:text-primary">
            {t('docs.getStarted.essentialReading.contributing', { defaultMessage: 'Contributing Guide' })}
          </Link>
          {' – '}
          {t('docs.getStarted.essentialReading.contributingDesc', { defaultMessage: 'Detailed contribution guidelines' })}
        </li>
        <li>
          <Link href="/docs/revenue" className="underline hover:text-primary">
            {t('docs.getStarted.essentialReading.revenue', { defaultMessage: 'Revenue Sharing' })}
          </Link>
          {' – '}
          {t('docs.getStarted.essentialReading.revenueDesc', { defaultMessage: 'How contributors earn from their work' })}
        </li>
      </ul>

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.getStarted.quickLinks.title', { defaultMessage: 'Quick Links' })}
      </h3>

      <ul className="mb-6 space-y-2 rtl:text-right rtl:list-inside ltr:ml-6 list-disc">
        <li>
          <a href="https://github.com/databayt" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
            {t('docs.getStarted.quickLinks.githubOrg', { defaultMessage: 'GitHub Organization' })}
          </a>
        </li>
        <li>
          <a href="https://discord.gg/databayt" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
            {t('docs.getStarted.quickLinks.discordCommunity', { defaultMessage: 'Discord Community' })}
          </a>
        </li>
        <li>
          <a href="https://github.com/databayt/community/issues" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
            {t('docs.getStarted.quickLinks.issueTracker', { defaultMessage: 'Issue Tracker' })}
          </a>
        </li>
        <li>
          <Link href="/docs/roadmap" className="underline hover:text-primary">
            {t('docs.getStarted.quickLinks.roadmap', { defaultMessage: 'Project Roadmap' })}
          </Link>
        </li>
      </ul>

      <hr className="my-8 border-t border-border" />

      <p className="mt-8 mb-6 font-bold rtl:text-right">
        {t('docs.getStarted.conclusion.readyToBuild', { defaultMessage: 'Ready to build something amazing?' })}
        {' '}
        {t('docs.getStarted.conclusion.learnByDoing', { defaultMessage: 'The best way to learn is by doing. Pick a good first issue and start contributing today. Remember, every expert was once a beginner, and we\'re here to support your journey every step of the way.' })}
      </p>
    </div>
  );
}
