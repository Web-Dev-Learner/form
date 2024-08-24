import React, { useState } from 'react';
import { FaBuilding, FaEnvelope, FaPhone, FaUser, FaStickyNote, FaCalendarAlt, FaFileAlt, FaBriefcase } from 'react-icons/fa';
import Files from './Files'; 
import Notes from './Notes'; 
import Timeline from './Timeline'; 
import Jobs from './Jobs'; 
 

const CompanyDetails = () => {
  const [activeSection, setActiveSection] = useState('timeline');

  const handleNavbarClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="company-details-container">
      {/* Default Sections */}
      <div className="default-section">
        <h1>Basic Details</h1>
        <div className="detail-item">
          <FaUser /> <span>Name: John Doe</span>
        </div>
        <div className="detail-item">
          <FaEnvelope /> <span>Email: john.doe@example.com</span>
        </div>
        <div className="detail-item">
          <FaPhone /> <span>Phone: +1234567890</span>
        </div>

        <h1>Company Details</h1>
        <div className="detail-item">
          <FaBuilding /> <span>Company: ABC Corp</span>
        </div>
        <div className="detail-item">
          <FaEnvelope /> <span>Email: contact@abccorp.com</span>
        </div>
        <div className="detail-item">
          <FaPhone /> <span>Phone: +1987654321</span>
        </div>
      </div>

      {/* Navbar and Content Section */}
      <div className="right-section">
        <div className="navbar">
          <div
            className={`navbar-item ${activeSection === 'timeline' ? 'active' : ''}`}
            onClick={() => handleNavbarClick('timeline')}
          >
            <FaCalendarAlt /> <span>Timeline</span>
          </div>
          <div
            className={`navbar-item ${activeSection === 'files' ? 'active' : ''}`}
            onClick={() => handleNavbarClick('files')}
          >
            <FaFileAlt /> <span>Files</span>
          </div>
          <div
            className={`navbar-item ${activeSection === 'notes' ? 'active' : ''}`}
            onClick={() => handleNavbarClick('notes')}
          >
            <FaStickyNote /> <span>Notes</span>
          </div>
          <div
            className={`navbar-item ${activeSection === 'jobs' ? 'active' : ''}`}
            onClick={() => handleNavbarClick('jobs')}
          >
            <FaBriefcase /> <span>Jobs</span>
          </div>
        </div>

        {/* Fixed Height Container for Sections */}
        <div className="content-area">
          {activeSection === 'timeline' && <Timeline />}
          {activeSection === 'files' && <Files />}
          {activeSection === 'notes' && <Notes />}
          {activeSection === 'jobs' && <Jobs />}
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;









































