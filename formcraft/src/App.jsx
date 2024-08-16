import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Form from './components/Form';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<h1 className="text-3xl font-bold text-blue-800">Welcome to FormCraft</h1>} />
              <Route path="/form" element={<Form />} />
             
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;


