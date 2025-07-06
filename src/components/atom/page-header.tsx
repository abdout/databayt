'use client'

import React from "react"
import { cn } from "@/lib/utils"
import { useLocale } from "@/hooks/use-locale"

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
}

const PageHeader = React.forwardRef<HTMLDivElement, PageHeaderProps>(
  ({ title, description, className, ...props }, ref) => {
    const { t } = useLocale()
    
    // Use the provided description or fall back to the translated default description
    const finalDescription = description || t('components.atom.pageHeader.defaultDescription')
    
    return (
      <div
        ref={ref}
        className={cn("flex w-full max-w-4xl flex-col gap-2 text-center", className)}
        {...props}
      >
        <h2 className="font-heading font-extrabold rtl:font-black text-3xl sm:text-3xl md:text-6xl rtl:leading-tight">
          {title}
        </h2>
        {finalDescription && (
          <p className="mx-auto max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 rtl:text-base rtl:leading-relaxed rtl:font-medium rtl:text-justify">
            {finalDescription}
          </p>
        )}
      </div>
    )
  }
)

PageHeader.displayName = "PageHeader"

export default PageHeader 