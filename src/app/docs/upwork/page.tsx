'use client';

import React from 'react';
import { useDocsTranslation } from "@/components/docs/utils/use-docs-translation";
import ActiveApps from "./apps";
import Prompt from "./prompt";

export default function UpworkPage() {
  const { t } = useDocsTranslation();

  return (
    <div className="docs-page">
      <h2 className="text-3xl font-bold mb-6 rtl:text-right">
        {t('docs.upwork.title', { defaultMessage: 'Upwork' })}
      </h2>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.upwork.introduction', { 
          defaultMessage: 'A guide to establish Databayt as a premium automation specialist on Upwork. Every strategy outlined here is based on real production systems and proven results across multiple industries.' 
        })}
      </p>

      <p className="mb-8 rtl:text-right rtl:leading-loose">
        {t('docs.upwork.positioning', { 
          defaultMessage: 'We position ourselves not just as developers, but as **time-savers** — helping businesses reclaim their most valuable asset through intelligent automation. This guide transforms your existing portfolio into a competitive advantage that commands premium rates.' 
        })}
      </p>

      <h3 className="text-2xl font-bold mt-10 mb-4 rtl:text-right">
        {t('docs.upwork.readinessAssessment.title', { defaultMessage: 'Readiness Assessment' })}
      </h3>

      <ActiveApps />

      <h4 className="text-xl font-semibold mt-8 mb-2 rtl:text-right">
        {t('docs.upwork.readinessAssessment.majorStrengths.title', { defaultMessage: 'Major Strengths' })}
      </h4>

      <p className="mb-2 rtl:text-right rtl:font-bold">
        {t('docs.upwork.readinessAssessment.majorStrengths.availableCode.title', { defaultMessage: 'Available Code' })}:
      </p>
      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.upwork.readinessAssessment.majorStrengths.availableCode.description', { 
          defaultMessage: 'Appointment booking, authentication systems, dashboard blocks, payment processing, form systems, listing displays, profile management, calendar widgets, landing pages, hero sections, testimonial sections, pricing tables, navigation patterns, order processing, attendance tracking, medical forms, treatment room management, search/filter functionality, role-based access, documentation architecture, responsive layouts, email systems.' 
        })}
      </p>

      <p className="mb-2 rtl:text-right rtl:font-bold">
        {t('docs.upwork.readinessAssessment.majorStrengths.underwayCode.title', { defaultMessage: 'Underway Code' })}:
      </p>
      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.upwork.readinessAssessment.majorStrengths.underwayCode.description', { 
          defaultMessage: 'Telemedicine integration, prescription handling, health status tracking, virtual tours, mortgage calculators, neighborhood information displays, entertainment packages, event timeline features, kitchen management, delivery tracking, customer reviews, reservation systems, loyalty programs, grade management systems, course scheduling, parent communication, teacher dashboards, exam systems, collaborative editing features.' 
        })}
      </p>

      <h4 className="text-xl font-semibold mt-8 mb-2 rtl:text-right">
        {t('docs.upwork.readinessAssessment.optimizationOpportunities.title', { defaultMessage: 'Optimization Opportunities' })}
      </h4>

      <ul className="mb-10 list-disc rtl:list-inside ltr:ml-6 space-y-2">
        <li className="rtl:text-right">{t('docs.upwork.readinessAssessment.optimizationOpportunities.testimonials', { defaultMessage: 'Add client testimonials to existing projects' })}</li>
        <li className="rtl:text-right">{t('docs.upwork.readinessAssessment.optimizationOpportunities.roi', { defaultMessage: 'Include ROI metrics for each automation solution' })}</li>
        <li className="rtl:text-right">{t('docs.upwork.readinessAssessment.optimizationOpportunities.videos', { defaultMessage: 'Create video walkthroughs for top 3 projects' })}</li>
        <li className="rtl:text-right">{t('docs.upwork.readinessAssessment.optimizationOpportunities.caseStudies', { defaultMessage: 'Add case study success stories with numbers' })}</li>
        <li className="rtl:text-right">{t('docs.upwork.readinessAssessment.optimizationOpportunities.impact', { defaultMessage: 'Document automation impact (hours saved, efficiency gains)' })}</li>
        <li className="rtl:text-right">{t('docs.upwork.readinessAssessment.optimizationOpportunities.presentations', { defaultMessage: 'Create client-facing project presentations' })}</li>
        <li className="rtl:text-right">{t('docs.upwork.readinessAssessment.optimizationOpportunities.metrics', { defaultMessage: 'Add GitHub contribution metrics' })}</li>
        <li className="rtl:text-right">{t('docs.upwork.readinessAssessment.optimizationOpportunities.expertise', { defaultMessage: 'Showcase multi-industry expertise clearly' })}</li>
      </ul>

      <hr className="my-8 border-t border-border" />

      <h3 className="text-2xl font-bold mt-10 mb-4 rtl:text-right">
        {t('docs.upwork.jobScoring.title', { defaultMessage: 'Job Scoring' })}
      </h3>
      <div className="-mt-4"></div>
      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.upwork.jobScoring.criteria', { defaultMessage: 'Scoring Criteria (1-10 scale)' })}
      </p>

      <h4 className="text-xl font-semibold mt-6 mb-2 rtl:text-right">
        {t('docs.upwork.jobScoring.technicalAlignment.title', { defaultMessage: 'Technical Alignment (Weight: 30%)' })}
      </h4>

      <ul className="mb-6 list-disc rtl:list-inside ltr:ml-6 space-y-2">
        <li className="rtl:text-right">{t('docs.upwork.jobScoring.technicalAlignment.react', { defaultMessage: 'React/Next.js projects: 10/10' })}</li>
        <li className="rtl:text-right">{t('docs.upwork.jobScoring.technicalAlignment.automation', { defaultMessage: 'Business automation: 10/10' })}</li>
        <li className="rtl:text-right">{t('docs.upwork.jobScoring.technicalAlignment.typescript', { defaultMessage: 'TypeScript requirements: 9/10' })}</li>
        <li className="rtl:text-right">{t('docs.upwork.jobScoring.technicalAlignment.components', { defaultMessage: 'Component libraries: 10/10' })}</li>
        <li className="rtl:text-right">{t('docs.upwork.jobScoring.technicalAlignment.documentation', { defaultMessage: 'Documentation projects: 8/10' })}</li>
      </ul>

      <h4 className="text-xl font-semibold mt-6 mb-2 rtl:text-right">
        {t('docs.upwork.jobScoring.businessValue.title', { defaultMessage: 'Business Value (Weight: 25%)' })}
      </h4>

      <ul className="mb-6 list-disc rtl:list-inside ltr:ml-6 space-y-2">
        <li className="rtl:text-right">{t('docs.upwork.jobScoring.businessValue.timeSaving', { defaultMessage: 'Time-saving automation: 10/10' })}</li>
        <li className="rtl:text-right">{t('docs.upwork.jobScoring.businessValue.optimization', { defaultMessage: 'Process optimization: 9/10' })}</li>
        <li className="rtl:text-right">{t('docs.upwork.jobScoring.businessValue.enterprise', { defaultMessage: 'Custom enterprise solutions: 9/10' })}</li>
        <li className="rtl:text-right">{t('docs.upwork.jobScoring.businessValue.saas', { defaultMessage: 'SaaS development: 8/10' })}</li>
        <li className="rtl:text-right">{t('docs.upwork.jobScoring.businessValue.integration', { defaultMessage: 'Integration projects: 8/10' })}</li>
      </ul>

      <h4 className="text-xl font-semibold mt-6 mb-2 rtl:text-right">
        {t('docs.upwork.jobScoring.projectSize.title', { defaultMessage: 'Project Size & Scope (Weight: 20%)' })}
      </h4>

      <ul className="mb-6 list-disc rtl:list-inside ltr:ml-6 space-y-2">
        <li className="rtl:text-right">{t('docs.upwork.jobScoring.projectSize.medium', { defaultMessage: 'Medium complexity (2-8 weeks): 10/10' })}</li>
        <li className="rtl:text-right">{t('docs.upwork.jobScoring.projectSize.longTerm', { defaultMessage: 'Long-term partnerships: 9/10' })}</li>
        <li className="rtl:text-right">{t('docs.upwork.jobScoring.projectSize.shortSprint', { defaultMessage: 'Short sprints (1-2 weeks): 7/10' })}</li>
        <li className="rtl:text-right">{t('docs.upwork.jobScoring.projectSize.largeEnterprise', { defaultMessage: 'Large enterprise (3+ months): 8/10' })}</li>
      </ul>

      <h4 className="text-xl font-semibold mt-6 mb-2 rtl:text-right">
        {t('docs.upwork.jobScoring.clientProfile.title', { defaultMessage: 'Client Profile (Weight: 15%)' })}
      </h4>

      <ul className="mb-6 list-disc rtl:list-inside ltr:ml-6 space-y-2">
        <li className="rtl:text-right">{t('docs.upwork.jobScoring.clientProfile.techSavvy', { defaultMessage: 'Tech-savvy businesses: 9/10' })}</li>
        <li className="rtl:text-right">{t('docs.upwork.jobScoring.clientProfile.successfulProjects', { defaultMessage: 'Previous successful projects: 8/10' })}</li>
        <li className="rtl:text-right">{t('docs.upwork.jobScoring.clientProfile.clearRequirements', { defaultMessage: 'Clear requirements: 9/10' })}</li>
        <li className="rtl:text-right">{t('docs.upwork.jobScoring.clientProfile.innovation', { defaultMessage: 'Open to innovation: 10/10' })}</li>
      </ul>

      <h4 className="text-xl font-semibold mt-6 mb-2 rtl:text-right">
        {t('docs.upwork.jobScoring.budgetRange.title', { defaultMessage: 'Budget Range (Weight: 10%)' })}
      </h4>

      <ul className="mb-6 list-disc rtl:list-inside ltr:ml-6 space-y-2">
        <li className="rtl:text-right">{t('docs.upwork.jobScoring.budgetRange.midRate', { defaultMessage: '$50-100/hour: 10/10' })}</li>
        <li className="rtl:text-right">{t('docs.upwork.jobScoring.budgetRange.lowRate', { defaultMessage: '$30-50/hour: 8/10' })}</li>
        <li className="rtl:text-right">{t('docs.upwork.jobScoring.budgetRange.highRate', { defaultMessage: '$100+/hour: 9/10' })}</li>
        <li className="rtl:text-right">{t('docs.upwork.jobScoring.budgetRange.fixedPrice', { defaultMessage: 'Fixed price $5k+: 8/10' })}</li>
      </ul>

      <p className="mb-8 font-bold rtl:text-right">
        {t('docs.upwork.jobScoring.minimumScore', { defaultMessage: 'Minimum Viable Score: 7/10' })}
      </p>

      <hr className="my-8 border-t border-border" />

      <h3 className="text-2xl font-bold mt-10 mb-4 rtl:text-right">
        {t('docs.upwork.proposalGeneration.title', { defaultMessage: 'Proposal Generation' })}
      </h3>

      <div className="mb-6">
        <pre className="p-4 bg-muted rounded-md overflow-auto">
          <code>
            {t('docs.upwork.proposalGeneration.inputVariables', { 
              defaultMessage: `INPUT VARIABLES:
- Job Description: {JOB_DESCRIPTION}
- Client Name: {CLIENT_NAME}
- Client Industry: {CLIENT_INDUSTRY}
- Project Budget: {BUDGET}
- Timeline: {TIMELINE}
- Key Requirements: {REQUIREMENTS}
- Client Background: {CLIENT_BACKGROUND}

OUTPUT VARIANTS:
- Automation Focus: Time-saving, process optimization, ROI calculations
- Web Design Focus: UI/UX, responsive design, conversion optimization  
- Enterprise Focus: Scalable architecture, security compliance, multi-tenant
- Startup Focus: MVP development, rapid prototyping, component reusability` 
            })}
          </code>
        </pre>
      </div>

      <h3 className="text-2xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.upwork.proposalFormula.title', { defaultMessage: 'Proposal Formula' })}
      </h3>

      <div className="mb-6">
        <pre className="p-4 bg-muted rounded-md overflow-auto">
          <code>
            {t('docs.upwork.proposalFormula.template', { 
              defaultMessage: `Subject: Automation-First Solution for {PROJECT_TYPE} | Databayt

Hi {CLIENT_NAME},

**The Problem You're Facing:**
{PERSONALIZED_PAIN_POINT_ANALYSIS}

**Why This Resonates With Us:**
At Databayt, we live by "Automate the boring." Your {SPECIFIC_CHALLENGE} is exactly the type of repetitive process we help businesses eliminate.

**Our Approach for {PROJECT_NAME}:**

**Technical Solution:**
- {SPECIFIC_TECH_STACK_RECOMMENDATION}
- {AUTOMATION_STRATEGY}
- {PERFORMANCE_OPTIMIZATION}

**Time-Saving Impact:**
- Current process: {ESTIMATED_CURRENT_TIME}
- Automated solution: {ESTIMATED_NEW_TIME}
- Time saved: {SAVINGS_CALCULATION}

**Deliverables & Timeline:**
Week 1-2: {PHASE_1}
Week 3-4: {PHASE_2}
Week 5-6: {PHASE_3}

**Why Databayt?**
- Open-source foundation (you own the code)
- Proven automation expertise
- Modern, scalable architecture
- Transparent development process

**Next Steps:**
I'd love to discuss how we can save your team {X} hours per week. Available for a quick call this week?

Best regards,
{YOUR_NAME}
Databayt | Reclaim Your Time Through Automation` 
            })}
          </code>
        </pre>
      </div>

      <h3 className="text-2xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.upwork.promptGenerator.title', { defaultMessage: 'Prompt Generator' })}
      </h3>

      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.upwork.promptGenerator.description', { defaultMessage: 'Use this AI prompt template for automated proposal generation:' })}
      </p>

      <Prompt />

      <hr className="my-8 border-t border-border" />

      <h2 className="text-3xl font-bold mt-12 mb-6 rtl:text-right">
        {t('docs.upwork.profileSetup.title', { defaultMessage: 'Profile Setup' })}
      </h2>

      <h3 className="text-2xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.upwork.profileSetup.optimization.title', { defaultMessage: 'Optimization Checklist' })}
      </h3>

      <h4 className="text-xl font-semibold mt-6 mb-2 rtl:text-right">
        {t('docs.upwork.profileSetup.optimization.photo.title', { defaultMessage: 'Profile Photo' })}
      </h4>

      <ul className="mb-6 list-disc rtl:list-inside ltr:ml-6 space-y-2">
        <li className="rtl:text-right">{t('docs.upwork.profileSetup.optimization.photo.lighting', { defaultMessage: 'Professional headshot with good lighting' })}</li>
        <li className="rtl:text-right">{t('docs.upwork.profileSetup.optimization.photo.background', { defaultMessage: 'Clean background (preferably tech-related)' })}</li>
        <li className="rtl:text-right">{t('docs.upwork.profileSetup.optimization.photo.expression', { defaultMessage: 'Confident, approachable expression' })}</li>
        <li className="rtl:text-right">{t('docs.upwork.profileSetup.optimization.photo.resolution', { defaultMessage: 'High resolution (400x400px minimum)' })}</li>
      </ul>

      <h4 className="text-xl font-semibold mt-6 mb-2 rtl:text-right">
        {t('docs.upwork.profileSetup.optimization.professionalTitle.title', { defaultMessage: 'Professional Title' })}
      </h4>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        <strong>{t('docs.upwork.profileSetup.optimization.professionalTitle.recommended', { defaultMessage: 'Recommended:' })}</strong> {t('docs.upwork.profileSetup.optimization.professionalTitle.text', { defaultMessage: '"Business Automation Expert | React/Next.js Developer | Time-Saving Solutions"' })}
      </p>

      <h4 className="text-xl font-semibold mt-6 mb-2 rtl:text-right">
        {t('docs.upwork.profileSetup.optimization.overview.title', { defaultMessage: 'Professional Overview (2,000 chars)' })}
      </h4>

      <div className="mb-6">
        <pre className="p-4 bg-muted rounded-md overflow-auto">
          <code>
            {t('docs.upwork.profileSetup.optimization.overview.content', { 
              defaultMessage: `AUTOMATE THE BORING, 

Help businesses reclaim their most valuable asset: TIME.

We've built 8+ production automation systems across multiple industries, serving real users and saving thousands of hours annually.

PROVEN INDUSTRY EXPERTISE:
Healthcare Management (HIPAA-compliant) - health-underway.vercel.app
Education Platforms (Student/Parent portals) - ed.databayt.org  
Restaurant POS & Kitchen Management Systems
Real Estate & Property Management Platforms
E-commerce & Inventory Solutions

PRODUCTION IMPACT:
• Healthcare: 80% reduction in appointment scheduling time
• Education: 70% decrease in administrative tasks
• Restaurant: Complete POS automation with real-time kitchen displays
• Real Estate: Automated tenant management and maintenance tracking
• 5 GitHub repositories with live production applications

CUTTING-EDGE TECH STACK:
• Frontend: Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion
• Backend: Prisma ORM, MongoDB, PostgreSQL, NextAuth, Stripe
• Architecture: Atomic design, Component libraries, Enterprise security
• Deployment: Vercel, production-ready with CDN optimization

MY GUARANTEE:
Every solution I build is production-tested. You'll see live demos before we even start talking.

Ready to see automation in action? Check my live systems and let's discuss your specific needs.

Available for consultation calls - I'll show you exactly how I'll automate your biggest time-wasters.` 
            })}
          </code>
        </pre>
      </div>
    </div>
  );
}
