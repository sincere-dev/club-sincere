import { useEffect, useState } from 'react';

import { CursorPos } from './types';

export const useDragPosition = (pillBeingDragged: string | null) => {
  const [cursorPos, setCursorPos] = useState<CursorPos>({ x: 0, y: 0 });

  useEffect(() => {
    if (!pillBeingDragged) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [pillBeingDragged]);

  return cursorPos;
};
