import { JobDetails, Score } from './score'
import { Repository } from './repo'

export function generateProposal(details: JobDetails, repos: (Repository & {relevanceScore:number})[], score: Score): string {
  const intro = `Hi ${details.client || 'there'},\n\nI'm excited about the opportunity to work on **${details.title || 'your project'}**. With a relevance score of **${score.total.toFixed(1)}/10**, this project is a strong match for my expertise.`

  const experience = repos.length
    ? `\n### Relevant Experience\n${repos.map(r=>`• **${r.name}** – ${r.description}`).join('\n')}`
    : ''

  const plan = `\n### Proposed Approach\n1. **Architecture & Setup** – establish a modern, scalable Next.js 15 / React 19 code-base.\n2. **Core Features** – implement key requirements iteratively.\n3. **Testing & QA** – automated test-suite + manual QA.\n4. **Launch & Handover** – production deploy + documentation.`

  const closing = `\nLooking forward to discussing how we can bring this to life.\n\nBest regards,\nDatabayt – Automate the boring.`

  return `${intro}${experience}${plan}${closing}`
} 