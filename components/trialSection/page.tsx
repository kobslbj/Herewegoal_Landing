'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ParticlesWrapper from '@/components/particles-wrapper';

type Props = {
  dict: {
    trial: {
      title: string;
      subtitle: string;
      primaryCta: string;
      primaryCtaSubtext: string;
      trustTitle: string;
      trustSubtitle: string;
    };
  };
};

export default function TrialSection({ dict }: Props) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <section 
      id="trial"
      data-section="trial"
      className="relative w-full h-screen overflow-hidden"
      style={{ scrollSnapAlign: 'start' }}
    >
      <ParticlesWrapper />
      
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-8 sm:px-12 md:px-16 lg:px-20">
        <div className="mb-6 max-w-5xl text-center">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            {dict.trial.title}
          </h2>
        </div>

        <div className="mb-10 max-w-3xl text-center">
          <p className={`text-lg tracking-normal sm:text-xl md:text-lg leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {dict.trial.subtitle}
          </p>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col items-center mt-2">
          <Link href="https://app.herewegoal.com" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className={`rounded-2xl px-16 py-8 font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 text-2xl ${
                isDark 
                  ? 'bg-gradient-to-r from-white to-gray-100 text-black hover:from-gray-50 hover:to-white' 
                  : 'bg-gradient-to-r from-black to-gray-800 text-white hover:from-gray-900 hover:to-black'
              }`}
            >
              {dict.trial.primaryCta}
              <ArrowRight className="ml-4 size-7 transition-transform duration-500 ease-in-out group-hover:translate-x-2" />
            </Button>
          </Link>
          <div className={`mt-6 px-6 py-3 rounded-full backdrop-blur-sm border ${
            isDark 
              ? 'bg-gray-800/40 border-gray-600/30 text-gray-200' 
              : 'bg-white/40 border-gray-200/30 text-gray-700'
          }`}>
            <p className="text-base font-medium">
              ✨ {dict.trial.primaryCtaSubtext}
            </p>
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-16 max-w-4xl text-center">
          <h3 className={`text-xl font-medium mb-3 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            {dict.trial.trustTitle}
          </h3>
          <p className={`text-lg leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {dict.trial.trustSubtitle}
          </p>
        </div>
      </div>
    </section>
  );
}