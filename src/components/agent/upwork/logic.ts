// utils and logic for Upwork agent analysis, scoring and proposal generation

// Type definitions reused from the UpworkAgent page
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

export interface ScoreBreakdown {
  technical: number
  business: number
  scope: number
  client: number
  budget: number
}

export interface Score {
  total: number
  breakdown: ScoreBreakdown
  viable: boolean
}

export interface JobDetails {
  title: string
  client: string
  industry: string
  budget: string
  timeline: string
  requirements: string[]
  background: string
}

export interface JobAnalysis {
  score: Score
  details: JobDetails
  relevantRepos: (Repository & { relevanceScore: number })[]
}

// Sample repositories (can be replaced by real data injected via props)
export const DEFAULT_REPOSITORIES: {
  active: Repository[]
  underway: Repository[]
} = {
  active: [
    {
      name: 'Databayt',
      status: 'active',
      points: 10,
      tech: ['Next.js 15', 'React 19', 'TypeScript', 'Automation'],
      description:
        'Business automation platform with comprehensive documentation architecture',
      liveUrl: 'https://databayt.org',
      repoUrl: 'https://github.com/abdout/databayt',
      industries: ['General', 'Automation', 'SaaS']
    },
    {
      name: 'Health Platform',
      status: 'active',
      points: 10,
      tech: ['Healthcare', 'HIPAA', 'Patient Management', 'Telemedicine'],
      description: 'HIPAA-compliant healthcare management system',
      liveUrl: 'https://health-underway.vercel.app',
      repoUrl: 'https://github.com/abdout/health-underway',
      industries: ['Healthcare', 'Medical']
    },
    {
      name: 'Education System',
      status: 'active',
      points: 10,
      tech: ['Education', 'Student Management', 'Attendance', 'Grades'],
      description: 'Comprehensive school management platform',
      liveUrl: 'https://ed.databayt.org',
      repoUrl: 'https://github.com/abdout/hogwarts',
      industries: ['Education', 'Schools']
    },
    {
      name: 'Component Library',
      status: 'active',
      points: 9,
      tech: ['shadcn/ui', 'Components', 'UI/UX', 'Design System'],
      description: 'Atomic design component library with playground',
      liveUrl: 'https://codebase-url.com',
      repoUrl: 'https://github.com/abdout/codebase',
      industries: ['Web Design', 'Frontend']
    }
  ],
  underway: [
    {
      name: 'Real Estate Platform',
      status: 'underway',
      points: 7,
      tech: ['Real Estate', 'Property Management', 'Virtual Tours'],
      description: 'Property platform with listing templates and management',
      industries: ['Real Estate', 'Property']
    },
    {
      name: 'Food Platform',
      status: 'underway',
      points: 7,
      tech: ['Restaurant', 'POS', 'Kitchen Management', 'Orders'],
      description: 'Restaurant management with POS and kitchen systems',
      industries: ['Food', 'Restaurant']
    }
  ]
}

// ---------------- Logic helpers ----------------

