import type { Locale } from './i18n'

/**
 * Safe locale mapping for Intl APIs
 * Some Intl APIs may not support 'zh-TW' directly
 */
function getSafeLocale(locale: Locale): string {
  switch (locale) {
    case 'zh-TW':
      return 'zh-Hant-TW' // Use full BCP 47 tag for Traditional Chinese
    case 'en':
      return 'en-US'
    default:
      return 'en-US'
  }
}

/**
 * Safe wrapper for Intl.DateTimeFormat
 */
export function formatDate(date: Date, locale: Locale, options?: Intl.DateTimeFormatOptions): string {
  try {
    const safeLocale = getSafeLocale(locale)
    return new Intl.DateTimeFormat(safeLocale, {
      timeZone: 'UTC',
      ...options
    }).format(date)
  } catch (error) {
    console.warn('Date formatting failed for locale:', locale, error)
    // Fallback to English
    return new Intl.DateTimeFormat('en-US', options).format(date)
  }
}

/**
 * Safe wrapper for Intl.NumberFormat
 */
export function formatNumber(number: number, locale: Locale, options?: Intl.NumberFormatOptions): string {
  try {
    const safeLocale = getSafeLocale(locale)
    return new Intl.NumberFormat(safeLocale, options).format(number)
  } catch (error) {
    console.warn('Number formatting failed for locale:', locale, error)
    // Fallback to English
    return new Intl.NumberFormat('en-US', options).format(number)
  }
}

/**
 * Safe wrapper for Intl.RelativeTimeFormat
 */
export function formatRelativeTime(value: number, unit: Intl.RelativeTimeFormatUnit, locale: Locale): string {
  try {
    const safeLocale = getSafeLocale(locale)
    return new Intl.RelativeTimeFormat(safeLocale, {
      numeric: 'auto'
    }).format(value, unit)
  } catch (error) {
    console.warn('Relative time formatting failed for locale:', locale, error)
    // Fallback to English
    return new Intl.RelativeTimeFormat('en-US', { numeric: 'auto' }).format(value, unit)
  }
}

/**
 * Safe wrapper for Intl.ListFormat
 */
export function formatList(items: string[], locale: Locale, options?: Intl.ListFormatOptions): string {
  try {
    const safeLocale = getSafeLocale(locale)
    return new Intl.ListFormat(safeLocale, {
      style: 'long',
      type: 'conjunction',
      ...options
    }).format(items)
  } catch (error) {
    console.warn('List formatting failed for locale:', locale, error)
    // Fallback to simple join
    return items.join(', ')
  }
}

/**
 * Example usage in components
 */
export const examples = {
  // Date formatting
  formatDate: (locale: Locale) => formatDate(new Date(), locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  
  // Currency formatting
  formatCurrency: (amount: number, locale: Locale) => formatNumber(amount, locale, {
    style: 'currency',
    currency: locale === 'zh-TW' ? 'TWD' : 'USD'
  }),
  
  // Percentage formatting
  formatPercentage: (value: number, locale: Locale) => formatNumber(value, locale, {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  }),
  
  // Relative time
  formatTimeAgo: (days: number, locale: Locale) => formatRelativeTime(-days, 'day', locale)
}