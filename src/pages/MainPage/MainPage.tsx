import React, { useEffect } from 'react';

import ReactGA from 'react-ga4';

import { AppHeading } from '../../components/AppHeading';
import { GOOGLE_ANALYTICS_ID } from '../../constants/analytics';
import { OFF_WHITE } from '../../constants/styles';

import { MainContent } from './MainContent';

export const MainPage = () => {
  useEffect(() => {
    ReactGA.initialize(GOOGLE_ANALYTICS_ID);
    ReactGA.send({ hitType: "pageview", page: "/", title: "Main Page" });
  }, []);

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', background: OFF_WHITE }}>
      <AppHeading />
      <MainContent />
    </div>
  );
};
