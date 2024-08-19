// src/components/TopNavbar.jsx
import React from 'react';
import { FaEnvelope, FaEdit, FaEllipsisV } from 'react-icons/fa';

const TopNavbar = ({ clientName }) => {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/path/to/logo.png" alt="Logo" className="w-8 h-8 mr-2" />
        <span className="text-xl font-semibold">{clientName}</span>
      </div>
      <div className="flex items-center space-x-4">
        <button className="flex items-center">
          <FaEnvelope className="mr-2" /> Send Email
        </button>
        <button className="flex items-center">
          <FaEdit className="mr-2" /> Edit
        </button>
        <button className="flex items-center">
          <FaEllipsisV />
        </button>
      </div>
    </div>
  );
};

export default TopNavbar;
