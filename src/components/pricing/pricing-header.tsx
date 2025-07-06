'use client'

import { Badge } from "@/components/ui/badge"
import { useLocale } from "@/hooks/use-locale"

export default function PricingHeader() {
  const { t } = useLocale();
  
  return (
    <div className="flex w-full max-w-4xl flex-col gap-4 text-center">
      <div className="flex justify-center">
        <Badge className="bg-muted text-foreground">{t("components.pricing.header.badge")}</Badge>
      </div>
      <h2 className="font-heading font-extrabold text-3xl sm:text-3xl md:text-6xl rtl:font-black rtl:leading-tight">
        {t("components.pricing.header.title")}
      </h2>
      <p className="max-w-[85%] mx-auto leading-normal text-muted-foreground sm:text-lg sm:leading-7 rtl:text-base rtl:font-medium rtl:leading-8">
        {t("components.pricing.header.description")}
      </p>
    </div>
  )
} 