import { Pill } from './types';

export const PILL_SIZE = 30;
export const KARL_SIZE = 180;
export const KARL = 'karl';

export const initialPills: Pill[] = [
  { id: 'pill-1', top: 20, left: 20, consumed: false },
  { id: 'pill-2', top: 20, left: window.innerWidth - PILL_SIZE - 20, consumed: false },
  { id: 'pill-3', top: window.innerHeight - PILL_SIZE - 20, left: 20, consumed: false },
];
