import { cn } from '@/lib/utils';

interface VideoProps {
  className?: string;
}

export function TaskPageVideo({ className }: VideoProps) {
  return (
    <video className={cn('size-full object-cover', className)} autoPlay loop muted playsInline preload="none">
      <source src="/taskDemo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export function ProjectPageVideo({ className }: VideoProps) {
  return (
    <video className={cn('size-full object-cover', className)} autoPlay loop muted playsInline preload="none">
      <source src="/projectDemo_new.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
