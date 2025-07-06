'use client'

import React from 'react'
import Contributors from './contributors'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import SectionHeading from '@/components/atom/section-heading'
import { useLocale } from '@/hooks/use-locale'


const OpenSource = () => {
  const { t } = useLocale()

  return (
    <section className="opensource-section py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          title={t('landing.openSource.title')}
          description={
            <>
              <span className="block mb-2">{t('landing.openSource.description')}</span>
              <span className="block">
                {t('landing.openSource.codeAvailable')}{" "}
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 text-foreground/70 hover:text-foreground transition-colors"
                >
                  {t('landing.openSource.github')}
                </Link>
                .
              </span>
            </>
          }
          className="text-center mb-12"
        >
          <div className="flex flex-col items-center mt-8">
            <div className="flex h-12 items-center rounded-lg border border-muted bg-muted px-6 font-medium text-sm leading-relaxed">
              {t('landing.openSource.contributors')}
            </div>
            <div className="h-4 w-4 border-x-8 border-t-8 border-b-0 border-solid border-muted border-x-transparent"></div>
          </div>
          <div className="mt-4">
            <Contributors />
          </div>
        </SectionHeading>
      </div>
    </section>
  )
}

export default OpenSource