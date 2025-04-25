import HeroSection from '@/components/heroSection/page';
import FeatureSection from '@/components/featureSection/page';
import VideoDemo from '@/components/videoSection/videoDemo';
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <VideoDemo />
        <FeatureSection />
      </main>
    </div>
  );
}
