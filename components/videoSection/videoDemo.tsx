'use client';

import { TaskPageVideo, ProjectPageVideo } from '@/components/videoSection/video';
import { Particles } from '@/components/magicui/particles';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Define view configurations
const views = {
  task: {
    url: 'app.herewegoal.com',
    title: 'Task Views: Day, Week, Month',
    component: TaskPageVideo,
  },
  project: {
    url: 'app.herewegoal.com/projects',
    title: 'Simplified Project Management',
    component: ProjectPageVideo,
  },
};

type ViewKey = keyof typeof views;

export function SafariDemo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentView, setCurrentView] = useState<ViewKey>('task');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';
  const particleColor = isDark ? '#ffffff' : '#000000';
  const bgColor = isDark ? 'bg-black' : 'bg-gray-50';
  const textColor = isDark ? 'text-white' : 'text-black';

  const activeView = views[currentView];

  return (
    <section className={`relative w-full ${bgColor} ${textColor} py-10`}>
      <Particles className="absolute inset-0 z-0" quantity={100} ease={100} color={particleColor} refresh />
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 gap-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-2">
          Tasks, Projects - All in One Place
        </h2>

        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/3 space-y-4 px-4 text-center md:text-left">
            <h3 className={`text-2xl font-bold ${textColor}`}>{activeView.title}</h3>
          </div>

          <div
            className={cn(
              'relative w-full md:w-2/3 p-1 transform duration-700 border border-muted rounded-lg overflow-hidden aspect-video',
            )}
          >
            <TaskPageVideo
              className={cn(
                'absolute inset-0 transition-opacity duration-500 ease-in-out',
                currentView === 'task' ? 'opacity-100' : 'opacity-0',
              )}
            />
            <ProjectPageVideo
              className={cn(
                'absolute inset-0 transition-opacity duration-500 ease-in-out',
                currentView === 'project' ? 'opacity-100' : 'opacity-0',
              )}
            />
          </div>
        </div>

        <div className="flex space-x-4 mt-12">
          {(Object.keys(views) as ViewKey[]).map((viewKey) => (
            <Button
              key={viewKey}
              variant={currentView === viewKey ? 'default' : 'outline'}
              onClick={() => setCurrentView(viewKey)}
              className={cn(
                'capitalize',
                currentView === viewKey
                  ? isDark
                    ? 'bg-white text-black'
                    : 'bg-black text-white'
                  : isDark
                    ? 'border-gray-700 hover:bg-gray-800'
                    : 'border-gray-300 hover:bg-gray-100',
              )}
            >
              {viewKey}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SafariDemo;
