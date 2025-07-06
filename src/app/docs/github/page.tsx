'use client';

import React from 'react';
import { useDocsTranslation } from "@/components/docs/utils/use-docs-translation";
import Link from 'next/link';

export default function GitHubPage() {
  const { t } = useDocsTranslation();

  return (
    <div className="docs-page">
      <h2 className="text-3xl font-bold mb-6 rtl:text-right">
        {t('docs.github.title', { defaultMessage: 'GitHub' })}
      </h2>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.github.description', { defaultMessage: 'Master GitHub workflows and collaboration patterns for contributing to Databayt projects.' })}
      </p>

      <div className="text-sm text-muted-foreground py-4 bg-muted rounded-lg px-6 flex items-center rtl:flex-row-reverse w-full">
        <strong className="rtl:ml-3 ltr:mr-3 whitespace-nowrap">
          {t('docs.github.essentialKnowledge.title', { defaultMessage: 'Essential knowledge:' })}
        </strong>
        <span className="rtl:text-right ltr:text-left">
          {t('docs.github.essentialKnowledge.content', { defaultMessage: 'Repository workflows → Collaboration best practices → Code quality standards → Community resources' })}
        </span>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.github.workflowEssentials.title', { defaultMessage: 'Workflow Essentials' })}
      </h2>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.github.workflowEssentials.description', { defaultMessage: 'Learn the core GitHub workflows that power effective collaboration.' })}
      </p>

      <h4 className="text-lg font-semibold mt-6 mb-2 rtl:text-right">
        {t('docs.github.understandingFeatures.title', { defaultMessage: 'Understanding GitHub Features' })}
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.github.understandingFeatures.repositories.title', { defaultMessage: 'Repositories' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right rtl:leading-loose">
            {t('docs.github.understandingFeatures.repositories.description', { defaultMessage: 'Learn how to fork, clone, and manage repositories for your contributions.' })}
          </div>
        </div>
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.github.understandingFeatures.issues.title', { defaultMessage: 'Issues & Pull Requests' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right rtl:leading-loose">
            {t('docs.github.understandingFeatures.issues.description', { defaultMessage: 'Understand how to create issues, submit pull requests, and collaborate.' })}
          </div>
        </div>
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.github.understandingFeatures.branches.title', { defaultMessage: 'Branches' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right rtl:leading-loose">
            {t('docs.github.understandingFeatures.branches.description', { defaultMessage: 'Master the art of branching for feature development and bug fixes.' })}
          </div>
        </div>
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.github.understandingFeatures.collaboration.title', { defaultMessage: 'Collaboration' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right rtl:leading-loose">
            {t('docs.github.understandingFeatures.collaboration.description', { defaultMessage: 'Learn GitHub\'s collaborative features like reviews, discussions, and projects.' })}
          </div>
        </div>
      </div>

      <h4 className="text-lg font-semibold mt-6 mb-2 rtl:text-right">
        {t('docs.github.essentialCommands.title', { defaultMessage: 'Essential Git Commands' })}
      </h4>

      <p className="font-semibold mt-4 mb-1 rtl:text-right">
        {t('docs.github.essentialCommands.repositoryManagement.title', { defaultMessage: 'Repository Management:' })}
      </p>
      <div className="bg-muted rounded-md p-4 my-2">
        <pre className="text-sm overflow-auto" dir="ltr">
          <code>{t('docs.github.essentialCommands.repositoryManagement.commands', { defaultMessage: '# Clone a repository\ngit clone git@github.com:username/repository.git\n\n# Check repository status\ngit status\n\n# View commit history\ngit log --oneline' })}</code>
        </pre>
      </div>

      <p className="font-semibold mt-4 mb-1 rtl:text-right">
        {t('docs.github.essentialCommands.branchManagement.title', { defaultMessage: 'Branch Management:' })}
      </p>
      <div className="bg-muted rounded-md p-4 my-2">
        <pre className="text-sm overflow-auto" dir="ltr">
          <code>{t('docs.github.essentialCommands.branchManagement.commands', { defaultMessage: '# Create and switch to new branch\ngit checkout -b feature/your-feature\n\n# Switch between branches\ngit checkout main\ngit checkout feature/your-feature\n\n# List all branches\ngit branch -a' })}</code>
        </pre>
      </div>

      <p className="font-semibold mt-4 mb-1 rtl:text-right">
        {t('docs.github.essentialCommands.makingChanges.title', { defaultMessage: 'Making Changes:' })}
      </p>
      <div className="bg-muted rounded-md p-4 my-2">
        <pre className="text-sm overflow-auto" dir="ltr">
          <code>{t('docs.github.essentialCommands.makingChanges.commands', { defaultMessage: '# Stage changes\ngit add .\ngit add specific-file.txt\n\n# Commit changes\ngit commit -m "feat: add new feature"\n\n# Push changes\ngit push origin feature/your-feature' })}</code>
        </pre>
      </div>

      <p className="font-semibold mt-4 mb-1 rtl:text-right">
        {t('docs.github.essentialCommands.stayingUpdated.title', { defaultMessage: 'Staying Updated:' })}
      </p>
      <div className="bg-muted rounded-md p-4 my-2">
        <pre className="text-sm overflow-auto" dir="ltr">
          <code>{t('docs.github.essentialCommands.stayingUpdated.commands', { defaultMessage: '# Fetch latest changes\ngit fetch origin\n\n# Pull latest changes\ngit pull origin main\n\n# Merge changes\ngit merge origin/main' })}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.github.bestPractices.title', { defaultMessage: 'Best Practices' })}
      </h2>

      <h4 className="text-lg font-semibold mt-6 mb-2 rtl:text-right">
        {t('docs.github.qualityStandards.title', { defaultMessage: 'Quality Standards' })}
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.github.qualityStandards.repoManagement.title', { defaultMessage: 'Repository Management' })}
          </h4>
          <div className="text-sm text-muted-foreground space-y-1 rtl:text-right">
            <div>{t('docs.github.qualityStandards.repoManagement.item1', { defaultMessage: '• Clear, descriptive naming' })}</div>
            <div>{t('docs.github.qualityStandards.repoManagement.item2', { defaultMessage: '• Comprehensive README files' })}</div>
            <div>{t('docs.github.qualityStandards.repoManagement.item3', { defaultMessage: '• Proper .gitignore setup' })}</div>
            <div>{t('docs.github.qualityStandards.repoManagement.item4', { defaultMessage: '• Semantic version releases' })}</div>
          </div>
        </div>
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.github.qualityStandards.pullRequests.title', { defaultMessage: 'Pull Requests' })}
          </h4>
          <div className="text-sm text-muted-foreground space-y-1 rtl:text-right">
            <div>{t('docs.github.qualityStandards.pullRequests.item1', { defaultMessage: '• Descriptive titles and descriptions' })}</div>
            <div>{t('docs.github.qualityStandards.pullRequests.item2', { defaultMessage: '• Reference related issues (#123)' })}</div>
            <div>{t('docs.github.qualityStandards.pullRequests.item3', { defaultMessage: '• Request appropriate reviews' })}</div>
            <div>{t('docs.github.qualityStandards.pullRequests.item4', { defaultMessage: '• Keep scope focused and atomic' })}</div>
          </div>
        </div>
      </div>

      <h4 className="text-lg font-semibold mt-6 mb-2 rtl:text-right">
        {t('docs.github.commitFormat.title', { defaultMessage: 'Commit Message Format' })}
      </h4>

      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.github.commitFormat.description', { defaultMessage: 'Use conventional commits for consistent history:' })}
      </p>
      <div className="bg-muted rounded-md p-4 my-2">
        <pre className="text-sm overflow-auto" dir="ltr">
          <code>{t('docs.github.commitFormat.examples', { defaultMessage: 'feat: add new user authentication system\nfix: resolve login page redirect issue\ndocs: update API documentation\nstyle: fix code formatting issues\nrefactor: restructure service logic\ntest: add comprehensive unit tests' })}</code>
        </pre>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.github.gettingHelp.title', { defaultMessage: 'Getting Help' })}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.github.gettingHelp.documentation.title', { defaultMessage: 'Documentation' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right rtl:leading-loose">
            {t('docs.github.gettingHelp.documentation.checkText', { defaultMessage: 'Check' })} <a href="https://docs.github.com" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">{t('docs.github.gettingHelp.documentation.githubDocs', { defaultMessage: 'GitHub Docs' })}</a> {t('docs.github.gettingHelp.documentation.forText', { defaultMessage: 'for official guides and' })} <Link href="/docs/pattern" className="underline hover:text-primary">{t('docs.github.gettingHelp.documentation.ourPatterns', { defaultMessage: 'our patterns' })}</Link> {t('docs.github.gettingHelp.documentation.forStandards', { defaultMessage: 'for project-specific standards.' })}
          </div>
        </div>
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.github.gettingHelp.community.title', { defaultMessage: 'Community' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right rtl:leading-loose">
            {t('docs.github.gettingHelp.community.description', { defaultMessage: 'Join our Discord for real-time collaboration help and connect with other contributors.' })}
          </div>
        </div>
      </div>

      <h4 className="text-lg font-semibold mt-6 mb-2 rtl:text-right">
        {t('docs.github.quickLinks.title', { defaultMessage: 'Quick Reference Links' })}
      </h4>

      <ul className="mb-6 space-y-2 rtl:text-right rtl:list-inside ltr:ml-6 list-disc">
        <li>
          <a href="https://education.github.com/git-cheat-sheet-education.pdf" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
            {t('docs.github.quickLinks.gitCheatSheet', { defaultMessage: 'Git Cheat Sheet' })}
          </a> - {t('docs.github.quickLinks.gitCheatSheetDesc', { defaultMessage: 'Essential Git commands' })}
        </li>
        <li>
          <a href="https://guides.github.com/introduction/flow/" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
            {t('docs.github.quickLinks.githubFlow', { defaultMessage: 'GitHub Flow' })}
          </a> - {t('docs.github.quickLinks.githubFlowDesc', { defaultMessage: 'Understanding GitHub workflow' })}
        </li>
        <li>
          <a href="https://guides.github.com/features/mastering-markdown/" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
            {t('docs.github.quickLinks.markdownGuide', { defaultMessage: 'Markdown Guide' })}
          </a> - {t('docs.github.quickLinks.markdownGuideDesc', { defaultMessage: 'Writing better README files' })}
        </li>
        <li>
          <a href="https://www.conventionalcommits.org/" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
            {t('docs.github.quickLinks.conventionalCommits', { defaultMessage: 'Conventional Commits' })}
          </a> - {t('docs.github.quickLinks.conventionalCommitsDesc', { defaultMessage: 'Commit message standards' })}
        </li>
      </ul>

      <hr className="my-8 border-t border-border" />

      <p className="mt-8 mb-6 font-bold rtl:text-right">
        🎉 {t('docs.github.conclusion', { defaultMessage: 'Congratulations! Your GitHub account is now fully configured and ready for contributing to open source projects. You can now fork repositories, make changes, and submit pull requests with confidence!' })}
      </p>
    </div>
  );
}
