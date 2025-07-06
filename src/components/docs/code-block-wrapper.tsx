"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useDocsTranslation } from "@/components/docs/utils/use-docs-translation"

interface CodeBlockWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  expandButtonTitle?: string
}

export function CodeBlockWrapper({
  expandButtonTitle,
  className,
  children,
  ...props
}: CodeBlockWrapperProps) {
  const { t } = useDocsTranslation()
  const [isOpened, setIsOpened] = React.useState(false)

  return (
    <div className={cn("relative", className)} {...props}>
      <pre className={cn("mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-muted px-4 py-4 rtl:text-left", {
        "max-h-none": isOpened,
      })} dir="ltr">
        {children}
      </pre>
      <div className={cn("flex items-center justify-end px-4", {
        "hidden": isOpened,
      })}>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setIsOpened(!isOpened)}
          className="h-8 text-xs"
        >
          {expandButtonTitle || t('docs.codeBlock.viewCode', { defaultMessage: 'View Code' })}
        </Button>
      </div>
    </div>
  )
} 