'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ProblemSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  const problems = [
    'Vague ideas become vague deliverables — When requirements live in meetings and Slack threads, no one builds the same thing.',
    'No shared understanding of "done" — Edge cases, user flows, and failure states are left undefined — until it\'s too late.',
    'Coding is 10% of the job. The rest is structured thinking — Spec writing is the new superpower. Without it, even top teams ship the wrong thing.'
  ];

  return (
    <section 
      data-section="problem"
      className="relative w-full min-h-screen py-16 sm:py-20 md:py-24 lg:h-screen overflow-hidden flex items-center"
      style={{ scrollSnapAlign: 'start' }}
    >
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col items-start justify-start space-y-6 sm:space-y-8 md:space-y-10">
          <div className="w-full max-w-5xl">
            <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              The Problem
            </h2>
          </div>

          <div className="w-full max-w-4xl">
            <p className={`text-base tracking-normal sm:text-lg md:text-xl leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              The real problem isn&apos;t speed — it&apos;s alignment.
            </p>
          </div>

          <div className="w-full max-w-4xl">
            <blockquote className={`border-l-4 pl-4 sm:pl-6 py-3 sm:py-4 text-lg sm:text-xl font-medium italic ${
              isDark 
                ? 'border-gray-600 text-gray-200' 
                : 'border-gray-300 text-gray-800'
            }`}>
             &quot;Prompt engineering is dead. The future is spec engineering.&quot;
            </blockquote>
            <p className={`text-xs sm:text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              — Sean Grove, OpenAI
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 w-full max-w-4xl">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4">
                <div className={`flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-2 sm:mt-3 ${
                  isDark ? 'bg-gray-400' : 'bg-gray-500'
                }`} />
                <p className={`text-base sm:text-lg leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {problem}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full max-w-4xl">
            <div className={`flex items-start gap-2 sm:gap-3 ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`}>
              <span className="text-base sm:text-lg font-medium flex-shrink-0">➤</span>
              <p className={`text-base sm:text-lg font-medium leading-relaxed ${isDark ? 'text-white' : 'text-black'}`}>
                Herewegoal brings structure to your specs before coding starts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}