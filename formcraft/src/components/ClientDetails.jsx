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
    maxHeight: '90vh', // Ensure scrollable if content is too long
    overflowY: 'auto', // Enable vertical scrolling
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px',
  };

  return (
    <div className="client-details">
      <div className="sidebar-section">
        <div
          className="sidebar-item"
          onClick={() => handleSidebarClick('clientDetails')}
        >
          Client Details
        </div>
        <div
          className={`sidebar-item ${activeSection === 'timeline' ? 'active' : ''}`}
          onClick={() => handleSidebarClick('timeline')}
        >
          Timeline
        </div>
        <div
          className={`sidebar-item ${activeSection === 'files' ? 'active' : ''}`}
          onClick={() => handleSidebarClick('files')}
        >
          Files
        </div>
        <div
          className={`sidebar-item ${activeSection === 'notes' ? 'active' : ''}`}
          onClick={() => handleSidebarClick('notes')}
        >
          Notes
        </div>
        <div
          className={`sidebar-item ${activeSection === 'jobs' ? 'active' : ''}`}
          onClick={() => handleSidebarClick('jobs')}
        >
          Jobs
        </div>
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <CompanyDetails />
          <button onClick={handleClose} style={{ position: 'absolute', top: 10, right: 10 }}>X</button>
        </Box>
      </Modal>
    </div>
  );
};

export default ClientDetails;








