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
        <div className="flex-1 flex flex-col">
          <Navbar />
          <div className="flex-grow flex items-start justify-center p-4">
            <Routes>
              <Route 
                path="/" 
                element={
                  <h1 className="text-3xl font-bold text-purple-800 text-center mt-10">
                    Welcome to FormCraft
                  </h1>
                } 
              />
              <Route path="/form" element={<Form />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
