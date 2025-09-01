import type { Locale } from '@/lib/i18n'
import { formatDate, formatNumber, formatList, examples } from '@/lib/intl-utils'

interface Props {
  locale: Locale
}

export default function IntlExample({ locale }: Props) {
  const currentDate = new Date()
  const price = 29.99
  const features = ['Feature 1', 'Feature 2', 'Feature 3']

  return (
    <div className="space-y-4">
      {/* Safe date formatting */}
      <p>Current date: {formatDate(currentDate, locale, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })}</p>
      
      {/* Safe number formatting */}
      <p>Price: {formatNumber(price, locale, {
        style: 'currency',
        currency: locale === 'zh-TW' ? 'TWD' : 'USD'
      })}</p>
      
      {/* Safe list formatting */}
      <p>Features: {formatList(features, locale)}</p>
      
      {/* Using examples */}
      <p>Formatted date: {examples.formatDate(locale)}</p>
      <p>Currency: {examples.formatCurrency(99.99, locale)}</p>
      <p>Percentage: {examples.formatPercentage(0.85, locale)}</p>
      <p>Time ago: {examples.formatTimeAgo(3, locale)}</p>
    </div>
  )
}