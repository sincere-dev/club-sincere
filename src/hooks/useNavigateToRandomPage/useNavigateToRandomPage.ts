import { useNavigate } from 'react-router-dom';

import { getNextUniqueRoute } from './getNextUniqueRoute';

export const useNavigateToRandomPage = () => {
  const navigate = useNavigate();

  return () => {
    navigate(getNextUniqueRoute());
  };
};
