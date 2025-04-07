'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Particles } from '@/components/magicui/particles';
import { useTheme } from 'next-themes';

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string>('light');

  useEffect(() => {
    // 使用 resolvedTheme 而不是 theme，因為 resolvedTheme 考慮到了系統設置
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
            <div className="mb-2">Task & project management</div>
            <div className="mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              finally made simple.
            </div>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400 sm:text-xl mt-4">
            No setup. Just create, share, and get things done — solo or with anyone.
          </p>
          <div className="flex gap-5 mt-10">
            <Link href="https://app.herewegoal.com">
              <button className="px-8 py-4 text-base font-medium bg-black text-white dark:bg-white dark:text-black rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors cursor-pointer">
                Here we go!!
              </button>
            </Link>
            <Link href="#features">
              <button className="px-8 py-4 text-base font-medium text-black dark:text-white border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors cursor-pointer">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
