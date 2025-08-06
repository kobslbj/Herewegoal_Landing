'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import ParticlesWrapper from '@/components/particles-wrapper';

export default function SolutionSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  const solutions = [
    'Starts from a prompt — describe your feature idea in natural language',
    'GenAI suggests Given / When / Then — AI generates structured scenarios',
    'Team clarifies edge cases — collaborate to refine scenarios',
    'Turn into testable specs, synced to GitHub — implementation-ready specs'
  ];

  return (
    <section 
      data-section="solution"
      className="relative w-full min-h-screen py-16 sm:py-20 md:py-24 lg:h-screen overflow-hidden flex items-center"
      style={{ scrollSnapAlign: 'start' }}
    >
      <ParticlesWrapper />
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col items-start justify-start space-y-6 sm:space-y-8 md:space-y-10">
          <div className="w-full max-w-5xl">
            <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              The Solution
            </h2>
          </div>

          <div className="w-full max-w-4xl">
            <p className={`text-base tracking-normal sm:text-lg md:text-xl leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              From Idea to Testable Spec — with Examples, not Meetings.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 w-full max-w-4xl">
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4">
                <div className={`flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-2 sm:mt-3 ${
                  isDark ? 'bg-gray-400' : 'bg-gray-500'
                }`} />
                <p className={`text-base sm:text-lg leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {solution}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full max-w-4xl">
            <p className={`text-base sm:text-lg font-medium leading-relaxed ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              Herewegoal is your AI-native workspace for example-driven alignment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}