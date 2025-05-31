import React from 'react';

import { AppHeading } from '../../components/AppHeading';
import { MainContent } from './MainContent';

export const MainPage = () => (
  <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
    <AppHeading />
    <MainContent />
  </div>
);
