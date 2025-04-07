'use client';

import Link from 'next/link';
import { Particles } from '@/components/magicui/particles';

export default function HeroSection() {
  return (
    <section className="relative mx-auto w-full bg-black text-white">
      <div className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <Particles className="absolute inset-0 z-0" quantity={150} ease={100} color="#ffffff" refresh />
        <div className="z-10 flex max-w-5xl flex-col items-center gap-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
            <div className="mb-2">Task & project management</div>
            <div className="mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              finally made simple.
            </div>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl mt-4">
            No setup. Just create, share, and get things done — solo or with anyone.
          </p>
          <div className="flex gap-5 mt-10">
            <Link href="https://app.herewegoal.com">
              <button className="px-8 py-4 text-base font-medium bg-white text-black rounded-md hover:bg-gray-200 transition-colors cursor-pointer">
                Here we go!!
              </button>
            </Link>
            <Link href="#features">
              <button className="px-8 py-4 text-base font-medium text-white border border-gray-700 rounded-md hover:bg-gray-900 transition-colors cursor-pointer">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
