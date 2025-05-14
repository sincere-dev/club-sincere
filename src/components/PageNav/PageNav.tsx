import React from 'react';
import { Link } from 'react-router-dom';

import { DISSOLVE, HOME, RUDE } from '../../constants/routes';

export const PageNav = () => (
  <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
    <div style={{
      height: '100px',
      background: 'linear-gradient(to top, white, rgba(255, 255, 255, 0))',
    }} />
    <nav style={{ background: 'white' }}>
      <Link to={HOME}>home</Link>{' | '}
      <Link to={DISSOLVE}>dissolve</Link>{' | '}
      <Link to={RUDE}>rude</Link>
    </nav>
  </div>
);
