export const locales = ['en', 'zh-TW'] as const
export const defaultLocale = 'en' as const
export type Locale = typeof locales[number]

export function getLocaleName(locale: Locale): string {
  switch (locale) {
    case 'en':
      return 'English'
    case 'zh-TW':
      return '繁體中文'
    default:
      return 'English'
  }
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}