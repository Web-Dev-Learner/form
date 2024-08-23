import React, { useState } from 'react';
import { FaBuilding, FaEnvelope, FaPhone, FaUser, FaStickyNote, FaCalendarAlt, FaFileAlt, FaBriefcase } from 'react-icons/fa';
import Files from './Files'; 
import Notes from './Notes'; 
import Timeline from './Timeline'; 
import Jobs from './Jobs'; 

const CompanyDetails = () => {
  const [activeSection, setActiveSection] = useState('timeline'); // Default section is 'timeline'

  const handleSidebarClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="flex space-x-4 p-4">
      {/* Left Side: Details */}
      <div className="flex-1 space-y-4">
        <div className="p-4 border border-gray-300 rounded bg-white">
          <h2 className="text-xl font-semibold mb-2">Basic Details</h2>
          <div className="flex items-center mb-2">
            <FaUser className="mr-2 text-gray-600" />
            <span>Name: John Doe</span>
          </div>
          <div className="flex items-center mb-2">
            <FaEnvelope className="mr-2 text-gray-600" />
            <span>Email: john.doe@example.com</span>
          </div>
          <div className="flex items-center mb-2">
            <FaPhone className="mr-2 text-gray-600" />
            <span>Phone: +1234567890</span>
          </div>
        </div>

        <div className="p-4 border border-gray-300 rounded bg-white">
          <h2 className="text-xl font-semibold mb-2">Company Details</h2>
          <div className="flex items-center mb-2">
            <FaBuilding className="mr-2 text-gray-600" />
            <span>Company: ABC Corp</span>
          </div>
          <div className="flex items-center mb-2">
            <FaEnvelope className="mr-2 text-gray-600" />
            <span>Email: contact@abccorp.com</span>
          </div>
          <div className="flex items-center mb-2">
            <FaPhone className="mr-2 text-gray-600" />
            <span>Phone: +1987654321</span>
          </div>
        </div>
      </div>

      {/* Right Side: Navigation and Content */}
      <div className="flex-1 space-y-4">
        {/* Navigation Bar */}
        <div className="p-4 border border-gray-300 rounded bg-gray-100">
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 rounded ${activeSection === 'timeline' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
              onClick={() => handleSidebarClick('timeline')}
            >
              <FaCalendarAlt className="mr-1" /> Timeline
            </button>
            <button
              className={`px-4 py-2 rounded ${activeSection === 'files' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
              onClick={() => handleSidebarClick('files')}
            >
              <FaFileAlt className="mr-1" /> Files
            </button>
            <button
              className={`px-4 py-2 rounded ${activeSection === 'notes' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
              onClick={() => handleSidebarClick('notes')}
            >
              <FaStickyNote className="mr-1" /> Notes
            </button>
            <button
              className={`px-4 py-2 rounded ${activeSection === 'jobs' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
              onClick={() => handleSidebarClick('jobs')}
            >
              <FaBriefcase className="mr-1" /> Jobs
            </button>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-4 border border-gray-300 rounded bg-white">
          {/* Conditionally rendered sections */}
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








