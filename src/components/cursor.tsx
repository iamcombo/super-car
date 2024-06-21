'use client';

import { useEffect, useRef } from 'react';
import { loadCursor } from '@/utils/cursor';

export const Cursor = () => {
  const ballCanvas = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !ballCanvas.current) {
      return;
    }

    return loadCursor(ballCanvas.current);
  }, []);

  return (
    <div
      ref={ballCanvas}
      className="ball-transitions pointer-events-none fixed z-30 h-6 w-6 rounded-full border border-white bg-transparent opacity-0 shadow-md duration-200"
    />
  );
};
