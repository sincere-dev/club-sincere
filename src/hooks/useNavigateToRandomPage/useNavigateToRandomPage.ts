import { useNavigate } from 'react-router-dom';

import { getNextUnvisitedRoute } from './getNextUnvisitedRoute';

export const useNavigateToRandomPage = () => {
  const navigate = useNavigate();

  return () => {
    navigate(getNextUnvisitedRoute());
  };
};
