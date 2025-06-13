'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertCircle, CheckCircle, Github, ExternalLink, Copy, RefreshCw, Zap } from 'lucide-react';

// --- Type Definitions ---
interface Repository {
  name: string;
  status: 'active' | 'underway';
  points: number;
  tech: string[];
  description: string;
  liveUrl?: string;
  repoUrl?: string;
  industries?: string[];
  relevanceScore?: number;
}

interface ScoreBreakdown {
  technical: number;
  business: number;
  scope: number;
  client: number;
  budget: number;
}

interface Score {
  total: number;
  breakdown: ScoreBreakdown;
  viable: boolean;
}

interface JobDetails {
  title: string;
  client: string;
  industry: string;
  budget: string;
  timeline: string;
  requirements: string[];
  background: string;
}

interface JobAnalysis {
  score: Score;
  details: JobDetails;
  relevantRepos: (Repository & { relevanceScore: number })[];
}
// --- End Type Definitions ---

const UpworkAgent = () => {
  // Repository Management State
  const [repositories, setRepositories] = useState<{ active: Repository[]; underway: Repository[] }>({
    active: [
      {
        name: 'Databayt',
        status: 'active',
        points: 10,
        tech: ['Next.js 15', 'React 19', 'TypeScript', 'Automation'],
        description: 'Business automation platform with comprehensive documentation architecture',
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
  });

  const [jobDescription, setJobDescription] = useState('');
  const [jobAnalysis, setJobAnalysis] = useState<JobAnalysis | null>(null);
  const [proposal, setProposal] = useState('');
  const [loading, setLoading] = useState(false);
  const [aiProvider, setAiProvider] = useState<'openai' | 'gemini'>('gemini');

  // Job Scoring Function
  const scoreJob = (description: string): Score => {
    const text = description.toLowerCase();
    let score = 0;
    let breakdown: ScoreBreakdown = {
      technical: 0,
      business: 0,
      scope: 0,
      client: 0,
      budget: 0
    };

    // Technical Alignment (30%)
    if (text.includes('react') || text.includes('next.js') || text.includes('nextjs')) breakdown.technical += 3;
    if (text.includes('typescript') || text.includes('ts')) breakdown.technical += 2.7;
    if (text.includes('automation') || text.includes('automate')) breakdown.technical += 3;
    if (text.includes('component') || text.includes('ui library')) breakdown.technical += 2.5;
    if (text.includes('healthcare') || text.includes('education') || text.includes('management')) breakdown.technical += 2.5;

    // Business Value (25%)
    if (text.includes('time-saving') || text.includes('efficiency') || text.includes('optimize')) breakdown.business += 2.5;
    if (text.includes('process') || text.includes('workflow')) breakdown.business += 2.25;
    if (text.includes('enterprise') || text.includes('saas')) breakdown.business += 2;
    if (text.includes('integration') || text.includes('api')) breakdown.business += 2;

    // Project Size & Scope (20%)
    if (text.includes('2-8 weeks') || text.includes('medium term')) breakdown.scope += 2;
    if (text.includes('long-term') || text.includes('ongoing')) breakdown.scope += 1.8;
    if (text.includes('sprint') || text.includes('agile')) breakdown.scope += 1.4;

    // Client Profile (15%)
    if (text.includes('tech') || text.includes('startup') || text.includes('software')) breakdown.client += 1.35;
    if (text.includes('clear requirements') || text.includes('detailed spec')) breakdown.client += 1.2;
    if (text.includes('innovation') || text.includes('modern')) breakdown.client += 1.5;

    // Budget Range (10%)
    if (text.includes('$50') || text.includes('$60') || text.includes('$70') || text.includes('$80') || text.includes('$90')) breakdown.budget += 1;
    if (text.includes('$100') || text.includes('premium')) breakdown.budget += 0.9;
    if (text.includes('$5000') || text.includes('$10000') || text.includes('fixed price')) breakdown.budget += 0.8;

    score = Object.values(breakdown).reduce((sum, val) => sum + val, 0);
    
    return {
      total: Math.min(score, 10),
      breakdown,
      viable: score >= 7
    };
  };

  // Extract Job Details from Description
  const extractJobDetails = (description: string): JobDetails => {
    const lines = description.split('\n');
    let details: JobDetails = {
      title: '',
      client: '',
      industry: '',
      budget: '',
      timeline: '',
      requirements: [],
      background: ''
    };

    // Simple extraction logic (can be enhanced with NLP)
    lines.forEach((line: string) => {
      const lower = line.toLowerCase();
      if (lower.includes('title:') || lower.includes('job:')) {
        details.title = line.split(':')[1]?.trim() || '';
      }
      if (lower.includes('budget:') || lower.includes('rate:')) {
        details.budget = line.split(':')[1]?.trim() || '';
      }
      if (lower.includes('timeline:') || lower.includes('duration:')) {
        details.timeline = line.split(':')[1]?.trim() || '';
      }
      if (lower.includes('required') || lower.includes('need')) {
        if (line.includes('React') || line.includes('Next.js') || line.includes('TypeScript')) {
          details.requirements.push(line.trim());
        }
      }
    });

    return details;
  };

  // Find Relevant Repositories
  const findRelevantRepos = (description: string, _analysis: Score): (Repository & { relevanceScore: number })[] => {
    const text = description.toLowerCase();
    const allRepos = [...repositories.active, ...repositories.underway];
    
    return allRepos
      .map((repo: Repository) => {
        let relevanceScore = 0;
        
        // Check tech stack match
        repo.tech.forEach((tech: string) => {
          if (text.includes(tech.toLowerCase())) {
            relevanceScore += repo.status === 'active' ? 3 : 2;
          }
        });
        
        // Check industry match
        repo.industries?.forEach((industry: string) => {
          if (text.includes(industry.toLowerCase())) {
            relevanceScore += repo.status === 'active' ? 2 : 1;
          }
        });
        
        return { ...repo, relevanceScore };
      })
      .filter(repo => repo.relevanceScore > 0)
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, 3);
  };

  // Generate Proposal
  const generateProposal = (
    jobDetails: JobDetails,
    relevantRepos: (Repository & { relevanceScore?: number })[],
    _score: Score
  ): string => {
    const clientName = jobDetails.client || 'there';
    const projectType = jobDetails.title || 'your project';

    const lines: string[] = [];

    lines.push(`Subject: Automation-First Solution for ${projectType} | Databayt`);
    lines.push('');
    lines.push(`Hi ${clientName},`);
    lines.push('');
    lines.push("*The Problem You're Facing:*");
    lines.push(`Based on your project description, I can see you're looking for ${projectType}. This type of challenge is exactly what we specialize in at Databayt - turning time-consuming processes into efficient, automated solutions.`);
    lines.push('');
    lines.push('*Why This Resonates With Us:*');
    lines.push('At Databayt, we live by "Automate the boring." Your requirements align perfectly with our proven expertise in building production-ready automation systems.');
    lines.push('');
    lines.push(`*Our Approach for ${projectType}:*`);
    lines.push('');
    lines.push('*Technical Solution:*');

    if (relevantRepos.length > 0) {
      lines.push('- Leveraging our proven architecture from similar projects');
      relevantRepos.forEach((repo) => {
        if (repo.liveUrl) {
          lines.push(`  - **${repo.name}**: ${repo.description} (Live: ${repo.liveUrl})`);
        } else {
          lines.push(`  - **${repo.name}**: ${repo.description} (In Development)`);
        }
      });
    }

    lines.push('');
    lines.push('*Time-Saving Impact:*');
    lines.push('- Current manual process: Estimated significant time investment');
    lines.push('- Our automated solution: Streamlined, efficient workflow');
    lines.push('- Expected improvement: 60-80% reduction in manual tasks');
    lines.push('');
    lines.push('*Deliverables & Timeline:*');

    if (jobDetails.timeline) {
      lines.push(`Based on your ${jobDetails.timeline} timeline:`);
    }

    lines.push('Week 1-2: Architecture setup, core functionality');
    lines.push('Week 3-4: Feature implementation, integration');
    lines.push('Week 5-6: Testing, optimization, deployment');
    lines.push('');
    lines.push('*Why Databayt?*');
    lines.push('- *8+ Production Systems*: Live applications serving real users');
    lines.push('- *Open-source foundation*: You own all the code');
    lines.push('- *Proven automation expertise*: HIPAA-compliant healthcare, education platforms, component libraries');
    lines.push('- *Modern, scalable architecture*: Next.js 15, React 19, TypeScript');
    lines.push('- *Transparent development process*: GitHub repos, live demos');
    lines.push('');
    lines.push('*Live Portfolio:*');
    repositories.active.slice(0, 3).forEach((repo) => {
      if (repo.liveUrl) {
        lines.push(`- ${repo.name}: ${repo.liveUrl}`);
      }
    });
    lines.push('');
    lines.push('*Next Steps:*');
    lines.push("I'd love to discuss how we can automate your workflow and save your team significant time weekly. Available for a quick call this week to show you live demos of similar solutions?");
    lines.push('');
    lines.push('Best regards,');
    lines.push('[Your Name]');
    lines.push('Databayt | Reclaim Your Time Through Automation');
    lines.push('');
    lines.push("P.S. All our solutions are production-tested. You'll see live demos before we even start talking.");

    return lines.join('\n');
  };

  // Analyze Job Function
  const analyzeJob = async () => {
    if (!jobDescription.trim()) return;

    setLoading(true);

    const fallbackLocal = () => {
      const score = scoreJob(jobDescription);
      const details = extractJobDetails(jobDescription);
      const relevant = findRelevantRepos(jobDescription, score);

      const analysis: JobAnalysis = {
        score,
        details,
        relevantRepos: relevant,
      };

      setJobAnalysis(analysis);

      if (score.viable) {
        const generatedProposal = generateProposal(details, relevant, score);
        setProposal(generatedProposal);
      }
    };

    try {
      const endpoint = aiProvider === 'openai' ? '/api/upwork/analyze' : '/api/upwork/analyze-gemini';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description: jobDescription, repositories }),
      });

      if (!res.ok) {
        fallbackLocal();
      } else {
        const data = await res.json();

        if (data.error) throw new Error(data.error);

        const analysis: JobAnalysis = {
          score: data.score,
          details: data.details,
          relevantRepos: findRelevantRepos(jobDescription, data.score),
        };

        setJobAnalysis(analysis);

        if (analysis.score.viable) {
          setProposal(data.proposal ?? generateProposal(data.details, analysis.relevantRepos, data.score));
        }
      }
    } catch (error) {
      console.error('AI analysis failed, falling back to heuristic', error);
      fallbackLocal();
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const updateRepository = (repoName: string, newStatus: 'active' | 'underway') => {
    setRepositories((prev) => {
      const updated = { ...prev };

      // Move between active and underway
      (Object.keys(updated) as Array<keyof typeof updated>).forEach((status: keyof typeof updated) => {
        updated[status] = updated[status].map((repo: Repository) =>
          repo.name === repoName
            ? { ...repo, status: newStatus, points: newStatus === 'active' ? 10 : 7 }
            : repo
        );
      });

      return updated;
    });
  };
 
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">
          <Zap className="text-blue-500" />
          Upwork AI Agent
        </h1>
        <p className="text-gray-600">Automate your Upwork job applications with intelligent proposal generation</p>
      </div>
 
      <Tabs defaultValue="repos" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="repos">Repositories</TabsTrigger>
          <TabsTrigger value="analyzer">Job Analyzer</TabsTrigger>
          <TabsTrigger value="proposal">Proposal Generator</TabsTrigger>
        </TabsList>

        <TabsContent value="repos" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" />
                  Active Repositories (Higher Priority)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {repositories.active.map((repo, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold">{repo.name}</h3>
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        {repo.points}/10
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{repo.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {repo.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {repo.liveUrl && (
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <ExternalLink className="w-4 h-4" />
                          Live
                        </Button>
                      )}
                      {repo.repoUrl && (
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Github className="w-4 h-4" />
                          Repo
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RefreshCw className="text-orange-500" />
                  Underway Repositories (Lower Priority)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {repositories.underway.map((repo, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold">{repo.name}</h3>
                      <Badge variant="outline" className="bg-orange-100 text-orange-800">
                        {repo.points}/10
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{repo.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {repo.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analyzer" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Job Description Analysis</CardTitle>
              <p className="text-sm text-gray-600">
                Paste the job description below. The AI will extract key details and score relevance.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="provider-select">AI Provider</label>
                <select
                  id="provider-select"
                  value={aiProvider}
                  onChange={(e) => setAiProvider(e.target.value as 'openai' | 'gemini')}
                  className="w-full rounded-md border px-3 py-2 text-sm bg-white dark:bg-black"
                >
                  <option value="gemini">Gemini 1.5 Flash (free)</option>
                  <option value="openai">OpenAI GPT-4o Mini</option>
                </select>
              </div>

              <Textarea
                placeholder="Paste the complete job description here (including any extra content - AI will filter out headers/footers automatically)..."
                value={jobDescription}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setJobDescription(e.target.value)}
                rows={8}
                className="w-full"
              />
              <Button 
                onClick={analyzeJob} 
                disabled={!jobDescription.trim() || loading}
                className="w-full"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Analyzing Job...
                  </>
                ) : (
                  'Analyze Job & Generate Score'
                )}
              </Button>

              {jobAnalysis && (
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      {jobAnalysis.score.viable ? (
                        <CheckCircle className="text-green-500" />
                      ) : (
                        <AlertCircle className="text-red-500" />
                      )}
                      <span className="font-semibold">
                        Job Score: {jobAnalysis.score.total.toFixed(1)}/10
                      </span>
                    </div>
                    <Badge 
                      variant={jobAnalysis.score.viable ? "default" : "destructive"}
                      className={jobAnalysis.score.viable ? "bg-green-100 text-green-800" : ""}
                    >
                      {jobAnalysis.score.viable ? "VIABLE" : "BELOW THRESHOLD"}
                    </Badge>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Score Breakdown</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Technical Alignment (30%)</span>
                            <span>{jobAnalysis.score.breakdown.technical.toFixed(1)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Business Value (25%)</span>
                            <span>{jobAnalysis.score.breakdown.business.toFixed(1)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Project Scope (20%)</span>
                            <span>{jobAnalysis.score.breakdown.scope.toFixed(1)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Client Profile (15%)</span>
                            <span>{jobAnalysis.score.breakdown.client.toFixed(1)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Budget Range (10%)</span>
                            <span>{jobAnalysis.score.breakdown.budget.toFixed(1)}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Relevant Projects</CardTitle>
                      </CardHeader>
                      <CardContent>
                        {jobAnalysis.relevantRepos.length > 0 ? (
                          <div className="space-y-2">
                            {jobAnalysis.relevantRepos.map((repo, index) => (
                              <div key={index} className="p-2 border rounded">
                                <div className="flex justify-between items-center">
                                  <span className="font-medium">{repo.name}</span>
                                  <Badge variant="outline">
                                    Score: {repo.relevanceScore}
                                  </Badge>
                                </div>
                                <p className="text-xs text-gray-600 mt-1">
                                  {repo.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-500">No strongly relevant projects found</p>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="proposal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Generated Proposal</CardTitle>
              <p className="text-sm text-gray-600">
                AI-generated proposal based on job analysis and relevant portfolio projects
              </p>
            </CardHeader>
            <CardContent>
              {!jobAnalysis ? (
                <div className="text-center py-12 text-gray-500">
                  <AlertCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Please analyze a job first to generate a proposal</p>
                </div>
              ) : !jobAnalysis.score.viable ? (
                <div className="text-center py-12 text-red-500">
                  <AlertCircle className="w-12 h-12 mx-auto mb-4" />
                  <p>Job score is below viable threshold (7/10)</p>
                  <p className="text-sm">Consider focusing on higher-scoring opportunities</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-green-600">✓ Proposal Generated Successfully</h3>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => copyToClipboard(proposal)}
                      className="flex items-center gap-1"
                    >
                      <Copy className="w-4 h-4" />
                      Copy Proposal
                    </Button>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-sm font-mono">
                      {proposal}
                    </pre>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="text-center p-3 bg-blue-50 rounded">
                      <div className="font-semibold text-blue-600">Relevance Score</div>
                      <div className="text-2xl font-bold">{jobAnalysis.score.total.toFixed(1)}/10</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded">
                      <div className="font-semibold text-green-600">Portfolio Links</div>
                      <div className="text-2xl font-bold">{jobAnalysis.relevantRepos.length}</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded">
                      <div className="font-semibold text-purple-600">Status</div>
                      <div className="text-lg font-bold">Ready to Send</div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UpworkAgent;