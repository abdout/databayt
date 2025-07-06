// Import locale messages
import en from './locales/en.json'
import ar from './locales/ar.json'

export type Locale = 'en' | 'ar'

// Define the structure of our translation messages
export type NestedMessages = {
  [key: string]: string | NestedMessages
}

export const locales: Locale[] = ['en', 'ar']

export const messages: Record<Locale, NestedMessages> = {
  en,
  ar,
}

export const defaultLocale: Locale = 'en'

// RTL languages
export const rtlLocales: Locale[] = ['ar']

export const isRTL = (locale: Locale): boolean => {
  return rtlLocales.includes(locale)
}

// Locale display names
export const localeNames: Record<Locale, string> = {
  en: 'English',
  ar: 'العربية',
}