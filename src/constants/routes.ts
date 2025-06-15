export enum AppRoutes {
  HOME = '/',

  // in dev
  PHOTOBOOTH = '/photo-booth',

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

const routesNotInRandomNav = [
  AppRoutes.HOME,
  // the below routes are secret or in development
  AppRoutes.PHOTOBOOTH
];

export const pageRoutes = Object.values(AppRoutes).filter(
  (route) => !routesNotInRandomNav.includes(route)
);
