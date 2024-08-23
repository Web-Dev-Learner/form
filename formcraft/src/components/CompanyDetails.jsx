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
    <div className="flex flex-col md:flex-row">
      {/* Default Sections */}
      <div className="w-full md:w-1/3 p-4 border border-gray-300 rounded bg-white shadow-sm mb-4 md:mb-0">
        <h2 className="text-xl font-semibold mb-2">Basic Details</h2>
        <div className="flex items-center mb-2">
          <FaUser className="mr-2 text-gray-600" /> <span>Name: John Doe</span>
        </div>
        <div className="flex items-center mb-2">
          <FaEnvelope className="mr-2 text-gray-600" /> <span>Email: john.doe@example.com</span>
        </div>
        <div className="flex items-center mb-2">
          <FaPhone className="mr-2 text-gray-600" /> <span>Phone: +1234567890</span>
        </div>

        <h2 className="text-xl font-semibold mt-4 mb-2">Company Details</h2>
        <div className="flex items-center mb-2">
          <FaBuilding className="mr-2 text-gray-600" /> <span>Company: ABC Corp</span>
        </div>
        <div className="flex items-center mb-2">
          <FaEnvelope className="mr-2 text-gray-600" /> <span>Email: contact@abccorp.com</span>
        </div>
        <div className="flex items-center mb-2">
          <FaPhone className="mr-2 text-gray-600" /> <span>Phone: +1987654321</span>
        </div>
      </div>

      {/* Navbar and Function Container */}
      <div className="w-full md:w-2/3 p-4">
        <div className="bg-gray-200 rounded-md p-4 shadow-md mb-4">
          <div className="bg-gray-300 text-gray-800 flex flex-col md:flex-row p-2 rounded-md">
            <div
              className={`p-2 cursor-pointer rounded-lg flex items-center transition-all mb-2 md:mb-0 md:mr-2 ${activeSection === 'timeline' ? 'bg-gray-400' : 'hover:bg-gray-400'}`}
              onClick={() => handleNavbarClick('timeline')}
            >
              <FaCalendarAlt className="mr-2" /> <span>Timeline</span>
            </div>
            
            <div
              className={`p-2 cursor-pointer rounded-lg flex items-center transition-all mb-2 md:mb-0 md:mr-2 ${activeSection === 'files' ? 'bg-gray-400' : 'hover:bg-gray-400'}`}
              onClick={() => handleNavbarClick('files')}
            >
              <FaFileAlt className="mr-2" /> <span>Files</span>
            </div>
            
            <div
              className={`p-2 cursor-pointer rounded-lg flex items-center transition-all mb-2 md:mb-0 md:mr-2 ${activeSection === 'notes' ? 'bg-gray-400' : 'hover:bg-gray-400'}`}
              onClick={() => handleNavbarClick('notes')}
            >
              <FaStickyNote className="mr-2" /> <span>Notes</span>
            </div>
            
            <div
              className={`p-2 cursor-pointer rounded-lg flex items-center transition-all ${activeSection === 'jobs' ? 'bg-gray-400' : 'hover:bg-gray-400'}`}
              onClick={() => handleNavbarClick('jobs')}
            >
              <FaBriefcase className="mr-2" /> <span>Jobs</span>
            </div>
          </div>

          {/* Conditionally rendered sections */}
          <div className="p-4 border border-gray-300 rounded bg-white">
            {activeSection === 'timeline' && <Timeline />}
            {activeSection === 'files' && <Files />}
            {activeSection === 'notes' && <Notes />}
            {activeSection === 'jobs' && <Jobs />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;















