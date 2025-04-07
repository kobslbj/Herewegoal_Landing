'use client';

import { cn } from '@/lib/utils';
import { AnimatedList } from '@/components/magicui/animated-list';
import { useState } from 'react';

interface ProjectTask {
  id: string;
  name: string;
  priority: 'High' | 'Medium' | 'Low';
  priorityColor: string;
  status: 'In Progress' | 'Completed' | 'Not Started';
  dueDate: string;
  dueDateColor: string;
  assignee: string;
}

interface DailyTask {
  id: string;
  name: string;
  description: string;
  time?: string;
  parentTaskId?: string;
}

// Project tasks data
const initialProjectTasks: ProjectTask[] = [
  {
    id: 'task-1',
    name: 'Fix mobile data sync issue',
    priority: 'High',
    priorityColor: '#EF4444', // danger/error
    status: 'In Progress',
    dueDate: '2025/4/17',
    dueDateColor: '#10B981', // success
    assignee: 'Unassigned',
  },
  {
    id: 'task-2',
    name: 'Resolve task duplication bug',
    priority: 'High',
    priorityColor: '#EF4444', // danger/error
    status: 'In Progress',
    dueDate: '2025/4/8',
    dueDateColor: '#F59E0B', // warning
    assignee: 'Unassigned',
  },
  {
    id: 'task-3',
    name: 'Add multi-language support',
    priority: 'Medium',
    priorityColor: '#F59E0B', // warning
    status: 'In Progress',
    dueDate: '2025/4/30',
    dueDateColor: '#10B981', // success
    assignee: 'Unassigned',
  },
];

// Daily tasks data
const initialDailyTasks: DailyTask[] = [
  {
    id: 'daily-1',
    name: 'Fix mobile data sync issue',
    description: 'From: MVP Development',
    parentTaskId: 'task-1',
  },
  {
    id: 'daily-2',
    name: 'Resolve task duplication bug',
    description: 'From: MVP Development',
    parentTaskId: 'task-2',
  },
  {
    id: 'daily-3',
    name: 'Add multi-language support',
    description: 'From: MVP Development',
    parentTaskId: 'task-3',
  },
];

