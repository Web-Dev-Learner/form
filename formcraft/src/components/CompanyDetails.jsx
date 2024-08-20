import React from 'react';
import { FaBuilding, FaEnvelope, FaPhone } from 'react-icons/fa';
import "../styles/ClientDetails.scss";

const CompanyDetails = () => {
  return (
    <div className="company-details-container">
      <div className="details-section">
        <h2 className="section-title">Company Details</h2>
        <div className="detail-item">
          <FaBuilding className="icon" /> <span>Company: ABC Corp</span>
        </div>
        <div className="detail-item">
          <FaEnvelope className="icon" /> <span>Email: contact@abccorp.com</span>
        </div>
        <div className="detail-item">
          <FaPhone className="icon" /> <span>Phone: +1987654321</span>
        </div>
      </div>
      <div className="sidebar-section">
        <div className="sidebar-item">Timeline</div>
        <div className="sidebar-item">Email</div>
        <div className="sidebar-item">Files</div>
        <div className="sidebar-item">Jobs</div>
      </div>
    </div>
  );
};

export default CompanyDetails;


