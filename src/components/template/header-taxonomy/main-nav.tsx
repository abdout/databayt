"use client"

import * as React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

import { MainNavItem } from "./type"
import { cn } from "@/lib/utils"
import { Icons } from "./icons"
import { MobileNav } from "./mobile-nav"
import { Logo } from "@/components/atom/icons"
import { useLocale } from "@/hooks/use-locale"

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)
  const { t } = useLocale()

  // Function to get translated title for nav items
  const getNavTitle = (originalTitle: string) => {
    // Convert the original title to lowercase for key mapping
    const key = originalTitle.toLowerCase()
    return t(`navigation.${key}`)
  }

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center gap-2 md:flex" style={{ position: "absolute", left: "1rem" }}>
        <Logo width={20} height={20} className="text-foreground" />
        <span className="hidden font-bold sm:inline-block">
          Databayt
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center font-normal transition-colors hover:text-foreground/90 sm:text-sm",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/70",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {getNavTitle(item.title)}
            </Link>
          ))}
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 rtl:space-x-reverse md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className="font-bold">{t('navigation.menu')}</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  )
}