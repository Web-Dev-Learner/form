import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNavbar from './components/TopNavbar';
import Home from './components/Home';
import Form from './components/Form';
import ClientDetails from './components/ClientDetails';

import Files from './components/Files';
import Jobs from './components/Jobs';
import Notes from './components/Notes';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1">
          <TopNavbarWrapper />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/form" element={<Form />} />
              <Route path="/client-details" element={<ClientDetails />} />
             
              <Route path="/files" element={<Files />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/notes" element={<Notes />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

// Wrapper component to manage TopNavbar clientName based on route
const TopNavbarWrapper = () => {
  const location = useLocation();
  
  // Determine if "Client Details" is the active route
  const isClientDetailsActive = location.pathname === '/client-details';

  return (
    <TopNavbar clientName={isClientDetailsActive ? 'John Doe' : ''} />
  );
};

export default App;