export const scoreJob = (description: string): Score => {
  const text = description.toLowerCase()
  let score = 0
  const breakdown: ScoreBreakdown = {
    technical: 0,
    business: 0,
    scope: 0,
    client: 0,
    budget: 0
  }

  // Technical Alignment (30%)
  if (text.includes('react') || text.includes('next.js') || text.includes('nextjs')) breakdown.technical += 3
  if (text.includes('typescript') || text.includes('ts')) breakdown.technical += 2.7
  if (text.includes('automation') || text.includes('automate')) breakdown.technical += 3
  if (text.includes('component') || text.includes('ui library')) breakdown.technical += 2.5
  if (text.includes('healthcare') || text.includes('education') || text.includes('management')) breakdown.technical += 2.5

  // Business Value (25%)
  if (text.includes('time-saving') || text.includes('efficiency') || text.includes('optimize')) breakdown.business += 2.5
  if (text.includes('process') || text.includes('workflow')) breakdown.business += 2.25
  if (text.includes('enterprise') || text.includes('saas')) breakdown.business += 2
  if (text.includes('integration') || text.includes('api')) breakdown.business += 2

  // Project Size & Scope (20%)
  if (text.includes('2-8 weeks') || text.includes('medium term')) breakdown.scope += 2
  if (text.includes('long-term') || text.includes('ongoing')) breakdown.scope += 1.8
  if (text.includes('sprint') || text.includes('agile')) breakdown.scope += 1.4

  // Client Profile (15%)
  if (text.includes('tech') || text.includes('startup') || text.includes('software')) breakdown.client += 1.35
  if (text.includes('clear requirements') || text.includes('detailed spec')) breakdown.client += 1.2
  if (text.includes('innovation') || text.includes('modern')) breakdown.client += 1.5

  // Budget Range (10%)
  if (text.includes('$50') || text.includes('$60') || text.includes('$70') || text.includes('$80') || text.includes('$90')) breakdown.budget += 1
  if (text.includes('$100') || text.includes('premium')) breakdown.budget += 0.9
  if (text.includes('$5000') || text.includes('$10000') || text.includes('fixed price')) breakdown.budget += 0.8

  score = Object.values(breakdown).reduce((sum, val) => sum + val, 0)

  return {
    total: Math.min(score, 10),
    breakdown,
    viable: score >= 7
  }
}

export const extractJobDetails = (description: string): JobDetails => {
  const lines = description.split('\n')
  const details: JobDetails = {
    title: '',
    client: '',
    industry: '',
    budget: '',
    timeline: '',
    requirements: [],
    background: ''
  }

  lines.forEach((line) => {
    const lower = line.toLowerCase()
    if (lower.includes('title:') || lower.includes('job:')) {
      details.title = line.split(':')[1]?.trim() || ''
    }
    if (lower.includes('budget:') || lower.includes('rate:')) {
      details.budget = line.split(':')[1]?.trim() || ''
    }
    if (lower.includes('timeline:') || lower.includes('duration:')) {
      details.timeline = line.split(':')[1]?.trim() || ''
    }
    if (lower.includes('required') || lower.includes('need')) {
      details.requirements.push(line.trim())
    }
    // Add more sophisticated parsing as needed
  })

  return details
}

export const findRelevantRepos = (
  description: string,
  repositories: { active: Repository[]; underway: Repository[] }
): (Repository & { relevanceScore: number })[] => {
  const text = description.toLowerCase()
  const allRepos = [...repositories.active, ...repositories.underway]

  const relevant = allRepos
    .map((repo) => {
      let score = 0
      repo.tech.forEach((tech) => {
        if (text.includes(tech.toLowerCase())) score += 1
      })
      return { ...repo, relevanceScore: score }
    })
    .filter((r) => r.relevanceScore > 0)
    .sort((a, b) => b.relevanceScore - a.relevanceScore)

  return relevant.slice(0, 5)
}

export const generateProposal = (
  details: JobDetails,
  relevantRepos: (Repository & { relevanceScore: number })[],
  score: Score
): string => {
  const intro = `Hello! I\'m excited about the opportunity to work on "${details.title}". With a score of ${score.total}/10, this project aligns well with my expertise.`
  const repoLines = relevantRepos
    .map((repo) => `• ${repo.name} (${repo.relevanceScore} pts)`)
    .join('\n')
  const closing = `I\'d love to discuss how we can achieve your goals efficiently and effectively.`

  return `${intro}\n\nRelevant experience:\n${repoLines}\n\n${closing}`
}

export const analyzeJobDescription = (
  description: string,
  repositories: { active: Repository[]; underway: Repository[] } = DEFAULT_REPOSITORIES
): JobAnalysis => {
  const score = scoreJob(description)
  const details = extractJobDetails(description)
  const relevantRepos = findRelevantRepos(description, repositories)
  return {
    score,
    details,
    relevantRepos
  }
} 