import { JobDetails, Score } from './score'
import { Repository } from './repo'

export function buildProposalPrompt(details: JobDetails, score: Score, repos: (Repository & {relevanceScore:number})[]): string {
  const repoLines = repos.map(r=>`- ${r.name} (${r.relevanceScore})`).join('\n')
  return `You are a senior full-stack engineer preparing a proposal for an Upwork job.\n\nJob title: ${details.title}\nBudget: ${details.budget}\nTimeline: ${details.timeline}\n\nOverall heuristic score: ${score.total}/10 (viable: ${score.viable}).\n\nRelevant past projects:\n${repoLines}\n\nWrite a concise yet persuasive proposal (max 350 words) highlighting:\n1. Precise understanding of the problem.\n2. How your past work maps to the requirements.\n3. A high-level execution plan & timeline.\n4. A clear call-to-action to schedule a kickoff call.\n\nReturn the proposal in markdown format.`
} 