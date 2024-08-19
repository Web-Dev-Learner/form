// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaWpforms, FaEnvelope } from 'react-icons/fa';
import './Sidebar.scss'; // Update the path as needed

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={toggleSidebar} className="toggle-btn">
        {isOpen ? 'Close' : 'Open'} Sidebar
      </button>
      <nav>
        <NavLink to="/" className="link"><FaHome /> Home</NavLink>
        <NavLink to="/form" className="link"><FaWpforms /> Form</NavLink>
        <NavLink to="/client-details" className="link"><FaEnvelope /> Client Details</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;



