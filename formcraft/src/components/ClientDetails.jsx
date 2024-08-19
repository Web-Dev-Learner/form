// src/components/ClientDetails.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaEnvelope, FaFile, FaBriefcase, FaStickyNote } from 'react-icons/fa';
import './ClientDetails.scss'; // Update the path as needed

const ClientDetails = () => {
  return (
    <div className="client-details">
      <div className="sidebar">
        <h2 className="text-2xl font-semibold mb-4">Client Details</h2>
        <p className="text-gray-600">Name: John Doe</p>
        <p className="text-gray-600">Email: john@example.com</p>
        <p className="text-gray-600">Phone: 123-456-7890</p>
      </div>
      <div className="actions">
        <NavLink to="/email" className="action-item">
          <FaEnvelope /> Send Email
        </NavLink>
        <NavLink to="/files" className="action-item">
          <FaFile /> Files
        </NavLink>
        <NavLink to="/jobs" className="action-item">
          <FaBriefcase /> Jobs
        </NavLink>
        <NavLink to="/notes" className="action-item">
          <FaStickyNote /> Notes
        </NavLink>
      </div>
    </div>
  );
};

export default ClientDetails;
