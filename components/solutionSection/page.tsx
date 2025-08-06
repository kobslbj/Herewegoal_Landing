'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

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
      className="relative w-full h-screen overflow-hidden flex items-center"
      style={{ scrollSnapAlign: 'start' }}
    >
      
      <div className="relative z-10 mx-auto max-w-6xl px-8 sm:px-12 md:px-16 lg:px-20">
        <div className="flex flex-col items-start justify-start">
          <div className="mb-6 max-w-5xl">
            <h2 className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              The Solution
            </h2>
          </div>

          <div className="mb-10 max-w-3xl">
            <p className={`text-lg tracking-normal sm:text-xl md:text-lg leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              From Idea to Testable Spec — with Examples, not Meetings.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl">
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-3 ${
                  isDark ? 'bg-gray-400' : 'bg-gray-500'
                }`} />
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {solution}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-3xl">
            <p className={`text-lg font-medium leading-relaxed ${
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