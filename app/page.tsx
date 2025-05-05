import HeroSection from '@/components/heroSection/page';
import FeatureSection from '@/components/featureSection/page';
import VideoDemo from '@/components/videoSection/videoDemo';
import FAQSection from '@/components/faqSection/page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Herewegoal',
  description:
    'Herewegoal is a simple, intuitive project management tool designed for freelancers and individuals, featuring easy task management and collaboration.',
};

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
