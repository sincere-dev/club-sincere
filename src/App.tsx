import React from 'react';

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { AppRoutes } from './constants/routes';
import {
  AlbinoPage,
  DissolvePage,
  ExchangePage,
  FreePage,
  GibsonPage,
  HumiliationPage,
  KarlPage,
  MainPage,
  MemoryPage,
  PlussedPage,
  RudePage,
} from './pages';

const App = () => (
  <Router>
    <Routes>
      <Route path={AppRoutes.HOME} element={<MainPage />} />
      <Route path={AppRoutes.ALBINO} element={<AlbinoPage />} />
      <Route path={AppRoutes.DISSOLVE} element={<DissolvePage />} />
      <Route path={AppRoutes.EXCHANGE} element={<ExchangePage />} />
      <Route path={AppRoutes.FREE} element={<FreePage />} />
      <Route path={AppRoutes.GIBSON} element={<GibsonPage />} />
      <Route path={AppRoutes.HUMILIATION} element={<HumiliationPage />} />
      <Route path={AppRoutes.KARL} element={<KarlPage />} />
      <Route path={AppRoutes.MEMORY} element={<MemoryPage />} />
      <Route path={AppRoutes.PLUSSED} element={<PlussedPage />} />
      <Route path={AppRoutes.RUDE} element={<RudePage />} />
    </Routes>
  </Router>
);

export default App;
