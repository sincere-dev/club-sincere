import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { MainPage } from './pages/MainPage';
import { HOME, DISSOLVE, EXCHANGE, MEMORY, PLUSSED, RUDE } from './constants/routes';
import { DissolvePage } from './pages/DissolvePage';
import { ExchangePage } from './pages/ExchangePage';
import { MemoryPage } from './pages/MemoryPage';
import { PlussedPage } from './pages/PlussedPage';
import { RudePage } from './pages/RudePage';

const App = () => (
  <Router>
    <Routes>
      <Route path={HOME} element={<MainPage />} />
      <Route path={DISSOLVE} element={<DissolvePage />} />
      <Route path={EXCHANGE} element={<ExchangePage />} />
      <Route path={MEMORY} element={<MemoryPage />} />
      <Route path={PLUSSED} element={<PlussedPage />} />
      <Route path={RUDE} element={<RudePage />} />
    </Routes>
  </Router>
);

export default App;
