'use client';

import React from 'react';
import { useDocsTranslation } from "@/components/docs/utils/use-docs-translation";
import Link from 'next/link';
import ActiveApps from "./apps";
import { CustomVideoPlayer } from "@/components/ui/custom-video-player";

export default function DocsHomePage() {
  const { t } = useDocsTranslation();

  return (
    <div className="docs-page">
      <h2 className="text-3xl font-bold mb-6 rtl:text-right">
        {t('docs.home.introduction.title', { defaultMessage: 'Introduction' })}
      </h2>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        <strong>{t('docs.home.introduction.automate', { defaultMessage: 'Automate' })}</strong>{' '}
        {t('docs.home.introduction.boring', { defaultMessage: "the boring. at Databayt we're building codebase for business automation, one atomic component at a time. Every line of code is open source, every contribution is valued, and every developer may shape the future of how businesses operate." })}
      </p>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.home.introduction.sellTime1', { defaultMessage: 'We sell the origin of all value — we sell' })}{' '}
        <strong>{t('docs.home.introduction.time', { defaultMessage: 'Time' })}</strong>
        {', '}
        {t('docs.home.introduction.sellTime2', { defaultMessage: "the currency that drives the world — what if you could reclaim yours and focus on what truly matters? It's more than a service — it's an escape from the matrix. A restoration of time through the elimination of repetitive tasks, streamlined operations, and automated processes. Break free. Reclaim your hours." })}
      </p>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.home.introduction.repository1', { defaultMessage: 'The Repository of' })}{' '}
        <strong>{t('docs.home.introduction.wonders', { defaultMessage: 'Wonders.' })}</strong>{' '}
        {t('docs.home.introduction.repository2', { defaultMessage: "Think of our codebase as a living library where every contribution becomes part of something greater. From atomic components to complete templates, from blocks to micro-services to full automation solutions—we're creating the building blocks that will power tomorrow's businesses." })}
      </p>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.home.introduction.followAlong1', { defaultMessage: 'Follow along as we' })}{' '}
        <strong>{t('docs.home.introduction.figure', { defaultMessage: 'figure' })}</strong>{' '}
        {t('docs.home.introduction.followAlong2', { defaultMessage: "this out together. This isn't just about building software; it's about creating a collaborative ecosystem where developers, businesses, and innovators unite to solve real problems. Every contribution you make doesn't just help one project—it becomes part of a growing foundation that serves countless businesses worldwide." })}
      </p>

      <CustomVideoPlayer url="https://www.youtube.com/watch?v=CQNwc48GivI" className="my-8" />

      <ActiveApps />

      <h2 className="text-3xl font-bold mt-12 mb-6 rtl:text-right">
        {t('docs.home.whatWeDo.title', { defaultMessage: 'What We Do' })}
      </h2>

      <ul className="space-y-2 mb-6 rtl:text-right">
        <li className="rtl:list-inside ltr:ml-4">
          <strong>{t('docs.home.whatWeDo.development.title', { defaultMessage: 'Development' })}</strong>{' '}
          - {t('docs.home.whatWeDo.development.description', { defaultMessage: 'Enterprise-grade applications and platforms' })}
        </li>
        <li className="rtl:list-inside ltr:ml-4">
          <strong>{t('docs.home.whatWeDo.automation.title', { defaultMessage: 'Automation' })}</strong>{' '}
          - {t('docs.home.whatWeDo.automation.description', { defaultMessage: 'Streamlined workflows and process optimization' })}
        </li>
        <li className="rtl:list-inside ltr:ml-4">
          <strong>{t('docs.home.whatWeDo.consulting.title', { defaultMessage: 'Consulting' })}</strong>{' '}
          - {t('docs.home.whatWeDo.consulting.description', { defaultMessage: 'Technical expertise and implementation support' })}
        </li>
        <li className="rtl:list-inside ltr:ml-4">
          <strong>{t('docs.home.whatWeDo.openSource.title', { defaultMessage: 'Open Source' })}</strong>{' '}
          - {t('docs.home.whatWeDo.openSource.description', { defaultMessage: 'Community-driven development and innovation' })}
        </li>
      </ul>

      <h2 className="text-3xl font-bold mt-12 mb-6 rtl:text-right">
        {t('docs.home.businessModel.title', { defaultMessage: 'Business Model' })}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.home.businessModel.perProject.title', { defaultMessage: 'Per Project' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right">
            {t('docs.home.businessModel.perProject.description', { defaultMessage: 'Custom solutions tailored to specific client requirements and business processes. Each project delivers unique automation systems designed to solve particular challenges and operational needs.' })}
          </div>
        </div>
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.home.businessModel.partners.title', { defaultMessage: 'Partners' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right">
            {t('docs.home.businessModel.partners.description', { defaultMessage: 'Partnership opportunities for businesses seeking to outsource technology development, access specialized talent for temporary projects and specific technical expertise.' })}
          </div>
        </div>
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.home.businessModel.codebase.title', { defaultMessage: 'Codebase' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right">
            {t('docs.home.businessModel.codebase.description', { defaultMessage: 'Codebase executes the majority of the task, through accumulated, reusable components. Contributors who expand this foundation earn a share of the value it generates.' })}
          </div>
        </div>
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.home.businessModel.saas.title', { defaultMessage: 'SaaS' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right">
            {t('docs.home.businessModel.saas.description', { defaultMessage: 'Ready-to-deploy software products sold to multiple organizations with similar needs. act as a go-to central hub for businesses seeking automation solutions.' })}
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 rtl:text-right">
        {t('docs.home.coreValues.title', { defaultMessage: 'Core Values' })}
      </h2>

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.home.coreValues.transparency.title', { defaultMessage: 'Transparency' })}
      </h3>
      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.home.coreValues.transparency.description', { defaultMessage: 'Every decision, from technical architecture to business strategy, is documented and accessible to the community. We use GitHub to manage our codebase and discussions, ensuring transparency, traceability, and open collaboration. Contributions are publicly tracked, so every developer can see their impact and know the process is clear and fair. We believe this openness builds trust and enables better contributions.' })}
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.home.coreValues.innovation.title', { defaultMessage: 'Innovation' })}
      </h3>
      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.home.coreValues.innovation.description', { defaultMessage: "Our best ideas come from our diverse community of developers, business professionals, and users. We actively encourage contributions and value every perspective. We're actively building in: Business Automation, Data Analytics, AI Agents, Blockchain, and Distributed Computing." })}
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.home.coreValues.growth.title', { defaultMessage: 'Growth' })}
      </h3>
      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.home.coreValues.growth.description', { defaultMessage: 'We balance rapid innovation with long-term sustainability, ensuring our solutions remain robust and our business model benefits all stakeholders.' })}
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.home.coreValues.excellence.title', { defaultMessage: 'Excellence' })}
      </h3>
      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.home.coreValues.excellence.description', { defaultMessage: 'Every product we ship meets the highest standards of quality, security, and performance. Our reputation is built on reliable, enterprise-grade solutions.' })}
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-6 rtl:text-right">
        {t('docs.home.whatYoullFind.title', { defaultMessage: "What You'll Find Here" })}
      </h2>

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.home.whatYoullFind.forDevelopers.title', { defaultMessage: 'For Developers' })}
      </h3>
      <ul className="space-y-2 mb-6 rtl:text-right">
        <li className="rtl:list-inside ltr:ml-4">
          <Link href="/docs/architecture" className="hover:text-primary">
            {t('docs.home.whatYoullFind.forDevelopers.architecture', { defaultMessage: 'Architecture' })}
          </Link>{' '}
          – {t('docs.home.whatYoullFind.forDevelopers.architectureDesc', { defaultMessage: 'System design and technical specs' })}
        </li>
        <li className="rtl:list-inside ltr:ml-4">
          <Link href="/docs/stack" className="hover:text-primary">
            {t('docs.home.whatYoullFind.forDevelopers.stack', { defaultMessage: 'Stack' })}
          </Link>{' '}
          – {t('docs.home.whatYoullFind.forDevelopers.stackDesc', { defaultMessage: 'Technology used' })}
        </li>
        <li className="rtl:list-inside ltr:ml-4">
          <Link href="/docs/pattern" className="hover:text-primary">
            {t('docs.home.whatYoullFind.forDevelopers.pattern', { defaultMessage: 'Pattern' })}
          </Link>{' '}
          – {t('docs.home.whatYoullFind.forDevelopers.patternDesc', { defaultMessage: 'Best practices and coding standards' })}
        </li>
        <li className="rtl:list-inside ltr:ml-4">
          <Link href="/docs/contribute" className="hover:text-primary">
            {t('docs.home.whatYoullFind.forDevelopers.contribute', { defaultMessage: 'Contributing Guide' })}
          </Link>{' '}
          – {t('docs.home.whatYoullFind.forDevelopers.contributeDesc', { defaultMessage: 'How to get involved in development' })}
        </li>
      </ul>

      <hr className="my-8" />

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.home.whatYoullFind.forStakeholders.title', { defaultMessage: 'For Stakeholders' })}
      </h3>
      <ul className="space-y-2 mb-6 rtl:text-right">
        <li className="rtl:list-inside ltr:ml-4">
          <Link href="/docs/business/earning" className="hover:text-primary">
            {t('docs.home.whatYoullFind.forStakeholders.businessModel', { defaultMessage: 'Business Model' })}
          </Link>{' '}
          – {t('docs.home.whatYoullFind.forStakeholders.businessModelDesc', { defaultMessage: 'Revenue streams and value creation' })}
        </li>
        <li className="rtl:list-inside ltr:ml-4">
          <Link href="/docs/business/roadmap" className="hover:text-primary">
            {t('docs.home.whatYoullFind.forStakeholders.roadmap', { defaultMessage: 'Roadmap' })}
          </Link>{' '}
          – {t('docs.home.whatYoullFind.forStakeholders.roadmapDesc', { defaultMessage: 'Product development plans and strategic goals' })}
        </li>
        <li className="rtl:list-inside ltr:ml-4">
          <Link href="/docs/business/sales" className="hover:text-primary">
            {t('docs.home.whatYoullFind.forStakeholders.sales', { defaultMessage: 'Sales Process' })}
          </Link>{' '}
          – {t('docs.home.whatYoullFind.forStakeholders.salesDesc', { defaultMessage: 'Customer acquisition and revenue generation' })}
        </li>
        <li className="rtl:list-inside ltr:ml-4">
          <Link href="/docs/governance/stock-sharing" className="hover:text-primary">
            {t('docs.home.whatYoullFind.forStakeholders.stockSharing', { defaultMessage: 'Stock Sharing' })}
          </Link>{' '}
          – {t('docs.home.whatYoullFind.forStakeholders.stockSharingDesc', { defaultMessage: 'Equity distribution and governance' })}
        </li>
      </ul>

      <hr className="my-8" />

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.home.whatYoullFind.forCommunity.title', { defaultMessage: 'For Community' })}
      </h3>
      <ul className="space-y-2 mb-6 rtl:text-right">
        <li className="rtl:list-inside ltr:ml-4">
          <Link href="/docs/governance/code-of-conduct" className="hover:text-primary">
            {t('docs.home.whatYoullFind.forCommunity.codeOfConduct', { defaultMessage: 'Code of Conduct' })}
          </Link>{' '}
          – {t('docs.home.whatYoullFind.forCommunity.codeOfConductDesc', { defaultMessage: 'Community standards and expectations' })}
        </li>
        <li className="rtl:list-inside ltr:ml-4">
          <Link href="/docs/community/issues" className="hover:text-primary">
            {t('docs.home.whatYoullFind.forCommunity.issues', { defaultMessage: 'Issues & Support' })}
          </Link>{' '}
          – {t('docs.home.whatYoullFind.forCommunity.issuesDesc', { defaultMessage: 'Bug reporting and assistance' })}
        </li>
        <li className="rtl:list-inside ltr:ml-4">
          <Link href="/docs/community/discussions" className="hover:text-primary">
            {t('docs.home.whatYoullFind.forCommunity.discussions', { defaultMessage: 'Discussions' })}
          </Link>{' '}
          – {t('docs.home.whatYoullFind.forCommunity.discussionsDesc', { defaultMessage: 'Forums and knowledge sharing' })}
        </li>
      </ul>

      <hr className="my-8" />

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.home.whatYoullFind.forClients.title', { defaultMessage: 'For Clients' })}
      </h3>
      <ul className="space-y-2 mb-6 rtl:text-right">
        <li className="rtl:list-inside ltr:ml-4">
          {t('docs.home.whatYoullFind.forClients.understand', { defaultMessage: 'Understand our' })}{' '}
          <Link href="/docs/business/earning" className="hover:text-primary">
            {t('docs.home.whatYoullFind.forClients.businessModel', { defaultMessage: 'Business Model' })}
          </Link>
        </li>
        <li className="rtl:list-inside ltr:ml-4">
          {t('docs.home.whatYoullFind.forClients.seeWhatsAhead', { defaultMessage: "See what's ahead in the" })}{' '}
          <Link href="/docs/business/roadmap" className="hover:text-primary">
            {t('docs.home.whatYoullFind.forClients.roadmap', { defaultMessage: 'Roadmap' })}
          </Link>
        </li>
        <li className="rtl:list-inside ltr:ml-4">
          <Link href="/docs/business/sales" className="hover:text-primary">
            {t('docs.home.whatYoullFind.forClients.contactSales', { defaultMessage: 'Contact Sales' })}
          </Link>{' '}
          {t('docs.home.whatYoullFind.forClients.toDiscuss', { defaultMessage: 'to discuss your needs' })}
        </li>
        <li className="rtl:list-inside ltr:ml-4">
          {t('docs.home.whatYoullFind.forClients.access', { defaultMessage: 'Access' })}{' '}
          <Link href="/docs/community/support" className="hover:text-primary">
            {t('docs.home.whatYoullFind.forClients.supportOptions', { defaultMessage: 'Support Options' })}
          </Link>{' '}
          {t('docs.home.whatYoullFind.forClients.whenNeeded', { defaultMessage: 'when needed' })}
        </li>
      </ul>

      <hr className="my-8" />

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.home.whatYoullFind.forLegal.title', { defaultMessage: 'For Legal' })}
      </h3>
      <ul className="space-y-2 mb-6 rtl:text-right">
        <li className="rtl:list-inside ltr:ml-4">
          <Link href="/docs/legal/licenses" className="hover:text-primary">
            {t('docs.home.whatYoullFind.forLegal.openSourceLicenses', { defaultMessage: 'Open Source Licenses' })}
          </Link>{' '}
          – {t('docs.home.whatYoullFind.forLegal.openSourceLicensesDesc', { defaultMessage: 'Usage terms and compliance' })}
        </li>
        <li className="rtl:list-inside ltr:ml-4">
          <Link href="/docs/legal/terms" className="hover:text-primary">
            {t('docs.home.whatYoullFind.forLegal.termsOfService', { defaultMessage: 'Terms of Service' })}
          </Link>{' '}
          – {t('docs.home.whatYoullFind.forLegal.termsOfServiceDesc', { defaultMessage: 'Legal policies' })}
        </li>
        <li className="rtl:list-inside ltr:ml-4">
          <Link href="/docs/legal/privacy" className="hover:text-primary">
            {t('docs.home.whatYoullFind.forLegal.privacyPolicy', { defaultMessage: 'Privacy Policy' })}
          </Link>{' '}
          – {t('docs.home.whatYoullFind.forLegal.privacyPolicyDesc', { defaultMessage: 'Data protection commitments' })}
        </li>
      </ul>

      <hr className="my-8" />

      <h2 className="text-3xl font-bold mt-12 mb-6 rtl:text-right">
        {t('docs.home.gettingStarted.title', { defaultMessage: 'Getting Started' })}
      </h2>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.home.gettingStarted.newComer', { defaultMessage: 'New comer? Start with the essentials:' })}
      </p>

      <ul className="space-y-2 mb-6 rtl:text-right">
        <li className="rtl:list-inside ltr:ml-4">
          {t('docs.home.gettingStarted.review', { defaultMessage: 'Review the' })}{' '}
          <Link href="/docs/governance/code-of-conduct" className="hover:text-primary">
            {t('docs.home.gettingStarted.codeOfConduct', { defaultMessage: 'Code of Conduct' })}
          </Link>
        </li>
        <li className="rtl:list-inside ltr:ml-4">
          {t('docs.home.gettingStarted.explore', { defaultMessage: 'Explore the' })}{' '}
          <Link href="/docs/architecture" className="hover:text-primary">
            {t('docs.home.gettingStarted.architecture', { defaultMessage: 'Architecture' })}
          </Link>
        </li>
        <li className="rtl:list-inside ltr:ml-4">
          {t('docs.home.gettingStarted.check', { defaultMessage: 'Check the' })}{' '}
          <Link href="/docs/contributing" className="hover:text-primary">
            {t('docs.home.gettingStarted.contributing', { defaultMessage: 'Contributing Guide' })}
          </Link>
        </li>
        <li className="rtl:list-inside ltr:ml-4">
          {t('docs.home.gettingStarted.join', { defaultMessage: 'Join' })}{' '}
          <Link href="/docs/community/discussions" className="hover:text-primary">
            {t('docs.home.gettingStarted.communityDiscussions', { defaultMessage: 'Community Discussions' })}
          </Link>
        </li>
      </ul>
    </div>
  );
}
