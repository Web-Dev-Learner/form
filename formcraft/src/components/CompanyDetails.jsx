import React, { useState } from 'react';
import { FaBuilding, FaEnvelope, FaPhone, FaUser, FaStickyNote, FaCalendarAlt, FaFileAlt, FaBriefcase } from 'react-icons/fa';
import Files from './Files'; // Correct import path
import Notes from './Notes'; // Correct import path
import Timeline from './Timeline'; // Correct import path
import Jobs from './Jobs'; // Import Jobs component
import "../styles/ClientDetails.scss"; // Correct import path

const CompanyDetails = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSidebarClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="company-details-container">
      <div className="details-and-sidebar">
        <div className="details-sections">
          {/* Default Sections */}
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

        {/* Sidebar */}
        <div className="sidebar-section">
          <div
            className={`sidebar-item ${activeSection === 'timeline' ? 'active' : ''}`}
            onClick={() => handleSidebarClick('timeline')}
          >
            <FaCalendarAlt className="icon" /> Timeline
          </div>
          
          <div
            className={`sidebar-item ${activeSection === 'files' ? 'active' : ''}`}
            onClick={() => handleSidebarClick('files')}
          >
            <FaFileAlt className="icon" /> Files
          </div>
          
          <div
            className={`sidebar-item ${activeSection === 'notes' ? 'active' : ''}`}
            onClick={() => handleSidebarClick('notes')}
          >
            <FaStickyNote className="icon" /> Notes
          </div>
          
          <div
            className={`sidebar-item ${activeSection === 'jobs' ? 'active' : ''}`}
            onClick={() => handleSidebarClick('jobs')}
          >
            <FaBriefcase className="icon" /> Jobs
          </div>
        </div>
      </div>

      {/* Conditionally rendered sections */}
      {activeSection === 'timeline' && <Timeline />}
      {activeSection === 'files' && <Files />}
      {activeSection === 'notes' && <Notes />}
      {activeSection === 'jobs' && <Jobs />} {/* Display Jobs component here */}
    </div>
  );
};

export default CompanyDetails;






