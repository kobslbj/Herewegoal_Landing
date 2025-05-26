'use client';

import React, { forwardRef, useRef, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { AnimatedBeam } from '@/components/magicui/animated-beam';
import Image from 'next/image';

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';
    const bgColor = isDark ? 'bg-[#1A1A1A]' : 'bg-white';

    return (
      <div
        ref={ref}
        className={cn(`z-10 flex items-center justify-center rounded-full ${bgColor} p-1.5 shadow-md`, className)}
      >
        <div className="size-full flex items-center justify-center">{children}</div>
      </div>
    );
  },
);

Circle.displayName = 'Circle';

export function AnimatedBeamMultipleOutputDemo({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null); // 左側使用者
  const herewegoalRef = useRef<HTMLDivElement>(null); // 中間 HereWeGoal
  const calendarRef = useRef<HTMLDivElement>(null); // 右側 Google Calendar
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';
  const pathColor = isDark ? '#F1F1F1' : '#E1E1E1';
  const pathOpacity = isDark ? 0.5 : 0.8;

  return (
    <div
      className={cn(
        'relative w-full flex items-center justify-center overflow-hidden',
        'h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px]',
        'p-4 sm:p-6 md:p-8 lg:p-10',
        className,
      )}
      ref={containerRef}
    >
      <div className="flex w-full max-w-md flex-row items-center justify-between">
        {/* 左側使用者 */}
        <div className="flex flex-col justify-center">
          <Circle ref={userRef} className="size-10 sm:size-12 md:size-14 lg:size-16">
            <Icons.user className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </Circle>
        </div>

        {/* 中央 HereWeGoal Logo */}
        <div className="flex flex-col justify-center">
          <Circle ref={herewegoalRef} className="size-12 sm:size-14 md:size-16 lg:size-18">
            <Icons.herewegoal className="scale-90 sm:scale-95 md:scale-100" />
          </Circle>
        </div>

        {/* 右側 Google Calendar Logo */}
        <div className="flex flex-col justify-center">
          <Circle ref={calendarRef} className="size-10 sm:size-12 md:size-14 lg:size-16">
            <Icons.googleCalendar className="scale-75 sm:scale-80 md:scale-90" />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={userRef} // 從使用者到 HereWeGoal
        toRef={herewegoalRef}
        duration={3}
        delay={0}
        curvature={-30} // 稍微向上彎曲
        pathColor={pathColor}
        pathOpacity={pathOpacity}
        pathWidth={1.5}
        gradientStartColor="#3B82F6" // Blue
        gradientStopColor="#8B5CF6" // Purple
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={herewegoalRef} // 從 HereWeGoal 到 Google Calendar
        toRef={calendarRef}
        duration={3}
        delay={1} // 在第一條光束之後開始
        curvature={30} // 稍微向下彎曲
        pathColor={pathColor}
        pathOpacity={pathOpacity}
        pathWidth={1.5}
        gradientStartColor="#8B5CF6" // Purple
        gradientStopColor="#DC2626" // Red
      />
    </div>
  );
}

const Icons = {
  user: ({ className }: { className?: string } = {}) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  herewegoal: ({ className }: { className?: string } = {}) => (
    <div className={cn('flex items-center justify-center w-full h-full', className)}>
      <Image
        src="/HerewegoalLogo2.png"
        alt="HereWeGoal Logo"
        width={48}
        height={48}
        className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
      />
    </div>
  ),
  googleCalendar: ({ className }: { className?: string } = {}) => (
    <div className={cn('flex items-center justify-center w-full h-full p-1', className)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
        <rect width="22" height="22" x="13" y="13" fill="#fff" />
        <polygon
          fill="#1e88e5"
          points="25.68,20.92 26.688,22.36 28.272,21.208 28.272,29.56 30,29.56 30,18.616 28.56,18.616"
        />
        <path
          fill="#1e88e5"
          d="M22.943,23.745c0.625-0.574,1.013-1.37,1.013-2.249c0-1.747-1.533-3.168-3.417-3.168 c-1.602,0-2.972,1.009-3.33,2.453l1.657,0.421c0.165-0.664,0.868-1.146,1.673-1.146c0.942,0,1.709,0.646,1.709,1.44 c0,0.794-0.767,1.44-1.709,1.44h-0.997v1.728h0.997c1.081,0,1.993,0.751,1.993,1.64c0,0.904-0.866,1.64-1.931,1.64 c-0.962,0-1.784-0.61-1.914-1.418L17,26.802c0.262,1.636,1.81,2.87,3.6,2.87c2.007,0,3.64-1.511,3.64-3.368 C24.24,25.281,23.736,24.363,22.943,23.745z"
        />
        <polygon fill="#fbc02d" points="34,42 14,42 13,38 14,34 34,34 35,38" />
        <polygon fill="#4caf50" points="38,35 42,34 42,14 38,13 34,14 34,34" />
        <path fill="#1e88e5" d="M34,14l1-4l-1-4H9C7.343,6,6,7.343,6,9v25l4,1l4-1V14H34z" />
        <polygon fill="#e53935" points="34,34 34,42 42,34" />
        <path fill="#1565c0" d="M39,6h-5v8h8V9C42,7.343,40.657,6,39,6z" />
        <path fill="#1565c0" d="M9,42h5v-8H6v5C6,40.657,7.343,42,9,42z" />
      </svg>
    </div>
  ),
};
