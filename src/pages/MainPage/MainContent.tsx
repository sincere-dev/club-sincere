import React from 'react';

import { DoorButton } from '../../components/DoorButton';
import { OFF_WHITE } from '../../constants/styles';
import { TITLE } from '../../constants/words';

export const MainContent = () => {
  return (
    <div style={{ background: OFF_WHITE }}>
      <div style={{ position: 'sticky', top: 0, marginTop: '30px' }}>
        <h1>{TITLE}</h1>
        <div
          style={{
            height: '140px',
            // background: 'linear-gradient(to bottom, white, rgba(255, 255, 255, 0))',
          }}
        />
      </div>
      <div
        style={{
          height: '800px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <DoorButton />
        {/*<button*/}
        {/*  style={{ cursor: 'pointer' }}*/}
        {/*  onClick={navigate}*/}
        {/*>*/}
        {/*  [enter]*/}
        {/*</button>*/}
      </div>
    </div>
  );
};
