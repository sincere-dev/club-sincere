import { AppRoutes, pageRoutes } from '../../constants/routes';

const LOCAL_STORAGE_KEY = 'sincerelyVisitedRoutes';

export const getNextUnvisitedRoute = (): string => {
  const visitedRoutesRaw = localStorage.getItem(LOCAL_STORAGE_KEY);
  let visitedRoutes: string[] = [];

  try {
    visitedRoutes = visitedRoutesRaw ? JSON.parse(visitedRoutesRaw) : [];
  } catch {
    visitedRoutes = [];
  }

  let unvisitedRoutes = pageRoutes.filter(route => !visitedRoutes.includes(route));

  if (unvisitedRoutes.length === 0) {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    visitedRoutes = [];

    // Keep going
    unvisitedRoutes = [...pageRoutes];
    // Or back home
    // return AppRoutes.HOME;
  }

  const randomIndex = Math.floor(Math.random() * unvisitedRoutes.length);
  const selectedRoute = unvisitedRoutes[randomIndex];

  const updatedVisitedRoutes = [...visitedRoutes, selectedRoute];
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedVisitedRoutes));

  return selectedRoute;
};
