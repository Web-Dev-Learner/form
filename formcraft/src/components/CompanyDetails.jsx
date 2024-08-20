import React from 'react';
import { FaBuilding, FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';
import "../styles/ClientDetails.scss";

const CompanyDetails = () => {
  return (
    <div className="company-details-container">
      <div className="details-and-sidebar">
        <div className="details-sections">
          <div className="basic-details-container">
            <h2 className="section-title">Basic Details</h2>
            <div className="detail-item">
              <FaUser className="icon" /> <span>Name: John Doe</span>
            </div>
            <div className="detail-item">
              <FaEnvelope className="icon" /> <span>Email: john.doe@example.com</span>
            </div>
            <div className="detail-item">
              <FaPhone className="icon" /> <span>Phone: +1234567890</span>
            </div>
          </div>

          <div className="company-details-section">
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

          

        </div>

        <div className="sidebar-section">
          <div className="sidebar-item">Timeline</div>
          <div className="sidebar-item">Email</div>
          <div className="sidebar-item">Files</div>
          <div className="sidebar-item">Jobs</div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;

