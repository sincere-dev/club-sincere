export enum AppRoutes {
  HOME = '/',
  DISSOLVE = '/dissolve',
  EXCHANGE = '/exchange',
  HUMILIATION = '/humiliation',
  MEMORY = '/memory',
  PLUSSED = '/plussed',
  RUDE = '/rude',
}

export const pageRoutes = Object.values(AppRoutes).filter(
  (route) => route !== AppRoutes.HOME
);
