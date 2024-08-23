import React, { useState } from 'react';
import CompanyDetails from './CompanyDetails'; 
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import "../styles/ClientDetails.scss"; 

const ClientDetails = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSidebarClick = (section) => {
    if (section === 'clientDetails') {
      handleOpen();
    } else {
      setActiveSection(section);
    }
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxHeight: '90vh', 
    overflowY: 'auto', 
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px',
  };

  return (
    <div className="client-details">
      {/* Main Content Area */}
      <div className="content-area">
        <div className="sidebar-section">
          <div
            className="sidebar-item"
            onClick={() => handleSidebarClick('clientDetails')}
          >
            Client Details
          </div>
          <nav className="small-navbar">
            <div
              className={`navbar-item ${activeSection === 'timeline' ? 'active' : ''}`}
              onClick={() => handleSidebarClick('timeline')}
            >
              Timeline
            </div>
            <div
              className={`navbar-item ${activeSection === 'files' ? 'active' : ''}`}
              onClick={() => handleSidebarClick('files')}
            >
              Files
            </div>
            <div
              className={`navbar-item ${activeSection === 'notes' ? 'active' : ''}`}
              onClick={() => handleSidebarClick('notes')}
            >
              Notes
            </div>
            <div
              className={`navbar-item ${activeSection === 'jobs' ? 'active' : ''}`}
              onClick={() => handleSidebarClick('jobs')}
            >
              Jobs
            </div>
          </nav>
        </div>

        {/* Dynamic Content Section */}
        <div className="details-section">
          {activeSection === 'timeline' && <Timeline />}
          {activeSection === 'files' && <Files />}
          {activeSection === 'notes' && <Notes />}
          {activeSection === 'jobs' && <Jobs />}
        </div>
      </div>

      {/* Modal for Client Details */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <CompanyDetails />
        </Box>
      </Modal>
    </div>
  );
};

export default ClientDetails;









