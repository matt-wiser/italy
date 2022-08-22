import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Italy from './pages/italy'
import Cities from './pages/cities/cities';
import Milano from './pages/cities/milano/milano';
import Roma from './pages/cities/roma/roma';
import Napoli from './pages/cities/napoli/napoli';


const root = ReactDOM.createRoot(document.getElementById('root'));

// Currently using BrowserRouter for local development, will need to be changed to HashRouter for GitHub Pages deployment as well as defining a homepage in package.json

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Italy />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/cities/milano" element={<Milano />} />
          <Route path="/cities/roma" element={<Roma />} />
          <Route path="/cities/napoli" element={<Napoli />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);