export function AnimatedListDemo({ className }: { className?: string }) {
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [projectTasks] = useState<ProjectTask[]>(initialProjectTasks);
  const [dailyTasks] = useState<DailyTask[]>(initialDailyTasks);

  const handleTaskSelect = (taskId: string) => {
    setSelectedTaskId((prevId) => (prevId === taskId ? null : taskId));
  };

  return (
    <div
      className={cn(
        'relative flex h-auto min-h-[280px] md:h-[240px] w-full flex-col md:flex-row items-stretch md:items-center justify-between',
        'overflow-hidden scale-90 md:scale-[0.8] origin-top md:origin-center opacity-95',
        'space-y-4 md:space-y-0 md:space-x-4 mb-8 md:mt-10 md:translate-y-4',
        'px-4 md:px-0',
        className,
      )}
    >
      {/* Project task board */}
      <div className="relative flex h-full w-full md:w-[48%] flex-col overflow-hidden rounded-xl bg-[#121212] border border-[#2E2E2E] shadow-md transition-all duration-300">
        <div className="flex items-center justify-between p-2 sm:p-2.5 border-b border-[#2E2E2E] bg-[#1A1A1A]">
          <div className="text-[11px] sm:text-xs font-medium text-[#FFFFFF]">MVP Development</div>
        </div>

        {/* Task header columns */}
        <div className="w-full flex text-[#9A9A9A] text-[8px] sm:text-[9px] font-medium uppercase px-3 sm:px-5 py-1.5 sm:py-2">
          <div className="flex-1">Task Name</div>
          <div className="w-14 sm:w-16 flex-shrink-0 text-center">Priority</div>
          <div className="w-16 sm:w-20 flex-shrink-0 text-center">Status</div>
          <div className="w-16 sm:w-20 flex-shrink-0 text-center">Due Date</div>
        </div>

        <div className="flex-1 overflow-hidden px-2 sm:px-2.5">
          <AnimatedList className="h-full">
            {projectTasks.slice(0, 3).map((task) => (
              <ProjectTaskRow
                key={task.id}
                task={task}
                isSelected={selectedTaskId === task.id}
                onSelect={() => handleTaskSelect(task.id)}
              />
            ))}
          </AnimatedList>
        </div>
      </div>

      {/* Daily tasks list */}
      <div className="relative flex h-full w-full md:w-[48%] flex-col overflow-hidden rounded-xl bg-[#121212] border border-[#2E2E2E] shadow-md transition-all duration-300">
        <div className="p-2 sm:p-2.5 text-[#FFFFFF] font-medium text-[11px] sm:text-xs border-b border-[#2E2E2E] bg-[#1A1A1A]">
          Today&apos;s Tasks
        </div>
        <div className="flex-1 overflow-hidden p-2 sm:p-2.5">
          <AnimatedList className="h-full">
            {dailyTasks.slice(0, 3).map((task) => (
              <DailyTaskCard key={task.id} task={task} isHighlighted={task.parentTaskId === selectedTaskId} />
            ))}
          </AnimatedList>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 sm:h-10 bg-gradient-to-t from-[#121212] to-transparent"></div>
      </div>
    </div>
  );
}

// Project task row component
const ProjectTaskRow = ({
  task,
  isSelected,
  onSelect,
}: {
  task: ProjectTask;
  isSelected: boolean;
  onSelect: () => void;
}) => {
  return (
    <div
      onClick={onSelect}
      className={cn(
        'w-full flex items-center border-b border-[#2E2E2E]/60 text-[8px] sm:text-[9px] py-1.5 sm:py-2 cursor-pointer',
        isSelected
          ? 'bg-gradient-to-r from-[#42A5F5]/10 to-transparent border-l-2 border-l-[#42A5F5]/70'
          : 'hover:bg-[#1E1E1E]/60 border-l border-l-transparent',
        'transition-colors duration-150',
      )}
    >
      <div className="flex-1 min-w-0 pr-1 pl-1">
        <div className={cn('truncate text-[#FFFFFF]', isSelected ? 'font-medium' : 'font-normal')}>{task.name}</div>
      </div>
      <div className="w-14 sm:w-16 flex-shrink-0 text-center">
        <span
          className={cn(
            'inline-block px-1.5 py-0.5 rounded-full text-[7px] sm:text-[8px] font-medium text-white',
            isSelected ? 'bg-opacity-100' : 'bg-opacity-85',
          )}
          style={{ backgroundColor: task.priorityColor }}
        >
          {task.priority}
        </span>
      </div>
      <div className="w-16 sm:w-20 flex-shrink-0 text-center">
        <span className="inline-block px-1.5 py-0.5 rounded-full bg-[#42A5F5]/80 text-[7px] sm:text-[8px] font-medium text-white">
          In Progress
        </span>
      </div>
      <div className="w-16 sm:w-20 flex-shrink-0 text-center">
        <span
          className="inline-block px-1.5 py-0.5 rounded-full text-[7px] sm:text-[8px] font-medium border border-opacity-70 text-white"
          style={{ borderColor: task.dueDateColor, color: task.dueDateColor }}
        >
          {task.dueDate}
        </span>
      </div>
    </div>
  );
};

// Daily task card component
const DailyTaskCard = ({ task, isHighlighted }: { task: DailyTask; isHighlighted: boolean }) => {
  return (
    <div
      className={cn(
        'relative w-full cursor-pointer overflow-hidden rounded-md p-2 sm:p-2.5 mb-1.5',
        'bg-[#1E1E1E]/80 hover:bg-[#272727]/90 border border-[#2E2E2E]/60',
        'transition-all duration-200',
        isHighlighted && 'ring-1 ring-[#42A5F5]/30 bg-gradient-to-r from-[#42A5F5]/10 to-transparent',
      )}
    >
      <div className="flex flex-col overflow-hidden">
        <div className="flex flex-row items-center whitespace-pre font-medium text-[#FFFFFF] text-[9px] sm:text-[10px]">
          <span>{task.name}</span>
          {task.time && (
            <>
              <span className="mx-1 text-[#757575]">·</span>
              <span className="text-[8px] sm:text-[9px] text-[#B0B0B0]">{task.time}</span>
            </>
          )}
        </div>
        <p className="text-[8px] sm:text-[9px] font-normal text-[#42A5F5]/90 mt-0.5">{task.description}</p>
      </div>
    </div>
  );
};
