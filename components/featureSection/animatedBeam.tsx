'use client';

import React, { forwardRef, useRef, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { AnimatedBeam } from '@/components/magicui/animated-beam';

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';
    const bgColor = isDark ? 'bg-[#1A1A1A]' : 'bg-white';

    return (
      <div
        ref={ref}
        className={cn(
          `z-10 flex items-center justify-center rounded-full border ${bgColor} p-1.5 shadow-md`,
          className,
        )}
      >
        <div className="size-full flex items-center justify-center">{children}</div>
      </div>
    );
  },
);

Circle.displayName = 'Circle';

export function AnimatedBeamMultipleOutputDemo({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
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
      <div className="flex w-full max-w-lg flex-row items-stretch justify-between">
        {/* 左側使用者 */}
        <div className="flex flex-col justify-center">
          <Circle
            ref={div7Ref}
            className="border-blue-500 size-8 sm:size-9 md:size-10 lg:size-12 border-[1.5px] sm:border-2 text-blue-600"
          >
            <Icons.user className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Circle>
        </div>

        {/* 中央平台 */}
        <div className="flex flex-col justify-center">
          <Circle
            ref={div6Ref}
            className="size-10 sm:size-12 md:size-14 lg:size-16 border-red-500 border-[1.5px] sm:border-2"
          >
            <Icons.gmail className="scale-90 sm:scale-95 md:scale-100" />
          </Circle>
        </div>

        {/* 右側多個使用者 */}
        <div className="flex flex-col justify-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
          <Circle
            ref={div1Ref}
            className="border-green-500 size-8 sm:size-9 md:size-10 lg:size-12 border-[1.5px] sm:border-2 text-green-600"
          >
            <Icons.user className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Circle>
          <Circle
            ref={div2Ref}
            className="border-yellow-500 size-8 sm:size-9 md:size-10 lg:size-12 border-[1.5px] sm:border-2 text-yellow-600"
          >
            <Icons.user className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Circle>
          <Circle
            ref={div3Ref}
            className="border-red-500 size-8 sm:size-9 md:size-10 lg:size-12 border-[1.5px] sm:border-2 text-red-600"
          >
            <Icons.user className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3.5}
        delay={0}
        curvature={25}
        pathColor={pathColor}
        pathOpacity={pathOpacity}
        pathWidth={1.5}
        gradientStartColor="#4285F4"
        gradientStopColor="#D54C3F"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3.5}
        delay={0.5}
        curvature={25}
        pathColor={pathColor}
        pathOpacity={pathOpacity}
        pathWidth={1.5}
        gradientStartColor="#FBBC05"
        gradientStopColor="#D54C3F"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3.5}
        delay={1}
        curvature={25}
        pathColor={pathColor}
        pathOpacity={pathOpacity}
        pathWidth={1.5}
        gradientStartColor="#34A853"
        gradientStopColor="#D54C3F"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3.5}
        delay={2}
        curvature={-20}
        pathColor={pathColor}
        pathOpacity={pathOpacity}
        pathWidth={1.5}
        gradientStartColor="#D54C3F"
        gradientStopColor="#4285F4"
      />
    </div>
  );
}

const Icons = {
  gmail: ({ className }: { className?: string } = {}) => (
    <div className={cn('flex items-center justify-center w-full h-full', className)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
        <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z" />
        <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z" />
        <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17" />
        <path
          fill="#c62828"
          d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
        />
        <path
          fill="#fbc02d"
          d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
        />
      </svg>
    </div>
  ),
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
  company: ({ className }: { className?: string } = {}) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
};
