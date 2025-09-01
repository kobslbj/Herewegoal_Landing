'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { DiscordIcon } from '@/components/icon';
import { TypingAnimation } from '@/components/magicui/typing-animation';
import ParticlesWrapper from '@/components/particles-wrapper';
import type { Locale } from '@/lib/i18n';

type Props = {
  locale: Locale;
  dict: {
    hero: {
      title: {
        part1: string;
        part2: string;
      };
      subtitle: string;
      cta: string;
    };
  };
};

export default function HeroSection({ locale, dict }: Props) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <section 
      id="hero" 
      data-section="hero"
      className="relative w-full h-screen overflow-hidden"
      style={{ scrollSnapAlign: 'start' }}
    >
      <ParticlesWrapper />
      
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-8 sm:px-12 md:px-16 lg:px-20">
        <div className="mb-6 max-w-5xl text-center">
          <h1 className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            {locale === 'en' ? (
              <>
                {dict.hero.title.part1}
                <br />
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {dict.hero.title.part2}
                </span>
              </>
            ) : (
              <>
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {dict.hero.title.part1}
                </span>
                <br />
                {dict.hero.title.part2}
              </>
            )}
          </h1>
        </div>

        <div className="mb-10 max-w-3xl text-center">
          <TypingAnimation
            className={`text-lg tracking-normal sm:text-xl md:text-lg leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
            duration={30}
          >
            {dict.hero.subtitle}
          </TypingAnimation>
        </div>

        <div className="flex flex-col gap-4 items-center sm:flex-row sm:gap-6 mt-2">
          <Link href="https://app.herewegoal.com" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className={`rounded-xl px-10 py-5 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg ${
                isDark 
                  ? 'bg-white text-black hover:bg-gray-100' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              {dict.hero.cta}
              <ArrowRight className="ml-2 size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </Button>
          </Link>

          <Link href="https://discord.gg/QncZjDFKYg" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className={`gap-3 rounded-xl px-10 py-5 transition-all duration-300 text-lg font-medium border-2 ${
                isDark 
                  ? 'border-gray-600 text-white hover:bg-gray-800 hover:border-gray-400' 
                  : 'border-gray-300 text-black hover:bg-gray-50 hover:border-gray-400'
              }`}
            >
              <DiscordIcon className="w-5 h-5 fill-current" />
              Discord
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
