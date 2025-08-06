"use client";

import { cn } from "@/lib/utils";
import { useEffect, useId, useState } from "react";

interface GridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  squares?: Array<[number, number]>;
  className?: string;
  strokeDasharray?: string;
}

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  squares = [],
  className,
  strokeDasharray = "0",
  ...props
}: GridPatternProps) {
  const id = useId();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className={cn("pointer-events-none", className)} {...props} />;
  }

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} {...props}>
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full fill-gray-400/5 stroke-gray-400/5"
        style={{
          width: '200%',
          height: '200%',
          left: '-50%',
          top: '-50%',
          transform: 'skew(-12deg)'
        }}
      >
        <defs>
          <pattern
            id={id}
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
            x={x}
            y={y}
          >
            <path
              d={`M.5 ${height}V.5H${width}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray={strokeDasharray}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
        {squares.map(([squareX, squareY], index) => (
          <rect
            key={`${squareX}-${squareY}-${index}`}
            width={width - 1}
            height={height - 1}
            x={squareX * width + 1}
            y={squareY * height + 1}
            fill="currentColor"
            className="fill-gray-400/10"
          />
        ))}
      </svg>
    </div>
  );
}