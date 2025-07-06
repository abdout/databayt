'use client';

import React from 'react';
import { useDocsTranslation } from "@/components/docs/utils/use-docs-translation";
import Stack from "./stack";

export default function StackPage() {
  const { t } = useDocsTranslation();

  return (
    <div className="docs-page">
      <h2 className="text-3xl font-bold mb-6 rtl:text-right">
        {t('docs.stack.title', { defaultMessage: 'Technology Stack' })}
      </h2>

      <Stack />

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.stack.introduction', { defaultMessage: 'Databayt is built on a carefully curated technology stack that prioritizes performance, developer experience, and scalability. Our architecture follows modern best practices and leverages industry-leading tools across the full development lifecycle.' })}
      </p>

      {/* Core Technologies */}
      <div className="space-y-6 mb-8">
        <div className="rtl:text-right">
          <h4 className="font-bold mb-2">{t('docs.stack.nextjs.name', { defaultMessage: 'Next.js 15' })}</h4>
          <p className="text-muted-foreground rtl:leading-loose">
            {t('docs.stack.nextjs.description', { defaultMessage: 'Our React-based meta-framework providing server-side rendering, static site generation, and powerful developer tooling. Features App Router, streaming, and built-in optimizations for production-ready applications.' })}
          </p>
        </div>

        <div className="rtl:text-right">
          <h4 className="font-bold mb-2">{t('docs.stack.react.name', { defaultMessage: 'React 19' })}</h4>
          <p className="text-muted-foreground rtl:leading-loose">
            {t('docs.stack.react.description', { defaultMessage: 'Component-based UI library enabling declarative, efficient user interfaces with concurrent features, server components, and enhanced developer experience.' })}
          </p>
        </div>

        <div className="rtl:text-right">
          <h4 className="font-bold mb-2">{t('docs.stack.typescript.name', { defaultMessage: 'TypeScript' })}</h4>
          <p className="text-muted-foreground rtl:leading-loose">
            {t('docs.stack.typescript.description', { defaultMessage: 'Strongly-typed JavaScript superset enhancing code reliability, maintainability, and developer productivity through comprehensive static analysis and IDE integration.' })}
          </p>
        </div>

        <div className="rtl:text-right">
          <h4 className="font-bold mb-2">{t('docs.stack.tailwind.name', { defaultMessage: 'Tailwind CSS' })}</h4>
          <p className="text-muted-foreground rtl:leading-loose">
            {t('docs.stack.tailwind.description', { defaultMessage: 'Utility-first CSS framework enabling rapid, consistent, and maintainable styling with excellent performance characteristics and design system integration.' })}
          </p>
        </div>

        <div className="rtl:text-right">
          <h4 className="font-bold mb-2">{t('docs.stack.shadcn.name', { defaultMessage: 'shadcn/ui' })}</h4>
          <p className="text-muted-foreground rtl:leading-loose">
            {t('docs.stack.shadcn.description', { defaultMessage: 'High-quality, accessible React components built on Radix UI primitives, providing a solid foundation for consistent user experiences.' })}
          </p>
        </div>

        <div className="rtl:text-right">
          <h4 className="font-bold mb-2">{t('docs.stack.planetscale.name', { defaultMessage: 'PlanetScale' })}</h4>
          <p className="text-muted-foreground rtl:leading-loose">
            {t('docs.stack.planetscale.description', { defaultMessage: 'Serverless MySQL platform providing branching workflows, horizontal scaling, and zero-downtime schema changes with enterprise-grade reliability.' })}
          </p>
        </div>

        <div className="rtl:text-right">
          <h4 className="font-bold mb-2">{t('docs.stack.prisma.name', { defaultMessage: 'Prisma' })}</h4>
          <p className="text-muted-foreground rtl:leading-loose">
            {t('docs.stack.prisma.description', { defaultMessage: 'Next-generation ORM offering type-safe database access, intuitive schema management, and powerful query capabilities with excellent TypeScript integration.' })}
          </p>
        </div>

        <div className="rtl:text-right">
          <h4 className="font-bold mb-2">{t('docs.stack.vercel.name', { defaultMessage: 'Vercel' })}</h4>
          <p className="text-muted-foreground rtl:leading-loose">
            {t('docs.stack.vercel.description', { defaultMessage: 'Frontend cloud platform providing instant deployments, automatic scaling, and edge optimization with seamless Git integration and performance monitoring.' })}
          </p>
        </div>

        <div className="rtl:text-right">
          <h4 className="font-bold mb-2">{t('docs.stack.zod.name', { defaultMessage: 'Zod' })}</h4>
          <p className="text-muted-foreground rtl:leading-loose">
            {t('docs.stack.zod.description', { defaultMessage: 'TypeScript-first schema validation library ensuring runtime type safety and comprehensive data validation across API boundaries.' })}
          </p>
        </div>

        <div className="rtl:text-right">
          <h4 className="font-bold mb-2">{t('docs.stack.hookform.name', { defaultMessage: 'React Hook Form' })}</h4>
          <p className="text-muted-foreground rtl:leading-loose">
            {t('docs.stack.hookform.description', { defaultMessage: 'Performant, flexible forms library with minimal re-renders, built-in validation, and excellent developer experience for complex form scenarios.' })}
          </p>
        </div>

        <div className="rtl:text-right">
          <h4 className="font-bold mb-2">{t('docs.stack.authjs.name', { defaultMessage: 'Auth.js' })}</h4>
          <p className="text-muted-foreground rtl:leading-loose">
            {t('docs.stack.authjs.description', { defaultMessage: 'Comprehensive authentication library providing secure, standards-compliant authentication with support for multiple providers and advanced security features.' })}
          </p>
        </div>

        <div className="rtl:text-right">
          <h4 className="font-bold mb-2">{t('docs.stack.claude.name', { defaultMessage: 'Claude' })}</h4>
          <p className="text-muted-foreground rtl:leading-loose">
            {t('docs.stack.claude.description', { defaultMessage: 'Advanced AI assistant integrated for intelligent code completion, documentation generation, and development workflow optimization.' })}
          </p>
        </div>

        <div className="rtl:text-right">
          <h4 className="font-bold mb-2">{t('docs.stack.cursor.name', { defaultMessage: 'Cursor' })}</h4>
          <p className="text-muted-foreground rtl:leading-loose">
            {t('docs.stack.cursor.description', { defaultMessage: 'AI-powered code editor enhancing productivity through intelligent suggestions, code generation, and seamless development workflows.' })}
          </p>
        </div>

        <div className="rtl:text-right">
          <h4 className="font-bold mb-2">{t('docs.stack.mcp.name', { defaultMessage: 'MCP (Model Context Protocol)' })}</h4>
          <p className="text-muted-foreground rtl:leading-loose">
            {t('docs.stack.mcp.description', { defaultMessage: 'Standardized protocol for AI model integration, enabling sophisticated AI-powered features throughout the development stack.' })}
          </p>
        </div>

        <div className="rtl:text-right">
          <h4 className="font-bold mb-2">{t('docs.stack.python.name', { defaultMessage: 'Python' })}</h4>
          <p className="text-muted-foreground rtl:leading-loose">
            {t('docs.stack.python.description', { defaultMessage: 'Versatile programming language powering our AI/ML pipelines, data processing, and backend automation with extensive ecosystem support.' })}
          </p>
        </div>

        <div className="rtl:text-right">
          <h4 className="font-bold mb-2">{t('docs.stack.rust.name', { defaultMessage: 'Rust' })}</h4>
          <p className="text-muted-foreground rtl:leading-loose">
            {t('docs.stack.rust.description', { defaultMessage: 'Systems programming language ensuring memory safety and high performance for critical components requiring zero-cost abstractions.' })}
          </p>
        </div>

        <div className="rtl:text-right">
          <h4 className="font-bold mb-2">{t('docs.stack.langgraph.name', { defaultMessage: 'LangGraph' })}</h4>
          <p className="text-muted-foreground rtl:leading-loose">
            {t('docs.stack.langgraph.description', { defaultMessage: 'Advanced framework for building stateful, multi-actor AI applications with sophisticated workflow orchestration and agent coordination.' })}
          </p>
        </div>

        <div className="rtl:text-right">
          <h4 className="font-bold mb-2">{t('docs.stack.vibecoding.name', { defaultMessage: 'Vibe Coding' })}</h4>
          <p className="text-muted-foreground rtl:leading-loose">
            {t('docs.stack.vibecoding.description', { defaultMessage: 'AI-enhanced development methodology focusing on intuitive, flow-state programming with intelligent assistance and context-aware tooling.' })}
          </p>
        </div>

        <div className="rtl:text-right">
          <h4 className="font-bold mb-2">{t('docs.stack.figma.name', { defaultMessage: 'Figma' })}</h4>
          <p className="text-muted-foreground rtl:leading-loose">
            {t('docs.stack.figma.description', { defaultMessage: 'Collaborative design platform enabling seamless design-to-development workflows, component libraries, and cross-functional team alignment.' })}
          </p>
        </div>
      </div>

      <hr className="my-8 border-t border-border" />

      <p className="mt-8 text-muted-foreground rtl:text-right rtl:leading-loose">
        {t('docs.stack.conclusion', { defaultMessage: 'This technology stack represents our commitment to modern development practices, emphasizing type safety, performance, developer experience, and maintainable architecture patterns that scale with our growth.' })}
      </p>
    </div>
  );
}
