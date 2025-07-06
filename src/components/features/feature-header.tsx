'use client'

import { useLocale } from "@/hooks/use-locale"

export default function FeatureHeader() {
  const { t } = useLocale()
  
  return (
    <div className="flex w-full max-w-4xl flex-col gap-2 text-center">
      <h2 className="font-heading font-extrabold text-3xl sm:text-3xl md:text-6xl">
        {t('features.header.title')}
      </h2>
      <p className="max-w-[85%] mx-auto leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        {t('features.header.description')}
      </p>
    </div>
  )
}