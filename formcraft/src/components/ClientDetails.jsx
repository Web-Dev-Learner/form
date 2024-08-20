import React from 'react';

import BasicDetails from './BasicDetails'; // Renamed to BasicDetails
import CompanyDetails from './CompanyDetails'; // Renamed to CompanyDetails
import OtherDetails from './OtherDetails';
import Timeline from './Timeline';
// import './ClientDetails.scss';
import "../styles/ClientDetails.scss"; // Correct import path for your SCSS file

const ClientDetails = () => {
  return (
    <div className="client-details">
   
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





