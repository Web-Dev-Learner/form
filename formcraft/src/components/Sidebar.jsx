import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <div className="space-y-4">
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "block py-2 px-4 rounded bg-gray-700" : "block py-2 px-4 rounded hover:bg-gray-700"}
        >
          Home
        </NavLink>
        <NavLink
          to="/form"
          className={({ isActive }) => isActive ? "block py-2 px-4 rounded bg-gray-700" : "block py-2 px-4 rounded hover:bg-gray-700"}
        >
          Form
        </NavLink>
       
      </div>
    </aside>
  );
};

export default Sidebar;
