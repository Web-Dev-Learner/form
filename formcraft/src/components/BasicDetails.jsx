import React from 'react';
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';
 //import './ClientDetails.scss';
 import "../styles/ClientDetails.scss";

const BasicDetails = () => {
  return (
    <div className="details-section">
      <h2 className="section-title">Basic Details</h2>
      <div className="detail-item">
        <FaUser className="icon" /> <span>Name: John Doe</span>
      </div>
      <div className="detail-item">
        <FaEnvelope className="icon" /> <span>Email: johndoe@example.com</span>
      </div>
      <div className="detail-item">
        <FaPhone className="icon" /> <span>Phone: +1234567890</span>
      </div>
    </div>
  );
};

export default BasicDetails;
