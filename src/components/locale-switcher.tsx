'use client'

import React from 'react'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { useLocale } from '../hooks/use-locale'
import { locales, localeNames, type Locale } from '../i18n'
import { Globe } from 'lucide-react'

export function LocaleSwitcher() {
  const { locale, setLocale } = useLocale()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch by only rendering after mount
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const getFlagEmoji = (loc: Locale) => {
    switch (loc) {
      case 'en':
        return '🇺🇸'
      case 'ar':
        return '🇸🇦'
      default:
        return '🌐'
    }
  }

  // Show loading state until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="h-9 px-3 gap-2" disabled>
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline-block">🌐</span>
        <span className="sr-only">Switch language</span>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-9 px-3 gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline-block">
            {getFlagEmoji(locale)} {localeNames[locale]}
          </span>
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[150px]">
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => setLocale(loc)}
            className={`cursor-pointer gap-3 ${locale === loc ? 'bg-accent' : ''}`}
          >
            <span className="text-base">{getFlagEmoji(loc)}</span>
            <span className="flex-1 text-start rtl:text-end">{localeNames[loc]}</span>
            {locale === loc && (
              <div className="h-2 w-2 rounded-full bg-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}