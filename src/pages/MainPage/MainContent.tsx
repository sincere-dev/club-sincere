import React from 'react';

import { DoorButton } from '../../components/DoorButton';
import { OFF_WHITE } from '../../constants/styles';

export const MainContent = () => {
  return (
    <div style={{ background: OFF_WHITE }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <a href="https://mycube.wedding/" target="_blank" rel="noopener noreferrer">
          <img
            style={{ maxWidth: '500px', marginTop: '30px' }}
            src="/img/rude07.jpg"
          />
        </a>
        <DoorButton />
      </div>
    </div>
  );
};
