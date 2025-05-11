import React from 'react';
import { Link } from 'react-router-dom';

import { DIFFERENT_FUTURE, HOME, HUMILIATION } from '../../constants/routes';

export const PageNav = () => (
  <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
    <div style={{
      height: '100px',
      background: 'linear-gradient(to top, white, rgba(255, 255, 255, 0))',
    }} />
    <nav style={{ background: 'white' }}>
      <Link to={HOME}>home</Link>{' | '}
      <Link to={DIFFERENT_FUTURE}>future</Link>{' | '}
      <Link to={HUMILIATION}>this century</Link>
    </nav>
  </div>
);
