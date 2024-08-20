import React from 'react';
import { FaEnvelope, FaEdit, FaEllipsisV } from 'react-icons/fa';

import "../styles/TopNavBar.scss";


const TopNavbar = ({ clientName }) => {
  return (
    <div className="top-navbar">
      <div className="logo">
        {/* Your Logo */}
      </div>
      <div className="client-name">
        {clientName}
      </div>
      <div className="actions">
        <FaEnvelope className="action-icon" />
        <FaEdit className="action-icon" />
        <FaEllipsisV className="action-icon" />
      </div>
    </div>
  );
};

export default TopNavbar;


