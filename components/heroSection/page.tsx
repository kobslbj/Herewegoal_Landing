'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Particles } from '@/components/magicui/particles';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { useTheme } from 'next-themes';

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string>('light');

  useEffect(() => {
    setCurrentTheme(resolvedTheme || 'light');
  }, [resolvedTheme]);

  // 粒子顏色根據主題變化
  const particleColor = currentTheme === 'dark' ? '#ffffff' : '#000000';

  return (
    <section className="relative mx-auto w-full bg-white dark:bg-black text-black dark:text-white">
      <div className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <Particles className="absolute inset-0 z-0" quantity={150} ease={100} color={particleColor} refresh />
        <div className="z-10 flex max-w-5xl flex-col items-center gap-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
            <div className="mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
              Lightweight Personal
            </div>
            <div className="mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-300 dark:to-gray-500">
              Project Management
            </div>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400 sm:text-xl mt-4">
            No setup. Just create, share, and get things done — solo or with anyone.
          </p>
          <div className="flex gap-5 mt-10">
            <Link href="https://app.herewegoal.com">
              <ShimmerButton className="shadow-2xl">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Here we go!!
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
