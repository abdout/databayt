import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../ui/button'

const Hero = () => {
  return (
    <section id="hero" className="h-[calc(100vh-3.5rem)] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center space-y-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <Link
            href={siteConfig.links.twitter}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm"
            target="_blank"
          >
            Follow along on Discord
          </Link>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[90px]">
            Automate the boring,<br /> elevate the wondrous.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Building codebase for business automation and open sourcing
            everything. Follow along as we figure this out together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 w-full sm:w-auto px-4 sm:px-0 max-w-[240px] sm:max-w-none mx-auto">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}>
              Get Started
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto")}
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
