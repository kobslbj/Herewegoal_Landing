import HeroSection from '@/components/heroSection/page';
import FeatureSection from '@/components/featureSection/page';
import VideoDemo from '@/components/videoSection/videoDemo';
import FAQSection from '@/components/faqSection/page';

export default function Home() {
  return (
    <>
      <HeroSection />
      <VideoDemo />
      <FeatureSection />
      <FAQSection />
    </>
  );
}
