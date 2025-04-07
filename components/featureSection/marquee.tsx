import { Marquee } from '@/components/magicui/marquee';
import { useEffect } from 'react';

// 項目類型定義
interface Member {
  id: string;
  name: string;
}

interface Folder {
  id: string;
  name: string;
}

interface Project {
  id: string;
  title: string;
  progress: number;
  members: Member[];
  email: string;
  completedTasks: number;
  totalTasks: number;
  tagName: string;
  tagColor: string;
  dateTime: string;
  description: string;
  folders: Folder[];
  isSharedProject: boolean;
}

// 專案資料 - 以 solo founder 角度設計的專案
const projects: Project[] = [
  {
    id: '1',
    title: 'MVP Development',
    progress: 75,
    members: [{ id: '1', name: 'John Smith' }],
    email: 'john@herewegoal.com',
    completedTasks: 15,
    totalTasks: 20,
    tagName: 'MVP',
    tagColor: 'pink',
    dateTime: '2023-12-15',
    description: 'Building the minimum viable product for a SaaS startup',
    folders: [],
    isSharedProject: false,
  },
  {
    id: '2',
    title: 'Investor Pitch Deck',
    progress: 45,
    members: [{ id: '1', name: 'John Smith' }],
    email: 'john@herewegoal.com',
    completedTasks: 9,
    totalTasks: 20,
    tagName: 'Pitch',
    tagColor: 'yellow',
    dateTime: '2023-11-20',
    description: 'Preparing slides and materials for investor meetings',
    folders: [],
    isSharedProject: false,
  },
  {
    id: '3',
    title: 'Marketing Strategy Plan',
    progress: 90,
    members: [{ id: '1', name: 'John Smith' }],
    email: 'john@herewegoal.com',
    completedTasks: 18,
    totalTasks: 20,
    tagName: 'Marketing',
    tagColor: 'green',
    dateTime: '2024-01-10',
    description: 'Developing a marketing plan to acquire early users',
    folders: [],
    isSharedProject: true,
  },
  {
    id: '4',
    title: 'User Research',
    progress: 30,
    members: [{ id: '1', name: 'John Smith' }],
    email: 'john@herewegoal.com',
    completedTasks: 6,
    totalTasks: 20,
    tagName: 'Research',
    tagColor: 'blue',
    dateTime: '2024-02-05',
    description: 'Conducting interviews with potential users to validate ideas',
    folders: [],
    isSharedProject: false,
  },
  {
    id: '5',
    title: 'Product Roadmap',
    progress: 60,
    members: [{ id: '1', name: 'John Smith' }],
    email: 'john@herewegoal.com',
    completedTasks: 12,
    totalTasks: 20,
    tagName: 'Planning',
    tagColor: 'purple',
    dateTime: '2023-09-30',
    description: 'Creating a strategic roadmap for product development',
    folders: [],
    isSharedProject: true,
  },
  {
    id: '6',
    title: 'Funding Strategy',
    progress: 40,
    members: [{ id: '1', name: 'John Smith' }],
    email: 'john@herewegoal.com',
    completedTasks: 8,
    totalTasks: 20,
    tagName: 'Finance',
    tagColor: 'teal',
    dateTime: '2024-03-15',
    description: 'Planning financial strategy and exploring funding options',
    folders: [],
    isSharedProject: false,
  },
];

// 將項目分為兩行
const firstRow = projects.slice(0, projects.length / 2);
const secondRow = projects.slice(projects.length / 2);

// 專案卡片組件
const ProjectCard = ({
  title,
  progress,
  completedTasks,
  totalTasks,
  tagName,
  tagColor,
  description,
}: Omit<Project, 'id' | 'email' | 'folders' | 'isSharedProject' | 'members' | 'dateTime'>) => {
  // 為標籤選擇適當的背景色
  const getBgColor = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      purple: 'bg-purple-500',
      red: 'bg-red-500',
      orange: 'bg-orange-500',
      teal: 'bg-teal-500',
      pink: 'bg-pink-500',
      yellow: 'bg-yellow-500',
    };
    return colorMap[color] || 'bg-gray-500';
  };

  // 計算進度百分比
  const progressPercentage = `${progress}%`;

  return (
    <div className="w-80 mx-4 my-4 scale-90 origin-center">
      <div className="h-[200px] flex flex-col rounded-xl overflow-hidden bg-gray-900 border border-gray-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-600">
        {/* 標籤 */}
        <div className="p-4 pb-2">
          <div className={`${getBgColor(tagColor)} inline-block rounded-full px-3 py-1 text-xs font-medium text-white`}>
            {tagName}
          </div>
        </div>

        {/* 標題和描述 */}
        <div className="px-4 flex-1">
          <h3 className="text-base font-bold text-white mb-2 line-clamp-1">{title}</h3>
          <p className="text-xs text-gray-300 mb-3 line-clamp-2">{description}</p>
        </div>

        {/* 任務標籤 */}
        <div className="px-4 pb-1">
          <div className="text-xs font-medium text-white">Tasks</div>
        </div>

        {/* 進度條 */}
        <div className="px-4 pb-4">
          <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
              style={{ width: progressPercentage }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-right">
            <span className="text-gray-300 flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-2 inline-block"></div>
              {completedTasks}/{totalTasks} tasks
            </span>
            <span className="text-gray-300">{progressPercentage}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 添加必要的CSS動畫定義
const marqueeAnimationStyles = `
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  .animate-marquee {
    animation: marquee var(--duration) linear infinite;
  }
  @keyframes marquee-vertical {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }
  .animate-marquee-vertical {
    animation: marquee-vertical var(--duration) linear infinite;
  }
`;

// 簡潔版的ProjectMarquee
export function ProjectMarquee() {
  useEffect(() => {
    // 動態添加CSS動畫
    if (!document.getElementById('marquee-styles')) {
      const styleEl = document.createElement('style');
      styleEl.id = 'marquee-styles';
      styleEl.innerHTML = marqueeAnimationStyles;
      document.head.appendChild(styleEl);
    }
  }, []);

  return (
    <div className="w-full py-2">
      <Marquee pauseOnHover className="[--duration:30s] w-full overflow-visible">
        {firstRow.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s] w-full mt-4 overflow-visible">
        {secondRow.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Marquee>
    </div>
  );
}

// 完整版的ProjectMarquee（可選用）
export function FullProjectMarquee() {
  useEffect(() => {
    // 動態添加CSS動畫
    if (!document.getElementById('marquee-styles')) {
      const styleEl = document.createElement('style');
      styleEl.id = 'marquee-styles';
      styleEl.innerHTML = marqueeAnimationStyles;
      document.head.appendChild(styleEl);
    }
  }, []);

  return (
    <div className="w-full py-16 bg-gray-950">
      <div className="container mx-auto mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Projects</h2>
        <p className="mx-auto max-w-2xl text-gray-400">
          Explore our exciting projects in progress. Each project represents our commitment to excellence and pursuit of
          innovation.
        </p>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:25s] w-full">
          {firstRow.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:25s] w-full mt-4">
          {secondRow.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-950"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-950"></div>
      </div>
    </div>
  );
}
