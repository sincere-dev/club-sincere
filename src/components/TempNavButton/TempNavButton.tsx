import React from 'react';

import { useNavigateToRandomPage } from '../../hooks';

export const TempNavButton = () => {
  const navigate = useNavigateToRandomPage();

  return (
    <p
      style={{
        position: 'absolute',
        right: 30,
        bottom: 0,
        color: 'white',
        fontSize: '60px',
        fontWeight: 'bold',
      }}
      className="clickable-text"
      onClick={navigate}
    >
      →
    </p>
  );
};
