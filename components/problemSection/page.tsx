'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import ParticlesWrapper from '@/components/particles-wrapper';
import type { Locale } from '@/lib/i18n';

type Props = {
  locale: Locale;
  dict: {
    problem: {
      title: string;
      subtitle: string;
      quote: string;
      quoteAuthor: string;
      problems: string[];
      solution: string;
    };
  };
};

export default function ProblemSection({ dict }: Props) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <section 
      data-section="problem"
      className="relative w-full min-h-screen py-16 sm:py-20 md:py-24 lg:h-screen overflow-hidden flex items-center"
      style={{ scrollSnapAlign: 'start' }}
    >
      <ParticlesWrapper />
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col items-start justify-start space-y-6 sm:space-y-8 md:space-y-10">
          <div className="w-full max-w-5xl">
            <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              {dict.problem.title}
            </h2>
          </div>

          <div className="w-full max-w-4xl">
            <p className={`text-base tracking-normal sm:text-lg md:text-xl leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {dict.problem.subtitle}
            </p>
          </div>

          <div className="w-full max-w-4xl">
            <blockquote className={`border-l-4 pl-4 sm:pl-6 py-3 sm:py-4 text-lg sm:text-xl font-medium italic ${
              isDark 
                ? 'border-gray-600 text-gray-200' 
                : 'border-gray-300 text-gray-800'
            }`}>
             &quot;{dict.problem.quote}&quot;
            </blockquote>
            <p className={`text-xs sm:text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {dict.problem.quoteAuthor}
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 w-full max-w-4xl">
            {dict.problem.problems.map((problem: string, index: number) => (
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
                {dict.problem.solution}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}