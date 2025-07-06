"use client"

import * as React from "react"
import Link from "next/link"

import { MainNavItem } from "./type"
import { cn } from "@/lib/utils"
import { useLockBody } from "./use-lock-body"
import { Icons } from "./icons"
import { useLocale } from "@/hooks/use-locale"

interface MobileNavProps {
  items: MainNavItem[]
  children?: React.ReactNode
}

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody()
  const { t } = useLocale()

  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <Link href="/" style={{ position: "relative" }}>
          <div className="flex items-center" style={{ direction: "ltr" }}>
            <Icons.logo />
            <span className="ml-2 font-bold">Databayt</span>
          </div>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline text-start rtl:text-end",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {/* Convert title to key format for translation */}
              {t(`navigation.${item.title.toLowerCase()}`)}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  )
}