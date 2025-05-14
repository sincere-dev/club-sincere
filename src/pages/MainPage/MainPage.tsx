import React from 'react';

import { AppHeading } from '../../components/AppHeading';
import { ContentList } from '../../components/ContentList';
import { PageNav } from '../../components/PageNav/PageNav';

export const MainPage = () => (
  <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
    <AppHeading />
    <ContentList />
    <PageNav />
  </div>
);
