import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// import i18n (needs to be bundled ;))
import './i18n';

import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  </BrowserRouter>
);
