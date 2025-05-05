import PricingSection from '@/components/pricingSection/page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | Herewegoal',
  description: 'Explore our pricing for Herewegoal',
};
export default function Pricing() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <PricingSection />
      </main>
    </div>
  );
}
