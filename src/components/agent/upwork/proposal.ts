import { JobDetails, Score } from './score'
import { Repository } from './repo'

export function generateProposal(details: JobDetails, repos: (Repository & {relevanceScore:number})[], score: Score): string {
  const clientName = details.client || 'there'
  const projectTitle = details.title || 'your project'
  const scoreText = score.total.toFixed(1)
  
  const intro = `Hi ${clientName},

I'm excited about the opportunity to work on **${projectTitle}**. With a relevance score of **${scoreText}/10**, this project is a strong match for my expertise.`

  const experience = repos.length
    ? `

### Relevant Experience
${repos.map(r=>`• **${r.name}** – ${r.description}`).join('\n')}`
    : ''

  const plan = `

### Proposed Approach
1. **Architecture & Setup** – establish a modern, scalable Next.js 15 / React 19 codebase
2. **Core Features** – implement key requirements iteratively  
3. **Testing & QA** – automated test suite + manual QA
4. **Launch & Handover** – production deployment + documentation`

  const closing = `

Looking forward to discussing how we can bring this to life.

Best regards,  
**Databayt** – *Automate the boring.*`

  return `${intro}${experience}${plan}${closing}`
} 