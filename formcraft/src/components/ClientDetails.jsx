import React from 'react';
import { FaEnvelope, FaEdit, FaEllipsisV } from 'react-icons/fa';
import BasicDetails from './BasicDetails'; // Renamed to BasicDetails
import CompanyDetails from './CompanyDetails'; // Renamed to CompanyDetails
import OtherDetails from './OtherDetails';
import Timeline from './Timeline';
// import './ClientDetails.scss';
import "../styles/ClientDetails.scss"; // Correct import path for your SCSS file

const ClientDetails = () => {
  return (
    <div className="client-details">
      <div className="client-header">
        <h2 className="client-name">John Doe</h2>
        <div className="client-actions">
          <FaEnvelope />
          <FaEdit />
          <FaEllipsisV />
        </div>
      </div>
      <div className="client-details-content">
        <BasicDetails />
        <CompanyDetails />
        <OtherDetails />
        <Timeline />
      </div>
    </div>
  );
};

export default ClientDetails;


