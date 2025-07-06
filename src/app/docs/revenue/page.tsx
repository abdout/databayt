'use client';

import React from 'react';
import { useDocsTranslation } from "@/components/docs/utils/use-docs-translation";

export default function RevenuePage() {
  const { t } = useDocsTranslation();

  return (
    <div className="docs-page">
      <h2 className="text-3xl font-bold mb-6 rtl:text-right">
        {t('docs.revenue.title', { defaultMessage: 'Revenue Sharing' })}
      </h2>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        <strong>{t('docs.revenue.noTraditionalSalaries', { defaultMessage: 'No traditional salaries here.' })}</strong>{' '}
        {t('docs.revenue.collectivelyOwned', { defaultMessage: 'Databayt is collectively owned by us - the contributors. When our sales team brings in projects, we complete them together and everyone takes their share, including sales. You\'re not an employee; you\'re a co-owner building equity in something bigger.' })}
      </p>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.revenue.transparentModel', { defaultMessage: 'We use a transparent revenue-sharing model where contributors earn a percentage of revenue generated from their contributions across our four core business models:' })}
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.revenue.businessModelsTitle', { defaultMessage: 'Our Business Models & Your Revenue Opportunities' })}
      </h2>

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.revenue.perProject.title', { defaultMessage: 'Per Project Revenue' })}
      </h3>
      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.revenue.perProject.description', { defaultMessage: 'Custom solutions tailored to specific client requirements and business processes. Each project delivers unique automation systems designed to solve particular challenges and operational needs.' })}
      </p>
      <p className="mb-6 rtl:text-right rtl:leading-loose">
        <strong>{t('docs.revenue.perProject.earningsTitle', { defaultMessage: 'Your Earnings:' })}</strong>{' '}
        {t('docs.revenue.perProject.earnings', { defaultMessage: 'Direct revenue share based on your contribution to project completion. Whether you build components, integrate systems, or manage client requirements - you earn from the project\'s success.' })}
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.revenue.partnership.title', { defaultMessage: 'Partnership Revenue' })}
      </h3>
      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.revenue.partnership.description', { defaultMessage: 'Partnership opportunities for businesses seeking to outsource technology development, access specialized talent for temporary projects, and leverage specific technical expertise.' })}
      </p>
      <p className="mb-6 rtl:text-right rtl:leading-loose">
        <strong>{t('docs.revenue.partnership.earningsTitle', { defaultMessage: 'Your Earnings:' })}</strong>{' '}
        {t('docs.revenue.partnership.earnings', { defaultMessage: 'Revenue share from partnership contracts you help fulfill. Long-term partnerships create recurring income streams as you become the go-to expert for specific partner needs.' })}
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.revenue.codebase.title', { defaultMessage: 'Codebase Revenue' })}
        <span className="text-base italic font-normal ml-2">
          {t('docs.revenue.codebase.highestEarner', { defaultMessage: '(Our Highest Earner)' })}
        </span>
      </h3>
      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.revenue.codebase.description', { defaultMessage: 'Our codebase executes the majority of tasks through accumulated, reusable components. Contributors who expand this foundation earn a share of the value it generates across all projects that use their components.' })}
      </p>
      <p className="mb-6 rtl:text-right rtl:leading-loose">
        <strong>{t('docs.revenue.codebase.earningsTitle', { defaultMessage: 'Your Earnings:' })}</strong>{' '}
        {t('docs.revenue.codebase.earnings', { defaultMessage: 'This is where the 40-70% project acceleration pays off. Every time your indexed components are reused in client projects, you earn. Build once, earn repeatedly. Top codebase contributors receive significant monthly earnings from component reuse alone.' })}
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.revenue.saas.title', { defaultMessage: 'SaaS Revenue' })}
      </h3>
      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.revenue.saas.description', { defaultMessage: 'Ready-to-deploy software products sold to multiple organizations with similar needs. We act as a go-to central hub for businesses seeking automation solutions.' })}
      </p>
      <p className="mb-6 rtl:text-right rtl:leading-loose">
        <strong>{t('docs.revenue.saas.earningsTitle', { defaultMessage: 'Your Earnings:' })}</strong>{' '}
        {t('docs.revenue.saas.earnings', { defaultMessage: 'Ongoing royalties from SaaS products you help build. As these products scale to hundreds or thousands of customers, your revenue share grows proportionally.' })}
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.revenue.whyWorks.title', { defaultMessage: 'Why This Model Works' })}
      </h2>

      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.revenue.whyWorks.whenProjectComesIn', { defaultMessage: 'When a project comes in:' })}
      </p>
      <ul className="mb-6 space-y-2 rtl:text-right rtl:list-inside ltr:ml-6 list-disc">
        <li>{t('docs.revenue.whyWorks.salesShare', { defaultMessage: 'Sales team gets their share' })}</li>
        <li>{t('docs.revenue.whyWorks.projectContributorsShare', { defaultMessage: 'Project contributors get their share' })}</li>
        <li>{t('docs.revenue.whyWorks.codebaseContributorsShare', { defaultMessage: 'Codebase contributors whose components are used get their share' })}</li>
        <li>{t('docs.revenue.whyWorks.everyoneWins', { defaultMessage: 'Everyone wins when we succeed together' })}</li>
      </ul>

      <p className="mb-4 font-bold rtl:text-right">
        {t('docs.revenue.timeline.title', { defaultMessage: 'Expected Timeline:' })}
      </p>
      <ul className="mb-6 space-y-2 rtl:text-right rtl:list-inside ltr:ml-6 list-disc">
        <li>
          <strong>{t('docs.revenue.timeline.month1to3Title', { defaultMessage: 'Month 1-3:' })}</strong>{' '}
          {t('docs.revenue.timeline.month1to3Description', { defaultMessage: 'Learn systems, contribute to projects, start earning initial revenue shares' })}
        </li>
        <li>
          <strong>{t('docs.revenue.timeline.month6to12Title', { defaultMessage: 'Month 6-12:' })}</strong>{' '}
          {t('docs.revenue.timeline.month6to12Description', { defaultMessage: 'Build reusable components, participate in partnerships, increase your earnings' })}
        </li>
        <li>
          <strong>{t('docs.revenue.timeline.year2PlusTitle', { defaultMessage: 'Year 2+:' })}</strong>{' '}
          {t('docs.revenue.timeline.year2PlusDescription', { defaultMessage: 'Major codebase contributor with SaaS involvement, potential for significant recurring revenue' })}
        </li>
      </ul>

      <p className="mt-8 mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.revenue.conclusion', { defaultMessage: 'The more value you create for our collective ecosystem, the more you earn. It\'s that simple.' })}
      </p>
    </div>
  );
}
