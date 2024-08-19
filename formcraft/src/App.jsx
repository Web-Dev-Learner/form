import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import ClientDetails from './components/ClientDetails';
import Email from './components/Email';
import Notes from './components/Notes';
import Files from './components/Files';
import Jobs from './components/Jobs';
import Form from './components/Form';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <div className="flex-grow p-4">
            <Routes>
              <Route path="/" element={<ClientDetails />} />
              <Route path="/form" element={<Form />} />
              <Route path="/email" element={<Email />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/files" element={<Files />} />
              <Route path="/jobs" element={<Jobs />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

