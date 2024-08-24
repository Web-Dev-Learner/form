import React, { useState } from 'react';
import Timeline from './Timeline';
import Files from './Files';
import Notes from './Notes';
import Jobs from './Jobs';
import '../styles/ClientDetails.scss';



const ClientDetails = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('timeline');

  const renderContent = () => {
    switch (activeTab) {
      case 'timeline':
        return <Timeline />;
      case 'files':
        return <Files />;
      case 'notes':
        return <Notes />;
      case 'jobs':
        return <Jobs />;
      default:
        return <Timeline />;
    }
  };

  return (
    <div className="client-details-overlay">
      <div className="client-details-popup">
        {/* Close Button */}
        <button className="close-button" onClick={onClose}>
          &times;
        </button>

        {/* Left Section */}
        <div className="left-section">
          <div className="details-section">
            <h1>Basic Details</h1>
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Email:</strong> john.doe@example.com</p>
            <p><strong>Phone:</strong> +1234567890</p>
          </div>

          <div className="details-section">
            <h1>Company Details</h1>
            <p><strong>Company:</strong> ABC Corp</p>
            <p><strong>Email:</strong> contact@abccorp.com</p>
            <p><strong>Phone:</strong> +1987654321</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="tabs">
            <button
              className={`tab-item ${activeTab === 'timeline' ? 'active' : ''}`}
              onClick={() => setActiveTab('timeline')}
            >
              Timeline
            </button>
            <button
              className={`tab-item ${activeTab === 'files' ? 'active' : ''}`}
              onClick={() => setActiveTab('files')}
            >
              Files
            </button>
            <button
              className={`tab-item ${activeTab === 'notes' ? 'active' : ''}`}
              onClick={() => setActiveTab('notes')}
            >
              Notes
            </button>
            <button
              className={`tab-item ${activeTab === 'jobs' ? 'active' : ''}`}
              onClick={() => setActiveTab('jobs')}
            >
              Jobs
            </button>
          </div>

          <div className="content-area">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
