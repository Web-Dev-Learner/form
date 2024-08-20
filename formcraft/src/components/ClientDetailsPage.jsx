import React from 'react';
import TopNavbar from '../components/TopNavbar';
import DetailSection from '../components/DetailSection';
import './ClientDetailsPage.scss';

const ClientDetailsPage = () => {
  const basicDetails = [
    { label: 'Name', value: 'John Doe', icon: <FaUser /> },
    { label: 'Email', value: 'john@example.com', icon: <FaEnvelope /> },
    { label: 'Phone', value: '123-456-7890', icon: <FaPhone /> },
  ];

  const companyDetails = [
    { label: 'Company Name', value: 'ABC Corp', icon: <FaBuilding /> },
    { label: 'Email', value: 'contact@abccorp.com', icon: <FaEnvelope /> },
    { label: 'Phone', value: '098-765-4321', icon: <FaPhone /> },
  ];

  const otherDetails = [
    { label: 'Other Info', value: 'Additional Details', icon: <FaInfoCircle /> },
  ];

  return (
    <div className="client-details-page">
      <TopNavbar clientName="John Doe" />

      <div className="details-container">
        <div className="left-section">
          <DetailSection title="Basic Details" details={basicDetails} />
          <DetailSection title="Company Details" details={companyDetails} />
          <DetailSection title="Other Details" details={otherDetails} />
        </div>
        <div className="right-section">
          {/* Navigation for Timeline, Notes, Files, Jobs */}
        </div>
      </div>
    </div>
  );
};

export default ClientDetailsPage;
