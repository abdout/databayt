"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useLocale } from "@/hooks/use-locale"
import { cn } from "@/lib/utils"

interface Props {
  value: 'gemini' | 'openai' | 'local'
  onChange: (value: 'gemini' | 'openai' | 'local') => void
}

export default function ProviderSelect({ value, onChange }: Props) {
  const { t } = useLocale()
  
  return (
    <Select value={value} onValueChange={(v: string) => onChange(v as 'gemini' | 'openai' | 'local')}>
      <SelectTrigger className={cn(
        "w-[200px] text-start rtl:text-end"
      )}>
        <SelectValue placeholder={t("pages.agent.upwork.providers.gemini")} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="gemini">{t("pages.agent.upwork.providers.gemini")}</SelectItem>
        <SelectItem value="openai">{t("pages.agent.upwork.providers.openai")}</SelectItem>
        <SelectItem value="local">{t("pages.agent.upwork.providers.local")}</SelectItem>
      </SelectContent>
    </Select>
  )
} 