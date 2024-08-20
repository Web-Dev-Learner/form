import React, { useState } from 'react';
import { FaBuilding, FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';
import "../styles/ClientDetails.scss";

const CompanyDetails = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSidebarClick = (section) => {
    setActiveSection(section);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      // Handle file upload here
      console.log("Dropped files:", files);
    }
  };

  const handleClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      // Handle file upload here
      console.log("Selected files:", files);
    }
  };

  return (
    <div className="company-details-container">
      <div className="details-and-sidebar">
        <div className="details-sections">
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

          {/* Other details if needed */}
        </div>

        <div className="sidebar-section">
          <div
            className={`sidebar-item ${activeSection === 'timeline' ? 'active' : ''}`}
            onClick={() => handleSidebarClick('timeline')}
          >
            Timeline
          </div>
          <div
            className={`sidebar-item ${activeSection === 'email' ? 'active' : ''}`}
            onClick={() => handleSidebarClick('email')}
          >
            Email
          </div>
          <div
            className={`sidebar-item ${activeSection === 'files' ? 'active' : ''}`}
            onClick={() => handleSidebarClick('files')}
          >
            Files
          </div>
          <div
            className={`sidebar-item ${activeSection === 'jobs' ? 'active' : ''}`}
            onClick={() => handleSidebarClick('jobs')}
          >
            Jobs
          </div>
        </div>
      </div>

      {activeSection === 'files' && (
        <div className="file-upload-section"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={handleClick}
        >
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={handleFileChange}
            multiple
          />
          <p>Drag & drop files here or click to select files</p>
        </div>
      )}
    </div>
  );
};

export default CompanyDetails;


