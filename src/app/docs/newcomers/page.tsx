'use client';

import React from 'react';
import { useDocsTranslation } from "@/components/docs/utils/use-docs-translation";
import Link from 'next/link';

export default function NewcomersPage() {
  const { t } = useDocsTranslation();

  return (
    <div className="docs-page">
      <h2 className="text-3xl font-bold mb-6 rtl:text-right">
        {t('docs.newcomers.title', { defaultMessage: 'Newcomers' })}
      </h2>

      <div className="text-sm text-muted-foreground py-4 bg-muted rounded-lg px-6 flex items-center rtl:flex-row-reverse justify-between">
        <div className="flex items-center rtl:flex-row-reverse">
          <strong className="rtl:ml-2 ltr:mr-2">
            {t('docs.newcomers.technologyUsed', { defaultMessage: 'Technology used:' })}
          </strong>
          <span>{t('docs.newcomers.techStack', { defaultMessage: 'Next.js, React, TypeScript, Tailwind CSS...' })}</span>
        </div>
        <Link 
          href="/docs/stack" 
          className="underline hover:text-primary rtl:mr-2 ltr:ml-2 whitespace-nowrap"
        >
          {t('docs.newcomers.seeFullStack', { defaultMessage: 'see full stack →' })}
        </Link>
      </div>

      <p className="my-6 rtl:text-right rtl:leading-loose">
        {t('docs.newcomers.introduction', { defaultMessage: 'So you\'ve heard about Databayt and you\'re curious. Maybe someone invited you to contribute, or you stumbled across our project and want to understand what we\'re all about. Either way,' })}{' '}
        <strong>{t('docs.newcomers.welcome', { defaultMessage: 'welcome!' })}</strong>
      </p>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.newcomers.introDescription', { defaultMessage: 'This page is specifically for you - the newcomer who has questions, concerns, and wants to understand how this all works before diving in.' })}
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.newcomers.whyDatabayt.title', { defaultMessage: 'Why Databayt' })}
      </h2>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.newcomers.whyDatabayt.description', { defaultMessage: 'Databayt is a collaborative open-source ecosystem designed to accelerate development. With a patterned, searchable code library, developers can start projects up to 70% complete—never from scratch. While open source has come a long way and countless codebases already exist, there\'s still real value in building a well-structured, indexed library where code follows consistent patterns and architecture. Databayt is about creating that shared standard—together. It\'s not just practical; it\'s exciting to shape a clean, reusable codebase as a community—making development faster for everyone, and driving collective progress for Databayt as a publicly traded entity.' })}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.newcomers.benefits.generateRevenue.title', { defaultMessage: 'Generate Revenue' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right rtl:leading-loose">
            {t('docs.newcomers.benefits.generateRevenue.description', { defaultMessage: 'Build once, earn repeatedly through our transparent revenue-sharing model.' })}
          </div>
        </div>
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.newcomers.benefits.realWorldExperience.title', { defaultMessage: 'Real-World Experience' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right rtl:leading-loose">
            {t('docs.newcomers.benefits.realWorldExperience.description', { defaultMessage: 'Work on live, enterprise-grade projects solving actual business challenges.' })}
          </div>
        </div>
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.newcomers.benefits.publicOwnership.title', { defaultMessage: 'Public Ownership' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right rtl:leading-loose">
            {t('docs.newcomers.benefits.publicOwnership.description', { defaultMessage: 'Own and showcase your work while building a strong GitHub portfolio.' })}
          </div>
        </div>
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.newcomers.benefits.collaborativeLearning.title', { defaultMessage: 'Collaborative Learning' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right rtl:leading-loose">
            {t('docs.newcomers.benefits.collaborativeLearning.description', { defaultMessage: 'Learn from experts while working on enterprise solutions with our team.' })}
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.newcomers.remoteWork.title', { defaultMessage: 'Remote Work' })}
      </h2>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        <strong>{t('docs.newcomers.remoteWork.yes', { defaultMessage: 'Yes, 100% remote.' })}</strong>{' '}
        {t('docs.newcomers.remoteWork.description', { defaultMessage: 'There\'s no office, no required meetings, no fixed hours. Contributors work from their home offices in different countries, coffee shops while traveling, co-working spaces, or wherever they\'re most productive. You collaborate through GitHub, communicate async, and work on your own schedule.' })}
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.newcomers.revenueSharing.title', { defaultMessage: 'Revenue Sharing' })}
      </h2>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.newcomers.revenueSharing.description1', { defaultMessage: 'No traditional salaries here. Databayt is collectively owned by us - the contributors. When sales team brings in projects, we complete them together and everyone takes their share. You\'re not an employee; you\'re a co-owner building equity in something bigger.' })}
      </p>
      
      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.newcomers.revenueSharing.description2', { defaultMessage: 'We use a transparent revenue-sharing model where contributors earn a percentage of revenue generated from their contributions across our four core business models.' })}{' '}
        <Link href="/docs/revenue" className="underline hover:text-primary">
          {t('docs.newcomers.revenueSharing.readMore', { defaultMessage: 'read more →' })}
        </Link>
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.newcomers.partTimeContribution.title', { defaultMessage: 'Part-Time Contribution' })}
      </h3>

      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.newcomers.partTimeContribution.description', { defaultMessage: 'Perfect for part-time contributors. Most of our successful contributors:' })}
      </p>
      <ul className="mb-6 space-y-2 rtl:text-right rtl:list-inside ltr:ml-6 list-disc">
        <li>{t('docs.newcomers.partTimeContribution.hours', { defaultMessage: 'Work 5-10 hours per week' })}</li>
        <li>{t('docs.newcomers.partTimeContribution.timing', { defaultMessage: 'Contribute during evenings or weekends' })}</li>
        <li>{t('docs.newcomers.partTimeContribution.breaks', { defaultMessage: 'Take breaks when life gets busy' })}</li>
        <li>{t('docs.newcomers.partTimeContribution.noPressure', { defaultMessage: 'Have no pressure or deadlines' })}</li>
      </ul>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.newcomers.partTimeContribution.success', { defaultMessage: 'Many successful contributors started with just 2-3 hours per week.' })}
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.newcomers.experienceRequirements.title', { defaultMessage: 'Experience Requirements' })}
      </h3>

      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.newcomers.experienceRequirements.description', { defaultMessage: 'Everyone starts somewhere. What matters most:' })}
      </p>
      <ul className="mb-6 space-y-2 rtl:text-right rtl:list-inside ltr:ml-6 list-disc">
        <li>{t('docs.newcomers.experienceRequirements.willingness', { defaultMessage: 'Willingness to learn' })}</li>
        <li>{t('docs.newcomers.experienceRequirements.pattern', { defaultMessage: 'Ability to adopt pattern' })}</li>
        <li>{t('docs.newcomers.experienceRequirements.communication', { defaultMessage: 'Good communication' })}</li>
        <li>{t('docs.newcomers.experienceRequirements.persistence', { defaultMessage: 'Persistence when facing challenges' })}</li>
      </ul>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.newcomers.experienceRequirements.mentorship', { defaultMessage: 'We provide mentorship and have "good first issue" labels specifically for newcomers.' })}
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.newcomers.gettingStarted.title', { defaultMessage: 'Getting Started' })}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.newcomers.gettingStarted.explore.title', { defaultMessage: 'Explore' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right rtl:leading-loose">
            {t('docs.newcomers.gettingStarted.explore.description', { defaultMessage: 'Browse our GitHub repositories to understand our architecture. Check issues labeled "good first issue" for beginner tasks. Read our documentation to learn our development practices.' })}
          </div>
        </div>
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.newcomers.gettingStarted.setup.title', { defaultMessage: 'Setup' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right rtl:leading-loose">
            {t('docs.newcomers.gettingStarted.setup.description', { defaultMessage: 'Pick a repository that matches your skills and interests. Follow our setup guide to configure your environment. Test the development server and start experimenting.' })}
          </div>
        </div>
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.newcomers.gettingStarted.contribute.title', { defaultMessage: 'Contribute' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right rtl:leading-loose">
            {t('docs.newcomers.gettingStarted.contribute.description', { defaultMessage: 'Start with small, manageable tasks to build confidence. Follow our contribution guidelines and coding standards. Get feedback from experienced contributors through PRs.' })}
          </div>
        </div>
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.newcomers.gettingStarted.build.title', { defaultMessage: 'Build' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right rtl:leading-loose">
            {t('docs.newcomers.gettingStarted.build.description', { defaultMessage: 'Leverage our battle-tested components for your projects. Start with up to 70% of your project pre-built. Customize and extend components to match your needs.' })}
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.newcomers.supportAvailable.title', { defaultMessage: 'Support Available' })}
      </h3>

      <h4 className="text-lg font-semibold mt-6 mb-2 rtl:text-right">
        {t('docs.newcomers.supportAvailable.community.title', { defaultMessage: 'Community' })}
      </h4>
      <ul className="mb-6 space-y-2 rtl:text-right rtl:list-inside ltr:ml-6 list-disc">
        <li>{t('docs.newcomers.supportAvailable.community.countries', { defaultMessage: 'Growing contributor base from 10+ countries' })}</li>
        <li>{t('docs.newcomers.supportAvailable.community.discord', { defaultMessage: 'Active Discord community with 500+ members' })}</li>
        <li>{t('docs.newcomers.supportAvailable.community.calls', { defaultMessage: 'Monthly community calls and workshops' })}</li>
        <li>{t('docs.newcomers.supportAvailable.community.mentorship', { defaultMessage: 'Active mentorship program' })}</li>
      </ul>

      <h4 className="text-lg font-semibold mt-6 mb-2 rtl:text-right">
        {t('docs.newcomers.supportAvailable.resources.title', { defaultMessage: 'Resources' })}
      </h4>
      <ul className="mb-6 space-y-2 rtl:text-right rtl:list-inside ltr:ml-6 list-disc">
        <li>{t('docs.newcomers.supportAvailable.resources.documentation', { defaultMessage: 'Comprehensive documentation' })}</li>
        <li>{t('docs.newcomers.supportAvailable.resources.tutorials', { defaultMessage: 'Video tutorials' })}</li>
        <li>{t('docs.newcomers.supportAvailable.resources.guides', { defaultMessage: 'Setup guides' })}</li>
        <li>{t('docs.newcomers.supportAvailable.resources.practices', { defaultMessage: 'Best practices' })}</li>
      </ul>

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.newcomers.commonQuestions.title', { defaultMessage: 'Common Questions' })}
      </h3>

      <h4 className="text-lg font-semibold mt-6 mb-2 rtl:text-right">
        {t('docs.newcomers.commonQuestions.usingComponents.question', { defaultMessage: 'Can I use Databayt components in my own projects?' })}
      </h4>
      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.newcomers.commonQuestions.usingComponents.answer', { defaultMessage: 'Yes! All components are open source and can be used in your projects according to their respective licenses. We encourage reuse and building upon our work.' })}
      </p>

      <h4 className="text-lg font-semibold mt-6 mb-2 rtl:text-right">
        {t('docs.newcomers.commonQuestions.experience.question', { defaultMessage: 'What if I\'m not experienced enough?' })}
      </h4>
      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.newcomers.commonQuestions.experience.answer', { defaultMessage: 'We have contributors at all skill levels. Beginners often bring fresh perspectives that experts miss. We provide mentorship and support.' })}
      </p>

      <h4 className="text-lg font-semibold mt-6 mb-2 rtl:text-right">
        {t('docs.newcomers.commonQuestions.workOn.question', { defaultMessage: 'How do I know what to work on?' })}
      </h4>
      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.newcomers.commonQuestions.workOn.answer', { defaultMessage: 'Start with issues labeled "good first issue", join community discussions, or talk to project maintainers. You\'re never working blindly.' })}
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.newcomers.futureOpportunities.title', { defaultMessage: 'Future Opportunities' })}
      </h3>

      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.newcomers.futureOpportunities.intro', { defaultMessage: 'As you grow with us, you can look forward to:' })}
      </p>
      <ul className="mb-6 space-y-2 rtl:text-right rtl:list-inside ltr:ml-6 list-disc">
        <li>{t('docs.newcomers.futureOpportunities.enterprise', { defaultMessage: 'Building enterprise solutions' })}</li>
        <li>{t('docs.newcomers.futureOpportunities.designSystem', { defaultMessage: 'Contributing to our design system framework' })}</li>
        <li>{t('docs.newcomers.futureOpportunities.education', { defaultMessage: 'Helping create our developer education platform' })}</li>
        <li>{t('docs.newcomers.futureOpportunities.community', { defaultMessage: 'Leading community programs' })}</li>
        <li>{t('docs.newcomers.futureOpportunities.mentoring', { defaultMessage: 'Mentoring new contributors' })}</li>
      </ul>

      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.newcomers.readyToStart.title', { defaultMessage: 'Ready to Start?' })}
      </h3>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.newcomers.readyToStart.description', { defaultMessage: 'Every contributor started exactly where you are now. You don\'t have to decide everything today. Just take one small step forward.' })}
      </p>

      <p className="mb-4 font-bold rtl:text-right">
        {t('docs.newcomers.readyToStart.joinDiscord.label', { defaultMessage: 'Join Discord:' })}{' '}
        <Link href="https://discord.gg/uPa4gGG62c" className="text-primary hover:underline">
          {t('docs.newcomers.readyToStart.joinDiscord.link', { defaultMessage: 'Connect with our community on Discord' })}
        </Link>
      </p>

      <p className="font-bold rtl:text-right">
        {t('docs.newcomers.readyToStart.questions', { defaultMessage: 'Questions?' })}{' '}
        <Link href="https://github.com/databayt/community/discussions" className="text-primary hover:underline">
          {t('docs.newcomers.readyToStart.discussions', { defaultMessage: 'Ask in our discussions' })}
        </Link>
      </p>
    </div>
  );
}
