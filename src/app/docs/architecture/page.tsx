'use client';

import React from 'react';
import { useDocsTranslation } from "@/components/docs/utils/use-docs-translation";
import Link from 'next/link';

export default function ArchitecturePage() {
  const { t } = useDocsTranslation();

  return (
    <div className="docs-page">
      <h2 className="text-3xl font-bold mb-6 rtl:text-right">
        {t('docs.architecture.title', { defaultMessage: 'Architecture' })}
      </h2>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        <strong>{t('docs.architecture.automate', { defaultMessage: 'Automate' })}</strong>{' '}
        {t('docs.architecture.intro1', { defaultMessage: 'the boring. Architecture embodies the same principles we apply to business automation — minimal complexity, maximum efficiency, and atomic reusability. Every component is designed to work independently while contributing to a cohesive ecosystem.' })}
      </p>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.architecture.intro2', { defaultMessage: "We don't just build software; we craft" })}{' '}
        <strong>{t('docs.architecture.automationSolutions', { defaultMessage: 'automation solutions' })}</strong>{' '}
        {t('docs.architecture.intro3', { defaultMessage: 'that scale with your business. From single components to complete platforms, our architecture supports the journey from prototype to production.' })}
      </p>

      <h3 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.architecture.corePhilosophy.title', { defaultMessage: 'Core Design Philosophy' })}
      </h3>

      <h4 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        <strong>{t('docs.architecture.corePhilosophy.atomic.title', { defaultMessage: 'Atomic Everything' })}</strong>
      </h4>
      <ul className="space-y-2 mb-6 rtl:text-right">
        <li>
          <strong>{t('docs.architecture.corePhilosophy.atomic.component.title', { defaultMessage: 'Component-First' })}</strong>{' '}
          - {t('docs.architecture.corePhilosophy.atomic.component.description', { defaultMessage: 'Every piece of UI is a reusable, tested component' })}
        </li>
        <li>
          <strong>{t('docs.architecture.corePhilosophy.atomic.minimal.title', { defaultMessage: 'Minimal Complexity' })}</strong>{' '}
          - {t('docs.architecture.corePhilosophy.atomic.minimal.description', { defaultMessage: 'Simple solutions that compound into powerful systems' })}
        </li>
        <li>
          <strong>{t('docs.architecture.corePhilosophy.atomic.opensource.title', { defaultMessage: 'Open Source First' })}</strong>{' '}
          - {t('docs.architecture.corePhilosophy.atomic.opensource.description', { defaultMessage: 'Transparency in every line of code' })}
        </li>
        <li>
          <strong>{t('docs.architecture.corePhilosophy.atomic.shadcn.title', { defaultMessage: 'Shadcn/UI Inspired' })}</strong>{' '}
          - {t('docs.architecture.corePhilosophy.atomic.shadcn.description', { defaultMessage: 'Following proven patterns and naming conventions' })}
        </li>
      </ul>

      <h4 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        <strong>{t('docs.architecture.corePhilosophy.modernWeb.title', { defaultMessage: 'Modern Web Standards' })}</strong>
      </h4>
      <ul className="space-y-2 mb-6 rtl:text-right">
        <li>
          <strong>{t('docs.architecture.corePhilosophy.modernWeb.nextjs.title', { defaultMessage: 'Next.js 15' })}</strong>{' '}
          - {t('docs.architecture.corePhilosophy.modernWeb.nextjs.description', { defaultMessage: 'App Router with React 19 for cutting-edge performance' })}
        </li>
        <li>
          <strong>{t('docs.architecture.corePhilosophy.modernWeb.typescript.title', { defaultMessage: 'TypeScript' })}</strong>{' '}
          - {t('docs.architecture.corePhilosophy.modernWeb.typescript.description', { defaultMessage: 'Type safety across the entire stack' })}
        </li>
        <li>
          <strong>{t('docs.architecture.corePhilosophy.modernWeb.mdx.title', { defaultMessage: 'MDX Integration' })}</strong>{' '}
          - {t('docs.architecture.corePhilosophy.modernWeb.mdx.description', { defaultMessage: 'Documentation as code with seamless content management' })}
        </li>
        <li>
          <strong>{t('docs.architecture.corePhilosophy.modernWeb.tailwind.title', { defaultMessage: 'Tailwind CSS' })}</strong>{' '}
          - {t('docs.architecture.corePhilosophy.modernWeb.tailwind.description', { defaultMessage: 'Utility-first styling for consistent design systems' })}
        </li>
      </ul>

      <h4 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        <strong>{t('docs.architecture.corePhilosophy.business.title', { defaultMessage: 'Business-Focused Architecture' })}</strong>
      </h4>
      <ul className="space-y-2 mb-6 rtl:text-right">
        <li>
          <strong>{t('docs.architecture.corePhilosophy.business.documentation.title', { defaultMessage: 'Documentation-Driven' })}</strong>{' '}
          - {t('docs.architecture.corePhilosophy.business.documentation.description', { defaultMessage: 'Every feature documented, every decision transparent' })}
        </li>
        <li>
          <strong>{t('docs.architecture.corePhilosophy.business.community.title', { defaultMessage: 'Community-Centric' })}</strong>{' '}
          - {t('docs.architecture.corePhilosophy.business.community.description', { defaultMessage: 'Built for contributors, maintained by the community' })}
        </li>
        <li>
          <strong>{t('docs.architecture.corePhilosophy.business.automation.title', { defaultMessage: 'Automation-Ready' })}</strong>{' '}
          - {t('docs.architecture.corePhilosophy.business.automation.description', { defaultMessage: 'Architecture designed for business process automation' })}
        </li>
      </ul>

      <h3 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.architecture.technologyStack.title', { defaultMessage: 'Technology Stack' })}
      </h3>

      <h4 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.architecture.technologyStack.frontend.title', { defaultMessage: 'Frontend Foundation' })}
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.architecture.technologyStack.frontend.nextjs.title', { defaultMessage: 'Next.js 15' })}
          </h4>
          <div className="text-sm text-muted-foreground mb-2 rtl:text-right">
            {t('docs.architecture.technologyStack.frontend.nextjs.subtitle', { defaultMessage: 'App Router with React 19 Server Components' })}
          </div>
          <ul className="text-xs text-muted-foreground space-y-1 rtl:text-right">
            <li>• {t('docs.architecture.technologyStack.frontend.nextjs.feature1', { defaultMessage: 'File-based routing with app directory' })}</li>
            <li>• {t('docs.architecture.technologyStack.frontend.nextjs.feature2', { defaultMessage: 'Server and client components' })}</li>
            <li>• {t('docs.architecture.technologyStack.frontend.nextjs.feature3', { defaultMessage: 'Built-in performance optimizations' })}</li>
          </ul>
        </div>
        
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.architecture.technologyStack.frontend.typescript.title', { defaultMessage: 'TypeScript' })}
          </h4>
          <div className="text-sm text-muted-foreground mb-2 rtl:text-right">
            {t('docs.architecture.technologyStack.frontend.typescript.subtitle', { defaultMessage: 'Full-stack type safety and developer experience' })}
          </div>
          <ul className="text-xs text-muted-foreground space-y-1 rtl:text-right">
            <li>• {t('docs.architecture.technologyStack.frontend.typescript.feature1', { defaultMessage: 'Strict type checking' })}</li>
            <li>• {t('docs.architecture.technologyStack.frontend.typescript.feature2', { defaultMessage: 'IntelliSense and autocomplete' })}</li>
            <li>• {t('docs.architecture.technologyStack.frontend.typescript.feature3', { defaultMessage: 'Compile-time error detection' })}</li>
          </ul>
        </div>
        
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.architecture.technologyStack.frontend.tailwind.title', { defaultMessage: 'Tailwind CSS 4' })}
          </h4>
          <div className="text-sm text-muted-foreground mb-2 rtl:text-right">
            {t('docs.architecture.technologyStack.frontend.tailwind.subtitle', { defaultMessage: 'Latest utility-first CSS framework' })}
          </div>
          <ul className="text-xs text-muted-foreground space-y-1 rtl:text-right">
            <li>• {t('docs.architecture.technologyStack.frontend.tailwind.feature1', { defaultMessage: 'CSS variables for theming' })}</li>
            <li>• {t('docs.architecture.technologyStack.frontend.tailwind.feature2', { defaultMessage: 'JIT compilation' })}</li>
            <li>• {t('docs.architecture.technologyStack.frontend.tailwind.feature3', { defaultMessage: 'Dark mode support' })}</li>
          </ul>
        </div>
        
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.architecture.technologyStack.frontend.shadcn.title', { defaultMessage: 'Shadcn/UI' })}
          </h4>
          <div className="text-sm text-muted-foreground mb-2 rtl:text-right">
            {t('docs.architecture.technologyStack.frontend.shadcn.subtitle', { defaultMessage: 'Copy-paste components built on Radix UI' })}
          </div>
          <ul className="text-xs text-muted-foreground space-y-1 rtl:text-right">
            <li>• {t('docs.architecture.technologyStack.frontend.shadcn.feature1', { defaultMessage: 'Radix UI primitives' })}</li>
            <li>• {t('docs.architecture.technologyStack.frontend.shadcn.feature2', { defaultMessage: 'Accessible by default' })}</li>
            <li>• {t('docs.architecture.technologyStack.frontend.shadcn.feature3', { defaultMessage: 'Customizable and composable' })}</li>
          </ul>
        </div>
      </div>

      <h4 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.architecture.technologyStack.content.title', { defaultMessage: 'Content & Documentation' })}
      </h4>

      <pre className="p-4 rounded-lg bg-muted overflow-x-auto text-sm rtl:text-right ltr:text-left" dir="ltr">
        <code>{`// MDX Configuration
const withMDX = createMDX({
  // Documentation as code approach
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Seamless integration with Next.js
})

// Component-driven documentation
export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="docs-container">
      <Sidebar />
      <main className="docs-content">
        {children}
      </main>
    </div>
  )
}`}</code>
      </pre>

      <h4 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.architecture.technologyStack.state.title', { defaultMessage: 'State Management & Utilities' })}
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="p-4 border rounded-lg text-center">
          <h4 className="font-semibold mb-2">
            {t('docs.architecture.technologyStack.state.jotai.title', { defaultMessage: 'Jotai' })}
          </h4>
          <div className="text-sm text-muted-foreground">
            {t('docs.architecture.technologyStack.state.jotai.description', { defaultMessage: 'Atomic state management' })}
          </div>
        </div>
        
        <div className="p-4 border rounded-lg text-center">
          <h4 className="font-semibold mb-2">
            {t('docs.architecture.technologyStack.state.reactHookForm.title', { defaultMessage: 'React Hook Form' })}
          </h4>
          <div className="text-sm text-muted-foreground">
            {t('docs.architecture.technologyStack.state.reactHookForm.description', { defaultMessage: 'Performant form handling' })}
          </div>
        </div>
        
        <div className="p-4 border rounded-lg text-center">
          <h4 className="font-semibold mb-2">
            {t('docs.architecture.technologyStack.state.framerMotion.title', { defaultMessage: 'Framer Motion' })}
          </h4>
          <div className="text-sm text-muted-foreground">
            {t('docs.architecture.technologyStack.state.framerMotion.description', { defaultMessage: 'Smooth animations' })}
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.architecture.ecosystem.title', { defaultMessage: 'Project Ecosystem' })}
      </h3>
      
      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.architecture.ecosystem.description', { defaultMessage: 'Our architecture spans multiple specialized projects, each serving different aspects of business automation:' })}
      </p>

      <h4 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.architecture.ecosystem.databayt.title', { defaultMessage: '1. Databayt (Main Platform)' })}
      </h4>
      
      <ul className="space-y-2 mb-6 rtl:text-right">
        <li>
          <strong>{t('docs.architecture.ecosystem.databayt.repository.label', { defaultMessage: 'Repository' })}</strong>:{' '}
          <a href="https://github.com/abdout/databayt" className="text-primary hover:underline">github.com/abdout/databayt</a>
        </li>
        <li>
          <strong>{t('docs.architecture.ecosystem.databayt.purpose.label', { defaultMessage: 'Purpose' })}</strong>:{' '}
          {t('docs.architecture.ecosystem.databayt.purpose.value', { defaultMessage: 'Core business automation platform' })}
        </li>
        <li>
          <strong>{t('docs.architecture.ecosystem.databayt.stack.label', { defaultMessage: 'Tech Stack' })}</strong>:{' '}
          {t('docs.architecture.ecosystem.databayt.stack.value', { defaultMessage: 'Next.js 15, TypeScript, Tailwind CSS, Shadcn/UI' })}
        </li>
        <li>
          <strong>{t('docs.architecture.ecosystem.databayt.features.label', { defaultMessage: 'Features' })}</strong>:{' '}
          {t('docs.architecture.ecosystem.databayt.features.value', { defaultMessage: 'Documentation system, component library, automation tools' })}
        </li>
      </ul>

      <h4 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.architecture.ecosystem.hogwarts.title', { defaultMessage: '2. Hogwarts (Education Platform)' })}
      </h4>
      
      <ul className="space-y-2 mb-6 rtl:text-right">
        <li>
          <strong>{t('docs.architecture.ecosystem.hogwarts.repository.label', { defaultMessage: 'Repository' })}</strong>:{' '}
          <a href="https://github.com/abdout/hogwarts" className="text-primary hover:underline">github.com/abdout/hogwarts</a>
        </li>
        <li>
          <strong>{t('docs.architecture.ecosystem.hogwarts.url.label', { defaultMessage: 'URL' })}</strong>:{' '}
          <a href="https://ed.databayt.org" className="text-primary hover:underline">ed.databayt.org</a>
        </li>
        <li>
          <strong>{t('docs.architecture.ecosystem.hogwarts.purpose.label', { defaultMessage: 'Purpose' })}</strong>:{' '}
          {t('docs.architecture.ecosystem.hogwarts.purpose.value', { defaultMessage: 'Educational and learning management' })}
        </li>
        <li>
          <strong>{t('docs.architecture.ecosystem.hogwarts.features.label', { defaultMessage: 'Additional Features' })}</strong>:{' '}
          {t('docs.architecture.ecosystem.hogwarts.features.value', { defaultMessage: 'Authentication (NextAuth/Clerk), Database (Prisma)' })}
        </li>
      </ul>

      <h4 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.architecture.ecosystem.future.title', { defaultMessage: '3. Future Platforms (In Development)' })}
      </h4>
      
      <ul className="space-y-2 mb-6 rtl:text-right">
        <li>
          <strong>{t('docs.architecture.ecosystem.future.co.title', { defaultMessage: 'Co' })}</strong>:{' '}
          {t('docs.architecture.ecosystem.future.co.description', { defaultMessage: 'Collaboration and community features' })}
        </li>
        <li>
          <strong>{t('docs.architecture.ecosystem.future.nmbd.title', { defaultMessage: 'NMBD' })}</strong>:{' '}
          {t('docs.architecture.ecosystem.future.nmbd.description', { defaultMessage: 'Specialized automation modules' })}
        </li>
      </ul>

      <h3 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.architecture.gettingStarted.title', { defaultMessage: 'Getting Started' })}
      </h3>
      
      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.architecture.gettingStarted.description', { defaultMessage: 'Ready to build with our architecture? Start here:' })}
      </p>

      <ul className="space-y-2 mb-6 rtl:text-right">
        <li>
          <Link href="/docs/development/setup" className="text-primary hover:underline">
            <strong>{t('docs.architecture.gettingStarted.setup', { defaultMessage: 'Development Setup' })}</strong>
          </Link>{' '}
          - {t('docs.architecture.gettingStarted.setupDescription', { defaultMessage: 'Get your local environment ready' })}
        </li>
        <li>
          <Link href="/docs/development/components" className="text-primary hover:underline">
            <strong>{t('docs.architecture.gettingStarted.components', { defaultMessage: 'Component Guide' })}</strong>
          </Link>{' '}
          - {t('docs.architecture.gettingStarted.componentsDescription', { defaultMessage: 'Learn our component patterns' })}
        </li>
        <li>
          <Link href="/docs/contributing" className="text-primary hover:underline">
            <strong>{t('docs.architecture.gettingStarted.contributing', { defaultMessage: 'Contributing' })}</strong>
          </Link>{' '}
          - {t('docs.architecture.gettingStarted.contributingDescription', { defaultMessage: 'Join the community' })}
        </li>
        <li>
          <Link href="/docs/development/technical-record" className="text-primary hover:underline">
            <strong>{t('docs.architecture.gettingStarted.technicalRecords', { defaultMessage: 'Technical Records' })}</strong>
          </Link>{' '}
          - {t('docs.architecture.gettingStarted.technicalRecordsDescription', { defaultMessage: 'Deep dive into decisions' })}
        </li>
      </ul>

      <p className="mt-10 mb-6 rtl:text-right rtl:leading-loose">
        <strong>{t('docs.architecture.questions', { defaultMessage: 'Questions about our architecture?' })}</strong>{' '}
        <Link href="/docs/community/discussions" className="text-primary hover:underline">
          {t('docs.architecture.joinDiscussion', { defaultMessage: 'Join the discussion' })}
        </Link>{' '}
        {t('docs.architecture.or', { defaultMessage: 'or' })}{' '}
        <Link href="/docs/community/support" className="text-primary hover:underline">
          {t('docs.architecture.contactTeam', { defaultMessage: 'contact our technical team' })}
        </Link>.
      </p>
    </div>
  );
}
