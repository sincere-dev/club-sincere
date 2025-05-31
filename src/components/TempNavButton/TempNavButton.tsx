import React from 'react';

import { useNavigateToRandomPage } from '../../hooks';

export const TempNavButton = () => {
  const navigate = useNavigateToRandomPage();

  return (
    <button
      style={{
        position: 'absolute',
        right: 0,
        bottom: 0,
        marginRight: '8px',
        marginBottom: '8px',
      }}
      onClick={navigate}
    >
      →
    </button>
  )
}
