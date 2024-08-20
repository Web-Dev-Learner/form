import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaHome, FaWpforms, FaUser } from 'react-icons/fa';
import '../styles/sidebar.scss';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="menu-header">
        <span className="menu-icon" onClick={toggleSidebar}> 
          <FaBars />
        </span>
        {isOpen && <span className="text">Menu</span>}
      </div>
      <div className="menu-items">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'link active' : 'link'}
        >
          <FaHome className="icon" />
          {isOpen && <span className="text">Home</span>}
        </NavLink>
        <NavLink 
          to="/client-details" 
          className={({ isActive }) => isActive ? 'link active' : 'link'}
        >
          <FaUser className="icon" />
          {isOpen && <span className="text">Client Details</span>}
        </NavLink>
        <NavLink 
          to="/form" 
          className={({ isActive }) => isActive ? 'link active' : 'link'}
        >
          <FaWpforms className="icon" />
          {isOpen && <span className="text">Form</span>}
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;




