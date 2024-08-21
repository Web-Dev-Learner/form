import React, { useState } from 'react';
import BasicDetails from './BasicDetails'; // Import BasicDetails
import CompanyDetails from './CompanyDetails'; // Import CompanyDetails
import Files from './Files'; // Import Files
import Notes from './Notes'; // Import Notes
import Timeline from './Timeline'; // Import Timeline
import "../styles/ClientDetails.scss"; // Correct import path for your SCSS file

const ClientDetails = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSidebarClick = (section) => {
    setActiveSection(prevSection => (prevSection === section ? null : section)); // Toggle between null and section
  };

  return (
    <div className="client-details">
      <div className="sidebar-section">
        <div
          className={`sidebar-item ${activeSection === 'files' ? 'active' : ''}`}
          onClick={() => handleSidebarClick('files')}
        >
          Files
        </div>
        <div
          className={`sidebar-item ${activeSection === 'notes' ? 'active' : ''}`}
          onClick={() => handleSidebarClick('notes')}
        >
          Notes
        </div>
        <div
          className={`sidebar-item ${activeSection === 'timeline' ? 'active' : ''}`}
          onClick={() => handleSidebarClick('timeline')}
        >
          Timeline
        </div>
      </div>

      <div className="client-details-content">
        <BasicDetails />
        <CompanyDetails />
        {activeSection === 'files' && <Files />}
        {activeSection === 'notes' && <Notes />}
        {activeSection === 'timeline' && <Timeline />}
      </div>
    </div>
  );
};

export default ClientDetails;





