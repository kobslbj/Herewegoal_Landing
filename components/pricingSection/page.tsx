'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n';

type Props = {
  locale: Locale;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: any;
};

export default function PricingSection({ dict }: Props) {
  const t = dict?.pricing;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="pricing">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80">
            {t?.headline}
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">{t?.subheadline}</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full max-w-5xl mx-auto border-collapse rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-muted/40">
                <th className="w-1/3 text-left p-4 text-sm font-medium text-muted-foreground">{''}</th>
                <th className="w-1/3 p-4 text-center text-base font-semibold">{t?.table?.headers?.trial}</th>
                <th className="w-1/3 p-4 text-center text-base font-semibold">{t?.table?.headers?.pro}</th>
              </tr>
            </thead>
            <tbody className="[&_tr:not(:last-child)]:border-b">
              <tr>
                <td className="p-4 text-sm font-medium text-muted-foreground">{t?.table?.rows?.price}</td>
                <td className="p-4 text-center">
                  <span className="text-2xl font-bold">{t?.table?.trial?.price}</span>
                </td>
                <td className="p-4 text-center">
                  <span className="text-2xl font-bold">{t?.table?.pro?.price}</span>
                </td>
              </tr>
              <tr>
                <td className="p-4 text-sm font-medium text-muted-foreground">{t?.table?.rows?.aiCredits}</td>
                <td className="p-4 text-center">{t?.table?.trial?.aiCredits}</td>
                <td className="p-4 text-center">{t?.table?.pro?.aiCredits}</td>
              </tr>
              <tr>
                <td className="p-4 text-sm font-medium text-muted-foreground">{t?.table?.rows?.includedAIFeatures}</td>
                <td className="p-4 text-center">{t?.table?.trial?.includedAIFeatures}</td>
                <td className="p-4 text-center">{t?.table?.pro?.includedAIFeatures}</td>
              </tr>
              <tr>
                <td className="p-4 text-sm font-medium text-muted-foreground">{t?.table?.rows?.taskNameSuggestions}</td>
                <td className="p-4 text-center">{t?.table?.trial?.taskNameSuggestions}</td>
                <td className="p-4 text-center">{t?.table?.pro?.taskNameSuggestions}</td>
              </tr>
              <tr>
                <td className="p-4 text-sm font-medium text-muted-foreground">{t?.table?.rows?.githubIntegration}</td>
                <td className="p-4 text-center">{t?.table?.trial?.githubIntegration}</td>
                <td className="p-4 text-center">{t?.table?.pro?.githubIntegration}</td>
              </tr>
              <tr>
                <td className="p-4 text-sm font-medium text-muted-foreground">{t?.table?.rows?.workspaceMembers}</td>
                <td className="p-4 text-center">{t?.table?.trial?.workspaceMembers}</td>
                <td className="p-4 text-center">{t?.table?.pro?.workspaceMembers}</td>
              </tr>
              <tr>
                <td className="p-4 text-sm font-medium text-muted-foreground">{t?.table?.rows?.afterTrialEnds}</td>
                <td className="p-4 text-center">{t?.table?.trial?.afterTrialEnds}</td>
                <td className="p-4 text-center">{t?.table?.pro?.afterTrialEnds}</td>
              </tr>
              <tr>
                <td className="p-4" />
                <td className="p-4 text-center">
                  <Link href="https://app.herewegoal.com">
                    <Button variant="outline" size="lg">{t?.cta?.trial}</Button>
                  </Link>
                </td>
                <td className="p-4 text-center">
                  <Link href="https://app.herewegoal.com/#/billing">
                    <Button size="lg">{t?.cta?.pro}</Button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
