import HeroSection from '@/components/heroSection/page';
import ProblemSection from '@/components/problemSection/page';
import SolutionSection from '@/components/solutionSection/page';
import WaitingListSection from '@/components/waitingListSection/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Herewegoal - AI Workspace for Idea to Spec Clarity',
  description: 'Herewegoal helps lean teams align fast with example-driven specs powered by GenAI. Transform your ideas into testable specifications.',
  keywords: ['AI', 'specification', 'team alignment', 'product development', 'GenAI', 'spec engineering'],
  openGraph: {
    title: 'Herewegoal - AI Workspace for Idea to Spec Clarity',
    description: 'Herewegoal helps lean teams align fast with example-driven specs powered by GenAI.',
    type: 'website',
    url: 'https://herewegoal.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Herewegoal - AI Workspace for Idea to Spec Clarity',
    description: 'Herewegoal helps lean teams align fast with example-driven specs powered by GenAI.',
  },
};

export default function Home() {
  return (
    <div 
      className="relative w-full overflow-hidden"
      style={{
        scrollSnapType: 'y mandatory',
        height: '100vh',
        overflowY: 'auto'
      }}
    >
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <WaitingListSection />
    </div>
  );
}
