import React from 'react';

import { TITLE } from '../../constants/words';

export const AppHeading = () => (
  <div style={{ position: 'fixed', top: 0, right: 0, left: 0, background: 'white', paddingTop: '3px', paddingRight: '3px' }}>
    <h1>{TITLE}</h1>
  </div>
);
