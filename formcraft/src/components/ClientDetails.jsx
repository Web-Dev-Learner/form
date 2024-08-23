import React, { useState } from 'react';
import Files from './Files';
import Notes from './Notes';
import Timeline from './Timeline';
import Jobs from './Jobs';
import './ClientDetails.scss';

const ClientDetails = () => {
  const [activeSection, setActiveSection] = useState('timeline');

  return (
    <div className="client-details-popup">
      <div className="sidebar">
        <div onClick={() => setActiveSection('timeline')}>Timeline</div>
        <div onClick={() => setActiveSection('files')}>Files</div>
        <div onClick={() => setActiveSection('notes')}>Notes</div>
        <div onClick={() => setActiveSection('jobs')}>Jobs</div>
      </div>
      
      <div className="main-content">
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

export default ClientDetails;



















