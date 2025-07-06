'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { IntlProvider as ReactIntlProvider } from 'react-intl'
import { Locale, defaultLocale, messages, isRTL } from './index'

interface IntlContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  direction: 'ltr' | 'rtl'
}

const IntlContext = createContext<IntlContextType | undefined>(undefined)

interface IntlProviderProps {
  children: React.ReactNode
  initialLocale?: Locale
}

export function IntlProvider({ children, initialLocale }: IntlProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale || defaultLocale)
  const [isHydrated, setIsHydrated] = useState(false)
  const direction = isRTL(locale) ? 'rtl' : 'ltr'

  // Load locale from localStorage on mount (client-side only)
  useEffect(() => {
    setIsHydrated(true)
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale') as Locale
      if (savedLocale && (savedLocale === 'en' || savedLocale === 'ar')) {
        setLocaleState(savedLocale)
      }
    }
  }, [])

  // Update document direction and language
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', locale)
      document.documentElement.setAttribute('dir', direction)
      // Also set dir on body for better RTL support
      document.body.setAttribute('dir', direction)
    }
  }, [locale, direction])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale)
    }
  }

  // Define type for nested messages
  type NestedMessages = {
    [key: string]: string | NestedMessages;
  }

  // Flatten nested messages for react-intl
  const flattenMessages = (nestedMessages: NestedMessages, prefix = ''): Record<string, string> => {
    return Object.keys(nestedMessages).reduce((flat, key) => {
      const value = nestedMessages[key]
      const prefixedKey = prefix ? `${prefix}.${key}` : key

      if (typeof value === 'string') {
        flat[prefixedKey] = value
      } else if (typeof value === 'object' && value !== null) {
        Object.assign(flat, flattenMessages(value, prefixedKey))
      }

      return flat
    }, {} as Record<string, string>)
  }

  // Prevent hydration mismatch
  if (!isHydrated) {
    return (
      <IntlContext.Provider value={{ locale: defaultLocale, setLocale: () => {}, direction: 'ltr' }}>
        <ReactIntlProvider
          locale={defaultLocale}
          messages={flattenMessages(messages[defaultLocale])}
          defaultLocale={defaultLocale}
        >
          {children}
        </ReactIntlProvider>
      </IntlContext.Provider>
    )
  }

  return (
    <IntlContext.Provider value={{ locale, setLocale, direction }}>
      <ReactIntlProvider
        locale={locale}
        messages={flattenMessages(messages[locale])}
        defaultLocale={defaultLocale}
      >
        {children}
      </ReactIntlProvider>
    </IntlContext.Provider>
  )
}

export function useIntl() {
  const context = useContext(IntlContext)
  if (context === undefined) {
    throw new Error('useIntl must be used within an IntlProvider')
  }
  return context
}