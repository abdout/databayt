'use client';

import PageHeader from '@/components/atom/page-header'
import AllAgents from '@/components/agent/all'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useLocale } from '@/hooks/use-locale'

export default function AgentPage() {
  const { t } = useLocale()

  return (
    <div className="py-8 lg:py-12">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8 lg:space-y-12">
          <PageHeader title={t('pages.agent.title')} />

          <div className="relative w-full max-w-md">
            <Search className="absolute start-3 rtl:start-auto rtl:end-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder={t('pages.agent.searchPlaceholder')}
              className="w-full ps-10 rtl:ps-3 rtl:pe-10 h-11 text-base leading-relaxed text-start rtl:text-end placeholder:text-start rtl:placeholder:text-end"
              dir="auto"
            />
          </div>
          <AllAgents />
        </div>
      </div>
    </div>
  )
}
