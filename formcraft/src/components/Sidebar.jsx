import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaHome, FaWpforms, FaUser } from 'react-icons/fa';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CompanyDetails from './CompanyDetails'; 
import '../styles/Sidebar.scss';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',  
    height: '80vh', 
    maxHeight: '80vh',
    overflowY: 'auto', 
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px',
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="menu-header">
        <span className="menu-icon" onClick={toggleSidebar}>
          <FaBars />
        </span>
        {isOpen && <span className="text">Menu</span>}
      </div>
      <div className="menu-items">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          <FaHome className="icon" />
          {isOpen && <span className="text">Home</span>}
        </NavLink>
        <div className="link" onClick={handleOpen}>
          <FaUser className="icon" />
          {isOpen && <span className="text">Client Details</span>}
        </div>
        <NavLink
          to="/form"
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          <FaWpforms className="icon" />
          {isOpen && <span className="text">Form</span>}
        </NavLink>
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <CompanyDetails />
          <button
            onClick={handleClose}
            style={{ position: 'absolute', top: 10, right: 10 }}
          >
            X
          </button>
        </Box>
      </Modal>
    </aside>
  );
};

export default Sidebar;






