import React, { useState } from 'react';
// import BasicDetails from './BasicDetails'; // Import BasicDetails
import CompanyDetails from './CompanyDetails'; 
import "../styles/ClientDetails.scss"; 

const ClientDetails = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSidebarClick = (section) => {
    setActiveSection(prevSection => (prevSection === section ? null : section)); 
  };

  return (
    <div className="client-details">
      <div className="sidebar-section">
        <div>Basic details</div>
        <div
          className={`sidebar-item ${activeSection === 'timeline' ? 'active' : ''}`}
          onClick={() => handleSidebarClick('timeline')}
        >
          
        </div>
        <div
          className={`sidebar-item ${activeSection === 'files' ? 'active' : ''}`}
          onClick={() => handleSidebarClick('files')}
        >
         
        </div>
        <div
          className={`sidebar-item ${activeSection === 'notes' ? 'active' : ''}`}
          onClick={() => handleSidebarClick('notes')}
        >
         
        </div>
        <div
          className={`sidebar-item ${activeSection === 'jobs' ? 'active' : ''}`}
          onClick={() => handleSidebarClick('jobs')}
        >
          
        </div>
      </div>

      <div className="client-details-content">
        <CompanyDetails />
        {activeSection === 'timeline' && <div>Timeline content here</div>}
        {activeSection === 'files' && <div>Files content here</div>}
        {activeSection === 'notes' && <div>Notes content here</div>}
        {activeSection === 'jobs' && <div>Jobs content here</div>}
      </div>
    </div>
  );
};

export default ClientDetails;






