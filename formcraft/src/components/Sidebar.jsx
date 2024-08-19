import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaHome, FaWpforms, FaEnvelope, FaEdit, FaEllipsisV } from 'react-icons/fa';
import styles from './sidebar.module.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      <div className={styles.menuHeader}>
        {isOpen && <span className={styles.menuText}>Menu</span>}
        <div className={styles.menuIcon} onClick={toggleSidebar}>
          <FaBars />
        </div>
      </div>

      <div className={styles.clientDetails}>
        <h2 className="text-xl font-semibold mb-2">Client Details</h2>
        <p className="text-gray-600">Name: John Doe</p>
        <p className="text-gray-600">Email: john@example.com</p>
      </div>

      <div className={styles.menuItems}>
        <NavLink to="/" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : `${styles.link}`}>
          <FaHome className={styles.icon} />
          {isOpen && <span className={styles.text}>Home</span>}
        </NavLink>

        <NavLink to="/form" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : `${styles.link}`}>
          <FaWpforms className={styles.icon} />
          {isOpen && <span className={styles.text}>Form</span>}
        </NavLink>

        <NavLink to="/email" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : `${styles.link}`}>
          <FaEnvelope className={styles.icon} />
          {isOpen && <span className={styles.text}>Send Email</span>}
        </NavLink>

        <NavLink to="/notes" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : `${styles.link}`}>
          <FaEdit className={styles.icon} />
          {isOpen && <span className={styles.text}>Notes</span>}
        </NavLink>

        <NavLink to="/files" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : `${styles.link}`}>
          <FaEllipsisV className={styles.icon} />
          {isOpen && <span className={styles.text}>Files</span>}
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;



