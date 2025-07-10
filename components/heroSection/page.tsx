'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Particles } from '@/components/magicui/particles';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { DiscordIcon } from '@/components/icon';

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';
  const particleColor = isDark ? '#ffffff' : '#000000';
  const bgColor = isDark ? 'bg-black' : 'bg-white';
  const textColor = isDark ? 'text-white' : 'text-black';

  return (
    <section id="hero" className={`relative w-full ${bgColor} ${textColor}`}>
      <Particles className="absolute inset-0 z-0" quantity={100} ease={100} color={particleColor} refresh />
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 md:px-8">
        {/* 主標題 */}
        <h1 className="-translate-y-4 animate-fade-in text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-4 text-3xl font-medium leading-tight tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] dark:from-white dark:to-white/40 sm:py-6 sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
          Project Management for
          <br className="hidden sm:block" /> Solo Founders and Small Teams
        </h1>

        {/* 描述文字 */}
        <p className="mb-8 -translate-y-4 animate-fade-in text-balance text-base tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] sm:mb-10 sm:text-lg md:mb-12 md:text-xl">
          From zero to launch, Herewegoal helps you stay focused, move fast, and ship work — without the busywork.
        </p>

        {/* 按鈕區域 */}
        <div className="flex flex-col gap-3 items-center sm:flex-row sm:gap-4">
          <Link href="https://app.herewegoal.com">
            <Button
              size="lg"
              className="-translate-y-4 animate-fade-in gap-1 rounded-lg text-white opacity-0 ease-in-out [--animation-delay:600ms] dark:text-black group w-full sm:w-auto"
            >
              <span>Get Started for free</span>
              <ArrowRight className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </Button>
          </Link>

          <Link href="https://discord.gg/QncZjDFKYg" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className="-translate-y-4 animate-fade-in gap-1 rounded-lg opacity-0 ease-in-out [--animation-delay:700ms] group border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800 w-full sm:w-auto"
            >
              <DiscordIcon className="w-4 h-4 fill-current" />
              <span>Join Discord</span>
              <ArrowRight className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
