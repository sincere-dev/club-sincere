import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainPage } from './pages/MainPage';
import { DifferentFuturePage } from './pages/DifferentFuturePage';
import { HumiliationPage } from './pages/HumiliationPage';
import { DIFFERENT_FUTURE, HOME, HUMILIATION } from './constants/routes';
import { PageNav } from './components/PageNav/PageNav';

const App = () => (
  <Router>
    <Routes>
      <Route path={HOME} element={<MainPage />} />
      <Route path={DIFFERENT_FUTURE} element={<DifferentFuturePage />} />
      <Route path={HUMILIATION} element={<HumiliationPage />} />
    </Routes>
    <PageNav />
  </Router>
);

export default App;
