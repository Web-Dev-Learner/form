
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaHome, FaWpforms } from 'react-icons/fa';
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
      <div className={styles.menuItems}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
          }
        >
          <FaHome className={styles.icon} />
          {isOpen && <span className={styles.text}>Home</span>}
        </NavLink>
        <NavLink
          to="/form"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
          }
        >
          <FaWpforms className={styles.icon} />
          {isOpen && <span className={styles.text}>Form</span>}
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;




