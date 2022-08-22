import {Route, Routes, useLocation} from 'react-router-dom';

import Italy from './pages/italy'
import Cities from './pages/cities/cities';
import Milano from './pages/cities/milano/milano';
import Roma from './pages/cities/roma/roma';
import Napoli from './pages/cities/napoli/napoli';

import './index.css';

function App() {
  const location = useLocation();
  
  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<Italy />} />
      <Route path="/cities" element={<Cities />} />
      <Route path="/cities/milano" element={<Milano />} />
      <Route path="/cities/roma" element={<Roma />} />
      <Route path="/cities/napoli" element={<Napoli />} />
    </Routes>
  );
}

export default App;
