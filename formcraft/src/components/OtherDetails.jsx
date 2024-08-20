
import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
// import './ClientDetails.scss';
import "../styles/ClientDetails.scss";

const OtherDetails = () => {
  return (
    <div className="details-section">
      <h2 className="section-title">Other Details</h2>
      <div className="detail-item">
        <FaInfoCircle className="icon" /> <span>Additional Info: Some other details here.</span>
      </div>
    </div>
  );
};

export default OtherDetails;