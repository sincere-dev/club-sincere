import { CursorPos } from './types';

export const getEyeRotation = (eye: HTMLImageElement | null, cursorPos: CursorPos) => {
  if (!eye) return 0;

  const rect = eye.getBoundingClientRect();
  const eyeCenterX = rect.left + rect.width / 2;
  const eyeCenterY = rect.top + rect.height / 2;
  const dx = cursorPos.x - eyeCenterX;
  const dy = cursorPos.y - eyeCenterY;
  return Math.atan2(dy, dx) * (180 / Math.PI);
};
