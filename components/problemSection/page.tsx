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
      className="relative w-full h-screen overflow-hidden flex items-center"
      style={{ scrollSnapAlign: 'start' }}
    >
      
      <div className="relative z-10 mx-auto max-w-6xl px-8 sm:px-12 md:px-16 lg:px-20">
        <div className="flex flex-col items-start justify-start">
          <div className="mb-6 max-w-5xl">
            <h2 className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              The Problem
            </h2>
          </div>

          <div className="mb-10 max-w-4xl">
            <p className={`text-lg tracking-normal sm:text-xl md:text-lg leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              The real problem isn&apos;t speed — it&apos;s alignment.
            </p>
          </div>



          <div className="mb-10 max-w-4xl">
            <blockquote className={`border-l-3 pl-6 py-4 text-xl font-medium italic ${
              isDark 
                ? 'border-gray-600 text-gray-200' 
                : 'border-gray-300 text-gray-800'
            }`}>
             &quot;Prompt engineering is dead. The future is spec engineering.&quot;
            </blockquote>
            <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              — Sean Grove, OpenAI
            </p>
          </div>

          <div className="space-y-4 max-w-4xl">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-3 ${
                  isDark ? 'bg-gray-400' : 'bg-gray-500'
                }`} />
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {problem}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-4xl">
            <div className={`flex items-start gap-3 ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`}>
              <span className="text-lg font-medium">➤</span>
              <p className={`text-lg font-medium ${isDark ? 'text-white' : 'text-black'}`}>
                Herewegoal brings structure to your specs before coding starts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}