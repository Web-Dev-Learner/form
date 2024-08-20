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
        <NavLink to="/" className="link" activeClassName="active">
          <FaHome className="icon" />
          {isOpen && <span className="text">Home</span>}
        </NavLink>
        <NavLink to="/client-details" className="link" activeClassName="active">
          <FaUser className="icon" />
          {isOpen && <span className="text">Client Details</span>}
        </NavLink>
        <NavLink to="/form" className="link" activeClassName="active">
          <FaWpforms className="icon" />
          {isOpen && <span className="text">Form</span>}
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;




