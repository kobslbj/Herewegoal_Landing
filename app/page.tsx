'use client';

import HeroSection from '@/components/heroSection/page';
import ProblemSection from '@/components/problemSection/page';
import SolutionSection from '@/components/solutionSection/page';
import WaitingListSection from '@/components/waitingListSection/page';
import { Particles } from "@/components/magicui/particles";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <div 
      className={`relative w-full overflow-hidden ${
        isDark ? 'bg-black text-white' : 'bg-white text-black'
      }`}
      style={{
        scrollSnapType: 'y mandatory',
        height: '100vh',
        overflowY: 'auto'
      }}
    >
      <Particles
        className="fixed inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      
      <div className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <WaitingListSection />
      </div>
    </div>
  );
}
