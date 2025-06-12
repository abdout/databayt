import { RepositoryInventory, Repository } from './repo'

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

// ---------------- heuristics ----------------
export const scoreJob = (description: string): Score => {
  const text = description.toLowerCase()
  let score = 0
  const breakdown: ScoreBreakdown = {
    technical: 0,
    business: 0,
    scope: 0,
    client: 0,
    budget: 0,
  }

  // Technical Alignment (30%)
  if (/\b(react|next\.js|nextjs)\b/.test(text)) breakdown.technical += 3
  if (/typescript|\bts\b/.test(text)) breakdown.technical += 2.7
  if (/automation|automate/.test(text)) breakdown.technical += 3
  if (/component|ui library/.test(text)) breakdown.technical += 2.5
  if (/healthcare|education|management/.test(text)) breakdown.technical += 2.5

  // Business Value (25%)
  if (/time\-saving|efficiency|optimi[sz]e/.test(text)) breakdown.business += 2.5
  if (/process|workflow/.test(text)) breakdown.business += 2.25
  if (/enterprise|saas/.test(text)) breakdown.business += 2
  if (/integration|api/.test(text)) breakdown.business += 2

  // Project Size & Scope (20%)
  if (/2-8 weeks|medium term/.test(text)) breakdown.scope += 2
  if (/long-term|ongoing/.test(text)) breakdown.scope += 1.8
  if (/sprint|agile/.test(text)) breakdown.scope += 1.4

  // Client Profile (15%)
  if (/tech|startup|software/.test(text)) breakdown.client += 1.35
  if (/clear requirements|detailed spec/.test(text)) breakdown.client += 1.2
  if (/innovation|modern/.test(text)) breakdown.client += 1.5

  // Budget (10%)
  if (/\$(50|60|70|80|90)/.test(text)) breakdown.budget += 1
  if (/\$100|premium/.test(text)) breakdown.budget += 0.9
  if (/\$(5000|10000)|fixed price/.test(text)) breakdown.budget += 0.8

  score = Object.values(breakdown).reduce((s, v) => s + v, 0)

  return {
    total: Math.min(score, 10),
    breakdown,
    viable: score >= 7,
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
    background: '',
  }

  lines.forEach((line) => {
    const lower = line.toLowerCase()
    if (lower.startsWith('title:') || lower.startsWith('job:')) details.title = line.split(':')[1]?.trim() || ''
    if (lower.startsWith('budget:') || lower.startsWith('rate:')) details.budget = line.split(':')[1]?.trim() || ''
    if (lower.startsWith('timeline:') || lower.startsWith('duration:')) details.timeline = line.split(':')[1]?.trim() || ''
    if (/required|need/.test(lower)) details.requirements.push(line.trim())
  })

  return details
}

export const findRelevantRepos = (
  description: string,
  repositories: RepositoryInventory,
): (Repository & { relevanceScore: number })[] => {
  const text = description.toLowerCase()
  const all = [...repositories.active, ...repositories.underway]

  return all
    .map((repo) => {
      let relevanceScore = 0
      repo.tech.forEach((tech) => {
        if (text.includes(tech.toLowerCase())) relevanceScore += repo.status === 'active' ? 3 : 2
      })
      repo.industries?.forEach((ind) => {
        if (text.includes(ind.toLowerCase())) relevanceScore += repo.status === 'active' ? 2 : 1
      })
      return { ...repo, relevanceScore }
    })
    .filter((r) => r.relevanceScore > 0)
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, 5)
}

export const analyzeJobDescription = (
  description: string,
  repositories: RepositoryInventory,
): JobAnalysis => {
  const score = scoreJob(description)
  const details = extractJobDetails(description)
  const relevantRepos = findRelevantRepos(description, repositories)
  return {
    score,
    details,
    relevantRepos,
  }
} 