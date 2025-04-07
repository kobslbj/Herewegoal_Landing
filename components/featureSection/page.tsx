'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { AnimatedBeamMultipleOutputDemo } from './animatedBeam';
import { ProjectMarquee } from './marquee';
import { AnimatedListDemo } from './animatedList';
import { SpinningText } from '@/components/magicui/spinning-text';
interface BentoCardProps {
  title: string;
  description: string;
  className?: string;
  background?: React.ReactNode;
}

const BentoCard = ({ title, description, className, background }: BentoCardProps) => (
  <div
    className={cn(
      'group relative flex flex-col justify-between overflow-hidden rounded-xl transition-all duration-300',
      // light styles
      'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
      // dark styles
      'transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
      className,
    )}
  >
    {background && <div className="absolute inset-0 z-0 overflow-hidden">{background}</div>}
    <div className="pointer-events-none z-20 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-2 relative bg-gradient-to-b from-white/90 via-white/70 to-transparent dark:from-background/90 dark:via-background/70 dark:to-transparent">
      <h3 className="text-xl font-semibold text-black dark:text-white">{title}</h3>
      <p className="max-w-lg text-gray-600 dark:text-muted-foreground">{description}</p>
    </div>
    <div className="pointer-events-none absolute inset-0 z-10 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export default function FeatureSection() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, [resolvedTheme]);

  const features: BentoCardProps[] = [
    {
      title: 'Distraction-free by design',
      description: 'Built for focus, not features.',
      className: 'col-span-1 row-span-1 md:col-span-1',
      background: (
        <div className="absolute inset-0 overflow-hidden flex flex-col items-center opacity-[0.25]">
          <ProjectMarquee />
        </div>
      ),
    },
    {
      title: 'Task flow from project to today',
      description: 'Set do dates, not just due dates.',
      className: 'col-span-1 row-span-1 md:col-span-1 lg:col-span-2',
      background: (
        <div className="absolute inset-0 overflow-hidden">
          <AnimatedListDemo className="opacity-90 mt-15" />
        </div>
      ),
    },
    {
      title: 'One-to-many delegation',
      description: 'Assign tasks in seconds — no signups, no stress.',
      className: 'col-span-1 row-span-1 md:col-span-2 lg:col-span-2 relative overflow-hidden',
      background: (
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full flex items-center justify-center max-w-xl mx-auto">
            <div className="w-full h-full absolute top-30 md:top-26 lg:top-20">
              <AnimatedBeamMultipleOutputDemo className="opacity-50" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Tasks, Projects — in one place.',
      description: ' No more jumping between tools.',
      className: 'col-span-1 row-span-1 md:col-span-2 lg:col-span-1',
      background: (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
          <SpinningText
            className="text-lg font-medium opacity-60"
            radius={8}
            duration={15}
            style={{ marginTop: '3rem' }}
          >
            Project • Task • Simple
          </SpinningText>
        </div>
      ),
    },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-black text-black dark:text-white" id="features">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-black dark:text-white">
            What makes Herewegoal different
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[22rem]">
          {features.map((feature, index) => (
            <BentoCard
              key={index}
              title={feature.title}
              description={feature.description}
              className={feature.className}
              background={feature.background}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
