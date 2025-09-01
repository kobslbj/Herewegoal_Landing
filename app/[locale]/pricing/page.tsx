import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import PricingSection from '@/components/pricingSection/page';

type Props = {
  params: Promise<{ locale: Locale }>
}

export default async function PricingPage({ params }: Props) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <PricingSection locale={locale} dict={dict} />
      </main>
    </div>
  )
}


