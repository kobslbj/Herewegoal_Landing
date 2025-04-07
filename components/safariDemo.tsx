'use client';

import { Safari } from '@/components/magicui/safari';
import imageDark from '@/public/safariDemo.png';
import imageDarkProject from '@/public/safariDemoProjectTask.png';
import imageLight from '@/public/safariDemoLightMode.png';
import imageLightProject from '@/public/safariDemoProjectTaskLightMode.png';
import { Particles } from '@/components/magicui/particles';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function SafariDemo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 如果尚未掛載組件，則避免出現閃爍問題
  if (!mounted) return null;

  // 根據主題設置顏色
  const isDark = resolvedTheme === 'dark';
  const particleColor = isDark ? '#ffffff' : '#000000';
  const bgColor = isDark ? 'bg-black' : 'bg-gray-50';
  const textColor = isDark ? 'text-white' : 'text-black';
  const mutedTextColor = isDark ? 'text-gray-400' : 'text-gray-600';

  // 根據主題選擇圖片
  const dashboardImage = isDark ? imageDark.src : imageLight.src;
  const projectImage = isDark ? imageDarkProject.src : imageLightProject.src;

  return (
    <section className={`relative w-full ${bgColor} ${textColor} py-28`}>
      <Particles className="absolute inset-0 z-0" quantity={100} ease={100} color={particleColor} refresh />
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 gap-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-2">
          Intuitive tools for maximum productivity
        </h2>

        {/* First Safari Demo */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 space-y-4 px-4">
            <h3 className={`text-2xl font-bold ${textColor}`}>Start with a dashboard that makes sense</h3>
            <p className={`${mutedTextColor} text-lg`}>
              Get a clear overview of all your tasks and projects at a glance. No complexity, just clarity.
            </p>
          </div>
          <div className="order-1 md:order-2 transform transition-all duration-700 hover:scale-105 hover:rotate-1 shadow-[0_0_25px_rgba(59,130,246,0.3)]">
            <Safari url="app.herewegoal.com" className="size-full rounded-lg" imageSrc={dashboardImage} />
          </div>
        </div>

        {/* Second Safari Demo */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
          <div className="transform transition-all duration-700 hover:scale-105 hover:rotate-[-1deg] shadow-[0_0_25px_rgba(16,185,129,0.3)]">
            <Safari url="app.herewegoal.com/projects" className="size-full rounded-lg" imageSrc={projectImage} />
          </div>
          <div className="space-y-4 px-4">
            <h3 className={`text-2xl font-bold ${textColor}`}>Project management reimagined</h3>
            <p className={`${mutedTextColor} text-lg`}>
              Organize your work with powerful yet simple project views that adapt to your workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SafariDemo;
