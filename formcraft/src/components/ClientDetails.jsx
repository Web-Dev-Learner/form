import React, { useState } from 'react';
import CompanyDetails from './CompanyDetails'; 
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { FaBars, FaHome, FaWpforms, FaUser } from 'react-icons/fa';

const ClientDetails = () => {
  const [activeSection, setActiveSection] = useState('timeline');
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
    <div className="flex">
      {/* Sidebar Section */}
      <div className="w-1/4 p-4 bg-gray-200">
        <div
          className="p-2 mb-2 bg-gray-300 rounded cursor-pointer hover:bg-gray-400"
          onClick={() => handleSidebarClick('clientDetails')}
        >
          <FaBars className="inline mr-2" /> Client Details
        </div>
        <nav className="space-y-2">
          <div
            className={`p-2 rounded cursor-pointer hover:bg-gray-300 ${activeSection === 'timeline' ? 'bg-gray-400' : 'bg-gray-200'}`}
            onClick={() => handleSidebarClick('timeline')}
          >
            <FaHome className="inline mr-2" /> Timeline
          </div>
          <div
            className={`p-2 rounded cursor-pointer hover:bg-gray-300 ${activeSection === 'files' ? 'bg-gray-400' : 'bg-gray-200'}`}
            onClick={() => handleSidebarClick('files')}
          >
            <FaWpforms className="inline mr-2" /> Files
          </div>
          <div
            className={`p-2 rounded cursor-pointer hover:bg-gray-300 ${activeSection === 'notes' ? 'bg-gray-400' : 'bg-gray-200'}`}
            onClick={() => handleSidebarClick('notes')}
          >
            <FaUser className="inline mr-2" /> Notes
          </div>
          <div
            className={`p-2 rounded cursor-pointer hover:bg-gray-300 ${activeSection === 'jobs' ? 'bg-gray-400' : 'bg-gray-200'}`}
            onClick={() => handleSidebarClick('jobs')}
          >
            Jobs
          </div>
        </nav>
      </div>

      {/* Main Content Section */}
      <div className="w-3/4 p-4">
        <div className="bg-gray-100 p-4 rounded-md">
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



















