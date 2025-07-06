'use client';

import React from 'react';
import { useDocsTranslation } from "@/components/docs/utils/use-docs-translation";

export default function ContributePage() {
  const { t } = useDocsTranslation();

  return (
    <div className="docs-page">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6 rtl:text-right">
        {t('docs.contribute.title', { defaultMessage: 'Contributing' })}
      </h1>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.contribute.intro', { 
          defaultMessage: 'Thanks for your interest in contributing to Databayt. We\'re happy to have you here.' 
        })}
      </p>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.contribute.review', { 
          defaultMessage: 'Please take a moment to review this document before submitting your first pull request. We also strongly recommend that you check for open issues and pull requests to see if someone else is working on something similar.' 
        })}
      </p>

      <p className="mb-10 rtl:text-right rtl:leading-loose">
        {t('docs.contribute.help', { 
          defaultMessage: 'If you need any help, feel free to reach out to our team.' 
        })}
      </p>

      <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 rtl:text-right">
        {t('docs.contribute.aboutRepo.title', { defaultMessage: 'About this repository' })}
      </h2>

      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.contribute.aboutRepo.description', { defaultMessage: 'This repository is a monorepo.' })}
      </p>

      <ul className="mb-10 list-disc rtl:list-inside ltr:ml-6 space-y-2">
        <li className="rtl:text-right">
          {t('docs.contribute.aboutRepo.pnpm', { 
            defaultMessage: 'We use [pnpm](https://pnpm.io) and [`workspaces`](https://pnpm.io/workspaces) for development.' 
          })}
        </li>
        <li className="rtl:text-right">
          {t('docs.contribute.aboutRepo.turborepo', { 
            defaultMessage: 'We use [Turborepo](https://turbo.build/repo) as our build system.' 
          })}
        </li>
        <li className="rtl:text-right">
          {t('docs.contribute.aboutRepo.changesets', { 
            defaultMessage: 'We use [changesets](https://github.com/changesets/changesets) for managing releases.' 
          })}
        </li>
      </ul>

      <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 rtl:text-right">
        {t('docs.contribute.structure.title', { defaultMessage: 'Structure' })}
      </h2>

      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.contribute.structure.description', { defaultMessage: 'This repository is structured as follows:' })}
      </p>

      <div className="mb-6">
        <pre className="p-4 bg-muted rounded-md overflow-auto mb-4 rtl:text-left" dir="ltr">
          <code>
            {t('docs.contribute.structure.code', { 
              defaultMessage: `apps
└── www
    ├── app
    ├── components
    ├── content
    └── registry
        ├── default
        │   ├── example
        │   └── ui
        └── new-york
            ├── example
            └── ui
packages
└── cli` 
            })}
          </code>
        </pre>
      </div>

      <div className="mb-10 overflow-auto">
        <table className="w-full rtl:text-right">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 px-3 rtl:text-right font-semibold">{t('docs.contribute.structure.table.header1', { defaultMessage: 'Path' })}</th>
              <th className="text-left py-2 px-3 rtl:text-right font-semibold">{t('docs.contribute.structure.table.header2', { defaultMessage: 'Description' })}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-3 font-mono text-sm whitespace-nowrap">{t('docs.contribute.structure.table.path1', { defaultMessage: 'apps/www/app' })}</td>
              <td className="py-2 px-3">{t('docs.contribute.structure.table.desc1', { defaultMessage: 'The Next.js application for the website.' })}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-3 font-mono text-sm whitespace-nowrap">{t('docs.contribute.structure.table.path2', { defaultMessage: 'apps/www/components' })}</td>
              <td className="py-2 px-3">{t('docs.contribute.structure.table.desc2', { defaultMessage: 'The React components for the website.' })}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-3 font-mono text-sm whitespace-nowrap">{t('docs.contribute.structure.table.path3', { defaultMessage: 'apps/www/content' })}</td>
              <td className="py-2 px-3">{t('docs.contribute.structure.table.desc3', { defaultMessage: 'The content for the website.' })}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-3 font-mono text-sm whitespace-nowrap">{t('docs.contribute.structure.table.path4', { defaultMessage: 'apps/www/registry' })}</td>
              <td className="py-2 px-3">{t('docs.contribute.structure.table.desc4', { defaultMessage: 'The registry for the components.' })}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-3 font-mono text-sm whitespace-nowrap">{t('docs.contribute.structure.table.path5', { defaultMessage: 'packages/cli' })}</td>
              <td className="py-2 px-3">{t('docs.contribute.structure.table.desc5', { defaultMessage: 'The `shadcn-ui` package.' })}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 rtl:text-right">
        {t('docs.contribute.development.title', { defaultMessage: 'Development' })}
      </h2>

      <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-2 rtl:text-right">
        {t('docs.contribute.development.fork.title', { defaultMessage: 'Fork this repo' })}
      </h3>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.contribute.development.fork.description', { 
          defaultMessage: 'You can fork this repo by clicking the fork button in the top right corner of this page.' 
        })}
      </p>

      <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-2 rtl:text-right">
        {t('docs.contribute.development.clone.title', { defaultMessage: 'Clone on your local machine' })}
      </h3>

      <div className="mb-6">
        <pre className="p-4 bg-muted rounded-md overflow-auto rtl:text-left" dir="ltr">
          <code>
            {t('docs.contribute.development.clone.code', { 
              defaultMessage: 'git clone https://github.com/your-username/databayt.git' 
            })}
          </code>
        </pre>
      </div>

      <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-2 rtl:text-right">
        {t('docs.contribute.development.navigate.title', { defaultMessage: 'Navigate to project directory' })}
      </h3>

      <div className="mb-6">
        <pre className="p-4 bg-muted rounded-md overflow-auto rtl:text-left" dir="ltr">
          <code>
            {t('docs.contribute.development.navigate.code', { 
              defaultMessage: 'cd databayt' 
            })}
          </code>
        </pre>
      </div>

      <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-2 rtl:text-right">
        {t('docs.contribute.development.branch.title', { defaultMessage: 'Create a new Branch' })}
      </h3>

      <div className="mb-6">
        <pre className="p-4 bg-muted rounded-md overflow-auto rtl:text-left" dir="ltr">
          <code>
            {t('docs.contribute.development.branch.code', { 
              defaultMessage: 'git checkout -b my-new-branch' 
            })}
          </code>
        </pre>
      </div>

      <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-2 rtl:text-right">
        {t('docs.contribute.development.install.title', { defaultMessage: 'Install dependencies' })}
      </h3>

      <div className="mb-6">
        <pre className="p-4 bg-muted rounded-md overflow-auto rtl:text-left" dir="ltr">
          <code>
            {t('docs.contribute.development.install.code', { 
              defaultMessage: 'pnpm install' 
            })}
          </code>
        </pre>
      </div>

      <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-2 rtl:text-right">
        {t('docs.contribute.development.run.title', { defaultMessage: 'Run a workspace' })}
      </h3>

      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.contribute.development.run.description', { 
          defaultMessage: 'You can use the `pnpm --filter=[WORKSPACE]` command to start the development process for a workspace.' 
        })}
      </p>

      <h4 className="text-xl font-semibold mt-6 mb-2 rtl:text-right">
        {t('docs.contribute.development.run.examples.title', { defaultMessage: 'Examples' })}
      </h4>

      <ol className="mb-6 list-decimal rtl:list-inside ltr:ml-6 space-y-4">
        <li className="rtl:text-right">
          <p className="mb-2 rtl:text-right inline-block">{t('docs.contribute.development.run.examples.first.description', { defaultMessage: 'To run the website:' })}</p>
          <pre className="p-4 bg-muted rounded-md overflow-auto mt-2 rtl:text-left" dir="ltr">
            <code>
              {t('docs.contribute.development.run.examples.first.code', { 
                defaultMessage: 'pnpm --filter=www dev' 
              })}
            </code>
          </pre>
        </li>
        <li className="rtl:text-right">
          <p className="mb-2 rtl:text-right inline-block">{t('docs.contribute.development.run.examples.second.description', { defaultMessage: 'To run the package:' })}</p>
          <pre className="p-4 bg-muted rounded-md overflow-auto mt-2 rtl:text-left" dir="ltr">
            <code>
              {t('docs.contribute.development.run.examples.second.code', { 
                defaultMessage: 'pnpm --filter=shadcn-ui dev' 
              })}
            </code>
          </pre>
        </li>
      </ol>

      <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 rtl:text-right">
        {t('docs.contribute.commitConvention.title', { defaultMessage: 'Commit Convention' })}
      </h2>

      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.contribute.commitConvention.description', { 
          defaultMessage: 'Before you create a Pull Request, please check whether your commits comply with the commit conventions used in this repository.' 
        })}
      </p>

      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.contribute.commitConvention.followFormat', { 
          defaultMessage: 'When you create a commit we kindly ask you to follow the convention `category(scope or module): message` in your commit message while using one of the following categories:' 
        })}
      </p>

      <ul className="mb-6 list-disc rtl:list-inside ltr:ml-6 space-y-2">
        <li className="rtl:text-right">
          <span className="font-mono rtl:text-left">{t('docs.contribute.commitConvention.categories.feat.title', { defaultMessage: 'feat / feature' })}</span>: 
          {t('docs.contribute.commitConvention.categories.feat.description', { defaultMessage: 'all changes that introduce completely new code or new features' })}
        </li>
        <li className="rtl:text-right">
          <span className="font-mono rtl:text-left">{t('docs.contribute.commitConvention.categories.fix.title', { defaultMessage: 'fix' })}</span>: 
          {t('docs.contribute.commitConvention.categories.fix.description', { defaultMessage: 'changes that fix a bug (ideally you will additionally reference an issue if present)' })}
        </li>
        <li className="rtl:text-right">
          <span className="font-mono rtl:text-left">{t('docs.contribute.commitConvention.categories.refactor.title', { defaultMessage: 'refactor' })}</span>: 
          {t('docs.contribute.commitConvention.categories.refactor.description', { defaultMessage: 'any code related change that is not a fix nor a feature' })}
        </li>
        <li className="rtl:text-right">
          <span className="font-mono rtl:text-left">{t('docs.contribute.commitConvention.categories.docs.title', { defaultMessage: 'docs' })}</span>: 
          {t('docs.contribute.commitConvention.categories.docs.description', { defaultMessage: 'changing existing or creating new documentation (i.e. README, docs for usage of a lib or cli usage)' })}
        </li>
        <li className="rtl:text-right">
          <span className="font-mono rtl:text-left">{t('docs.contribute.commitConvention.categories.build.title', { defaultMessage: 'build' })}</span>: 
          {t('docs.contribute.commitConvention.categories.build.description', { defaultMessage: 'all changes regarding the build of the software, changes to dependencies or the addition of new dependencies' })}
        </li>
        <li className="rtl:text-right">
          <span className="font-mono rtl:text-left">{t('docs.contribute.commitConvention.categories.test.title', { defaultMessage: 'test' })}</span>: 
          {t('docs.contribute.commitConvention.categories.test.description', { defaultMessage: 'all changes regarding tests (adding new tests or changing existing ones)' })}
        </li>
        <li className="rtl:text-right">
          <span className="font-mono rtl:text-left">{t('docs.contribute.commitConvention.categories.ci.title', { defaultMessage: 'ci' })}</span>: 
          {t('docs.contribute.commitConvention.categories.ci.description', { defaultMessage: 'all changes regarding the configuration of continuous integration (i.e. github actions, ci system)' })}
        </li>
        <li className="rtl:text-right">
          <span className="font-mono rtl:text-left">{t('docs.contribute.commitConvention.categories.chore.title', { defaultMessage: 'chore' })}</span>: 
          {t('docs.contribute.commitConvention.categories.chore.description', { defaultMessage: 'all changes to the repository that do not fit into any of the above categories' })}
        </li>
      </ul>

      <p className="mb-4 rtl:leading-loose font-mono">
        {t('docs.contribute.commitConvention.example', { 
          defaultMessage: 'e.g. `feat(components): add new prop to the avatar component`' 
        })}
      </p>

      <p className="mb-10 rtl:text-right rtl:leading-loose">
        {t('docs.contribute.commitConvention.moreInfo', { 
          defaultMessage: 'If you are interested in the detailed specification you can visit https://www.conventionalcommits.org/ or check out the [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).' 
        })}
      </p>

      <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4 rtl:text-right">
        {t('docs.contribute.testing.title', { defaultMessage: 'Testing' })}
      </h2>

      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.contribute.testing.intro', { 
          defaultMessage: 'Tests are written using [Vitest](https://vitest.dev). You can run all the tests from the root of the repository.' 
        })}
      </p>

      <div className="mb-6">
        <pre className="p-4 bg-muted rounded-md overflow-auto rtl:text-left" dir="ltr">
          <code>
            {t('docs.contribute.testing.command', { 
              defaultMessage: 'pnpm test' 
            })}
          </code>
        </pre>
      </div>

      <p className="mb-10 rtl:text-right rtl:leading-loose">
        {t('docs.contribute.testing.ensure', { 
          defaultMessage: 'Please ensure that the tests are passing when submitting a pull request. If you\'re adding new features, please include tests.' 
        })}
      </p>
    </div>
  );
}
