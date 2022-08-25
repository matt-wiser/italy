import { Outlet } from 'react-router-dom';

import Nav from './components/nav/nav';

import './index.css';

function App() {
  
  return (
    <>
    <Nav />
    
    {/* Outlet component allows for nested UI elements to display, 
    because all pages are rendered within the App layout this component is required */}
    <Outlet />
    </>
  );
}

export default App;
