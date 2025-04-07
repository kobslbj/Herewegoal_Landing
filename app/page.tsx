import HeroSection from '@/components/heroSection/page';
import FeatureSection from '@/components/featureSection/page';
import SafariDemo from '@/components/safariDemo';
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <SafariDemo />
        <FeatureSection />
      </main>
    </div>
  );
}
