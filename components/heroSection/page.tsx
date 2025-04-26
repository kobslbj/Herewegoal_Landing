'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Particles } from '@/components/magicui/particles';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string>('light');

  useEffect(() => {
    setCurrentTheme(resolvedTheme || 'light');
  }, [resolvedTheme]);

  // 粒子顏色根據主題變化
  const particleColor = currentTheme === 'dark' ? '#444444' : '#bbbbbb';

  return (
    <section className="relative mx-auto w-full bg-white dark:bg-black text-black dark:text-white">
      <div className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-24 sm:py-32 md:py-40 px-4 sm:px-6 lg:px-8">
        <Particles className="absolute inset-0 z-0" quantity={150} ease={80} color={particleColor} refresh />
        <div className="z-10 flex max-w-5xl flex-col items-center gap-8 text-center">
          <p className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-6xl leading-[1.1] bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600 dark:from-gray-400 dark:to-gray-200">
            Stay Organized — Manage Your Tasks, Projects, and Goals.
          </p>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400 sm:text-xl mt-4">
            Built for freelancers, students, and anyone who wants a simple, clean workspace for getting things done.
          </p>
          <div className="flex gap-5 mt-10">
            <Link href="https://app.herewegoal.com">
              <Button
                size="lg"
                className="bg-gradient-to-r from-gray-800 to-gray-600 hover:from-gray-700 hover:to-gray-500 dark:from-gray-100 dark:to-gray-400 dark:hover:from-white dark:hover:to-gray-300 text-white dark:text-black shadow-md transition-all duration-300 ease-in-out"
              >
                Try it free!
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
