export enum AppRoutes {
  HOME = '/',
  ALBINO = '/albino',
  DISSOLVE = '/dissolve',
  EXCHANGE = '/exchange',
  FREE = '/free',
  GIBSON = '/gibson',
  HUMILIATION = '/humiliation',
  KARL = '/karl',
  MEMORY = '/memory',
  MINESWEEPER = '/minesweeper',
  PLUSSED = '/plussed',
  RUDE = '/rude',
}

export const pageRoutes = Object.values(AppRoutes).filter(
  (route) => route !== AppRoutes.HOME
);
