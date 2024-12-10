import React from 'react'
import Contributors from './contributors'
import Link from 'next/link'
import { siteConfig } from '@/config/site'

const OpenSource = () => {
  return (
    <div className="container">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Proudly Open Source
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Databayt is open source and powered by open source software. <br />{" "}
            The code is available on{" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            .{" "}
          </p>
          <div className="flex flex-col items-center">
            <div className="flex h-10 items-center rounded-md border border-muted bg-muted px-4 font-medium">
              Contributors
            </div>
            <div className="h-4 w-4 border-x-8 border-t-8 border-b-0 border-solid border-muted border-x-transparent"></div>
          </div>
          <Contributors />
          {/* <Landing /> */}
          
        </div>
      </div>
  )
}

export default OpenSource