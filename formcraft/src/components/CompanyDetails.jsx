import React, { useState } from 'react';
import { FaBuilding, FaEnvelope, FaPhone, FaUser, FaStickyNote, FaCalendarAlt, FaFileAlt, FaBriefcase } from 'react-icons/fa';
import Files from './Files'; 
import Notes from './Notes'; 
import Timeline from './Timeline'; 
import Jobs from './Jobs'; 
import styles from './CompanyDetails.module.scss';

const CompanyDetails = () => {
  const [activeSection, setActiveSection] = useState('timeline');

  const handleNavbarClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className={styles.container}>
      {/* Default Sections */}
      <div className={styles.defaultSection}>
        <h2 className="text-xl font-semibold mb-2">Basic Details</h2>
        <div className="flex items-center mb-2">
          <FaUser className="mr-2 text-gray-600" /> <span>Name: John Doe</span>
        </div>
        <div className="flex items-center mb-2">
          <FaEnvelope className="mr-2 text-gray-600" /> <span>Email: john.doe@example.com</span>
        </div>
        <div className="flex items-center mb-2">
          <FaPhone className="mr-2 text-gray-100" /> <span>Phone: +1234567890</span>
        </div>

        <h2 className="text-xl font-semibold mt-4 mb-2">Company Details</h2>
        <div className="flex items-center mb-2">
          <FaBuilding className="mr-2 text-gray-100" /> <span>Company: ABC Corp</span>
        </div>
        <div className="flex items-center mb-2">
          <FaEnvelope className="mr-2 text-gray-600" /> <span>Email: contact@abccorp.com</span>
        </div>
        <div className="flex items-center mb-2">
          <FaPhone className="mr-2 text-gray-600" /> <span>Phone: +1987654321</span>
        </div>
      </div>

      {/* Navbar and Function Container */}
      <div className={styles.navbarContainer}>
        <div className={styles.navbar}>
          <div className={styles.navbarItems}>
            <div
              className={`${styles.navbarItem} ${activeSection === 'timeline' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
              onClick={() => handleNavbarClick('timeline')}
            >
              <FaCalendarAlt className="mr-2" /> <span>Timeline</span>
            </div>
            
            <div
              className={`${styles.navbarItem} ${activeSection === 'files' ? 'bg-gray-400' : 'hover:bg-gray-400'}`}
              onClick={() => handleNavbarClick('files')}
            >
              <FaFileAlt className="mr-2" /> <span>Files</span>
            </div>
            
            <div
              className={`${styles.navbarItem} ${activeSection === 'notes' ? 'bg-gray-400' : 'hover:bg-gray-400'}`}
              onClick={() => handleNavbarClick('notes')}
            >
              <FaStickyNote className="mr-2" /> <span>Notes</span>
            </div>
            
            <div
              className={`${styles.navbarItem} ${activeSection === 'jobs' ? 'bg-gray-400' : 'hover:bg-gray-400'}`}
              onClick={() => handleNavbarClick('jobs')}
            >
              <FaBriefcase className="mr-2" /> <span>Jobs</span>
            </div>
          </div>

          {/* Fixed Height Container for Sections */}
          <div className={styles.fixedHeightContainer}>
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


















