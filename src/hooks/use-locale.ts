'use client'

import { useIntl as useReactIntl } from 'react-intl'
import { useIntl as useIntlContext } from '../i18n/provider'

export function useLocale() {
  const intl = useReactIntl()
  const { locale, setLocale, direction } = useIntlContext()

  const t = (id: string, values?: Record<string, string | number | boolean | Date | null | undefined>) => {
    try {
      return intl.formatMessage({ id }, values)
    } catch (error) {
      // If translation is missing, use defaultMessage or return the ID
      console.warn(`Translation missing for: ${id}`, error)
      return values?.defaultMessage as string || id.split('.').pop() || id
    }
  }

  const formatDate = (date: Date | number, options?: Intl.DateTimeFormatOptions) => {
    return intl.formatDate(date, options)
  }

  const formatNumber = (value: number, options?: Parameters<typeof intl.formatNumber>[1]) => {
    return intl.formatNumber(value, options)
  }

  // Tailwind RTL Utility Functions
  const isRTL = direction === 'rtl'

  // Helper for text alignment using Tailwind's RTL variants
  const textAlign = (align: 'start' | 'end' | 'center') => {
    if (align === 'center') return 'text-center'
    if (align === 'start') return 'text-start rtl:text-end'
    if (align === 'end') return 'text-end rtl:text-start'
    return ''
  }

  // Helper for margin/padding using logical properties
  const spacing = (side: 'start' | 'end', value: string, type: 'margin' | 'padding' = 'margin') => {
    const prefix = type === 'margin' ? 'm' : 'p'
    if (side === 'start') {
      return `${prefix}s-${value}` // Uses margin-inline-start/padding-inline-start
    }
    return `${prefix}e-${value}` // Uses margin-inline-end/padding-inline-end
  }

  // Helper for justify content
  const justify = (alignment: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly') => {
    return `justify-${alignment}`
  }

  // Helper for items alignment
  const items = (alignment: 'start' | 'end' | 'center' | 'stretch' | 'baseline') => {
    return `items-${alignment}`
  }

  // Helper for border radius using logical properties
  const borderRadius = (side: 'start' | 'end', value: string = '') => {
    if (side === 'start') {
      return `rounded-s${value ? `-${value}` : ''}`
    }
    return `rounded-e${value ? `-${value}` : ''}`
  }

  // Helper for flex direction with RTL awareness
  const flexDirection = (direction: 'row' | 'col' | 'row-reverse' | 'col-reverse' = 'row') => {
    if (direction === 'row') {
      return 'flex-row rtl:flex-row-reverse'
    }
    if (direction === 'row-reverse') {
      return 'flex-row-reverse rtl:flex-row'
    }
    return `flex-${direction}` // col and col-reverse don't need RTL variants
  }

  return {
    locale,
    setLocale,
    direction,
    t,
    formatDate,
    formatNumber,
    isRTL,
    // Tailwind RTL utilities
    flexDirection,
    textAlign,
    spacing,
    justify,
    items,
    borderRadius,
  }
}