"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Props {
  value: 'gemini' | 'openai' | 'local'
  onChange: (value: 'gemini' | 'openai' | 'local') => void
}

export default function ProviderSelect({ value, onChange }: Props) {
  return (
    <Select value={value} onValueChange={(v) => onChange(v as any)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Provider" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="gemini">Gemini 1.5 (free)</SelectItem>
        <SelectItem value="openai">OpenAI GPT-4o Mini</SelectItem>
        <SelectItem value="local">Local Heuristic</SelectItem>
      </SelectContent>
    </Select>
  )
} 