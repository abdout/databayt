'use client'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../ui/button'
import { useLocale } from '@/hooks/use-locale'

const Hero = () => {
  const { t } = useLocale()

  return (
    <section id="hero" className="h-[calc(100vh-3.5rem)] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center space-y-8 px-4">
        <div className="flex flex-col items-center gap-6 text-center max-w-6xl mx-auto">
          <Link
            href={siteConfig.links.twitter}
            className="rounded-2xl bg-muted px-6 py-2 text-sm font-medium hover:bg-muted/80 transition-colors"
            target="_blank"
          >
            {t('landing.hero.followDiscord')}
          </Link>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[90px] text-center leading-tight lg:leading-[0.9] max-w-5xl">
            {t('landing.hero.title')}
          </h1>
          <p className="max-w-[42rem] leading-relaxed text-muted-foreground sm:text-xl sm:leading-8 text-center">
            {t('landing.hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row rtl:sm:flex-row-reverse gap-4 w-full sm:w-auto max-w-sm sm:max-w-none mx-auto justify-center items-center pt-4">
            <Link 
              href="/docs/get-started" 
              className={cn(
                buttonVariants({ size: "lg" }), 
                "w-full sm:w-auto min-w-[160px] text-center px-8 py-3 text-base font-medium hover:scale-105 transition-transform"
              )}
            >
              {t('landing.hero.getStarted')}
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }), 
                "w-full sm:w-auto min-w-[160px] text-center px-8 py-3 text-base font-medium hover:scale-105 transition-transform"
              )}
            >
              {t('landing.hero.github')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
