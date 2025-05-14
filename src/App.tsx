import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { MainPage } from './pages/MainPage';
import { HOME, DISSOLVE, RUDE } from './constants/routes';
import { DissolvePage } from './pages/DissolvePage';
import { RudePage } from './pages/RudePage';

const App = () => (
  <Router>
    <Routes>
      <Route path={HOME} element={<MainPage />} />
      <Route path={DISSOLVE} element={<DissolvePage />} />
      <Route path={RUDE} element={<RudePage />} />
    </Routes>
  </Router>
);

export default App;
