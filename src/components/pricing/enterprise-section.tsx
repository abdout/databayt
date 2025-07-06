"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLocale } from "@/hooks/use-locale"

export default function EnterpriseSection() {
  const { t } = useLocale()
  
  return (
    <div className="flex w-full max-w-3xl flex-col gap-6 text-center pt-16">
      <div className="flex justify-center">
        <Badge className="bg-muted text-foreground">{t('components.pricing.enterprise.badge')}</Badge>
      </div>
      <h3 className="font-heading font-bold text-2xl sm:text-3xl">
        {t('components.pricing.enterprise.title')}
      </h3>
      <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        {t('components.pricing.enterprise.description')}
      </p>
      <div className="flex justify-center">
        <Link href="/docs/community/support" className={cn(buttonVariants({ size: "lg", variant: "outline" }))}>
          {t('components.pricing.enterprise.buttonText')}
        </Link>
      </div>
    </div>
  )
} 