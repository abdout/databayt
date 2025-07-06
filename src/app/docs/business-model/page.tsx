'use client';

import React from 'react';
import { useDocsTranslation } from "@/components/docs/utils/use-docs-translation";
import Link from 'next/link';

export default function BusinessModelPage() {
  const { t } = useDocsTranslation();

  return (
    <div className="docs-page">
      <h2 className="text-3xl font-bold mb-6 rtl:text-right">
        {t('docs.businessModel.title', { defaultMessage: 'Business Model' })}
      </h2>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.businessModel.description', { defaultMessage: 'Databayt operates through four complementary revenue models that support both sustainability and community-driven growth.' })}
      </p>

      <div className="space-y-6 my-8">
        <div className="py-6 rounded-lg">
          <h3 className="font-semibold mb-4 rtl:text-right">
            {t('docs.businessModel.perProject.title', { defaultMessage: 'Per Project' })}
          </h3>
          <h4 className="text-sm font-medium mb-2 rtl:text-right">
            {t('docs.businessModel.perProject.subtitle', { defaultMessage: 'Bespoke Development for Unique Business Needs' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right">
            {t('docs.businessModel.perProject.description', { defaultMessage: 'We deliver custom-built automation systems tailored to the specific operational requirements of individual clients.' })}
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc rtl:list-inside ltr:pl-4">
            <li>{t('docs.businessModel.perProject.point1', { defaultMessage: 'Ideal for companies with complex or specialized workflows' })}</li>
            <li>{t('docs.businessModel.perProject.point2', { defaultMessage: 'Involves discovery, architecture, design, and implementation phases' })}</li>
            <li>{t('docs.businessModel.perProject.point3', { defaultMessage: 'Generates revenue through direct service contracts' })}</li>
            <li>{t('docs.businessModel.perProject.point4', { defaultMessage: 'Often integrates components from our codebase to reduce time-to-delivery' })}</li>
          </ul>
        </div>

        <div className="py-6 rounded-lg">
          <h3 className="font-semibold mb-4 rtl:text-right">
            {t('docs.businessModel.partners.title', { defaultMessage: 'Partners' })}
          </h3>
          <h4 className="text-sm font-medium mb-2 rtl:text-right">
            {t('docs.businessModel.partners.subtitle', { defaultMessage: 'Strategic Collaborations & Outsourced Development' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right">
            {t('docs.businessModel.partners.description', { defaultMessage: 'We form long-term partnerships with businesses that need recurring access to development capacity and domain-specific technical talent.' })}
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc rtl:list-inside ltr:pl-4">
            <li>{t('docs.businessModel.partners.point1', { defaultMessage: 'Perfect for agencies, enterprises, or startups without an in-house tech team' })}</li>
            <li>{t('docs.businessModel.partners.point2', { defaultMessage: 'Offers flexible engagement models: staff augmentation, dedicated teams, or project-based collaborations' })}</li>
            <li>{t('docs.businessModel.partners.point3', { defaultMessage: 'Revenue comes from retainers, joint ventures, or shared-value agreements' })}</li>
            <li>{t('docs.businessModel.partners.point4', { defaultMessage: 'Partners also benefit from priority access to our open-source tools and components' })}</li>
          </ul>
        </div>

        <div className="py-6 rounded-lg">
          <h3 className="font-semibold mb-4 rtl:text-right">
            {t('docs.businessModel.codebase.title', { defaultMessage: 'Codebase' })}
          </h3>
          <h4 className="text-sm font-medium mb-2 rtl:text-right">
            {t('docs.businessModel.codebase.subtitle', { defaultMessage: 'Reusable Components as a Revenue Engine' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right">
            {t('docs.businessModel.codebase.description', { defaultMessage: 'The Databayt codebase is the backbone of our operation: a growing library of clean, modular components contributed by the community.' })}
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc rtl:list-inside ltr:pl-4">
            <li>{t('docs.businessModel.codebase.point1', { defaultMessage: 'These components are used across client projects and SaaS products' })}</li>
            <li>{t('docs.businessModel.codebase.point2', { defaultMessage: 'Contributors earn recognition and a share of the value their code generates' })}</li>
            <li>{t('docs.businessModel.codebase.point3', { defaultMessage: 'Monetization occurs when projects leverage these prebuilt modules to accelerate delivery' })}</li>
            <li>{t('docs.businessModel.codebase.point4', { defaultMessage: 'Encourages collective ownership and open-source sustainability' })}</li>
          </ul>
        </div>

        <div className="py-6 rounded-lg">
          <h3 className="font-semibold mb-4 rtl:text-right">
            {t('docs.businessModel.saas.title', { defaultMessage: 'SaaS' })}
          </h3>
          <h4 className="text-sm font-medium mb-2 rtl:text-right">
            {t('docs.businessModel.saas.subtitle', { defaultMessage: 'Scalable Automation Products for Common Needs' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right">
            {t('docs.businessModel.saas.description', { defaultMessage: 'We package recurring patterns into ready-to-deploy SaaS tools aimed at industries with similar operational challenges.' })}
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc rtl:list-inside ltr:pl-4">
            <li>{t('docs.businessModel.saas.point1', { defaultMessage: 'Examples: CRMs for clinics, document workflow tools for HR, or compliance dashboards for real estate' })}</li>
            <li>{t('docs.businessModel.saas.point2', { defaultMessage: 'Allows clients to onboard instantly with minimal configuration' })}</li>
            <li>{t('docs.businessModel.saas.point3', { defaultMessage: 'SaaS offerings are continuously improved through usage data and community feedback' })}</li>
            <li>{t('docs.businessModel.saas.point4', { defaultMessage: 'This model generates recurring revenue and positions Databayt as a central hub for automation solutions' })}</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-8 rtl:justify-end rtl:text-right">
        <Link href="/docs/revenue" className="text-sm text-muted-foreground hover:text-primary underline">
          {t('docs.businessModel.links.revenue', { defaultMessage: 'Learn about revenue distribution →' })}
        </Link>
        <Link href="/docs/contribute" className="text-sm text-muted-foreground hover:text-primary underline">
          {t('docs.businessModel.links.contribute', { defaultMessage: 'Understand contributor incentives →' })}
        </Link>
      </div>
    </div>
  );
}
