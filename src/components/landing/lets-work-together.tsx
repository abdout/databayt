'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GitHub, Discord } from "@/components/atom/icons"
import Link from "next/link"
import { useLocale } from "@/hooks/use-locale"

export default function LetsWorkTogether() {
  const { t } = useLocale()

  return (
    <section className="collaboration-section py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-12 text-start rtl:text-end leading-tight">
          {t('landing.collaboration.title')}
        </h2>
        <div className="flex flex-col lg:flex-row rtl:lg:flex-row-reverse gap-12 lg:gap-16">
          <div className="flex-1 text-start rtl:text-end space-y-6">
            <p className="text-muted-foreground md:text-xl lg:text-lg xl:text-xl leading-relaxed">
              {t('landing.collaboration.description')}
            </p>
            <div className="flex gap-6 items-center justify-start rtl:justify-end pt-2">            <Link 
              href="https://github.com/abdout/databayt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity p-2 rounded-lg hover:bg-muted/50"
              aria-label="Visit our GitHub repository"
            >
              <GitHub width={32} height={32} />
            </Link>
            <Link 
              href="https://discord.gg/uPa4gGG62c" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity p-2 rounded-lg hover:bg-muted/50"
              aria-label="Join our Discord community"
            >
                <Discord width={36} height={36} />
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <form className="space-y-6 bg-muted/30 p-6 rounded-lg border">
              <Input
                placeholder={t('landing.collaboration.emailPlaceholder')}
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                required
                aria-label="Email"
                className="text-start rtl:text-end h-12 text-base"
              />
              <Textarea
                placeholder={t('landing.collaboration.messagePlaceholder')}
                required
                className="min-h-[100px] resize-none text-start rtl:text-end text-base leading-relaxed"
                aria-label="Automation needs"
              />
              <div className="flex gap-3 justify-start rtl:flex-row-reverse rtl:justify-end pt-2">
                <Button 
                  type="submit" 
                  className="px-8 py-3 text-base font-medium min-w-[120px] hover:scale-105 transition-transform"
                >
                  {t('common.submit')}
                </Button>
                <Button 
                  type="button" 
                  variant="ghost" 
                  className="px-6 py-3 text-base font-medium min-w-[100px] hover:bg-muted"
                >
                  {t('common.liveChat')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}