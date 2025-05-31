import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useLockBody } from "@/hooks/use-lock-body"
import { MainNavItem } from "@/types"
import { siteConfig } from "@/config/site"
import Image from "next/image"

interface MobileNavProps {
  items: MainNavItem[]
  children?: React.ReactNode
}

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody()

  return (
    <div
      className={cn(
        "fixed inset-0 top-10 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden overflow-x-hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-background px-[50px] text-popover-foreground h-60 -mx-10">
        <Link href="/" className="flex items-center space-x-2">
        <Image src="/logo.png" alt="logo" width={20} height={20} className="dark:invert" />
          <span className="font-bold">{siteConfig.name}</span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm -mt-8">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  )
}
