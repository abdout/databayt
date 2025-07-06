import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

interface SectionHeadingProps {
  title: string
  description?: string | React.ReactNode
  className?: string
  titleClassName?: string
  descriptionClassName?: string
  align?: "left" | "center" | "right"
  // Optional link props
  linkText?: string
  linkHref?: string
  linkTarget?: string
  linkIcon?: React.ReactNode
  // Custom content
  children?: React.ReactNode
}

export default function SectionHeading({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  linkText,
  linkHref,
  linkTarget,
  linkIcon,
  children
}: SectionHeadingProps) {
  
  return (
    <div className={cn("flex flex-col items-center space-y-2 text-center pt-20", className)}>
      <h2 
        className={cn(
          "font-heading text-2xl leading-tight sm:text-3xl md:text-5xl md:leading-tight text-center rtl:font-black rtl:leading-relaxed",
          titleClassName
        )}
      >
        {title}
      </h2>
      
      {(description || linkText) && (
        <p 
          className={cn(
            "pb-8 leading-relaxed text-muted-foreground sm:text-lg sm:leading-8 max-w-3xl text-center rtl:text-base rtl:font-medium rtl:leading-8 rtl:text-justify",
            descriptionClassName
          )}
        >
          {description && <span className="block mb-2">{description}</span>}
          {linkText && linkHref && (
            <Link
              href={linkHref}
              target={linkTarget}
              rel={linkTarget === "_blank" ? "noreferrer" : undefined}
              className="underline underline-offset-4 inline-flex items-center justify-center text-foreground/70 hover:text-foreground"
            >
              {linkText}
              {linkIcon && <span className="ms-1 rtl:ms-0 rtl:me-1">{linkIcon}</span>}
            </Link>
          )}
        </p>
      )}
      
      {children}
    </div>
  )
}
