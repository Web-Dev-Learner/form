import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaHome, FaUser } from 'react-icons/fa';
import './Sidebar.scss'; // Use SCSS for styling

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="menu-header">
        {isOpen && <span className="menu-text">Menu</span>}
        <div className="menu-icon" onClick={toggleSidebar}>
          <FaBars />
        </div>
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
      </div>
    </aside>
  );
};

export default Sidebar;




