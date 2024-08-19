import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaWpforms, FaEnvelope, FaBars } from 'react-icons/fa';
import './Sidebar.scss'; // Ensure the path is correct

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={toggleSidebar} className="toggle-btn">
        <FaBars className="menu-icon" />
      </button>
      <nav className="nav">
        <NavLink to="/" className="link">
          <FaHome className="icon" />
          {isOpen && <span className="text">Home</span>}
        </NavLink>
        <NavLink to="/form" className="link">
          <FaWpforms className="icon" />
          {isOpen && <span className="text">Form</span>}
        </NavLink>
        <NavLink to="/client-details" className="link">
          <FaEnvelope className="icon" />
          {isOpen && <span className="text">Client Details</span>}
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;



