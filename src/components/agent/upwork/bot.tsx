"use client"

import { useState } from "react"
import { Chat } from "./chat"
import { Message } from "@/components/template/chatbot/chat-message"
import { cn } from "@/lib/utils"
import { DEFAULT_REPOSITORIES } from "./repo"
import { analyzeJobDescription, JobAnalysis } from "./score"
import { generateProposal } from "./proposal"
import { v4 as uuid } from "uuid"
import PageHeader from "@/components/atom/page-header"
// import ProviderSelect from "./model"

// Suggestions that fit Upwork usage
const SUGGESTIONS = [
  "Build a small SaaS in Next.js",
  "Create a school management dashboard",
  "Automate repetitive business tasks",
]

export default function UpworkBot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [aiProvider, setAiProvider] = useState<'gemini' | 'openai' | 'local'>('gemini')

  async function analyze(description: string) {
    // helper to analyze using chosen provider
    if (aiProvider === 'local') {
      return analyzeJobDescription(description, DEFAULT_REPOSITORIES)
    }
    const endpoint = aiProvider === 'openai' ? '/api/upwork/analyze' : '/api/upwork/analyze-gemini'
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description, repositories: DEFAULT_REPOSITORIES }),
      })
      if (!res.ok) throw new Error('Request failed')
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      // Build JobAnalysis object compatible with local
      return {
        score: data.score,
        details: data.details,
        relevantRepos: analyzeJobDescription(description, DEFAULT_REPOSITORIES).relevantRepos,
      } as JobAnalysis
    } catch (err) {
      console.error('AI provider failed, falling back to local', err)
      return analyzeJobDescription(description, DEFAULT_REPOSITORIES)
    }
  }

  // Local-only chat submit handler
  const handleSubmit = async (event?: { preventDefault?: () => void }) => {
    event?.preventDefault?.()
    const content = input.trim()
    if (!content) return

    // No need to store user message; just process it
    setInput("")

    // Generate assistant response using Upwork analysis logic
    setIsGenerating(true)
    try {
      const analysis = await analyze(content)
      const assistantContent = formatAnalysisResponse(analysis)
      const assistantMsg: Message = {
        id: uuid(),
        role: "assistant",
        content: assistantContent,
      }
      setMessages((prev) => [...prev, assistantMsg])
    } finally {
      setIsGenerating(false)
    }
  }

  const append = (msg: { role: "user"; content: string }) => {
    setInput(msg.content)
  }

  const handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    setInput(e.target.value)
  }

  const stop = () => {
    // No streaming yet
  }

  return (
    <section
      className={cn(
        "relative flex flex-col items-center justify-center text-center py-24 md:py-32"
      )}
    >
      {messages.length === 0 && <PageHeader title="Upwork Agent" />}
      <div className="w-full max-w-3xl mt-10">
        {/* <ProviderSelect value={aiProvider} onChange={val => setAiProvider(val)} /> */}
        <Chat
          className="grow"
          messages={messages}
          handleSubmit={handleSubmit}
          input={input}
          handleInputChange={handleInputChange}
          isGenerating={isGenerating}
          stop={stop}
          append={append}
          setMessages={setMessages}
          suggestions={SUGGESTIONS}
        />
      </div>
    </section>
  )
}

function formatAnalysisResponse(analysis: JobAnalysis): string {
  const { score, details, relevantRepos } = analysis
  const proposal = generateProposal(details, relevantRepos, score)
  return `Job score: ${score.total}/10 (viable: ${score.viable ? "yes" : "no"})\n\n${proposal}`
} 