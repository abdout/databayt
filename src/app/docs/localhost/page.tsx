'use client';

import React from 'react';
import { useDocsTranslation } from "@/components/docs/utils/use-docs-translation";
import Link from 'next/link';
import Image from "next/image";

export default function LocalhostPage() {
  const { t } = useDocsTranslation();

  return (
    <div className="docs-page">
      <h2 className="text-3xl font-bold mb-6 rtl:text-right">
        {t('docs.localhost.title', { defaultMessage: 'Localhost' })}
      </h2>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.localhost.description', { defaultMessage: 'A complete step-by-step guide to fork, clone, and run Databayt projects locally on your machine.' })}
      </p>

      <div className="text-sm text-muted-foreground py-4 bg-muted rounded-lg px-6">
        <div className="flex items-center rtl:flex-row-reverse w-full">
          <strong className="rtl:ml-3 ltr:mr-3 whitespace-nowrap rtl:text-right ltr:text-left">
            {t('docs.localhost.whatYouWillLearn', { defaultMessage: 'What you\'ll learn:' })}
          </strong>
          <span className="rtl:text-right ltr:text-left flex-1">
            {t('docs.localhost.learningSteps', { defaultMessage: 'Fork repository → Clone locally → Install dependencies → Run development server → Make your first contribution' })}
          </span>
        </div>
      </div>

      {/* Step 1 */}
      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.localhost.step1.title', { defaultMessage: 'Step 1: Fork the Project' })}
      </h3>
      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.localhost.step1.description', { defaultMessage: 'Start by creating your own copy of the repository on GitHub.' })}
      </p>
      <ol className="mb-6 space-y-2 rtl:text-right rtl:list-inside ltr:ml-6">
        <li>{t('docs.localhost.step1.navigateRepo', { defaultMessage: 'Navigate to the repository you want to contribute to' })}</li>
        <li>{t('docs.localhost.step1.clickFork', { defaultMessage: 'Click the "Fork" button in the top-right corner' })}</li>
      </ol>
      <div className="my-8 border rounded-lg overflow-hidden">
        <Image 
          src="/contribute/step-1-fork.png" 
          alt={t('docs.localhost.step1.imageAlt', { defaultMessage: 'Click the Fork button on GitHub repository page' })} 
          width={800}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Step 2 */}
      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.localhost.step2.title', { defaultMessage: 'Step 2: Create Your Fork' })}
      </h3>
      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.localhost.step2.description', { defaultMessage: 'Ensure the repository name is available and create your fork.' })}
      </p>
      <ol className="mb-6 space-y-2 rtl:text-right rtl:list-inside ltr:ml-6">
        <li>{t('docs.localhost.step2.verifyName', { defaultMessage: 'Verify the repository name is available' })}</li>
        <li>{t('docs.localhost.step2.keepDefaults', { defaultMessage: 'Keep the default settings (unless you need to change them)' })}</li>
        <li>{t('docs.localhost.step2.clickCreate', { defaultMessage: 'Click "Create fork" to complete the process' })}</li>
      </ol>
      <div className="my-8 border rounded-lg overflow-hidden">
        <Image 
          src="/contribute/step-2-create-fork.png" 
          alt={t('docs.localhost.step2.imageAlt', { defaultMessage: 'Create fork dialog with repository name and settings' })} 
          width={800}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Step 3 */}
      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.localhost.step3.title', { defaultMessage: 'Step 3: Open VS Code/Cursor' })}
      </h3>
      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.localhost.step3.description', { defaultMessage: 'Launch your preferred code editor and prepare to clone the repository.' })}
      </p>
      <ol className="mb-6 space-y-2 rtl:text-right rtl:list-inside ltr:ml-6">
        <li>{t('docs.localhost.step3.openWindow', { defaultMessage: 'Open a new window in VS Code or Cursor' })}</li>
        <li>{t('docs.localhost.step3.clickClone', { defaultMessage: 'Click on "Clone Repository" or use the Source Control panel' })}</li>
        <li>{t('docs.localhost.step3.prepareURL', { defaultMessage: 'Prepare to paste your repository URL' })}</li>
      </ol>
      <div className="my-8 border rounded-lg overflow-hidden">
        <Image 
          src="/contribute/step-3-open-editor.png" 
          alt={t('docs.localhost.step3.imageAlt', { defaultMessage: 'VS Code or Cursor editor with clone repository option highlighted' })} 
          width={800}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Step 4 */}
      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.localhost.step4.title', { defaultMessage: 'Step 4: Clone from GitHub' })}
      </h3>
      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.localhost.step4.description', { defaultMessage: 'Get your forked repository URL and clone it locally.' })}
      </p>
      <ol className="mb-6 space-y-2 rtl:text-right rtl:list-inside ltr:ml-6">
        <li>{t('docs.localhost.step4.goToRepo', { defaultMessage: 'Go back to your forked repository on GitHub' })}</li>
        <li>{t('docs.localhost.step4.clickCode', { defaultMessage: 'Click the green "Code" button' })}</li>
        <li>{t('docs.localhost.step4.copyURL', { defaultMessage: 'Copy the HTTPS URL to your clipboard' })}</li>
        <li>{t('docs.localhost.step4.pasteURL', { defaultMessage: 'Paste it in your editor\'s clone dialog' })}</li>
      </ol>
      <div className="my-8 border rounded-lg overflow-hidden">
        <Image 
          src="/contribute/step-4-clone-github.png" 
          alt={t('docs.localhost.step4.imageAlt', { defaultMessage: 'GitHub clone dialog showing HTTPS URL copy button' })} 
          width={800}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Step 5 */}
      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.localhost.step5.title', { defaultMessage: 'Step 5: Choose Local Directory' })}
      </h3>
      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.localhost.step5.description', { defaultMessage: 'Select where you want to store the project on your computer.' })}
      </p>
      <ol className="mb-6 space-y-2 rtl:text-right rtl:list-inside ltr:ml-6">
        <li>{t('docs.localhost.step5.chooseDir', { defaultMessage: 'Choose a directory for your projects (e.g., ~/Documents/projects/)' })}</li>
        <li>{t('docs.localhost.step5.createFolder', { defaultMessage: 'Create a new folder if needed' })}</li>
        <li>{t('docs.localhost.step5.selectLocation', { defaultMessage: 'Select the location and confirm' })}</li>
      </ol>
      <div className="my-8 border rounded-lg overflow-hidden">
        <Image 
          src="/contribute/step-5-choose-directory.png" 
          alt={t('docs.localhost.step5.imageAlt', { defaultMessage: 'File explorer showing directory selection for cloning' })} 
          width={800}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Step 6 */}
      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.localhost.step6.title', { defaultMessage: 'Step 6: Open in Editor' })}
      </h3>
      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.localhost.step6.description', { defaultMessage: 'Open the cloned project in your code editor.' })}
      </p>
      <ol className="mb-6 space-y-2 rtl:text-right rtl:list-inside ltr:ml-6">
        <li>{t('docs.localhost.step6.waitCloning', { defaultMessage: 'Wait for the cloning process to complete' })}</li>
        <li>{t('docs.localhost.step6.clickOpen', { defaultMessage: 'Click "Open" when prompted' })}</li>
        <li>{t('docs.localhost.step6.projectReady', { defaultMessage: 'Your project is now ready for development' })}</li>
      </ol>
      <div className="my-8 border rounded-lg overflow-hidden">
        <Image 
          src="/contribute/step-6-open-project.png" 
          alt={t('docs.localhost.step6.imageAlt', { defaultMessage: 'Project successfully opened in VS Code or Cursor' })} 
          width={800}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Step 7 */}
      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.localhost.step7.title', { defaultMessage: 'Step 7: Install Dependencies' })}
      </h3>
      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.localhost.step7.description', { defaultMessage: 'Use pnpm to install all required dependencies.' })}
      </p>
      <ol className="mb-6 space-y-2 rtl:text-right rtl:list-inside ltr:ml-6">
        <li>{t('docs.localhost.step7.openTerminal', { defaultMessage: 'Open the integrated terminal (Ctrl/Cmd + ~)' })}</li>
        <li>
          {t('docs.localhost.step7.runInstall', { defaultMessage: 'Run the install command:' })}
          <div className="bg-muted rounded-md p-4 my-2">
            <pre className="text-sm overflow-auto" dir="ltr">
              <code>{t('docs.localhost.step7.installCommand', { defaultMessage: 'pnpm install' })}</code>
            </pre>
          </div>
        </li>
        <li>{t('docs.localhost.step7.waitInstall', { defaultMessage: 'Wait for installation to complete' })}</li>
      </ol>
      <div className="my-8 border rounded-lg overflow-hidden">
        <Image 
          src="/contribute/step-7-install-deps.png" 
          alt={t('docs.localhost.step7.imageAlt', { defaultMessage: 'Terminal showing pnpm install command running' })} 
          width={800}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Step 8 */}
      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.localhost.step8.title', { defaultMessage: 'Step 8: Set Up Environment' })}
      </h3>
      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.localhost.step8.description', { defaultMessage: 'Configure your environment variables for local development.' })}
      </p>
      <ol className="mb-6 space-y-2 rtl:text-right rtl:list-inside ltr:ml-6">
        <li>
          {t('docs.localhost.step8.copyEnv', { defaultMessage: 'Copy the environment template:' })}
          <div className="bg-muted rounded-md p-4 my-2">
            <pre className="text-sm overflow-auto" dir="ltr">
              <code>{t('docs.localhost.step8.copyCommand', { defaultMessage: 'cp .env.example .env.local' })}</code>
            </pre>
          </div>
        </li>
        <li>{t('docs.localhost.step8.editEnv', { defaultMessage: 'Edit .env.local with your specific values (if needed)' })}</li>
        <li>{t('docs.localhost.step8.saveFile', { defaultMessage: 'Save the file' })}</li>
      </ol>
      <div className="my-8 border rounded-lg overflow-hidden">
        <Image 
          src="/contribute/step-8-env-setup.png" 
          alt={t('docs.localhost.step8.imageAlt', { defaultMessage: 'Environment file setup and configuration' })} 
          width={800}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Step 9 */}
      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.localhost.step9.title', { defaultMessage: 'Step 9: Start Development Server' })}
      </h3>
      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.localhost.step9.description', { defaultMessage: 'Launch the development server and see your app running.' })}
      </p>
      <ol className="mb-6 space-y-2 rtl:text-right rtl:list-inside ltr:ml-6">
        <li>
          {t('docs.localhost.step9.runDev', { defaultMessage: 'Run the development command:' })}
          <div className="bg-muted rounded-md p-4 my-2">
            <pre className="text-sm overflow-auto" dir="ltr">
              <code>{t('docs.localhost.step9.devCommand', { defaultMessage: 'pnpm dev' })}</code>
            </pre>
          </div>
        </li>
        <li>{t('docs.localhost.step9.waitServer', { defaultMessage: 'Wait for the server to start' })}</li>
        <li>{t('docs.localhost.step9.openBrowser', { defaultMessage: 'Open your browser to http://localhost:3000' })}</li>
      </ol>
      <div className="my-8 border rounded-lg overflow-hidden">
        <Image 
          src="/contribute/step-9-dev-server.png" 
          alt={t('docs.localhost.step9.imageAlt', { defaultMessage: 'Terminal showing development server running and localhost URL' })} 
          width={800}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* Step 10 */}
      <h3 className="text-xl font-bold mt-8 mb-4 rtl:text-right">
        {t('docs.localhost.step10.title', { defaultMessage: 'Step 10: Verify Installation' })}
      </h3>
      <p className="mb-4 rtl:text-right rtl:leading-loose">
        {t('docs.localhost.step10.description', { defaultMessage: 'Confirm everything is working correctly.' })}
      </p>
      <ol className="mb-6 space-y-2 rtl:text-right rtl:list-inside ltr:ml-6">
        <li>{t('docs.localhost.step10.checkWebsite', { defaultMessage: 'Check the website loads properly in your browser' })}</li>
        <li>{t('docs.localhost.step10.verifyReload', { defaultMessage: 'Verify hot reload by making a small change' })}</li>
        <li>{t('docs.localhost.step10.ensureNoErrors', { defaultMessage: 'Ensure no console errors are present' })}</li>
      </ol>
      <div className="my-8 border rounded-lg overflow-hidden">
        <Image 
          src="/contribute/step-10-verify.png" 
          alt={t('docs.localhost.step10.imageAlt', { defaultMessage: 'Browser showing the running application at localhost:3000' })} 
          width={800}
          height={400}
          className="w-full h-auto"
        />
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.localhost.firstContribution.title', { defaultMessage: 'Next Steps: Making Your First Contribution' })}
      </h2>

      <p className="mb-6 rtl:text-right rtl:leading-loose">
        {t('docs.localhost.firstContribution.description', { defaultMessage: 'Now that your local environment is set up, you\'re ready to contribute!' })}
      </p>

      <h4 className="text-lg font-semibold mt-6 mb-2 rtl:text-right">
        {t('docs.localhost.firstContribution.createBranch.title', { defaultMessage: 'Create a Feature Branch' })}
      </h4>
      <div className="bg-muted rounded-md p-4 my-4">
        <pre className="text-sm overflow-auto" dir="ltr">
          <code>{t('docs.localhost.firstContribution.createBranch.command', { defaultMessage: 'git checkout -b feature/your-feature-name' })}</code>
        </pre>
      </div>

      <h4 className="text-lg font-semibold mt-6 mb-2 rtl:text-right">
        {t('docs.localhost.firstContribution.makeChanges.title', { defaultMessage: 'Make Your Changes' })}
      </h4>
      <ol className="mb-6 space-y-2 rtl:text-right rtl:list-inside ltr:ml-6">
        <li>
          <strong>{t('docs.localhost.firstContribution.makeChanges.followPatterns', { defaultMessage: 'Follow our coding patterns' })}</strong>
          {' - '}
          <Link href="/docs/pattern">{t('docs.localhost.firstContribution.makeChanges.checkPatterns', { defaultMessage: 'Check /docs/pattern' })}</Link>
        </li>
        <li>
          <strong>{t('docs.localhost.firstContribution.makeChanges.useComponents', { defaultMessage: 'Use our components' })}</strong>
          {' - '}
          {t('docs.localhost.firstContribution.makeChanges.browseComponents', { defaultMessage: 'Browse src/components/ui/ for reusable components' })}
        </li>
        <li>
          <strong>{t('docs.localhost.firstContribution.makeChanges.testLocally', { defaultMessage: 'Test locally' })}</strong>
          {' - '}
          {t('docs.localhost.firstContribution.makeChanges.ensureWorking', { defaultMessage: 'Ensure your changes work properly' })}
        </li>
      </ol>

      <h4 className="text-lg font-semibold mt-6 mb-2 rtl:text-right">
        {t('docs.localhost.firstContribution.testChanges.title', { defaultMessage: 'Test Your Changes' })}
      </h4>
      <div className="bg-muted rounded-md p-4 my-4">
        <pre className="text-sm overflow-auto" dir="ltr">
          <code>{t('docs.localhost.firstContribution.testChanges.commands', { defaultMessage: '# Build the project\npnpm build\n\n# Run linting\npnpm lint\n\n# Type checking (if available)\npnpm type-check' })}</code>
        </pre>
      </div>

      <h4 className="text-lg font-semibold mt-6 mb-2 rtl:text-right">
        {t('docs.localhost.firstContribution.commitPush.title', { defaultMessage: 'Commit and Push' })}
      </h4>
      <div className="bg-muted rounded-md p-4 my-4">
        <pre className="text-sm overflow-auto" dir="ltr">
          <code>{t('docs.localhost.firstContribution.commitPush.commands', { defaultMessage: '# Stage your changes\ngit add .\n\n# Commit with conventional format\ngit commit -m "feat: add new feature description"\n\n# Push to your fork\ngit push origin feature/your-feature-name' })}</code>
        </pre>
      </div>

      <h4 className="text-lg font-semibold mt-6 mb-2 rtl:text-right">
        {t('docs.localhost.firstContribution.createPR.title', { defaultMessage: 'Create a Pull Request' })}
      </h4>
      <ol className="mb-6 space-y-2 rtl:text-right rtl:list-inside ltr:ml-6">
        <li>{t('docs.localhost.firstContribution.createPR.goToFork', { defaultMessage: 'Go to your fork on GitHub' })}</li>
        <li>{t('docs.localhost.firstContribution.createPR.clickCompare', { defaultMessage: 'Click "Compare & pull request"' })}</li>
        <li>{t('docs.localhost.firstContribution.createPR.fillTemplate', { defaultMessage: 'Fill out the PR template' })}</li>
        <li>{t('docs.localhost.firstContribution.createPR.submit', { defaultMessage: 'Submit for review' })}</li>
      </ol>

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.localhost.commandsReference.title', { defaultMessage: 'Common Commands Reference' })}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.localhost.commandsReference.development.title', { defaultMessage: 'Development' })}
          </h4>
          <div className="text-sm text-muted-foreground space-y-1 rtl:text-right">
            <div>
              <code className="bg-muted px-1 rounded" dir="ltr">pnpm dev</code>
              {' - '}
              {t('docs.localhost.commandsReference.development.devServer', { defaultMessage: 'Start development server' })}
            </div>
            <div>
              <code className="bg-muted px-1 rounded" dir="ltr">pnpm build</code>
              {' - '}
              {t('docs.localhost.commandsReference.development.build', { defaultMessage: 'Build for production' })}
            </div>
            <div>
              <code className="bg-muted px-1 rounded" dir="ltr">pnpm start</code>
              {' - '}
              {t('docs.localhost.commandsReference.development.start', { defaultMessage: 'Run production build' })}
            </div>
          </div>
        </div>
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.localhost.commandsReference.quality.title', { defaultMessage: 'Quality Checks' })}
          </h4>
          <div className="text-sm text-muted-foreground space-y-1 rtl:text-right">
            <div>
              <code className="bg-muted px-1 rounded" dir="ltr">pnpm lint</code>
              {' - '}
              {t('docs.localhost.commandsReference.quality.lint', { defaultMessage: 'Run ESLint' })}
            </div>
            <div>
              <code className="bg-muted px-1 rounded" dir="ltr">pnpm format</code>
              {' - '}
              {t('docs.localhost.commandsReference.quality.format', { defaultMessage: 'Format code' })}
            </div>
            <div>
              <code className="bg-muted px-1 rounded" dir="ltr">pnpm type-check</code>
              {' - '}
              {t('docs.localhost.commandsReference.quality.typeCheck', { defaultMessage: 'Check TypeScript' })}
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.localhost.troubleshooting.title', { defaultMessage: 'Troubleshooting' })}
      </h2>

      <h4 className="text-lg font-semibold mt-6 mb-2 rtl:text-right">
        {t('docs.localhost.troubleshooting.commonIssues.title', { defaultMessage: 'Common Issues' })}
      </h4>

      <p className="font-semibold mt-4 mb-1 rtl:text-right">
        {t('docs.localhost.troubleshooting.commonIssues.portIssue', { defaultMessage: 'Port already in use?' })}
      </p>
      <div className="bg-muted rounded-md p-4 my-2">
        <pre className="text-sm overflow-auto" dir="ltr">
          <code>{t('docs.localhost.troubleshooting.commonIssues.portSolution', { defaultMessage: '# Kill process on port 3000\nnpx kill-port 3000\n# Or use a different port\npnpm dev -- --port 3001' })}</code>
        </pre>
      </div>

      <p className="font-semibold mt-4 mb-1 rtl:text-right">
        {t('docs.localhost.troubleshooting.commonIssues.nodeIssue', { defaultMessage: 'Node modules issues?' })}
      </p>
      <div className="bg-muted rounded-md p-4 my-2">
        <pre className="text-sm overflow-auto" dir="ltr">
          <code>{t('docs.localhost.troubleshooting.commonIssues.nodeSolution', { defaultMessage: '# Clean and reinstall\nrm -rf node_modules pnpm-lock.yaml\npnpm install' })}</code>
        </pre>
      </div>

      <p className="font-semibold mt-4 mb-1 rtl:text-right">
        {t('docs.localhost.troubleshooting.commonIssues.envIssue', { defaultMessage: 'Environment variables not working?' })}
      </p>
      <ul className="mb-6 space-y-2 rtl:text-right rtl:list-inside ltr:ml-6 list-disc">
        <li>{t('docs.localhost.troubleshooting.commonIssues.envCheck', { defaultMessage: 'Check .env.local file exists' })}</li>
        <li>{t('docs.localhost.troubleshooting.commonIssues.envRestart', { defaultMessage: 'Restart the development server' })}</li>
        <li>{t('docs.localhost.troubleshooting.commonIssues.envPrefix', { defaultMessage: 'Ensure variables start with NEXT_PUBLIC_ for client-side' })}</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-6 rtl:text-right">
        {t('docs.localhost.gettingHelp.title', { defaultMessage: 'Getting Help' })}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.localhost.gettingHelp.communitySupport.title', { defaultMessage: 'Community Support' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right rtl:leading-loose">
            {t('docs.localhost.gettingHelp.communitySupport.description', { defaultMessage: 'Join our Discord server for real-time help and connect with other contributors.' })}
          </div>
        </div>
        <div className="p-6 border rounded-lg">
          <h4 className="font-semibold mb-2 rtl:text-right">
            {t('docs.localhost.gettingHelp.documentation.title', { defaultMessage: 'Documentation' })}
          </h4>
          <div className="text-sm text-muted-foreground rtl:text-right rtl:leading-loose">
            {t('docs.localhost.gettingHelp.documentation.description', { defaultMessage: 'Check our' })}
            {' '}
            <Link href="/docs/get-started" className="underline hover:text-primary">
              {t('docs.localhost.gettingHelp.documentation.getStarted', { defaultMessage: 'Get Started guide' })}
            </Link>
            {' '}
            {t('docs.localhost.gettingHelp.documentation.and', { defaultMessage: 'and' })}
            {' '}
            <Link href="/docs/contribute" className="underline hover:text-primary">
              {t('docs.localhost.gettingHelp.documentation.contributing', { defaultMessage: 'Contributing guidelines' })}
            </Link>
            .
          </div>
        </div>
      </div>

      <hr className="my-8 border-t border-border" />

      <p className="mt-8 mb-6 font-bold rtl:text-right">
        🎉 {t('docs.localhost.conclusion', { defaultMessage: 'Congratulations! You now have a fully functional local development environment. Start exploring the codebase, pick an issue that interests you, and make your first contribution to Databayt!' })}
      </p>
    </div>
  );
}
