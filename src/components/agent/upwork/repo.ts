// Repository types and utilities for the Upwork agent

export interface Repository {
  name: string
  status: 'active' | 'underway'
  points: number
  tech: string[]
  description: string
  liveUrl?: string
  repoUrl?: string
  industries?: string[]
  relevanceScore?: number
}

export interface RepositoryInventory {
  active: Repository[]
  underway: Repository[]
}

// TODO: Replace the static list with a real code-base scanner / API call.
export const DEFAULT_REPOSITORIES: RepositoryInventory = {
  active: [
    {
      name: 'Databayt',
      status: 'active',
      points: 10,
      tech: ['Next.js 15', 'React 19', 'TypeScript', 'Automation'],
      description: 'Business automation platform with comprehensive documentation architecture',
      liveUrl: 'https://databayt.org',
      repoUrl: 'https://github.com/abdout/databayt',
      industries: ['General', 'Automation', 'SaaS'],
    },
    {
      name: 'Health Platform',
      status: 'active',
      points: 10,
      tech: ['Healthcare', 'HIPAA', 'Patient Management', 'Telemedicine'],
      description: 'HIPAA-compliant healthcare management system',
      liveUrl: 'https://health-underway.vercel.app',
      repoUrl: 'https://github.com/abdout/health-underway',
      industries: ['Healthcare', 'Medical'],
    },
    {
      name: 'Education System',
      status: 'active',
      points: 10,
      tech: ['Education', 'Student Management', 'Attendance', 'Grades'],
      description: 'Comprehensive school management platform',
      liveUrl: 'https://ed.databayt.org',
      repoUrl: 'https://github.com/abdout/hogwarts',
      industries: ['Education', 'Schools'],
    },
    {
      name: 'Component Library',
      status: 'active',
      points: 9,
      tech: ['shadcn/ui', 'Components', 'UI/UX', 'Design System'],
      description: 'Atomic design component library with playground',
      liveUrl: 'https://codebase-url.com',
      repoUrl: 'https://github.com/abdout/codebase',
      industries: ['Web Design', 'Frontend'],
    },
  ],
  underway: [
    {
      name: 'Real Estate Platform',
      status: 'underway',
      points: 7,
      tech: ['Real Estate', 'Property Management', 'Virtual Tours'],
      description: 'Property platform with listing templates and management',
      industries: ['Real Estate', 'Property'],
    },
    {
      name: 'Food Platform',
      status: 'underway',
      points: 7,
      tech: ['Restaurant', 'POS', 'Kitchen Management', 'Orders'],
      description: 'Restaurant management with POS and kitchen systems',
      industries: ['Food', 'Restaurant'],
    },
  ],
}

// Placeholder for future real-time repository watcher (e.g. scanning the repo file-system).
export function watchRepositories(callback: (inventory: RepositoryInventory) => void) {
  // In a real implementation, you might listen to file-system changes or an internal API.
  // For now we just invoke the callback immediately with the static list.
  callback(DEFAULT_REPOSITORIES)
} 