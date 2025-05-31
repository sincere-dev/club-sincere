export enum AppRoutes {
  HOME = '/',
  DISSOLVE = '/dissolve',
  EXCHANGE = '/exchange',
  FREE = '/free',
  HUMILIATION = '/humiliation',
  KARL = '/karl',
  MEMORY = '/memory',
  PLUSSED = '/plussed',
  RUDE = '/rude',
}

export const pageRoutes = Object.values(AppRoutes).filter(
  (route) => route !== AppRoutes.HOME
);
