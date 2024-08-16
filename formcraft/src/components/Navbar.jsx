import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-lg font-semibold">
          Form
        </div>
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "text-white underline" : "text-white hover:text-gray-300"}
          >
            Home
          </NavLink>
          <NavLink
            to="/form"
            className={({ isActive }) => isActive ? "text-white underline" : "text-white hover:text-gray-300"}
          >
            Form
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
