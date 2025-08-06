'use client';

import { Particles } from "@/components/magicui/particles";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ParticlesWrapper() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  if (!mounted) return null;

  return (
    <Particles
      className="absolute inset-0 z-0"
      quantity={100}
      ease={80}
      color={color}
      refresh
    />
  );
}