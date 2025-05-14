import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { MainPage } from './pages/MainPage';
import { HOME, DISSOLVE } from './constants/routes';
import { DissolvePage } from './pages/DissolvePage';

const App = () => (
  <Router>
    <Routes>
      <Route path={HOME} element={<MainPage />} />
      <Route path={DISSOLVE} element={<DissolvePage />} />
    </Routes>
  </Router>
);

export default App;
