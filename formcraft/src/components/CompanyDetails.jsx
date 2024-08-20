import React from 'react';
import { FaBuilding, FaEnvelope, FaPhone } from 'react-icons/fa';
//import './ClientDetails.scss';
import "../styles/ClientDetails.scss";

const CompanyDetails = () => {
  return (
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
  );
};

export default CompanyDetails;
