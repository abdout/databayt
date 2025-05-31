'use client';
import { Button } from '@/components/ui/button';
import React from 'react';

// Array of colors representing different statuses
const statusColors = ['bg-gray-400', 'bg-green-400', 'bg-yellow-400', 'bg-red-400'];

const roadmapItems = [
  {
    title: 'CRUD Operations',
    description: 'Allow admins to create, read, update, and delete upcoming events',
    githubIssue: 'https://github.com/your-repo/issues/1'
  },
  {
    title: 'Share Feature',
    description: 'Allow users to share papers, articles, and videos on social media platforms',
    githubIssue: 'https://github.com/your-repo/issues/2'
  },
  {
    title: 'Comment Feature',
    description: 'Allow users to leave comments on papers, articles, and videos',
    githubIssue: 'https://github.com/your-repo/issues/3'
  },
  {
    title: 'Edit Feature',
    description: 'Allow users to edit papers, articles, and videos',
    githubIssue: 'https://github.com/your-repo/issues/4'
  },
  {
    title: 'function Newsletter',
    description: 'Allow users to subscribe to a newsletter and receive updates on new content',
    githubIssue: 'https://github.com/your-repo/issues/5'
  },
  {
    title: 'Feed Real Data',
    description: 'Use real data to populate the website and platform',
    githubIssue: 'https://github.com/your-repo/issues/6'
  },
  {
    title: 'Upgrade to Next.js 15',
    description: 'Upgrade the website and platform to use the latest versions of Next.js and React',
    githubIssue: 'https://github.com/your-repo/issues/7'
  },
  {
    title: 'Upgrade to React 19',
    description: 'Upgrade the website and platform to use the latest versions of Next.js and React',
    githubIssue: 'https://github.com/your-repo/issues/7'
  },
  {
    title: 'Upgrade Dependencies',
    description: 'Upgrade all dependencies to the latest versions',
    githubIssue: 'https://github.com/your-repo/issues/8'
  },
  {
    title: 'Confirmation Email',
    description: 'Fix issues with the sign-up process',
    githubIssue: 'https://github.com/your-repo/issues/9'
  },
  {
    title: 'Authorization',
    description: 'Fix issues with the sign-up process',
    githubIssue: 'https://github.com/your-repo/issues/9'
  },
  {
    title: 'Member Account',
    description: 'Allow each member to create an account',
    githubIssue: 'https://github.com/your-repo/issues/10'
  },
  {
    title: 'Membership Management',
    description: 'Allow administrators to manage memberships',
    githubIssue: 'https://github.com/your-repo/issues/11'
  },
  {
    title: 'Project Management',
    description: 'Allow users to manage projects',
    githubIssue: 'https://github.com/your-repo/issues/12'
  },
  {
    title: 'Task Management',
    description: 'Allow users to manage tasks',
    githubIssue: 'https://github.com/your-repo/issues/13'
  },
  {
    title: 'Search Feature ',
    description: 'Allow users to search for content',
    githubIssue: 'https://github.com/your-repo/issues/14'
  },
  {
    title: 'Tagging System',
    description: 'Allow users to tag content',
    githubIssue: 'https://github.com/your-repo/issues/15'
  },
  {
    title: 'Cloud Tag',
    description: 'Allow users to tag content',
    githubIssue: 'https://github.com/your-repo/issues/15'
  },
  {
    title: 'Finance Management',
    description: 'Allow users to manage projects',
    githubIssue: 'https://github.com/your-repo/issues/12'
  },
  {
    title: 'Task Management',
    description: 'Allow users to manage tasks',
    githubIssue: 'https://github.com/your-repo/issues/13'
  },
  {
    title: 'Notification Feature ',
    description: 'Allow users to search for content',
    githubIssue: 'https://github.com/your-repo/issues/14'
  },
  {
    title: 'Memeber Profile',
    description: 'Allow users to tag content',
    githubIssue: 'https://github.com/your-repo/issues/15'
  },
  {
    title: 'Automate Posting ',
    description: 'Allow users to tag content',
    githubIssue: 'https://github.com/your-repo/issues/15'
  },
  {
    title: 'Automate Whatsapp',
    description: 'Allow users to tag content',
    githubIssue: 'https://github.com/your-repo/issues/15'
  },
  {
    title: 'Node vs Bun',
    description: 'Allow users to tag content',
    githubIssue: 'https://github.com/your-repo/issues/15'
  },
  {
    title: 'Generate Pdf',
    description: 'Allow users to tag content',
    githubIssue: 'https://github.com/your-repo/issues/15'
  },
  {
    title: 'Download Pdf',
    description: 'Allow users to tag content',
    githubIssue: 'https://github.com/your-repo/issues/15'
  },
  {
    title: 'Send Pdf',
    description: 'Allow users to tag content',
    githubIssue: 'https://github.com/your-repo/issues/15'
  },
  {
    title: '',
    description: 'Allow users to tag content',
    githubIssue: 'https://github.com/your-repo/issues/15'
  },
];

const Roadmap = () => {
  return (
    <div className='space-y-1 pt-4 '>
      <h1>Roadmap</h1>
      <div className='flex gap-4  pt-2 pb-6'>
        <Button className='border border-black' variant={'outline'}>Website 0.1</Button>
        <Button className='border border-black' variant={'outline'}>Platform Alpha</Button>
      </div>

      <ul>
        {roadmapItems.map((item, index) => {
          // Randomly select a status color for the circle
          const randomStatusColor = statusColors[Math.floor(Math.random() * statusColors.length)];

          return (
            <li key={index} className='flex gap-2 items-center'>
              {/* Circle with random color */}
              <div className={`w-2 h-2 rounded-full ${randomStatusColor}`}></div>
              {/* Link wraps the entire title */}
              <a href={item.githubIssue} target='_blank' rel='noopener noreferrer' className='text-lg font-light flex flex-col gap-4'>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Roadmap;
