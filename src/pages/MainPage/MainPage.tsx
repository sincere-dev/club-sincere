import React from 'react';

import { AppHeading } from '../../components/AppHeading';
import { ContentList } from '../../components/ContentList';

export const MainPage = () => (
  <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
    <AppHeading />
    <ContentList />
  </div>
);
