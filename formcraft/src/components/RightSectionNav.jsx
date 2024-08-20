import React, { useState } from 'react';
import './RightSectionNavigation.scss';

const RightSectionNavigation = () => {
  const [activeTab, setActiveTab] = useState('timeline');

  return (
    <div className="right-section-navigation">
      <div className="tabs">
        <button onClick={() => setActiveTab('timeline')}>Timeline</button>
        <button onClick={() => setActiveTab('notes')}>Notes</button>
        <button onClick={() => setActiveTab('files')}>Files</button>
        <button onClick={() => setActiveTab('jobs')}>Jobs</button>
      </div>
      <div className="content">
        {activeTab === 'timeline' && (
          <div>
            <p>Send Email - 21 July 2024</p>
          </div>
        )}
        {activeTab === 'notes' && (
          <textarea placeholder="Write a note..."></textarea>
        )}
        {activeTab === 'files' && (
          <div>
            <p>Drag a file here or browse to upload</p>
            {/* Add file upload input */}
          </div>
        )}
        {activeTab === 'jobs' && (
          <div>
            {/* Jobs content */}
          </div>
        )}
      </div>
    </div>
  );
};

export default RightSectionNavigation;
