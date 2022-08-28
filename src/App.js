import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Nav from './components/nav/nav';
import TransitionScreen from './components/transition-screen/transition-screen'

import Italy from './pages/italy/italy'
import Cities from './pages/cities/cities';
import Milano from './pages/milano/milano';
import Roma from './pages/roma/roma';
import Napoli from './pages/napoli/napoli';

import './index.css';

function App() {
  const location = useLocation();
  return (
    <>
    
    <AnimatePresence mode='wait'>
      <Nav key={'nav'}/>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Italy />} />
        <Route path="/cities" element={<Cities />}/>
        <Route path="/cities/milano" element={<Milano />} />
        <Route path="/cities/roma" element={<Roma />} />
        <Route path="/cities/napoli" element={<Napoli />} />
      </Routes>
      <TransitionScreen key={'transition'}/>
      </AnimatePresence>
    </>
  );
}

export default App;
