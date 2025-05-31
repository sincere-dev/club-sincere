import React from 'react';

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { AppRoutes } from './constants/routes';
import { DissolvePage } from './pages/DissolvePage';
import { ExchangePage } from './pages/ExchangePage';
import { HumiliationPage } from './pages/HumiliationPage';
import { MainPage } from './pages/MainPage';
import { MemoryPage } from './pages/MemoryPage';
import { PlussedPage } from './pages/PlussedPage';
import { RudePage } from './pages/RudePage';

const App = () => (
  <Router>
    <Routes>
      <Route path={AppRoutes.HOME} element={<MainPage />} />
      <Route path={AppRoutes.DISSOLVE} element={<DissolvePage />} />
      <Route path={AppRoutes.EXCHANGE} element={<ExchangePage />} />
      <Route path={AppRoutes.HUMILIATION} element={<HumiliationPage />} />
      <Route path={AppRoutes.MEMORY} element={<MemoryPage />} />
      <Route path={AppRoutes.PLUSSED} element={<PlussedPage />} />
      <Route path={AppRoutes.RUDE} element={<RudePage />} />
    </Routes>
  </Router>
);

export default App;
