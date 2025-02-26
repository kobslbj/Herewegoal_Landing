'use client';

import Link from 'next/link';
import { TextAnimate } from '@/components/magicui/text-animate';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Particles } from '@/components/magicui/particles';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState('#ffffff');

  useEffect(() => {
    setColor(resolvedTheme === 'dark' ? '#ffffff' : '#000000');
  }, [resolvedTheme]);

  return (
    <section className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12 sm:py-16 md:py-24">
        <Particles className="absolute inset-0 z-0" quantity={100} ease={80} color={color} refresh />
        <div className="z-10 flex max-w-3xl flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-7xl leading-tight">
            <TextAnimate>Your Tasks, Your Projects,</TextAnimate>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500">
              Beautifully Simple
            </span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            A personal task manager that just works. No complexity, no distractions
            <br />
            just you and your goals. Start in seconds, achieve more every day.
          </p>
          <div className="flex gap-4 mt-8">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                <Link href="/start">Get Started</Link>
              </span>
            </ShimmerButton>
          </div>
        </div>
      </div>
    </section>
  );
}
