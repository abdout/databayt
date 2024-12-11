import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../ui/button'

const Hero = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <Link
          href={siteConfig.links.twitter}
          className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium -mt-32 md:-mt-28"
          target="_blank"
        >
          Follow along on Discord
        </Link>
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-[90px]">
          Automate the boring,<br /> elevate the wondrous.
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Building codebase for business automation and open sourcing
          everything. Follow along as we figure this out together.
        </p>
        <div className="space-x-4">
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Get Started
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
