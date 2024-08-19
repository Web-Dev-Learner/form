import React from 'react';
import { FaEnvelope, FaEdit, FaEllipsisV } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src="/path-to-your-logo/logo.png" alt="Logo" className="h-8" />
        <div className="text-xl font-semibold">Client Details</div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-black">
          <FaEnvelope />
        </button>
        <button className="text-gray-600 hover:text-black">
          <FaEdit />
        </button>
        <button className="text-gray-600 hover:text-black">
          <FaEllipsisV />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
