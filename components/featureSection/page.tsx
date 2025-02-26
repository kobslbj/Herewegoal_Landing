'use client';

import { useTheme } from 'next-themes';
import { MagicCard } from '@/components/magicui/magic-card';
import { CheckCircle2, Share2, Link, ListTodo } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function FeatureSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      title: 'Clean, Distraction-Free Interface',
      description: 'Focus on what matters. No clutter, no complexity—just your tasks and goals presented clearly.',
      icon: <CheckCircle2 className="w-6 h-6 mb-4" />,
    },
    {
      title: 'Instant Task Sharing',
      description: 'Share tasks with anyone, anywhere. No sign-ups required—just send a link and start collaborating.',
      icon: <Share2 className="w-6 h-6 mb-4" />,
    },
    {
      title: 'Smart Link Delegation',
      description:
        'Assign tasks via simple links. Perfect for quick collaborations with clients, friends, or team members.',
      icon: <Link className="w-6 h-6 mb-4" />,
    },
    {
      title: 'Personal Task Dashboard',
      description: 'Your tasks, your way. Organize, prioritize, and track progress with our intuitive dashboard.',
      icon: <ListTodo className="w-6 h-6 mb-4" />,
    },
  ];

  // 在客戶端渲染之前不顯示內容
  if (!mounted) {
    return null;
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" id="features">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            What you get with{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500">
              Herewegoal
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <MagicCard
              key={index}
              className="p-6 cursor-pointer flex flex-col items-start justify-start"
              gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
}
