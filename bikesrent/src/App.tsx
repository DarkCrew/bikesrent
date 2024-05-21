import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import AgreementPage from 'pages/AgreementPage/AgreementPage';
import HomePage from 'pages/HomePage/HomePage';
import OfferPage from 'pages/OfferPage/OfferPage';
import PoliticPage from 'pages/PoliticPage/PoliticPage';

import './App.css';
import './styles/normalize.css';
import './styles/index.scss';

const App = (): ReactElement => {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="/politic" element={<PoliticPage />} />
      <Route path="/rodo" element={<OfferPage />} />
      <Route path="/regulamin" element={<AgreementPage />} />
    </Routes>
  );
};

export default App;
