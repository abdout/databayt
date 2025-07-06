'use client'

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import PageHeader from "@/components/atom/page-header"
import AllFeatures from "@/components/features/content"
import { useLocale } from "@/hooks/use-locale"

export default function FeaturesPage() {
  const { t } = useLocale()

  return (
    <div className="py-8">
      <div className="flex flex-col items-center space-y-8">
        <PageHeader title={t("features.header.title")} />
        
        <div className="relative w-full max-w-xs">
          <Search className="absolute rtl:right-3 ltr:left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            type="search"
            placeholder={t("features.search.placeholder")}
            className="w-full rtl:pr-10 ltr:pl-10"
          />
        </div>
        
        <AllFeatures />
      </div>
    </div>
  )
}
