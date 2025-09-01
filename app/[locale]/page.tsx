import HeroSection from '@/components/heroSection/page';
import ProblemSection from '@/components/problemSection/page';
import SolutionSection from '@/components/solutionSection/page';
import TrialSection from '@/components/trialSection/page';
import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div 
      className="relative w-full overflow-hidden"
      style={{
        scrollSnapType: 'y mandatory',
        height: '100vh',
        overflowY: 'auto'
      }}
    >
      <HeroSection locale={locale} dict={dict} />
      <ProblemSection locale={locale} dict={dict} />
      <SolutionSection locale={locale} dict={dict} />
      <TrialSection locale={locale} dict={dict} />
    </div>
  );
}