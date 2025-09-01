import { NextRequest, NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = ['en', 'zh-TW']
const defaultLocale = 'en'

function getLocale(request: NextRequest): string {
  try {
    const acceptedLanguage = request.headers.get('accept-language') ?? undefined
    if (!acceptedLanguage) {
      return defaultLocale
    }
    
    const headers = { 'accept-language': acceptedLanguage }
    const languages = new Negotiator({ headers }).languages()
    
    // Filter out invalid languages and ensure we have valid options
    const validLanguages = languages.filter(lang => 
      lang && typeof lang === 'string' && lang.trim().length > 0
    )
    
    if (validLanguages.length === 0) {
      return defaultLocale
    }
    
    // Use supported locales that work with Intl
    const supportedLocales = ['en', 'zh-TW']
    return match(validLanguages, supportedLocales, defaultLocale)
  } catch (error) {
    console.warn('Locale detection failed:', error)
    return defaultLocale
  }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.svg|.*\\.mp4).*)',
  ],
}