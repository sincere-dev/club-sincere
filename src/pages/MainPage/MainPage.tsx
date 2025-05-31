import React from 'react';

import { AppHeading } from '../../components/AppHeading';
import { OFF_WHITE } from '../../constants/styles';

import { MainContent } from './MainContent';

export const MainPage = () => (
  <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: OFF_WHITE }}>
    <AppHeading />
    <MainContent />
  </div>
);
